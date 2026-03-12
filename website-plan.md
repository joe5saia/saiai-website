# SAIAI Website Design Document (Astro)

## Document Purpose

This document specifies the first version of the SAIAI marketing website so an engineer can implement it in Astro with minimal ambiguity. The site should function as the public face of the SAIAI business and keep that brand distinct from `joesaia.com`, which should remain Joe Saia’s personal professional site.

**Canonical production domain:** `https://saiai.dev`  
**Redirect policy:** provision both `saiai.dev` and `www.saiai.dev`, and permanently redirect `www.saiai.dev` to the apex domain.

---

## 1. Product Summary

### 1.1 What this site is
A company website for **SAIAI**, positioned as a focused consulting practice offering engineering, applied AI, automation, analytics, and technical strategy services.

### 1.2 What this site is not
- Not a personal resume site
- Not a portfolio dump
- Not a broad agency marketplace
- Not a SaaS application
- Not a blog-first content site at launch

### 1.3 Primary job of the site
Generate qualified consulting leads.

### 1.4 Secondary jobs
- Establish trust and credibility
- Explain services clearly
- Show proof through selected case studies
- Give prospects a clean way to get in touch
- Separate the SAIAI brand from Joe’s personal brand while still allowing founder credibility to support conversion

---

## 2. Business Goals

### 2.1 Primary business goal
Create a website that makes it easy for a prospect to understand:
1. what SAIAI does,
2. who it is for,
3. why it is credible,
4. what happens next if they reach out.

### 2.2 Success criteria for the first 90 days after launch
- Visitors can reach a contact path from every primary page
- At least one strong case study is live
- At least three service pages are live
- Contact form submissions include enough detail to qualify leads
- Analytics are in place to measure channel, page, and CTA performance

### 2.3 Likely conversion actions
- Submit contact form
- Book intro call
- Email directly
- Click into a service page from the homepage
- Read a case study and then contact SAIAI

---

## 3. Target Audience

### 3.1 Primary audience
Founders, operators, and technical leaders who need short, high-leverage consulting help for engineering and AI-related work.

Likely titles:
- Founder / Co-Founder
- CEO / COO
- CTO / VP Engineering
- Head of Product
- Operations leader at a growing small or midsize business

### 3.2 Secondary audience
Traditional businesses or small companies that need:
- a website overhaul,
- analytics instrumentation,
- workflow automation,
- or pragmatic AI adoption help.

### 3.3 Audience characteristics
These buyers are usually not shopping for “general software development.” They are trying to solve a concrete business problem such as:
- delivery is slipping,
- engineering execution is noisy,
- AI adoption is chaotic,
- internal processes are too manual,
- growth tracking is poor,
- the website is weak or not converting.

---

## 4. Positioning and Messaging

### 4.1 Brand positioning
SAIAI should be positioned as a **high-trust, operator-led consulting practice** that helps companies improve engineering execution and apply AI in practical, business-relevant ways.

### 4.2 Messaging principles
- Company-first, not biography-first
- Outcome-oriented, not tool-oriented
- Practical and credible, not hype-driven
- Technical enough to signal depth, but readable by non-engineering buyers
- Short and decisive copy, not long blocks of abstractions

### 4.3 Recommended core message
**Applied AI and engineering execution for teams that need to move faster without adding chaos.**

### 4.4 Recommended supporting message
SAIAI helps growing businesses improve engineering delivery, automate manual work, instrument growth systems, and ship practical AI-enabled workflows.

### 4.5 Distinction from joesaia.com
The SAIAI site should not feel like a second copy of the personal site.

| joesaia.com | SAIAI |
|---|---|
| personal professional identity | company/service identity |
| resume and leadership framing | service and outcomes framing |
| broad career story | narrow problem-solving story |
| “about me” emphasis | “how we help” emphasis |

Joe should still appear on the SAIAI site, but mainly as:
- founder,
- principal consultant,
- credibility anchor.

---

## 5. Information Architecture

### 5.1 Required top-level pages
- `/`
- `/services/`
- `/services/[slug]/`
- `/case-studies/`
- `/case-studies/[slug]/`
- `/about/`
- `/contact/`
- `/privacy/`
- `/404`

### 5.2 Recommended but optional at launch
- `/insights/`
- `/insights/[slug]/`
- `/faq/`
- `/terms/`
- `/thank-you/`

