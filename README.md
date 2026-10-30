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
- [x] 3. Doodles and icons
- [x] 4. Routing, layout and stub pages
- [ ] 5. Header and desktop nav
- [x] 6. Mobile menu
- [ ] 7. Home page
- [ ] 8. First deploy
- [ ] 9. Design page
- [ ] 10. Performance page
- [ ] 11. Directing page
- [ ] 12. Resume page and contact form
- [ ] 13. Writing page flipbook
- [ ] 14. Finish

## What I learned
_Entries are added as each component is approved: what it does, plus one thing learned building it._

### 1. Theme setup
Defines the site's colors (pink, plum, lime, orange) and fonts (Gloria Hallelujah, Atkinson Hyperlegible Next) as Tailwind v4 `@theme` tokens. Base styles give `<body>` the pink background, plum text and body font, and both fonts load from one Google Fonts stylesheet link.

Learned: contrast belongs to a pair of colors, not a single color. Lime on the pink measures about 2.4:1, which fails even the 3:1 large-text minimum, so lime and orange are for doodles only, never text.

### 2. Data types and placeholder data
Shared content types in `src/data/types.ts`, plus typed data files for the nav, profile, resume, performance video and photos, writing packet, directing videos and design pieces. Placeholder images were converted from 6–15 MB camera JPGs to WebP files of about 200 KB, with their real pixel sizes recorded for `width` and `height`.

Learned: Vite serves `public/` from the site root, so a file at `public/placeholders/x.webp` is at `/placeholders/x.webp`. Without the leading `/`, the path is relative to the current page and breaks on URLs like `/design/`.

### 3. Doodles and icons
Eight inline SVG components: the Star, WavyLine, Spiral, SquareSpiral and Exclamation doodles, plus the Instagram, email and menu icons. Each takes a `className` for size, color and rotation, draws in `currentColor`, and is hidden from screen readers with `aria-hidden`. WavyLine stretches to any width with `preserveAspectRatio="none"` and keeps its line thickness with `vectorEffect="non-scaling-stroke"`. MenuIcon switches between bars and an X with a ternary on its `isOpen` prop.

Learned: TypeScript doesn't check JSX attribute names that contain a dash, so typos like `aria-hiden` and old SVG names like `stroke-width` pass the build silently. Use the camelCase names where they exist, check `aria-*` spellings in the DevTools Accessibility pane, and watch the browser console for React's warnings.

### 4. Routing, layout and stub pages
`src/routes.tsx` uses `createBrowserRouter` with `Layout` as the parent route, an index route for home, five page routes and a `*` catch-all for NotFoundPage. `Layout` holds the skip link and `<main id="content">` with `<Outlet />` and `<ScrollRestoration />`; its `<Header />` line stays commented out until step 5. All seven pages are stubs with their own `<title>` and `<h1>`.

Learned: a link like `href="#content"` only works if an element's `id` is exactly `content`. A misplaced quote once turned the id into the string `content tabIndex={-1}`, and both the build and the linter passed, so behavior like this has to be tested by hand.

### 6. Mobile menu
A hamburger button below 768px that opens a dropdown of the same five pages from `navigation.ts`. The button has an `aria-label`, `aria-expanded` and `aria-controls`, and a tap target of 44px. The menu closes when a page is chosen, and a `useEffect` adds a keydown listener only while it's open, so Escape closes it and returns focus to the button. The cleanup function removes the listener.

Learned: hooks must be called inside a component. A `useState` placed above the function crashed the whole app to a blank page, and the build still passed. Only `npm run lint` caught it, so run both before calling something done.
