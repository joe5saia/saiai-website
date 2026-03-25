import { defineConfig } from "vitest/config";

/**
 * Vitest configuration for lightweight unit tests around shared helper modules.
 */
export default defineConfig({
  test: {
    environment: "node",
    include: ["src/lib/**/*.test.ts"],
  },
});