### 5.3 Primary navigation
- Home
- Services
- Case Studies
- About
- Contact

Optional:
- Insights

Persistent CTA in header:
- **Book Intro Call** or **Get in Touch**

### 5.4 Footer navigation
- Services
- Case Studies
- About
- Contact
- Privacy
- Terms (if present)
- LinkedIn / GitHub as appropriate
- Founder note or company descriptor

---

## 6. Recommended Sitemap and Page Intent

### 6.1 Home (`/`)
Purpose: orient, qualify, and convert.

Recommended section order:
1. Hero
2. Proof / credibility strip
3. Services overview
4. Selected case study teaser
5. Engagement model / process
6. Founder credibility section
7. FAQ or objections section
8. Final CTA

Hero requirements:
- Clear headline
- One-sentence supporting value proposition
- Primary CTA
- Secondary CTA

Example direction:
- Headline: “Applied AI and engineering systems for teams that need results.”
- Supporting copy: “SAIAI helps businesses improve delivery, automate operations, and build practical AI-enabled workflows that solve real problems.”

### 6.2 Services index (`/services/`)
Purpose: make the offer legible.

Show 3–5 services as cards with:
- title
- one-sentence summary
- who it is for
- key outcomes
- CTA to service detail page

### 6.3 Service detail pages (`/services/[slug]/`)
Each service page should follow the same structure:
1. Hero
2. Problem statement
3. What SAIAI does
4. Deliverables
5. Ideal client profile
6. Engagement format / typical duration
7. FAQ
8. CTA

Recommended initial services:
- Fractional Engineering & AI Leadership
- AI Delivery Sprint
- Internal Tools & Workflow Automation
- Growth Analytics & Conversion Instrumentation

### 6.4 Case studies index (`/case-studies/`)
Purpose: social proof.

Each case study card should show:
- title
- industry / project type
- concise summary
- tags
- outcome statement
- link to full case study

### 6.5 Case study detail pages (`/case-studies/[slug]/`)
Structure:
1. Summary
2. Client/context
3. Problem
4. Approach
5. Stack / systems involved
6. Deliverables
7. Outcome
8. CTA

Launch with at least one:
- Rexford Commercial Capital website / growth marketing implementation

### 6.6 About (`/about/`)
Purpose: explain the company and borrow founder credibility without turning into a resume page.

Sections:
- What SAIAI is
- How SAIAI works
- Founder section
- Why clients hire SAIAI
- CTA

### 6.7 Contact (`/contact/`)
Purpose: collect qualified inbound leads.

Required elements:
- short intro
- form
- direct email option
- optional calendar link
- response expectation text

### 6.8 Insights (`/insights/`) optional
Purpose: compound SEO and support sales.

Content should be narrow and useful:
- engineering execution
- practical AI adoption
- workflow automation
- analytics instrumentation
- website / growth systems lessons

---

## 7. UX and Conversion Requirements

### 7.1 Conversion model
Every main page should provide a next step.

Primary conversion actions:
- submit form
- book call
- send email

### 7.2 CTA rules
- Every page needs at least one primary CTA above the fold
- Long pages need a CTA near the bottom
- Case studies and service pages should end with a CTA that is directly relevant to the content just read

### 7.3 Form fields for MVP
Required:
- Name
- Email
- Company
- What do you need help with?

Recommended:
- Role / title
- Website URL
- Service of interest
- Budget band
- Timeline
- How did you hear about us?

Internal hidden fields:
- page path
- first landing page
- UTM source
- UTM medium
- UTM campaign
- referrer
- timestamp

### 7.4 Anti-spam requirements
- honeypot field
- server-side validation if first-party handling is used
- rate limiting if first-party handling is used
- spam filtering if external provider is used

### 7.5 Thank-you flow
After submission:
- success message
- route to `/thank-you/`
- optional prompt to book a call

---

## 8. Visual Design Direction

### 8.1 Brand personality
- technical
- modern
- restrained
- credible
- high-signal
- not flashy

### 8.2 Visual direction
The design should feel more like a focused B2B consulting site than a personal blog or design-forward startup landing page.

### 8.3 Layout principles
- generous whitespace
- large readable headings
- short paragraphs
- consistent content width
- modular section system
- obvious hierarchy
- clear CTA treatment

### 8.4 Component style guidance
- subtle card surfaces
- minimal shadows
- crisp borders
- restrained accent color use
- no excessive gradients or animation

