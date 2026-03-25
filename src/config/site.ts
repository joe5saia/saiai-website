/**
 * Central site configuration.
 *
 * All public runtime values are sourced from public environment variables when
 * available, with safe build-time defaults for local and preview environments.
 */
const publicSiteUrl =
  import.meta.env.PUBLIC_SITE_URL?.trim() || "https://saiai.dev";
const calendarUrl = import.meta.env.PUBLIC_CALENDAR_URL?.trim() || "";
const formEndpoint = import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT?.trim() || "";
const linkedInUrl = import.meta.env.PUBLIC_LINKEDIN_URL?.trim() || "";
const githubUrl =
  import.meta.env.PUBLIC_GITHUB_URL?.trim() || "https://github.com/joe5saia";
const gaId = import.meta.env.PUBLIC_GA_ID?.trim() || "";

export const siteConfig = {
  name: "SAIAI",
  url: publicSiteUrl,
  title: "SAIAI | Applied AI & Engineering Consulting",
  description:
    "SAIAI helps growing businesses improve engineering delivery, automate manual work, instrument growth systems, and ship practical AI-enabled workflows.",
  tagline:
    "Applied AI and engineering execution for teams that need to move faster without adding chaos.",
  descriptor:
    "A focused consulting practice for engineering execution, workflow automation, analytics, and practical AI delivery.",
  email: "hello@saiai.dev",
  formEndpoint,
  gaId,
  social: {
    linkedin: linkedInUrl,
    github: githubUrl,
  },
  primaryCta: {
    label: calendarUrl ? "Book Intro Call" : "Get in Touch",
    href: calendarUrl || "/contact/",
    analyticsEvent: calendarUrl ? "calendar_click" : "cta_click",
  },
  secondaryCta: {
    label: "Explore Services",
    href: "/services/",
    analyticsEvent: "cta_click",
  },
  founder: {
    name: "Joe Saia",
    title: "Founder & Principal Consultant",
    personalSite: "https://joesaia.com",
    summary:
      "Founder-led engagements with direct strategy, implementation, and handoff support.",
  },
} as const;
