#!/usr/bin/env bash

set -euo pipefail

# Local Lighthouse runner for repeatable performance checks.
#
# Optional environment variables:
#   LH_HOST        Host used by astro preview (default: 127.0.0.1)
#   LH_PORT        Port used by astro preview (default: 4321)
#   LH_URL         URL to audit (default: http://$LH_HOST:$LH_PORT)
#   LH_OUTPUT_DIR  Output directory for reports (default: output/lighthouse)
#   LH_CATEGORIES  Comma-separated categories (default: performance)

readonly LH_HOST="${LH_HOST:-127.0.0.1}"
readonly LH_PORT="${LH_PORT:-4321}"
readonly LH_URL="${LH_URL:-http://${LH_HOST}:${LH_PORT}}"
readonly LH_OUTPUT_DIR="${LH_OUTPUT_DIR:-output/lighthouse}"
readonly LH_CATEGORIES="${LH_CATEGORIES:-performance}"

preview_pid=""

cleanup() {
  if [[ -n "${preview_pid}" ]] && kill -0 "${preview_pid}" >/dev/null 2>&1; then
    kill "${preview_pid}" >/dev/null 2>&1 || true
    wait "${preview_pid}" >/dev/null 2>&1 || true
  fi
}

wait_for_server() {
  local url="$1"
  local attempts=30

  while (( attempts > 0 )); do
    if curl -sSf "${url}" >/dev/null 2>&1; then
      return 0
    fi

    sleep 1
    ((attempts--))
  done

  echo "Timed out waiting for preview server at ${url}" >&2
  return 1
}

main() {
  trap cleanup EXIT

  echo "Building production site..."
  npm run build >/dev/null

  mkdir -p "${LH_OUTPUT_DIR}"

  local timestamp
  timestamp="$(date +%Y%m%d-%H%M%S)"

  local report_base
  report_base="${LH_OUTPUT_DIR}/lighthouse-${timestamp}"

  echo "Starting Astro preview server on ${LH_HOST}:${LH_PORT}..."
  npx astro preview --host "${LH_HOST}" --port "${LH_PORT}" >/dev/null 2>&1 &
  preview_pid=$!

  wait_for_server "${LH_URL}"

  echo "Running Lighthouse against ${LH_URL}..."
  npx lighthouse "${LH_URL}" \
    --only-categories="${LH_CATEGORIES}" \
    --output=html \
    --output=json \
    --output-path="${report_base}" \
    --chrome-flags="--headless=new --no-sandbox"

  echo "Lighthouse complete. Reports saved to:"
  echo "  ${report_base}.report.html"
  echo "  ${report_base}.report.json"
}

main "$@"
