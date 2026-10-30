# Roadmap

The build order. Each step leaves the site runnable. Every file listed has notes at the top explaining what to build. Step numbers match the `ROADMAP step` tags in those notes.

Why this order: types and data come before anything that shows them. Simple components with no state (the doodles) come before state (the mobile menu). The home page, header and navigation come first, then a first deploy, so a real site is live early, with the other pages as stubs. The content pages follow, and the trickiest piece (the scroll-driven flipbook) comes last, once you've had the most practice.

**Launch must-haves:** steps 3.1–3.5 and 4–8. The extra doodles (3.6–3.8) and the homepage cartoon are decoration and can go up in a later push.

---

## 1. Theme setup (Tailwind by hand)
Files: `src/index.css`, `index.html` (edited in BUILD-WITH-ME mode)

1.1. In `index.css`, add a Tailwind v4 `@theme` block with the site's tokens:
   - colors: `pink` `#EF2F84`, `plum` `#1A0510`, `lime` `#8FE029`, `orange` about `#F5A04A`
   - fonts: `display` (Gloria Hallelujah) and `body` (Atkinson Hyperlegible Next)
   These become utilities like `bg-pink`, `text-plum` and `font-display`.
1.2. Load both Google Fonts. Add the `<link>` tags to `index.html`, using `display=swap`.
1.3. Give `<body>` the pink background, plum text and body font, so even the edges of the page are pink.

Done when: a test `<p className="font-display text-white">` in App.tsx shows the handwritten font in white on pink.

## 2. Data types and placeholder data
2.0. **Shrink the placeholders first.** The JPGs in `public/placeholders/` are full camera files (6–15 MB, up to 6,500 px wide). Make WebP copies, about 1,200–1,600 px on the long side and a few hundred KB each, and point the data files at those. Also make a poster frame for the video and a small placeholder resume PDF.
2.1. `src/data/types.ts`
2.2. `src/data/navigation.ts`
2.3. `src/data/profile.ts`
2.4. `src/data/resume.ts`
2.5. `src/data/performance.ts`
2.6. `src/data/writing.ts`
2.7. `src/data/videos.ts`
2.8. `src/data/designPieces.ts`

## 3. Doodles and icons (props, no state)
The header and home page need 3.1–3.5. 3.6–3.8 are homepage decoration.

3.1. `src/components/doodles/Star.tsx` (sets the pattern)
3.2. `src/components/doodles/WavyLine.tsx`
3.3. `src/components/icons/MenuIcon.tsx`
3.4. `src/components/icons/InstagramIcon.tsx`
3.5. `src/components/icons/EmailIcon.tsx`
3.6. `src/components/doodles/Spiral.tsx`
3.7. `src/components/doodles/SquareSpiral.tsx`
3.8. `src/components/doodles/Exclamation.tsx`

## 4. Routing, layout and stub pages
Before you start: install `react-router` (we'll talk about it first).

4.1. `src/routes.tsx`, then render `RouterProvider` in `App.tsx`
4.2. `src/components/layout/Layout.tsx`
4.3. `src/components/layout/SkipLink.tsx`
4.4. Stub every page with only a `<title>` and an `<h1>`:
   `HomePage`, `ResumePage`, `PerformancePage`, `WritingPage`, `DirectingPage`, `DesignPage`, `NotFoundPage` (all in `src/pages/`)

## 5. Header and desktop nav
5.1. `src/components/layout/Header.tsx`
5.2. `src/components/layout/Nav.tsx`
5.3. `src/components/layout/NavLinks.tsx`

## 6. Mobile menu (first state and effect)
6.1. `src/components/layout/MobileMenu.tsx`

## 7. Home page
7.1. `src/hooks/usePrefersReducedMotion.ts`
7.2. `src/components/SocialIconLink.tsx`
7.3. `src/components/SocialLinks.tsx`
7.4. `src/components/StarburstPhoto.tsx` (short on time? ship one still photo first, add the crossfade after)
7.5. `src/pages/HomePage.tsx`

## 8. First deploy
8.1. `vercel.json`: rewrite every path to `/index.html`, so deep links like `/writing` work on the live site
8.2. Push to GitHub, import the repo in Vercel, and deploy. From then on, every push to `main` redeploys on its own.

Done when: the Vercel URL loads the home page, and typing `/writing` straight into the address bar shows the stub, not a 404.

## 9. Design page (first real content page)
9.1. `src/components/DesignPieceCard.tsx`
9.2. `src/pages/DesignPage.tsx`

## 10. Performance page
10.1. `src/components/CaptionedPhoto.tsx`
10.2. `src/components/PhotoGrid.tsx`
10.3. `src/components/LoopingVideo.tsx` (reuses `usePrefersReducedMotion` from 7.1)
10.4. `src/pages/PerformancePage.tsx`

## 11. Directing page (first third-party component)
Before you start: install `react-lite-youtube-embed` (we'll talk about it first and read its README).

11.1. `src/components/VideoCard.tsx`
11.2. `src/pages/DirectingPage.tsx`

## 12. Resume page and contact form
Before you start: create a Web3Forms access key and put it in `.env.local` as `VITE_WEB3FORMS_KEY`. Since the site is already live, also add it in the Vercel project settings (Settings > Environment Variables), then redeploy.

12.1. `src/lib/submitContact.ts`
12.2. `src/components/ContactForm.tsx`
12.3. `src/pages/ResumePage.tsx`

## 13. Writing page flipbook (hardest, saved for last)
13.1. `src/hooks/useScrollProgress.ts`
13.2. `src/components/Flipbook.tsx`
13.3. `src/pages/WritingPage.tsx`

## 14. Finish
14.1. `src/pages/NotFoundPage.tsx`: finish it
14.2. Accessibility pass: keyboard-only walkthrough of every page, a Lighthouse and axe check, and reduced motion emulated on every page
14.3. Final check of the live site: every page, deep links, and a test submission of the contact form