### 8.5 Color direction
Keep the palette simple:
- neutral base
- one accent color
- strong text contrast

Engineer should implement tokens rather than hardcoding colors in components.

Suggested token groups:
- background
- surface
- border
- text primary
- text secondary
- accent
- accent hover
- success
- error

### 8.6 Typography
Use a clean, modern sans-serif stack.

Guidance:
- one primary font family
- optional monospace accent only for small technical details
- avoid decorative display fonts

### 8.7 Imagery
Use limited imagery.

Priority order:
1. logo / wordmark
2. founder headshot
3. clean diagrams or screenshots where useful
4. case study visuals

Do not rely on generic AI art.

---

## 9. Component Inventory

### 9.1 Global components
- Header
- Footer
- SEO head component
- CTA button variants
- Section wrapper
- Container
- Rich text renderer
- Form field components
- Card components
- Testimonial block (optional)
- FAQ accordion (optional)

### 9.2 Homepage sections
- HeroSection
- ProofStrip
- ServicesGrid
- CaseStudyHighlight
- ProcessSection
- FounderSection
- FAQSection
- FinalCTA

### 9.3 Content components
- ServiceCard
- CaseStudyCard
- InsightCard
- MetricList
- TagList
- PullQuote
- ContactForm

### 9.4 Utility components
- Breadcrumbs
- Pagination
- SocialLinks
- EmptyState

---

## 10. Content Model

### 10.1 Content authoring approach
Use a **repo-managed content model** for MVP. No CMS is necessary at launch unless a non-technical editor must update the site frequently.

### 10.2 Recommended content collections
- `services`
- `case-studies`
- `insights`
- `testimonials` (optional)
- `faqs` (optional)

### 10.3 Service schema
Suggested frontmatter/data fields:
- `title`
- `slug`
- `summary`
- `heroTitle`
- `heroDescription`
- `audience`
- `problems`
- `deliverables`
- `timeline`
- `featured`
- `order`
- `seoTitle`
- `seoDescription`

### 10.4 Case study schema
Suggested fields:
- `title`
- `slug`
- `clientName`
- `industry`
- `summary`
- `problem`
- `approach`
- `deliverables`
- `outcomes`
- `stack`
- `published`
- `featured`
- `seoTitle`
- `seoDescription`
- `coverImage`

### 10.5 Insight schema
Suggested fields:
- `title`
- `slug`
- `summary`
- `publishedAt`
- `updatedAt`
- `author`
- `tags`
- `draft`
- `seoTitle`
- `seoDescription`

### 10.6 Global site config
Create a central config object or content file for:
- site name
- site URL
- default SEO metadata
- primary CTA URL
- social links
- contact email
- business location text
- analytics IDs

---

## 11. Technical Architecture (Astro)

### 11.1 Core recommendation
Build the site as **static-first Astro**.

Reasoning:
- simple deployment
- excellent performance
- minimal operational burden
- ideal for a marketing site with mostly stable content

### 11.2 Rendering approach
Default:
- static site generation for all marketing pages

Use server features only if needed for first-party form handling or other runtime behavior.

### 11.3 Recommended stack
- Astro
- TypeScript
- Tailwind CSS (or equivalent token-based styling system)
- MDX for content-rich pages where reusable content components are valuable
- content collections for services, case studies, and insights

### 11.4 Minimal client-side JavaScript
Only hydrate interactive components when they materially improve UX.

Examples of acceptable hydration:
- FAQ accordion
- mobile nav
- advanced form states
- optional calendar embed

The default should be no client JS unless there is a clear reason.

### 11.5 Forms approach
Recommend two implementation paths:

#### Option A — preferred MVP
Use a static HTML form that posts to an external workflow endpoint.

Examples:
- CRM form endpoint
- automation webhook
- external form processor

Pros:
- preserves static deployment
- lower implementation complexity
- easier spam handling

#### Option B — first-party form handling
Use Astro server-side form handling / actions.

Choose this only if SAIAI needs to own validation and submission logic inside the application.

If this path is chosen, deploy with a supported Astro server adapter appropriate to the hosting environment.

### 11.6 Image handling
- store local processed images under `src/`
- reserve `public/` for assets that should be served as-is
- define dimensions for images to reduce layout shift
- prefer modern formats when practical

