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
- Media added: `public/design/whatchamacallit.webp`, `public/photos/*`, `public/performance/*`, `public/documents/resume-page-1.webp`; the resume PDF was replaced with Lily's new version.
