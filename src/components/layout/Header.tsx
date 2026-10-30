/*
  Header — name between two stars, nav below (ROADMAP step 5.1)
  =============================================================

  1. PURPOSE
     The top of every page, drawn like the sketch: "LILY VALENTINE" centered
     between two white stars, a few spirals, and the nav row underneath.

  2. WHAT IT RENDERS
     <header> containing:
       - A row: <Star /> · site name (a <Link> to "/") · <Star />
       - A couple of lime <Spiral /> doodles, placed loosely around the name
       - <Nav />
     The name is a link, not a heading. Each page has its own <h1>, so every
     page has exactly one.

  3. PROPS
     None.

  4. STATE
     None. The hamburger's open/closed state lives in MobileMenu, the only
     place that needs it.

  5. CONCEPTS
     - <Link to="/">: React Router's version of <a>. It changes the URL
       without reloading the whole site.
     - Decorative vs meaningful: the stars and spirals are decoration
       (aria-hidden inside the doodle components), so a screen reader just
       hears "Lily Valentine, link".

  NEW CONCEPTS (first time in this project)
     a) <Link> instead of <a> for pages inside the site
        A plain <a> reloads the whole site. <Link> only swaps the page. Keep
        using <a> for links that leave the site (like Instagram).

          import { Link } from "react-router";

          <Link to="/contact">Get in touch</Link>

        Docs: https://reactrouter.com/api/components/Link

  6. STYLING
     - Name row: a centered flex row. Look up: `flex`, `items-center`,
       `justify-center`, `gap-3`, `md:gap-6`.
     - Name: display font, white, big, growing on larger screens. Look up:
       `font-display`, `text-white`, `text-4xl`, `sm:text-5xl`,
       `md:text-7xl`, `uppercase`.
     - Stars: size with `size-10` / `md:size-20` and color with `text-white`
       (doodles draw in `currentColor`).
     - Spirals: put `relative` on <header>, then `absolute` plus
       `top-*` / `left-*` / `right-*` on each spiral. Hide some on phones with
       `hidden md:block` so the small screen isn't crowded.

  7. BUILD STEPS
     1. Render <header> with the name as a <Link to="/">.
     2. Put a <Star /> on each side in a flex row.
     3. Add <Nav /> under the row.
     4. Add the spirals with absolute positioning, checking at phone width.
     5. Tune sizes at 375px, 768px and 1280px wide.

  8. YOUR TURN
     Lay out the name row yourself, comparing against
     docs/homepage-sketch.jpg. Get the phone layout right first, then add
     the `md:` sizes.

  9. DONE WHEN
     - At 375px wide, the name and stars fit (or wrap neatly) with no
       sideways scroll.
     - On desktop it looks like the top third of the sketch.
     - Clicking the name from any page goes home.
*/
