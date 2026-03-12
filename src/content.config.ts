/**
 * Astro content collection definitions.
 *
 * Collections: services, case-studies
 * Optional (not defined yet): insights, testimonials, faqs
 *
 * See design doc §10 for full schema reference.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Service page content collection (§10.3). */
const services = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    heroTitle: z.string().optional(),
    heroDescription: z.string().optional(),
    audience: z.string().optional(),
    problems: z.array(z.string()).optional(),
    deliverables: z.array(z.string()).optional(),
    timeline: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

/** Case study content collection (§10.4). */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    clientName: z.string(),
    industry: z.string(),
    summary: z.string(),
    problem: z.string().optional(),
    approach: z.string().optional(),
    deliverables: z.array(z.string()).optional(),
    outcomes: z.array(z.string()).optional(),
    stack: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  services,
  'case-studies': caseStudies,
};
