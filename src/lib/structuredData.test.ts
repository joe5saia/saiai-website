import { describe, expect, it } from "vitest";

import {
  buildBreadcrumbStructuredData,
  buildCaseStudyStructuredData,
  buildProfessionalServiceStructuredData,
  buildServiceStructuredData,
} from "./structuredData";

describe("structured data helpers", () => {
  it("builds professional service schema with the expected type", () => {
    expect(buildProfessionalServiceStructuredData()).toMatchObject({
      "@type": "ProfessionalService",
      name: "SAIAI",
    });
  });

  it("builds breadcrumb items with positions", () => {
    const breadcrumbs = buildBreadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/" },
    ]);

    expect(breadcrumbs.itemListElement).toHaveLength(2);
    expect(breadcrumbs.itemListElement[1]).toMatchObject({
      name: "Services",
      position: 2,
    });
  });

  it("builds service schema with an absolute URL", () => {
    expect(
      buildServiceStructuredData({
        title: "AI Workflow & Automation Sprint",
        description: "Ship a practical AI workflow.",
        urlPath: "/services/ai-workflow-automation-sprint/",
      }),
    ).toMatchObject({
      "@type": "Service",
      url: "https://saiai.dev/services/ai-workflow-automation-sprint/",
    });
  });

  it("builds case study schema as an article", () => {
    expect(
      buildCaseStudyStructuredData({
        clientName: "Rexford Commercial Capital",
        summary: "A delivery story.",
        title: "Rexford",
        urlPath: "/case-studies/rexford/",
      }),
    ).toMatchObject({
      "@type": "Article",
      headline: "Rexford",
    });
  });
});