### 11.7 SEO implementation
Implement:
- canonical URLs
- page-level meta titles and descriptions
- Open Graph tags
- Twitter/X card tags
- XML sitemap
- robots.txt
- JSON-LD structured data where appropriate

Structured data candidates:
- Organization or ProfessionalService
- Person (for founder)
- Service
- Article
- BreadcrumbList

### 11.8 Analytics implementation
At minimum support:
- page views
- CTA clicks
- form start
- form submit
- booked call clicks
- outbound email clicks
- case study detail page views
- service detail page views

### 11.9 Error pages
Implement:
- custom 404 page
- graceful fallback UI for missing content

### 11.10 Accessibility
Site must meet practical WCAG AA expectations:
- keyboard navigable
- visible focus states
- semantic headings
- sufficient color contrast
- labeled form fields
- alt text for meaningful images
- skip link

### 11.11 Performance targets
Target:
- Lighthouse 95+ on homepage for Performance, Accessibility, and SEO in production conditions
- fast LCP on mobile
- minimal layout shift

### 11.12 Security / privacy
- no unnecessary PII collection
- environment variables for secrets
- no secrets exposed to the client
- privacy policy page required if analytics or lead capture are active
- validate and sanitize any form data that enters a backend or automation pipeline

---

## 12. Recommended Repo Structure

```text
/
  public/
    favicon.svg
    robots.txt
  src/
    assets/
      brand/
      images/
    components/
      layout/
      sections/
      ui/
    content/
      services/
      case-studies/
      insights/
      config.ts
    layouts/
      BaseLayout.astro
      ContentLayout.astro
    lib/
      seo.ts
      analytics.ts
      forms.ts
      structured-data.ts
    pages/
      index.astro
      about.astro
      contact.astro
      thank-you.astro
      privacy.astro
      404.astro
      services/
        index.astro
        [slug].astro
      case-studies/
        index.astro
        [slug].astro
      insights/
        index.astro
        [slug].astro
    styles/
      global.css
  astro.config.mjs
  package.json
  tsconfig.json
```

If first-party form handling is used, include:

```text
  src/
    actions/
      index.ts
```

---

## 13. Page-Level Requirements

### 13.1 Homepage requirements
Must include:
- headline and subhead
- primary CTA above the fold
- proof signal near top
- clear service categories
- at least one featured case study
- founder/company credibility section
- bottom CTA

### 13.2 Service page requirements
Must include:
- explicit problem statement
- deliverables
- ideal client
- engagement duration
- FAQ
- CTA

### 13.3 Case study requirements
Must include:
- problem
- solution/approach
- technologies/systems involved
- outcome or business benefit
- CTA

### 13.4 Contact page requirements
Must include:
- form
- success path
- email fallback
- spam protection
- clear response expectation text

---

## 14. Content Requirements for Launch

### 14.1 Required content before launch
- homepage copy
- about page copy
- three service pages
- one case study (Rexford)
- contact page copy
- privacy policy copy
- logo / wordmark assets
- founder headshot

### 14.2 Nice to have
- second case study
- 2–3 insight posts
- testimonials
- FAQ set

---

## 15. Analytics and Lead Routing

### 15.1 Analytics events
Suggested event names:
- `cta_click`
- `nav_cta_click`
- `service_card_click`
- `case_study_click`
- `contact_form_start`
- `contact_form_submit`
- `calendar_click`
- `email_click`

### 15.2 Lead payload
Each lead submission should capture:
- submitter fields
- page URL
- UTM values
- timestamp
- source system
- selected service
- freeform project description

### 15.3 Lead routing
Preferred outcome:
- send submission to email and CRM / lead system
- optionally trigger automation for acknowledgment and follow-up

---

## 16. SEO Strategy

### 16.1 SEO goals
- rank for high-intent service queries over time
- make service pages indexable and distinct
- create a durable technical content base if insights are launched

### 16.2 SEO rules
- every indexable page gets unique title and meta description
- every service page gets unique copy
- use clean slugs
- use canonical tags
- generate sitemap
- include internal links between home, services, and case studies

### 16.3 URL style
Prefer concise slugs:
- `/services/ai-delivery-sprint/`
- `/case-studies/rexford-commercial-capital/`
- `/insights/engineering-execution-with-ai/`

---

## 17. Deployment and Environments

### 17.1 Environments
- local
- preview
- production

### 17.2 Deployment recommendation
Use a modern static host with preview deployments.

