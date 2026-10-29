# Artist Portfolio: Lily Valentine

## About this project

A portfolio website for Lily Valentine, an actor, writer, and director who also does graphic design. I'm a newer developer with solid frontend experience, and I'm using this project to learn. Treat it as a teaching project first and a deliverable second.

- Artist: Lily Valentine
- Work shown: performance, writing, directing, graphic design, resume
- Sells work or takes commissions: no. The contact form is for inquiries only.
- Visual feel: loud, playful, hand-drawn. See "Visual direction".
- Reference sketch: `docs/homepage-sketch.jpg`. Look at it before planning or designing the homepage.

## Stack

- Vite + React + TypeScript (`react-ts` template), strict mode on
- TypeScript is pinned to 6.0.x (`~6.0.0`) because typescript-eslint doesn't support TypeScript 7 yet. Don't upgrade TypeScript until typescript-eslint does.
- React Router for pages
- Tailwind CSS for styling (utility classes directly in JSX). I'll do the Tailwind setup by hand, since it's a good thing to learn.
- YouTube embeds: `react-lite-youtube-embed` (the React port of the `lite-youtube-embed` web component). Check its current README for the right props and CSS import before installing.
- No UI component library (pre-built buttons, modals, menus). The design is custom and hand-drawn, so one would mostly fight it. Headless primitives (Radix UI, Headless UI) might help later for things that are hard to make accessible, like a lightbox. Ask me before adding one.
- npm as package manager
- No backend of my own yet. The contact form uses a form service for now; see "Decided".
- Deploy target: Vercel, from GitHub

## Pages

Routes, in the sketch's nav order. Use this order unless I change it.

- `/resume`: link to download the resume, the resume visible on the page, and the contact form at the bottom of the page
- `/performance`: looping video at the very top of the page (muted, autoplay, loop, playsInline, with a visible pause button), photos with captions below
- `/writing`: a 15-page writing packet shown as a scroll-driven flipbook. As I scroll over it, it flips through the pages. Needs a non-scroll fallback (link to the full PDF).
- `/directing`: several YouTube videos. Each loads on click, using `react-lite-youtube-embed`: a thumbnail with a play button, and the real player loads only after the click.
- `/design`: graphic design pieces, each an image with a description
- `/` Home: headshot and bio, plus a resume link and social links as SVG icons (see "Visual direction")

## Visual direction (from the sketch)

- Background: hot pink `#EF2F84` (sampled from the sketch).
- Name, nav, and headings: white, Gloria Hallelujah (Google Font). Body text: Atkinson Hyperlegible Next in dark plum `#1A0510`.
- Accents: lime green `#8FE029` (exclamation mark, spirals) and orange, about `#F5A04A` (spirals, squares). The blue "Email" and "Instagram" text in the sketch was just the artist's notes; those become social icon links instead.
- Doodles: stars on either side of the name, spirals, one big exclamation mark. Build them as inline SVGs, decorative only (`aria-hidden="true"`).
- Header (tablet and desktop): name centered between two stars. Nav row below it with wavy hand-drawn lines above and below: Resume, Performance, Writing, Directing, Design.
- Header (mobile): the nav collapses into a hamburger button that opens a dropdown with the same five pages. Build it accessibly: a real `<button>` with an accessible name, `aria-expanded` and `aria-controls`, closes on Escape and after a page is chosen, and works by keyboard.
- Home layout: headshot on the left inside a starburst-shaped frame, alternating between a cute photo and a serious photo. "About" heading and bio text on the right. Social links near the bottom as SVG icons (Instagram and email to start). A cartoon Lily illustration at the bottom right.
- Constraints this look puts on the build:
    - The photo swap must crossfade slowly. Nothing may flash more than 3 times per second.
    - Respect `prefers-reduced-motion`: show one static photo and don't autoplay motion.
    - Contrast: white on `#EF2F84` is 3.88:1, which is fine for large text and focus outlines but not for body text. Body text uses dark plum `#1A0510` (about 5.0:1). Check any new text color with a contrast checker. WCAG AA needs 4.5:1 for body text and 3:1 for large text.
    - The starburst is a shape mask. The photo still needs real alt text.
    - Icon-only links and buttons (the social icons, the hamburger) need an accessible name, such as `aria-label`, and a tap target of roughly 44px.

