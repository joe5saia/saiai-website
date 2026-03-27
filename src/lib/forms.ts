/**
 * Shared contact-form configuration and routing helpers.
 */

export interface ContactFormConfig {
  action: string;
  hasExternalEndpoint: boolean;
  method: "get" | "post";
  sourceSystem: string;
  thankYouPath: string;
}

export interface ContactFormOptions {
  formEndpoint?: string;
  sourceSystem?: string;
  thankYouPath?: string;
}

export const budgetBandOptions = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
] as const;

export const timelineOptions = [
  "ASAP",
  "This month",
  "Next 1–3 months",
  "Just exploring",
] as const;

export const leadMetadataFieldNames = [
  "pagePath",
  "firstLandingPage",
  "utmSource",
  "utmMedium",
  "utmCampaign",
  "referrer",
  "timestamp",
  "sourceSystem",
] as const;

/**
 * Normalize internal routes so generated links stay consistent.
 */
export function normalizeInternalPath(path: string): string {
  if (!path.startsWith("/")) {
    return `/${path}`;
  }

  return path;
}

/**
 * Build the contact route, optionally pre-selecting a service.
 */
export function buildContactPath(selectedService?: string): string {
  const normalizedService = selectedService?.trim();

  if (!normalizedService) {
    return "/contact/";
  }

  const searchParams = new URLSearchParams({ service: normalizedService });
  return `/contact/?${searchParams.toString()}`;
}

/**
 * Decide whether the form should post to an external endpoint or fall back to a
 * local thank-you redirect for preview and local development.
 */
export function buildContactFormConfig(
  options: ContactFormOptions = {},
): ContactFormConfig {
  const thankYouPath = normalizeInternalPath(
    options.thankYouPath || "/thank-you/",
  );
  const normalizedEndpoint = options.formEndpoint?.trim();

  if (normalizedEndpoint) {
    return {
      action: normalizedEndpoint,
      hasExternalEndpoint: true,
      method: "post",
      sourceSystem: options.sourceSystem || "saiai.dev-contact-form",
      thankYouPath,
    };
  }

  return {
    action: thankYouPath,
    hasExternalEndpoint: false,
    method: "get",
    sourceSystem: options.sourceSystem || "saiai.dev-contact-form",
    thankYouPath,
  };
}
