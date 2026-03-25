import { describe, expect, it } from "vitest";

import {
  buildContactFormConfig,
  buildContactPath,
  normalizeInternalPath,
} from "./forms";

describe("form helpers", () => {
  it("builds a local thank-you fallback when no endpoint is configured", () => {
    expect(buildContactFormConfig()).toEqual({
      action: "/thank-you/",
      hasExternalEndpoint: false,
      method: "get",
      sourceSystem: "saiai.dev-contact-form",
      thankYouPath: "/thank-you/",
    });
  });

  it("uses post when an external form endpoint is configured", () => {
    expect(
      buildContactFormConfig({
        formEndpoint: "https://form.example.com/lead",
      }),
    ).toEqual({
      action: "https://form.example.com/lead",
      hasExternalEndpoint: true,
      method: "post",
      sourceSystem: "saiai.dev-contact-form",
      thankYouPath: "/thank-you/",
    });
  });

  it("builds contact links with a selected service", () => {
    expect(buildContactPath("AI Delivery Sprint")).toBe(
      "/contact/?service=AI+Delivery+Sprint",
    );
  });

  it("normalizes internal paths with a leading slash", () => {
    expect(normalizeInternalPath("thank-you/")).toBe("/thank-you/");
  });
});
