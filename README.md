
# TechToJob Landing Page

A responsive, bilingual landing page developed as a proposal for TechToJob, a technology community connecting developers, companies, and professionals through networking, technical challenges, and shared opportunities.

The project combines a distinctive visual identity, interactive experiences, accessibility, search engine optimization, and performance-focused development.

## Live Website

The landing page is deployed on Vercel and available in two languages.

| Language | Website |
| --- | --- |
| Spanish | [TechToJob — Español](https://techtojob-cyan.vercel.app/es) |
| English | [TechToJob — English](https://techtojob-cyan.vercel.app/en) |

**Source code:** [GitHub — SantosLeon12/techtojob](https://github.com/SantosLeon12/techtojob)

The website is responsive and supports desktop, tablet, and mobile devices.

---

## Overview

TechToJob is designed as a community-driven alternative to traditional job boards.

Rather than focusing exclusively on job listings, the landing page presents an environment where developers can demonstrate their skills, companies can discover talent, and professionals can connect through shared interests and participation.

The experience introduces the following areas:

- **Hero:** Introduction to the TechToJob community and its main value proposition.
- **How It Works:** A guided journey explaining how users can become visible and discover opportunities.
- **Talent:** Developer profiles, technical skills, and availability.
- **Companies:** Opportunities for organizations to discover professionals.
- **Tournaments:** Technical challenges where participants can demonstrate their abilities.
- **Networking:** Connections between professionals from different technology specializations.
- **Testimonials:** Sample community experiences, presented as placeholders for future verified testimonials.
- **News:** Example content related to tournaments, community activities, and technology.
- **Newsletter:** A prepared subscription interface, currently unavailable until a provider is connected.
- **Final CTA:** A direct invitation to join the TechToJob Discord community.

The primary conversion goal is to guide visitors toward the official TechToJob Discord community.

---

## Design Concept

### Connected Tech Community

The visual concept is inspired by the geometry of TechToJob's official symbol.

Nodes, connecting lines, and interconnected profiles represent the relationships between developers, companies, technical challenges, and the wider technology community.

The design uses an editorial layout with alternating white, light neutral, aqua, and dark surfaces.

The interface prioritizes clear typography, visual hierarchy, readable content, and purposeful interactions.

### Visual Interactions

The landing page incorporates lightweight CSS animations and responsive interactions.

Key visual elements include:

- A gradually constructed network in the Hero section.
- Scroll-driven progress indicators in How It Works.
- Animated border highlights connecting talent and company profiles to TechToJob.
- Orbital movement and radial connections in Networking.
- Subtle viewport-based emphasis for testimonial cards on mobile.
- Periodic light reflections on the primary Discord buttons.
- Smooth internal navigation and localized page transitions.

Desktop and mobile experiences use different interaction patterns where appropriate.

Animations respect the user's `prefers-reduced-motion` settings, and the content remains accessible without requiring animation support.

No third-party animation libraries are required.

---

## Tech Stack

The project uses the following technologies:

| Technology | Version |
| --- | --- |
| Next.js (App Router) | 16.3.5 |
| React / React DOM | 19.2.8 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| next-intl | ^4.14.5 |
| Lucide React | ^1.47.0 |

Additional implementation details:

- Server Components for the landing page.
- CSS Modules for custom layouts and animations.
- Tailwind CSS for layout, typography, and reusable utilities.
- Native CSS animations and scroll-driven effects.
- Next.js Metadata API for SEO and social previews.
- Static generation for the localized landing pages.
- Vercel for production deployment.

The project does not require a separate backend or database.

---

## Project Structure

```text
techtojob/
├── public/
│   ├── brand/
│   ├── icons/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── opengraph-image.tsx
│   │   ├── icon.svg
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── i18n/
│   │   ├── routing.ts
│   │   ├── request.ts
│   │   └── messages.ts
│   │
│   ├── lib/
│   │   ├── constants.ts
│   │   └── site.ts
│   │
│   ├── messages/
│   │   ├── es.json
│   │   └── en.json
│   │
│   └── proxy.ts
│
├── .env.example
├── next.config.ts
├── package.json
└── README.md
```

### Directory Responsibilities

**`src/app/[locale]`**

Contains the localized landing page, layout, metadata, and dynamically generated Open Graph images.

**`src/components`**

Contains reusable UI components, page sections, and shared layout components.

**`src/i18n`**

Configures locale routing, message loading, and internationalization behavior.

**`src/messages`**

Contains the Spanish and English translations used throughout the interface.

**`src/lib`**

Centralizes site configuration, production URLs, and external community destinations.

**`public/brand`**

Contains the official TechToJob logos and symbols provided for the project.

**`public/icons`**

Contains the official Discord symbols used in community CTAs.

---

## Getting Started

### Prerequisites

Install Node.js and npm.

The project was developed using:

```bash
node -v
# v22.22.0

npm -v
# 10.9.4
```

### Clone the Repository

```bash
git clone https://github.com/SantosLeon12/techtojob.git

cd techtojob
```

### Install Dependencies

```bash
npm install
```

### Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Configure the site URL according to your environment.

For local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For the current production deployment:

```env
NEXT_PUBLIC_SITE_URL=https://techtojob-cyan.vercel.app
```

The production environment variable is configured in Vercel.

Do not include `/es`, `/en`, or a URL fragment in this value.

### Start the Development Server

```bash
npm run dev
```

Open:

- [http://localhost:3000/es](http://localhost:3000/es)
- [http://localhost:3000/en](http://localhost:3000/en)

### Production Build

```bash
npm run build

npm run start
```

The production server uses the generated Next.js build.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Generate the production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

---

## Internationalization

The application supports Spanish and English through `next-intl`.

| Locale | Route |
| --- | --- |
| Spanish | `/es` |
| English | `/en` |

Spanish is the default locale.

The root route negotiates the browser language and redirects visitors to the corresponding localized page.

Both languages use the same component architecture, with content loaded from their respective message files.

The language selector uses real localized links and provides a visual transition when switching between languages.

Both localized landing pages are statically generated.

SEO metadata, canonical URLs, Open Graph information, and language alternates are configured independently for each locale.

Section anchor IDs remain consistent between languages.

---

## SEO

The landing page implements search engine optimization using the native Next.js Metadata API.

Features include:

- Localized page titles and descriptions.
- Independent canonical URLs for `/es` and `/en`.
- Reciprocal `hreflang` declarations.
- `x-default` language alternate.
- Localized Open Graph metadata.
- Twitter summary cards.
- Generated 1200 × 630 Open Graph images.
- Organization JSON-LD structured data.
- Official LinkedIn profile in `sameAs`.
- XML sitemap with localized routes.
- Robots configuration.
- Official TechToJob favicon.
- Semantic HTML and descriptive links.

The sitemap contains only the real localized routes.

The production domain is configured through `NEXT_PUBLIC_SITE_URL`.

---

## Accessibility

Accessibility was considered throughout the implementation.

The website includes:

- Semantic HTML elements and landmarks.
- A single H1 per localized page.
- Consistent heading hierarchy.
- Visible keyboard focus indicators.
- Accessible navigation controls.
- A native `<details>` mobile navigation menu.
- Descriptive links and accessible labels.
- Appropriate use of decorative imagery.
- Reduced-motion support.
- Responsive layouts for different screen sizes.
- Accessible form labels and email autocomplete.

The primary brand colors are used with attention to text contrast.

The newsletter form remains visibly disabled until a subscription provider is implemented.

---

## Performance

The landing page uses Server Components and does not introduce custom Client Components for its visual interactions.

Animations are implemented primarily with CSS, avoiding additional JavaScript animation libraries.

Additional performance considerations include:

- Static generation of localized pages.
- Optimized font loading through `next/font/google`.
- Sora font weights 400, 500, and 700.
- Lightweight SVG assets.
- CSS-based visual interactions.
- Responsive layouts without horizontal overflow.
- No stock photography.
- No separate backend requests for landing content.

### Production Lighthouse Results

The following results were observed using Google PageSpeed Insights with mobile emulation on the deployed website in September 2026.

| Category | Spanish | English |
| --- | ---: | ---: |
| Performance | 97 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

The English version also recorded:

| Metric | Result |
| --- | ---: |
| First Contentful Paint | 1.1 s |
| Largest Contentful Paint | 1.7 s |
| Total Blocking Time | 50 ms |
| Cumulative Layout Shift | 0 |

These results represent observed production measurements. Lighthouse scores are estimates and may vary between executions, devices, and testing conditions.

Production pages:

- [Spanish version](https://techtojob-cyan.vercel.app/es)
- [English version](https://techtojob-cyan.vercel.app/en)

---

## Brand Identity

The project follows the official TechToJob visual identity.

### Typography

**Sora — Google Fonts**

[View Sora on Google Fonts](https://fonts.google.com/specimen/Sora)

### Required Colors

| Color | Hex |
| --- | --- |
| Dark charcoal | `#2f3436` |
| Aqua | `#84c0bf` |
| White | `#ffffff` |

Additional neutral shades are used for supporting text, borders, and background surfaces.

The official TechToJob symbol is used throughout the interface, including the Header, Hero, favicon, and generated social images.

Original brand resources are preserved in `public/brand`.

---

## Assets & Licenses

### TechToJob Brand Assets

Official TechToJob logos and symbols were provided for this project.

These resources remain associated with the TechToJob brand.

No separate license or ownership rights are asserted for the supplied brand assets.

### Typography

Sora is provided through Google Fonts and loaded using Next.js font optimization.

[Google Fonts — Sora](https://fonts.google.com/specimen/Sora)

### Discord Symbols

The white and black Discord symbols used in the community CTAs are sourced from Discord's official brand resources.

The original SVG assets are stored locally in `public/icons`.

- [Discord Brand Guidelines](https://discord.com/branding)
- [White Discord Symbol](https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d7f4ef6498ac018f2c55_Symbol.svg)
- [Black Discord Symbol](https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d8014ea898f3a4b2156c_Symbol.svg)

The symbols identify Discord on links that explicitly reference the platform.

### Icons

The project uses `lucide-react`, distributed under the ISC license.

[Lucide Icons](https://lucide.dev/)

### Photography

No stock photography is currently used.

---

## AI Usage

AI assistance was used during the development of this project.

Its use included:

- Development and implementation support.
- Code review and debugging.
- Copywriting and translation refinement.
- Technical planning and architecture discussions.
- Responsive and accessibility reviews.
- Performance analysis and quality assurance.

Design decisions, implementation requirements, visual refinements, and final acceptance were reviewed as part of the development workflow.

AI tools assisted the development process; their outputs were not automatically accepted without review.

---

## Deployment

The application is deployed on Vercel and connected to the public GitHub repository.

**Production website:**

https://techtojob-cyan.vercel.app

**Localized routes:**

- Spanish: https://techtojob-cyan.vercel.app/es
- English: https://techtojob-cyan.vercel.app/en

**Source repository:**

https://github.com/SantosLeon12/techtojob

### Production Environment

The following environment variable is configured in Vercel:

```env
NEXT_PUBLIC_SITE_URL=https://techtojob-cyan.vercel.app
```

This value is used to generate canonical URLs, social metadata, and sitemap entries for the production domain.

Any change to the production URL requires updating this variable and creating a new deployment.

The application uses Next.js App Router and does not require a separate backend service or database.

---

## Community Links

The primary destination for participation is the official TechToJob Discord community.

**Discord:**

[Join TechToJob on Discord](https://discord.gg/pzCa8esFGA)

**LinkedIn:**

[TechToJob on LinkedIn](https://www.linkedin.com/company/techtojob/posts/?feedView=all)

External community destinations are centralized in the project configuration.

---

## Future Product Integrations

The current deployment is a landing page proposal. Some features and content are intentionally presented as demonstrations or placeholders.

The following items remain outside the implemented scope:

- **Newsletter:** Connect and validate a subscription provider before enabling the form.
- **Testimonials:** Replace sample testimonials with approved, verifiable community experiences.
- **News:** Replace example entries with official news and announcements.
- **Legal pages:** Add verified privacy policy and legal notice destinations when available.

These items do not prevent visitors from exploring the landing page or accessing the official Discord community.

---

## Author

**Jorge Luis De los Santos León**

Software Engineer / Full Stack Developer

Focused on ERP systems, business applications, frontend and backend development, and system integration.

GitHub: [SantosLeon12](https://github.com/SantosLeon12)

---

**TechToJob — Connected Tech Community.**