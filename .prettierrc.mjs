/**
 * Project-wide Prettier configuration.
 *
 * Astro files use the Astro parser while the rest of the codebase follows
 * Prettier defaults for TypeScript, MDX, and JSON.
 */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
