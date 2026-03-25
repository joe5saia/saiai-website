import type { CollectionEntry } from "astro:content";

/**
 * Sort service entries in their configured display order.
 */
export function sortServices(
  services: CollectionEntry<"services">[],
): CollectionEntry<"services">[] {
  return [...services].sort(
    (left, right) => left.data.order - right.data.order,
  );
}

/**
 * Return featured services while preserving the configured order.
 */
export function getFeaturedServices(
  services: CollectionEntry<"services">[],
): CollectionEntry<"services">[] {
  return sortServices(services.filter((service) => service.data.featured));
}

/**
 * Hide unpublished case studies from page routes and cards.
 */
export function getPublishedCaseStudies(
  caseStudies: CollectionEntry<"case-studies">[],
): CollectionEntry<"case-studies">[] {
  return caseStudies.filter((caseStudy) => caseStudy.data.published);
}

/**
 * Pick the primary featured case study, or fall back to the first published
 * entry so the homepage can still render.
 */
export function getFeaturedCaseStudy(
  caseStudies: CollectionEntry<"case-studies">[],
): CollectionEntry<"case-studies"> | undefined {
  const publishedCaseStudies = getPublishedCaseStudies(caseStudies);

  return (
    publishedCaseStudies.find((caseStudy) => caseStudy.data.featured) ||
    publishedCaseStudies[0]
  );
}
