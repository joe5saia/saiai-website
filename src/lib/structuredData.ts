import { siteConfig } from "../config/site";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface ServiceSchemaInput {
  description: string;
  title: string;
  urlPath: string;
}

interface CaseStudySchemaInput {
  clientName: string;
  summary: string;
  title: string;
  urlPath: string;
}

/**
 * Remove empty values from JSON-LD payloads so the generated schema stays clean.
 */
function compactSchema<T extends Record<string, unknown>>(schema: T): T {
  return Object.fromEntries(
    Object.entries(schema).filter(([, value]) => {
      if (value === undefined || value === null || value === "") {
        return false;
      }

      return !Array.isArray(value) || value.length > 0;
    }),
  ) as T;
}

/**
 * Organization-level structured data for the homepage and general pages.
 */
export function buildProfessionalServiceStructuredData() {
  return compactSchema({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title,
      url: siteConfig.founder.personalSite,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    serviceType: [
      "Website design and build",
      "Marketing stack launch support",
      "BI and reporting foundations",
      "AI workflow and automation sprint",
      "Engineering consulting and build support",
    ],
  });
}

/**
 * Website schema for the root experience.
 */
export function buildWebSiteStructuredData() {
  return compactSchema({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  });
}

/**
 * Founder schema for the About page.
 */
export function buildFounderStructuredData() {
  return compactSchema({
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.title,
    url: siteConfig.founder.personalSite,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  });
}

/**
 * Breadcrumb schema for content and detail pages.
 */
export function buildBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      item: item.path.startsWith("http")
        ? item.path
        : new URL(item.path, siteConfig.url).toString(),
      name: item.name,
      position: index + 1,
    })),
  };
}

/**
 * Service schema for service detail pages.
 */
export function buildServiceStructuredData(service: ServiceSchemaInput) {
  return compactSchema({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: service.title,
    url: new URL(service.urlPath, siteConfig.url).toString(),
  });
}

/**
 * Case studies do not have a dedicated schema type, so we publish them as
 * narrative articles owned by SAIAI.
 */
export function buildCaseStudyStructuredData(caseStudy: CaseStudySchemaInput) {
  return compactSchema({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.summary,
    about: {
      "@type": "Organization",
      name: caseStudy.clientName,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: new URL(caseStudy.urlPath, siteConfig.url).toString(),
  });
}
