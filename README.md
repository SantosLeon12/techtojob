# TechToJob Landing Page

## Overview

This repository contains a landing page proposal for TechToJob. It introduces a shared space for tech talent, companies, community activity, tournaments, and networking. The current site has Spanish and English versions at `/es` and `/en`.

## Design concept

**Connected Tech Community** uses nodes, profiles, and connecting lines inspired by the geometry of TechToJob's official symbol. Alternating white, light neutral, aqua, and dark surfaces give the long page an editorial rhythm. The interface uses the official palette without decorative gradients or stock photography.

## Tech stack

Versions below follow `package.json`:

| Technology | Version |
| --- | --- |
| Next.js (App Router) | 16.3.5 |
| React | 19.2.8 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| next-intl | ^4.14.5 |
| Lucide React | ^1.47.0 |

## Project structure

- `src/app/[locale]`: localized landing, metadata, and generated social image.
- `src/app/robots.ts` and `src/app/sitemap.ts`: indexing routes.
- `src/components/layout`, `sections`, and `ui`: layout and landing components.
- `src/i18n` and `src/proxy.ts`: locale routing and server message loading.
- `src/messages/es.json` and `en.json`: visible copy and accessibility labels.
- `src/lib`: site URL, confirmed community destinations, and pending legal destinations.
- `public/brand`: official TechToJob artwork. `public/images` and `public/icons` are reserved for future licensed assets.

## Getting started

Install dependencies with `npm install`, then run `npm run dev`. Open `http://localhost:3000/es` or `http://localhost:3000/en`. Copy `.env.example` to a local `.env.local` when setting a site URL; `.env.local` is ignored by Git.

## Available scripts

- `npm run dev`: start the development server.
- `npm run build`: create the production build.
- `npm run start`: serve the production build after building.
- `npm run lint`: run ESLint.

## Internationalization

`next-intl` defines Spanish as the default locale and prefixes both languages. The root route negotiates a browser locale and redirects to `/es` or `/en`. Both landing routes and their social images are generated statically. Component copy comes from the locale's message file. Section anchor IDs remain the same in both languages.

## SEO

Each locale has its own title, description, canonical URL, reciprocal `hreflang` links, Open Graph data, Twitter Card, and Organization JSON-LD. The sitemap contains only `/es` and `/en`; robots allows indexing and points to the sitemap. `NEXT_PUBLIC_SITE_URL` must be set to the final production origin before deployment. The localhost fallback is for development only.

## Accessibility

The page has one H1, semantic sections and navigation, descriptive links, keyboard focus styles, a native `<details>` mobile menu, accessible form labels, and reduced-motion support. The newsletter form is visibly unavailable until a provider is connected. Decorative imagery is hidden from assistive technology where appropriate.

## Performance

The page uses Server Components and no custom Client Components. Sora is loaded through `next/font/google` at weights 400, 500, and 700. The visual system uses HTML, CSS, lightweight official SVGs, and Lucide icons; no stock photos or animation packages are loaded. Run `npm run build` and audit the production server for release checks.

## Brand identity

The required colors are `#2f3436`, `#84c0bf`, and `#ffffff`. The brand symbol appears in the interface, favicon, and generated social images. Keep the original files in `public/brand` intact.

## Assets & licenses

- Sora is served via Google Fonts through Next.js font optimization.
- TechToJob supplied the official logos and symbols for this project; no separate license is asserted here.
- The white and black Discord symbols in `public/icons` are unmodified SVGs linked from [Discord's official brand guidelines](https://discord.com/branding): [white source](https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d7f4ef6498ac018f2c55_Symbol.svg) and [black source](https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d8014ea898f3a4b2156c_Symbol.svg). They identify Discord on links that explicitly name the platform.
- Lucide icons are provided by `lucide-react` under the ISC license, as stated in its installed `LICENSE` file.
- No stock photography is currently used.

## AI Usage

AI assistance was used during development, code review, copy refinement, and QA. Design and implementation decisions were reviewed and adjusted as part of the project workflow; the site was not generated or approved automatically.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin, run `npm run lint` and `npm run build`, then deploy the production output on a Next.js compatible host. Verify both locale routes, metadata, robots, sitemap, and social previews against the final domain before publication. No deployment is performed by this repository setup.

## Pending production configuration

- Set `NEXT_PUBLIC_SITE_URL` to the verified production origin.
- Add verified privacy and legal notice destinations in `src/lib/constants.ts`; they are currently non-interactive text.
- Connect and validate a newsletter provider before enabling the form.
- Replace sample testimonials and news entries with approved real content, or remove those samples before a public launch.
