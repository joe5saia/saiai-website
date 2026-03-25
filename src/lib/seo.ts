/**
 * Shared SEO helpers for canonical URLs, robots directives, and JSON-LD
 * serialization.
 */

/**
 * Build an absolute canonical URL for the current pathname.
 */
export function buildCanonicalUrl(pathname: string, siteUrl: string): string {
  const normalizedSiteUrl = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  return new URL(pathname, normalizedSiteUrl).toString();
}

/**
 * Preview deployments should not be indexed. Local development remains indexable
 * so metadata can be tested without forcing a noindex state.
 */
export function shouldNoIndex(currentUrl: URL, siteUrl: string): boolean {
  const canonicalHost = new URL(siteUrl).hostname;
  const currentHost = currentUrl.hostname;
  const isLocalHost =
    currentHost === "localhost" || currentHost === "127.0.0.1";

  return !isLocalHost && currentHost !== canonicalHost;
}

/**
 * Build the robots directive for the page.
 */
export function buildRobotsDirective(
  currentUrl: URL,
  siteUrl: string,
  explicitNoIndex = false,
): string {
  return explicitNoIndex || shouldNoIndex(currentUrl, siteUrl)
    ? "noindex, nofollow"
    : "index, follow";
}

/**
 * Escape JSON-LD so it is safe to inline inside a <script> tag.
 */
export function serializeStructuredData(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