## Open decisions

Settle these in plan mode, then move them to "Decided".

1. **Performance video hosting:** deferred. The video doesn't exist yet and its size is unknown. Until then, use a tiny placeholder clip plus a poster in `public/placeholders/`. Once it exists: if it compresses to about 5 MB or less (720p, 10–20 s, MP4, no audio), put it in `public/`. If it's larger, host it on Vercel Blob or Cloudinary. Don't use a YouTube or Vimeo player for the loop. Always include a poster image.

## Decided

- **Content data** (video IDs, captions, design pieces, photo lists) lives in typed files in `src/data/`. See Conventions.
- **Writing packet:** export the 15 pages as images. Scroll position picks which page shows (a tall scroll track with a sticky viewer inside). Include prev/next buttons and a link to the full PDF for keyboard and screen-reader users. Don't make the scroll track so long that the page feels stuck.
- **YouTube:** click-to-load using `react-lite-youtube-embed`. Use its privacy-friendly mode (youtube-nocookie.com) and always give each video a title.
- **Contact form:** Web3Forms (free plan: 250 submissions a month), sent with a plain `fetch`, no package. The form UI sits at the bottom of `/resume`. The submit step lives only in `src/lib/submitContact.ts`, so it can be swapped for my own backend later. The access key goes in the `VITE_WEB3FORMS_KEY` env variable. Spam protection: a honeypot field plus Web3Forms' server-side filter. Add hCaptcha only if spam shows up.
- **Resume on the page:** HTML rendered from `src/data/resume.ts`, plus a link to download the PDF. Don't embed the PDF.
- **Routing:** `react-router` v7 with `createBrowserRouter`. The route config lives in `src/routes.tsx`, with a `Layout` route that holds the header and `<Outlet />`. Use `<ScrollRestoration />` and a `*` route for NotFound. The nav list lives in `src/data/navigation.ts`, shared by the desktop nav and the mobile menu. On deploy, `vercel.json` rewrites every path to `index.html`.
- **Fonts and colors:** see "Visual direction".
- **Media:** everything is placeholder for now (images, performance video, writing packet pages, resume PDF). Keep placeholders small, in `public/placeholders/`, and reference them only through the files in `src/data/`, so swapping in real media is a data change. Don't block on real assets.

## Later (not now)

An admin page where the artist adds her own images and videos. Likely a Node + MongoDB backend with file storage, or a headless CMS; decide when we get there. Don't build any of it yet. To keep this door open, pages read their content only through `src/data/`, so those files can later be replaced by API calls without rewriting the pages.

## How to work with me (always)

- Explain your approach and why before doing anything non-trivial.
- The first time a concept appears (e.g. `useEffect`, route params, a TypeScript generic), explain it in 1-2 plain sentences and say why it's needed here.
- Work in small steps. Finish one piece, stop, and let me try the next one.
- Never install a dependency without telling me what it does and why we need it.
- If I ask "why", explain. Don't just rewrite the code.
- When you spot a bug or bad practice in my code, point to it and explain it. Don't silently fix it unless I say "fix it".
- If my request is ambiguous, ask me instead of guessing.
- Never run `git commit` or `git push`. I commit myself.

## Current mode

MODE: BUILD-WITH-ME

I switch modes by editing the line above. Follow whichever mode is set.

### SCAFFOLD-NOTES

- Create files and folders, but write ONLY comments and markdown inside them. No executable code, no imports, no exports, no JSX, no type definitions.
- Each page/component file gets a comment block at the top with:
    1. Purpose
    2. What it renders
    3. Props it receives (and the type each one will need)
    4. State it needs
    5. Concepts involved (explained simply)
    6. Styling approach: the layout idea and the key Tailwind utilities to look up (named, not written out as full markup)
    7. Numbered build steps
    8. "Your turn": the task I should do myself
    9. "Done when": how I'll know it works
