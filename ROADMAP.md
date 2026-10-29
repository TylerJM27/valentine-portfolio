# Roadmap

The build order, simplest first. Each step leaves the site runnable. Every file listed has notes at the top explaining what to build. Step numbers match the `ROADMAP step` tags in those notes.

Why this order: types and data come before anything that shows them. Simple components with no state (the doodles) come before state (the mobile menu). The easiest content page comes before the most visual one (home), and the trickiest piece (the scroll-driven flipbook) comes last, once you've had the most practice.

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
3.1. `src/components/doodles/Star.tsx` (sets the pattern)
3.2. `src/components/doodles/Spiral.tsx`
3.3. `src/components/doodles/SquareSpiral.tsx`
3.4. `src/components/doodles/Exclamation.tsx`
3.5. `src/components/doodles/WavyLine.tsx`
3.6. `src/components/icons/InstagramIcon.tsx`
3.7. `src/components/icons/EmailIcon.tsx`
3.8. `src/components/icons/MenuIcon.tsx`

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

## 7. Design page (first real content page)
7.1. `src/components/DesignPieceCard.tsx`
7.2. `src/pages/DesignPage.tsx`

## 8. Performance page
8.1. `src/components/CaptionedPhoto.tsx`
8.2. `src/components/PhotoGrid.tsx`
8.3. `src/hooks/usePrefersReducedMotion.ts`
8.4. `src/components/LoopingVideo.tsx`
8.5. `src/pages/PerformancePage.tsx`

## 9. Directing page (first third-party component)
Before you start: install `react-lite-youtube-embed` (we'll talk about it first and read its README).

9.1. `src/components/VideoCard.tsx`
9.2. `src/pages/DirectingPage.tsx`

## 10. Home page
10.1. `src/components/SocialIconLink.tsx`
10.2. `src/components/SocialLinks.tsx`
10.3. `src/components/StarburstPhoto.tsx`
10.4. `src/pages/HomePage.tsx`

## 11. Resume page and contact form
Before you start: create a Web3Forms access key and put it in `.env.local` as `VITE_WEB3FORMS_KEY`.

11.1. `src/lib/submitContact.ts`
11.2. `src/components/ContactForm.tsx`
11.3. `src/pages/ResumePage.tsx`

## 12. Writing page flipbook (hardest, saved for last)
12.1. `src/hooks/useScrollProgress.ts`
12.2. `src/components/Flipbook.tsx`
12.3. `src/pages/WritingPage.tsx`

## 13. Finish and deploy
13.1. `src/pages/NotFoundPage.tsx`: finish it
13.2. Accessibility pass: keyboard-only walkthrough of every page, a Lighthouse and axe check, and reduced motion emulated on every page
13.3. `vercel.json`: rewrite every path to `/index.html`, so deep links like `/writing` work on the live site
13.4. Deploy to Vercel from GitHub, and set `VITE_WEB3FORMS_KEY` in the Vercel project settings
