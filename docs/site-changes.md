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
- New `TapedNote.tsx`: a white "taped-on note" card (tilt, shadow, orange tape strip, plum text). Props: `children`, `as?: "div" | "p" | "figcaption"`, `tilt?: "left" | "right"`, `className?`. Used for the Resume photo caption and each Right Now show description (each note leans the opposite way from its poster).

### Home page (rebuilt)
- Order: hero → Artistic Statement (with photo) → About (bio paragraphs 1–2 + "See my resume") → Right Now preview (3 posters linking to `/right-now`, plus "See all shows").
- Hero: `StarburstPhoto` + new `WavyWords.tsx`: three ribbons (white, lime, orange with a plum outline) of the roles flowing along wavy SVG paths (`<textPath>`, `startOffset` moved each frame with `requestAnimationFrame` via refs, not state). Alternating directions, pauses on hover, static under reduced motion. No pause button (the user's call; hover + reduced motion only).
- Hero layout: phones stack photo then ribbons. md and up, the ribbons are a full-bleed band across the whole screen, vertically centered on the hero, with the starburst on top (`z-10`) in the left half. The SVG is a very wide viewBox (3000×360) with `preserveAspectRatio="xMidYMid slice"`, so it scales to its height and crops the sides; each ribbon repeats the words 4 times so there's never a gap.
- The page `<h1>` is now sr-only ("Lily Valentine: Writer, Performer, Comedian, Glue Gun Owner"); "About" became a plain `<h2>` (no underline), matching "Artistic Statement" and "Right Now". The About text runs wider (no `max-w-prose`), stopping before the doodles on the right.
- White `WavyLine` dividers between Artistic Statement / About / Right Now (same line as the nav). Section spacing tightened to `space-y-16 md:space-y-20` to suit.
- Social icons removed from the home page (they're in the footer).
- All home doodles move (spirals spin, square spirals and star wiggle, exclamation floats).
- Data: `Profile` gained `roles: string[]`, `statement: string`, `statementPhoto: ImageAsset`; `bio` is now 2 paragraphs (the 3rd became `statement`). The footer tagline reads `profile.roles`.
### Resume page (rebuilt)
- Layout: `PageHeading` with the "Download resume (PDF)" button beside it. md and up: a two-column grid, the resume page image on the left (white "paper", shadow, `-rotate-1`) and the Best Policy photo on the right (`md:sticky md:top-8`). Phones: document, then photo, then contact form.
- The full resume text moved into a `<details>` "Read as text" toggle under the paper (headline, contact/height/voice, summary, then the sections).
- Photo: transparent cut-out on a plum circle (so the coral suit doesn't blend into the pink), cropped above the head with `aspect-[30/34] object-cover object-bottom`, plus a caption.
- Data: `ResumeData` gained `pageImage: ImageAsset` and `photo?: { image, caption }`. `resume.ts`: Directing section removed (not on the new PDF); phone and email added to `details` (shown as on the PDF, Lily's choice).
- The resume paper is a link that opens the PDF in a new tab (straightens and grows slightly on hover/focus), with a plum "Open PDF ↗" badge in its corner as the visible cue, since phones have no hover.
- The photo caption is a white "taped-on note" card (slight tilt, shadow, orange tape strip, plum text) instead of plain bold text.
- Contact form section unchanged (`#contact`), with doodles beside it on lg.
### Performance page (built)
- The looping video is dropped. Layout: `PageHeading` + "Pause photos" button → full-bleed `ImageMarquee` (moving right) → videos (`max-w-3xl`, centered) → second full-bleed marquee (moving left). Rows are `h-[26svh] min-h-44`, shorter than Design's, so the video stays the focus.
- New dependency `react-lite-youtube-embed` (v3.7): click-to-load facade; `cookie={false}` (youtube-nocookie.com), `webp` thumbnails, `lazyLoad`. Its CSS is imported in `VideoCard.tsx`.
- `VideoCard.tsx` built: h2 title (+ optional year), the embed in a white rounded frame (focus outline via `has-[:focus-visible]`), optional description as a `TapedNote`. Prop `onPlay` (wired to the library's `onIframeAdded`): clicking play pauses both photo rows.
- Data: `performance.ts` now exports `performanceVideos: YouTubeVideo[]` (one entry, "Bullying Works", `l4B6g3J9ZYo`, no description yet) and `performancePhotos` (10 real photos, captions from Lily's file names; "me being creative" became "Lily being creative"). First half → top row, second half → bottom row. `performanceVideo` (looping) removed; the `LoopingVideoSource` type and the notes-only `LoopingVideo`/`PhotoGrid`/`CaptionedPhoto` files are left for the practice-branch cleanup. `videos.ts` (`directingVideos`) is now unused.
- `ImageMarquee`: each figure is `w-min`, so captions wrap to the photo's width instead of widening the slot (was `max-w-[min(22rem,80vw)]`); captioned figures get `min-w-36` so narrow portraits don't squeeze their captions.
- Review round 2:
  - Rows made smaller: fixed heights `h-32 sm:h-36 lg:h-40` (was `h-[26svh]`).
  - `ImageMarquee` gained `repeat?: number`: each loop copy repeats the items N times (extra repeats `aria-hidden`), and the duration scales (`60s × repeat`, inline style) so speed stays the same. Performance uses `repeat={3}`; without it, short rows left an empty gap at the end of the loop on wide screens.
  - Pause bug fixed: `onIframeAdded` re-ran on every render (the library memoizes it by identity, and an inline arrow is new each render), so "Play photos" was instantly undone. Now the embed uses `enableJsApi` with `onPlay` / `onPause` / `onEnd`, and the page keeps two states, `pausedByButton` and `pausedForVideo`; rows stop if either is true. Pausing or ending the video restarts the rows; "Play photos" always restarts them.
  - Follow-up fix: the play/pause events still never arrived from the real player. `react-lite-youtube-embed` sends its "listening" handshake to YouTube through the iframe ref it gets via `forwardRef`; with no ref passed, the handshake is skipped. `VideoCard` now passes `ref={iframeRef}` (`useRef<HTMLIFrameElement>(null)`). The page wraps the handlers in `useCallback` so the library doesn't re-subscribe on every render. Verified against the real YouTube player (play → rows stop, pause → rows move).
  - `VideoCard`: prop `onStop` added. On lg the description note sits to the right of the video (grid `lg:grid-cols-[minmax(0,1fr)_17rem]`, title spanning both); below it on smaller screens. `whitespace-pre-line` keeps line breaks from the data. Video section widened to `lg:max-w-5xl`.
  - Placeholder description added (venue + Mess Fest line).

### Writing page (rebuilt top)
- Uses `PageHeading`. The packet description paragraph is removed; the one-line scroll/Prev/Next/PDF hint stays.
- New TTSNL photo (`public/photos/writing-ttsnl.webp`) in a tilted white frame with its caption as a `TapedNote` overlapping the bottom. lg and up: a grid with the heading and hint on the left and the photo on the right (`lg:grid-cols-[minmax(0,1fr)_28rem] lg:grid-rows-[auto_1fr]`, photo spanning both rows). Smaller screens: heading → photo → hint → flipbook.
- Data: new shared type `CaptionedImage = { image, caption }` in `types.ts` (also used by `ResumeData.photo`); `writing.ts` exports `writingPhoto: CaptionedImage`.
- Side doodles repositioned (the top exclamation moved beside the photo).
- Review: hint column narrowed (`lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[20rem_…]`) so the photo is larger (capped at `max-w-2xl`). Caption "premiere" is intended (first performance).
- `Flipbook`: the pinned viewer changed from `sticky top-0 h-svh justify-start pt-2` to `sticky top-[7svh] h-[86svh] justify-center`, so the packet pins when it reaches the middle of the screen (not the top), and the empty space below it at the end is much smaller. Page `pb-24` removed. Gap from the last page's controls to the footer: ~200px+ → ~135px at desktop.
- Performance description: "Mess Fest" → "MessFest" (Lily's spelling).

### Not Found page (built)
- Any unknown address (the `*` route; `vercel.json` sends every path to the app). `PageHeading` "Page not found", a `TapedNote` saying there's no page at the current path (`useLocation().pathname`), a "Back to the home page" button, and "Or try one of these" with a dashed link per `navItems` entry. Lime exclamation + square spiral beside the note (sm and up).

### Consistency pass
- New `lib/buttonStyles.ts` with `plumButton` and `dashedButton`. Used by Home ("See my resume", "See all shows"), Resume (download, "Read as text"), Right Now ("Get tickets"), Flipbook (PDF link), PauseButton (now also tilts on hover like the other buttons) and Not Found. Flipbook Prev/Next keep their own classes (disabled states); Right Now's "Tickets coming soon" stays a non-interactive label.
- Page bottom padding unified to `py-8` (Design and Performance had `pb-16`); Writing is `pt-8` only because the flipbook leaves its own space.
- Final checks (headless Edge): all 7 routes at 375 / 768 / 1280 / 1920 have no sideways scroll, no console errors, exactly one h1, a page title, and alt on every image; keyboard Tab through the first 25 stops on each page shows a visible focus outline; with `prefers-reduced-motion: reduce`, no looping animation runs on any page.

### Site-wide: icon and link previews
- `public/favicon.svg`: Vite's logo replaced with the header's star, filled white on a pink rounded square. `public/apple-touch-icon.png` (180×180) for iPhone home screens.
- `index.html`: `theme-color`, `meta description`, Open Graph tags (`og:title`, `og:description`, `og:image` + size + alt, `og:type`, `og:site_name`) and `twitter:card`. Share image `public/og-image.jpg` (1200×630): headshot in a white circle, name in Gloria Hallelujah, the roles, doodles. **At deploy:** `og:image` must become the full URL, and an `og:url` should be added.
- Media added: `public/design/whatchamacallit.webp`, `public/photos/*`, `public/performance/*`, `public/documents/resume-page-1.webp`; the resume PDF was replaced with Lily's new version.