- Do not edit `App.tsx`, `main.tsx`, `index.html`, `package.json`, `vite.config.ts`, `tsconfig*.json`, or the global CSS file in this mode.
- Do not import the placeholder files anywhere. They're unwired until I write them.
- Also create a top-level `ROADMAP.md` that numbers the build order across all files.
- Replace the Vite boilerplate `README.md` with a project README skeleton (markdown only) using the structure in "README upkeep".
- After creating files, stop and show a tree of what was created. Do not continue on your own.

### BUILD-WITH-ME

- I write the code. You review it against the notes at the top of the file, plus the conventions below.
- Only write code when I say "write this one". Otherwise give hints, point to the relevant concept, and let me try first.
- When I finish a file, check it for correctness, accessibility, and responsiveness, and tell me what to improve.
- When you approve a component, do the README update described in "README upkeep".

## README upkeep

README.md structure: Overview, Stack, Pages, Run locally, Build progress (a checklist mirroring `ROADMAP.md`), What I learned.

When you approve a component in review:

1. Edit `README.md` only. Don't touch any other file.
2. Tick the component in Build progress.
3. Add a short, factual entry: what it does, plus one thing I learned building it.
4. Don't commit. I'll read the README diff, fix anything wrong, and commit it with the component.

Only update the README after approval, never for work in progress.

## Planned structure

Approved plan. The build order lives in `ROADMAP.md`.

```
src/
  routes.tsx
  components/
    layout/   Layout, Header, Nav, NavLinks, MobileMenu, SkipLink
    doodles/  Star, Spiral, SquareSpiral, Exclamation, WavyLine
    icons/    InstagramIcon, EmailIcon, MenuIcon
    StarburstPhoto, SocialLinks, SocialIconLink, ContactForm, LoopingVideo,
    PhotoGrid, CaptionedPhoto, Flipbook, VideoCard, DesignPieceCard
  pages/      HomePage, ResumePage, PerformancePage, WritingPage, DirectingPage, DesignPage, NotFoundPage
  hooks/      usePrefersReducedMotion.ts, useScrollProgress.ts
  lib/        submitContact.ts
  data/       types.ts, profile.ts, navigation.ts, resume.ts, performance.ts, writing.ts, videos.ts, designPieces.ts
public/
  placeholders/
docs/
  homepage-sketch.jpg
vercel.json   (added at deploy)
```

## Conventions

- Function components and hooks only
- TypeScript strict. No `any`. If tempted, use a real type or `unknown` and tell me why.
- Type every component's props explicitly (a `Props` type above the component)
- Components in `.tsx`; files without JSX in `.ts`
- One component per file, PascalCase file names
- Content data lives in typed arrays in `src/data/` (e.g. `designPieces.ts`, `videos.ts`) with exported types, not hardcoded in components
- Styling is Tailwind utility classes in JSX. No per-component CSS files; the only stylesheet is the global one that imports Tailwind.
- If a long run of utility classes repeats, extract a component before reaching for `@apply`
- Every image has meaningful alt text. Purely decorative graphics get `aria-hidden="true"` or empty alt text.
- Images: modern formats (WebP/AVIF where possible), lazy-loaded below the fold, explicit width/height to prevent layout shift
- Mobile-first, responsive layouts (in Tailwind: unprefixed classes are the mobile styles, then add `sm:` / `md:` / `lg:` for larger screens)
- Semantic HTML and keyboard-accessible navigation

## Commands

- `npm run dev` starts the dev server
- `npm run build` type-checks and creates a production build
- `npm run lint` runs the linter

## Notes for later

- Keep this file accurate as decisions are made. If a decision changes, update it here.
- Keep it short. Rules that matter should stay easy to find.
