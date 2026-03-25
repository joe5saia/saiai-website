import { describe, expect, it } from "vitest";

import {
  buildCanonicalUrl,
  buildRobotsDirective,
  serializeStructuredData,
  shouldNoIndex,
} from "./seo";

describe("seo helpers", () => {
  it("builds canonical URLs against the production site", () => {
    expect(buildCanonicalUrl("/services/", "https://saiai.dev")).toBe(
      "https://saiai.dev/services/",
    );
  });

  it("marks preview hosts as noindex", () => {
    const previewUrl = new URL("https://preview-saiai.pages.dev/services/");

    expect(shouldNoIndex(previewUrl, "https://saiai.dev")).toBe(true);
    expect(buildRobotsDirective(previewUrl, "https://saiai.dev")).toBe(
      "noindex, nofollow",
    );
  });

  it("keeps localhost indexable for local QA", () => {
    const localUrl = new URL("http://localhost:4321/contact/");

    expect(shouldNoIndex(localUrl, "https://saiai.dev")).toBe(false);
  });

  it("escapes structured data for inline script usage", () => {
    expect(serializeStructuredData({ test: "<tag>" })).toContain("\\u003c");
  });
});
