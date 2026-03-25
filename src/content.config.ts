/**
 * Astro content collection definitions.
 *
 * Collections: services, case-studies
 * Optional (not defined yet): insights, testimonials, faqs
 *
 * See design doc §10 for full schema reference.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Service page content collection (§10.3). */
const services = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    heroTitle: z.string().optional(),
    heroDescription: z.string().optional(),
    audience: z.string(),
    problems: z.array(z.string()).default([]),
    whatWeDo: z.array(z.string()).default([]),
    deliverables: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    timeline: z.string(),
    engagement: z.string(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

/** Case study content collection (§10.4). */
const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    clientName: z.string(),
    industry: z.string(),
    summary: z.string(),
    problem: z.string().default(""),
    approach: z.string().default(""),
    deliverables: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  services,
  "case-studies": caseStudies,
};
