/**
 * Central site configuration.
 *
 * All public runtime values are sourced from public environment variables when
 * available, with safe build-time defaults for local and preview environments.
 */
const publicSiteUrl =
  import.meta.env.PUBLIC_SITE_URL?.trim() || "https://saiai.dev";
const formEndpoint = import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT?.trim() || "";
const linkedInUrl = import.meta.env.PUBLIC_LINKEDIN_URL?.trim() || "";
const githubUrl =
  import.meta.env.PUBLIC_GITHUB_URL?.trim() || "https://github.com/joe5saia";
const gaId = import.meta.env.PUBLIC_GA_ID?.trim() || "";
const contactCta = {
  label: "Get in Touch",
  href: "/contact/",
  analyticsEvent: "cta_click",
} as const;

interface SiteCta {
  readonly label: string;
  readonly href: string;
  readonly analyticsEvent: string;
}

interface SiteCtaConfig {
  readonly hasSchedulingCta: boolean;
  readonly primaryCta: SiteCta;
  readonly secondaryCta: SiteCta;
}

/**
 * Only expose a booking CTA when a usable external calendar URL is configured.
 */
function normalizeCalendarUrl(rawCalendarUrl?: string): string | null {
  const trimmedCalendarUrl = rawCalendarUrl?.trim() ?? "";

  if (trimmedCalendarUrl.length === 0) {
    return null;
  }

  try {
    const parsedCalendarUrl = new URL(trimmedCalendarUrl);

    if (
      parsedCalendarUrl.protocol !== "http:" &&
      parsedCalendarUrl.protocol !== "https:"
    ) {
      return null;
    }

    return parsedCalendarUrl.toString();
  } catch {
    return null;
  }
}

/**
 * Keep booking/contact CTA semantics explicit so the UI never shows fake choice.
 */
export function buildSiteCtas(rawCalendarUrl?: string): SiteCtaConfig {
  const calendarUrl = normalizeCalendarUrl(rawCalendarUrl);

  if (calendarUrl) {
    return {
      hasSchedulingCta: true,
      primaryCta: {
        label: "Book Intro Call",
        href: calendarUrl,
        analyticsEvent: "calendar_click",
      },
      secondaryCta: contactCta,
    } as const;
  }

  return {
    hasSchedulingCta: false,
    primaryCta: contactCta,
    secondaryCta: contactCta,
  } as const;
}

const ctaConfig = buildSiteCtas(import.meta.env.PUBLIC_CALENDAR_URL);

export const siteConfig = {
  name: "SAIAI",
  url: publicSiteUrl,
  title:
    "SAIAI | Practical Technical Systems for Small Businesses and Startups",
  description:
    "I work with small businesses and startups to design, build, and launch practical technical systems, including websites, marketing stack implementation, BI foundations, AI workflows, and general engineering projects.",
  tagline:
    "I work with small businesses and startups to launch technical projects that actually ship.",
  descriptor:
    "From websites and marketing stack setup to BI foundations, automation, and AI workflows, I work hands-on from scoping through launch and handoff.",
  email: "joe5saia@gmail.com",
  formEndpoint,
  gaId,
  ...ctaConfig,
  social: {
    linkedin: linkedInUrl,
    github: githubUrl,
  },
  founder: {
    name: "Joe Saia",
    title: "Founder & Technologist",
    personalSite: "https://joesaia.com",
    summary:
      "I handle each engagement directly, from scoping through build, launch, and handoff.",
  },
} as const;