If the site remains static, keep deployment simple.
If first-party runtime features are added, use the adapter that matches the chosen platform.

### 17.3 Domain and canonical URL requirements
- canonical production URL is `https://saiai.dev`
- provision both `saiai.dev` and `www.saiai.dev`
- permanently redirect `https://www.saiai.dev/*` to `https://saiai.dev/*` with a 301 redirect
- preview deployments must not become canonical and should be `noindex` unless intentionally used for public previewing
- set Astro `site` to `https://saiai.dev` so canonical tags, sitemap entries, and absolute metadata URLs use the production domain

Recommended Astro baseline:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://saiai.dev',
});
```

### 17.4 Environment variables
Examples:
- `PUBLIC_SITE_URL` with production default `https://saiai.dev`
- `PUBLIC_GA_ID`
- `CONTACT_FORM_ENDPOINT`
- `CALENDAR_URL`
- `CRM_WEBHOOK_URL`

Do not expose secrets with a `PUBLIC_` prefix unless they are intended for the client.

---

## 18. QA and Acceptance Criteria

### 18.1 Functional acceptance criteria
- all primary routes render correctly
- dynamic service pages render from content entries
- dynamic case study pages render from content entries
- form submission path works in production
- thank-you flow works
- nav and footer links work
- 404 page works

### 18.2 Content acceptance criteria
- site copy reflects SAIAI brand rather than personal-site language
- services are understandable without prior context
- case study content is readable and credible
- all metadata is populated

### 18.3 Technical acceptance criteria
- no obvious CLS issues
- no console errors on core pages
- images are optimized appropriately
- analytics fire on core events
- accessibility checks pass for primary flows

### 18.4 Manual QA checklist
- mobile nav
- desktop nav
- form validation states
- thank-you redirect or success message
- Open Graph previews
- sitemap reachable
- robots.txt reachable
- canonical tags correct
- `www.saiai.dev` redirects to `https://saiai.dev`
- keyboard tab order
- focus states visible

---

## 19. Suggested Build Order

### Phase 1 — foundation
- initialize Astro project
- set up styling system
- define layouts and global components
- define content collections / schemas
- implement SEO base

### Phase 2 — page implementation
- homepage
- services index and service detail pages
- case studies index and detail pages
- about page
- contact page
- privacy page
- 404 page

### Phase 3 — integrations
- analytics
- contact form wiring
- lead routing
- sitemap
- robots.txt
- structured data

### Phase 4 — polish
- responsive tuning
- accessibility pass
- performance tuning
- copy refinements
- launch QA

---

## 20. Open Questions / Decisions for Joe

1. What exact service lineup should launch on day one?
2. Should booking use Calendly or another scheduling link?
3. Should the contact form go to email only, CRM, or both?
4. Should insights/blog launch immediately or later?
5. Do you want testimonials on day one?
6. Should the site present SAIAI as a solo consultancy or a studio/firm brand?
7. Do you want a light theme only, or light + dark?
8. Do you want pricing language at launch, or should pricing stay off-site?
9. Do you want the personal site linked prominently, lightly, or not at all?

---

## 21. Recommended Default Decisions (if no further direction is given)

If the engineer needs to proceed without waiting on more decisions, use these defaults:

- Launch with a static-first Astro site
- Use repo-managed content collections
- Use MDX for service and case study content
- Use an external form endpoint for MVP
- Launch pages: Home, Services, Case Studies, About, Contact, Privacy
- Launch services: Fractional Engineering & AI Leadership, AI Delivery Sprint, Internal Tools & Workflow Automation
- Launch one case study: Rexford
- Use light theme with restrained accent color
- Use a persistent “Book Intro Call” CTA in header
- Keep joesaia.com mentioned only on the About page as founder credibility
- Provision both `saiai.dev` and `www.saiai.dev`, with `www` permanently redirected to the apex domain

---

## 22. Short Engineering Brief

Build SAIAI as a fast, static-first Astro marketing site focused on consulting lead generation. The site must feel company-first rather than personal, use structured content collections for services and case studies, support strong SEO and analytics fundamentals, and provide a clean conversion path through contact and intro-call CTAs. Treat `https://saiai.dev` as the canonical production domain, provision both apex and `www`, and permanently redirect `www` to the apex domain. Keep the implementation simple, performant, and maintainable. Add runtime complexity only when it clearly serves lead handling or conversion.
