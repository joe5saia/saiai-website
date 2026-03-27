import { defineConfig } from "vitest/config";

/**
 * Vitest configuration for lightweight unit tests around shared helpers.
 */
export default defineConfig({
  test: {
    environment: "node",
    include: ["src/lib/**/*.test.ts", "src/config/**/*.test.ts"],
  },
});
