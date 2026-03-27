import { describe, expect, it } from "vitest";

import { buildSiteCtas } from "./site";

describe("site CTA config", () => {
  it("falls back to a single contact CTA when no calendar URL is configured", () => {
    expect(buildSiteCtas("")).toEqual({
      hasSchedulingCta: false,
      primaryCta: {
        label: "Get in Touch",
        href: "/contact/",
        analyticsEvent: "cta_click",
      },
      secondaryCta: {
        label: "Get in Touch",
        href: "/contact/",
        analyticsEvent: "cta_click",
      },
    });
  });

  it("enables a booking CTA when a valid calendar URL is configured", () => {
    expect(buildSiteCtas("https://calendar.example.com/intro")).toEqual({
      hasSchedulingCta: true,
      primaryCta: {
        label: "Book Intro Call",
        href: "https://calendar.example.com/intro",
        analyticsEvent: "calendar_click",
      },
      secondaryCta: {
        label: "Get in Touch",
        href: "/contact/",
        analyticsEvent: "cta_click",
      },
    });
  });

  it("ignores malformed calendar URLs and keeps contact as the only CTA", () => {
    expect(buildSiteCtas("not-a-calendar-link")).toMatchObject({
      hasSchedulingCta: false,
      primaryCta: {
        label: "Get in Touch",
        href: "/contact/",
      },
    });
  });
});
