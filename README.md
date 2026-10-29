# Lily Valentine — Portfolio

## Overview
A portfolio site for Lily Valentine, an actor, writer and director who also does graphic design. Loud, playful and hand-drawn: hot pink, white handwriting, lime and orange doodles. Nothing is for sale; the contact form is for inquiries only.

_Status: scaffolding. All media is placeholder._

## Stack
- Vite + React + TypeScript (strict)
- React Router (v7)
- Tailwind CSS v4
- `react-lite-youtube-embed` for click-to-load YouTube videos
- Web3Forms for the contact form
- Deployed on Vercel

## Pages
| URL | What's there |
|---|---|
| `/` | Headshot in a starburst frame, bio, resume link, social links |
| `/resume` | Resume on the page, PDF download, contact form |
| `/performance` | Looping video, production photos with captions |
| `/writing` | 15-page writing packet as a scroll-driven flipbook, with a PDF link |
| `/directing` | YouTube videos that load on click |
| `/design` | Graphic design pieces with descriptions |

## Run locally
```bash
npm install
npm run dev
```
_TODO: note the `.env.local` setup for `VITE_WEB3FORMS_KEY` once the contact form exists._

Other commands: `npm run build` (type-check and production build), `npm run lint`.

## Build progress
Mirrors [ROADMAP.md](ROADMAP.md).

- [x] 1. Theme setup (colors, fonts)
- [x] 2. Data types and placeholder data
- [ ] 3. Doodles and icons
- [ ] 4. Routing, layout and stub pages
- [ ] 5. Header and desktop nav
- [ ] 6. Mobile menu
- [ ] 7. Design page
- [ ] 8. Performance page
- [ ] 9. Directing page
- [ ] 10. Home page
- [ ] 11. Resume page and contact form
- [ ] 12. Writing page flipbook
- [ ] 13. Finish and deploy

## What I learned
_Entries are added as each component is approved: what it does, plus one thing learned building it._

### 1. Theme setup
Defines the site's colors (pink, plum, lime, orange) and fonts (Gloria Hallelujah, Atkinson Hyperlegible Next) as Tailwind v4 `@theme` tokens. Base styles give `<body>` the pink background, plum text and body font, and both fonts load from one Google Fonts stylesheet link.

Learned: contrast belongs to a pair of colors, not a single color. Lime on the pink measures about 2.4:1, which fails even the 3:1 large-text minimum, so lime and orange are for doodles only, never text.

### 2. Data types and placeholder data
Shared content types in `src/data/types.ts`, plus typed data files for the nav, profile, resume, performance video and photos, writing packet, directing videos and design pieces. Placeholder images were converted from 6–15 MB camera JPGs to WebP files of about 200 KB, with their real pixel sizes recorded for `width` and `height`.

Learned: Vite serves `public/` from the site root, so a file at `public/placeholders/x.webp` is at `/placeholders/x.webp`. Without the leading `/`, the path is relative to the current page and breaks on URLs like `/design/`.
