# AGENTS.md — SAIAI Website

## Project Overview

This is the marketing website for **SAIAI** ([saiai.dev](https://saiai.dev)), a consulting practice focused on applied AI and engineering execution.

Built with **Astro** (static-first), **Tailwind CSS v4**, and **TypeScript**.

## Architecture

- **Framework:** Astro 6 — static site generation, no client-side JS unless explicitly needed
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin — design tokens in `src/styles/global.css`
- **Content:** Astro content collections with MDX — schemas in `src/content.config.ts`
- **Config:** Site-wide constants in `src/config/site.ts`
- **SEO:** `@astrojs/sitemap` integration; canonical domain is `https://saiai.dev`

## Directory Layout

```
src/
  config/          Site-wide configuration (site.ts)
  content/         MDX content collections (services/, case-studies/)
  components/
    layout/        Header, Footer
    sections/      Homepage section components (to be added)
    ui/            Reusable UI components (to be added)
  layouts/         Astro layouts (BaseLayout.astro)
  lib/             Utility modules: seo, analytics, forms (to be added)
  pages/           File-based routing
  styles/          Global CSS with Tailwind + design tokens
public/            Static assets (favicon, robots.txt)
```

## Content Collections

- **`services`** — MDX files in `src/content/services/`. Schema includes title, summary, audience, problems, deliverables, timeline, featured, order.
- **`case-studies`** — MDX files in `src/content/case-studies/`. Schema includes title, clientName, industry, summary, problem, approach, outcomes, stack, published, featured.

## Conventions

### Code Style
- TypeScript strict mode
- Astro components use `.astro` extension; content uses `.mdx`
- Follow Tailwind utility-first patterns; design tokens live in `global.css` `@theme` block
- Minimal client-side JavaScript — only hydrate when clearly needed (mobile nav, form states)
- No unused imports, no dead code, no placeholder comments left behind

### Naming
- Component files: PascalCase (`Header.astro`, `ServiceCard.astro`)
- Content files: kebab-case slugs (`ai-delivery-sprint.mdx`)
- Pages: kebab-case matching URL slugs
- Config/lib modules: camelCase (`site.ts`, `analytics.ts`)

### Brand
- The site is **company-first**, not personal-biography-first
- Messaging is outcome-oriented, practical, not hype-driven
- CTA language: "Book Intro Call" (primary), "Get in Touch" (secondary)
- Founder (Joe Saia) is referenced only for credibility, mainly on the About page

### Git
- Never commit secrets, `.env` files, or `node_modules`
- Keep commits atomic; list changed files explicitly
- Never use `git add .` or `git add -A`

## Development

```sh
task dev        # Start dev server
task build      # Production build
task preview    # Preview production build
task check      # Run Astro type checking
```

## Design Reference

See `website-plan.md` for the full design document including information architecture, content model schemas, visual design direction, SEO strategy, analytics events, and acceptance criteria.
