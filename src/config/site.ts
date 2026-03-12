/**
 * Central site configuration.
 * Import this object wherever you need site-wide metadata, URLs, or social links.
 */
export const siteConfig = {
  name: 'SAIAI',
  url: 'https://saiai.dev',
  title: 'SAIAI — Applied AI & Engineering Consulting',
  description:
    'SAIAI helps growing businesses improve engineering delivery, automate manual work, instrument growth systems, and ship practical AI-enabled workflows.',
  tagline:
    'Applied AI and engineering execution for teams that need to move faster without adding chaos.',

  /** Primary CTA — "Book Intro Call" button destination. */
  calendarUrl: '#', // TODO: replace with Calendly or scheduling link

  /** Fallback contact email. */
  email: 'hello@saiai.dev',

  /** External form endpoint for MVP contact form. */
  formEndpoint: '', // TODO: set form handler URL

  social: {
    linkedin: '', // TODO: add LinkedIn URL
    github: 'https://github.com/joe5saia',
  },

  /** Google Analytics 4 measurement ID (set via PUBLIC_GA_ID env var or here). */
  gaId: '',

  /** Founder info shown on the About page and credibility sections. */
  founder: {
    name: 'Joe Saia',
    title: 'Founder & Principal Consultant',
    personalSite: 'https://joesaia.com',
  },
} as const;
