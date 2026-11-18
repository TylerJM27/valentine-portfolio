# Site changes (SHIP mode)

Every way the finished site differs from the original plan. This is the source for updating the practice branch's notes, ROADMAP.md and CLAUDE.md later.

## Process
- Added a SHIP mode to CLAUDE.md: Claude writes the code, the user reviews in the browser.
- CLAUDE.md Pages / Decided / Open decisions updated to the new design.

## Pages
- `/directing` → `/right-now` ("Right Now"): current shows as posters with date, time, venue and an optional ticket link.

- Every page has a footer (`components/layout/Footer.tsx`, rendered in `Layout.tsx`): name + tagline + social icons, a Pages list (Home + nav), contact form link, resume download, copyright. Plum band with a pink wavy edge.

## Components and data
- `ImageMarquee.tsx` replaces `PosterMarquee.tsx`. Takes `items: { id, image, caption? }[]`, `direction`, `paused`, `eager?`, `imageHeight?`. Used by Design (and Performance next).
- `PauseButton.tsx`: shared Pause/Play button for marquees (`aria-pressed`, hidden under reduced motion).
- `PageHeading.tsx`: `<h1>` + a wiggling star and spinning spiral, with an optional `actions` slot (e.g. the pause button).
- `ProjectPoster.tsx`: a show poster, or a plum "Poster coming soon" card when `poster` is missing.
- New type `CurrentProject` in `types.ts`; data in `data/currentProjects.ts` (Unicorn, Senior Showcase, Whatchamacallit). `href` is optional: without it the card shows "Tickets coming soon".
- `pages/RightNowPage.tsx` replaces `DirectingPage.tsx` (deleted). Route `right-now`; nav label "Right Now" (4th, where Directing was).
- `index.css`: new `--animate-wiggle`. Header stars wiggle, header spirals spin (opposite directions).
- Footer top edge is a filled plum wave (inline SVG above the band), replacing the pink `WavyLine` that blended into the background.
- `PageHeading` h1 gets `leading-tight pb-2` so the display font's descenders (the "g" in Right Now / Writing) don't touch the next line.
- Right Now posters grow (`scale-105`) and twist the opposite way from their resting tilt on hover and keyboard focus; the transition is off under reduced motion.
- `lib/posterMotion.ts`: shared hover grow-and-twist classes for show posters (Right Now page + home preview).

### Home page (rebuilt)
- Order: hero → Artistic Statement (with photo) → About (bio paragraphs 1–2 + "See my resume") → Right Now preview (3 posters linking to `/right-now`, plus "See all shows").
- Hero: `StarburstPhoto` + new `WavyWords.tsx`: three ribbons (white, lime, orange with a plum outline) of the roles flowing along wavy SVG paths (`<textPath>`, `startOffset` moved each frame with `requestAnimationFrame` via refs, not state). Alternating directions, pauses on hover, static under reduced motion. No pause button (the user's call; hover + reduced motion only).
- Hero layout: phones stack photo then ribbons. md and up, the ribbons are a full-bleed band across the whole screen, vertically centered on the hero, with the starburst on top (`z-10`) in the left half. The SVG is a very wide viewBox (3000×360) with `preserveAspectRatio="xMidYMid slice"`, so it scales to its height and crops the sides; each ribbon repeats the words 4 times so there's never a gap.
- The page `<h1>` is now sr-only ("Lily Valentine: Writer, Performer, Comedian, Glue Gun Owner"); "About" became a plain `<h2>` (no underline), matching "Artistic Statement" and "Right Now". The About text runs wider (no `max-w-prose`), stopping before the doodles on the right.
- White `WavyLine` dividers between Artistic Statement / About / Right Now (same line as the nav). Section spacing tightened to `space-y-16 md:space-y-20` to suit.
- Social icons removed from the home page (they're in the footer).
- All home doodles move (spirals spin, square spirals and star wiggle, exclamation floats).
- Data: `Profile` gained `roles: string[]`, `statement: string`, `statementPhoto: ImageAsset`; `bio` is now 2 paragraphs (the 3rd became `statement`). The footer tagline reads `profile.roles`.
- Media added: `public/design/whatchamacallit.webp`, `public/photos/*`, `public/performance/*`, `public/documents/resume-page-1.webp`; the resume PDF was replaced with Lily's new version.
