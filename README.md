# MANSY Management Ops

Marketing website for Mansy Management Ops., a commercial property management and leasing strategy brand focused on commercial, administrative, retail, and mixed-use assets.

## GitHub Description

Use this for the GitHub repository description:

`Next.js marketing website for Mansy Management Ops., focused on commercial property management, leasing strategy, and asset performance.`

## Overview

This project is built with Next.js and TypeScript and includes:

- A multi-page marketing site for Mansy Management Ops.
- Service detail pages for tenant mix strategy, leasing management, and asset performance.
- Responsive layouts with animated sections, media-rich hero areas, and branded content blocks.
- An asset sourcing guide for replacing images and video used across the site.
- GitHub Pages deployment through GitHub Actions.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- AOS
- Lucide React

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Content and Media

Site copy, structured page data, service content, and media sourcing metadata live in:

- [src/content/site.ts](/D:/rWW/mansy-management/MANSY-Management-OPS/src/content/site.ts)

Shared UI components live in:

- [src/components](/D:/rWW/mansy-management/MANSY-Management-OPS/src/components)

Global styling lives in:

- [src/app/globals.css](/D:/rWW/mansy-management/MANSY-Management-OPS/src/app/globals.css)

Media files should be placed in:

- `public/assets/images`
- `public/assets/videos`

The homepage hero video is expected at:

- `public/assets/videos/home-hero-commercial-building.mp4`

## Deployment

This project is configured for static export and GitHub Pages.

Deployment workflow:

- [.github/workflows/deploy-pages.yml](/D:/rWW/mansy-management/MANSY-Management-OPS/.github/workflows/deploy-pages.yml)

Next.js export config:

- [next.config.ts](/D:/rWW/mansy-management/MANSY-Management-OPS/next.config.ts)

Before GitHub Pages deployment works, make sure the repository is configured with:

1. `Settings` > `Pages`
2. `Build and deployment` > `Source`
3. Select `GitHub Actions`

## Notes

- The site uses a poster image fallback when the homepage hero video is not present.
- Image and video replacement guidance is surfaced in the contact page's asset sourcing section.
