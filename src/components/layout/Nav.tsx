/*
  Nav — the nav row between two wavy lines (ROADMAP step 5.2)
  ===========================================================

  1. PURPOSE
     The site's main navigation landmark. It decides which version shows:
     the row of links on tablet and desktop, or the hamburger menu on phones.

  2. WHAT IT RENDERS
     <nav aria-label="Main"> containing:
       - <WavyLine /> (above)
       - <NavLinks />    shown from `md` up
       - <MobileMenu />  shown below `md`
       - <WavyLine /> (below)

  3. PROPS
     None. Both children read the page list from src/data/navigation.ts.

  4. STATE
     None.

  5. CONCEPTS
     - aria-label on <nav> names the landmark, so a screen reader announces
       "Main, navigation".
     - Responsive show/hide: both versions are always in the component, and
       CSS picks which one is visible at each screen width.

  NEW CONCEPTS (first time in this project)
     a) Naming a landmark with aria-label
        When a page has more than one landmark of a kind, aria-label tells
        them apart. A screen reader would announce this one as "Footer,
        navigation".

          <nav aria-label="Footer">...</nav>

        Docs: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label

  6. STYLING
     Look up: `hidden md:block` (NavLinks wrapper, and the wavy lines if you
     hide them on phones) and `md:hidden` (MobileMenu wrapper). Give the wavy
     lines `w-full` and `text-white`. `relative` on <nav> gives the mobile
     dropdown something to position against.

  7. BUILD STEPS
     1. Render <nav aria-label="Main"> with WavyLine, NavLinks, WavyLine.
     2. After step 6, add <MobileMenu /> with the show/hide classes.
     3. Decide whether the wavy lines also show on phones.

  8. YOUR TURN
     Write it, then drag the browser width across 768px to watch the swap.

  9. DONE WHEN
     - Wide screens: wavy line, five links, wavy line.
     - Narrow screens: only the hamburger (once step 6 is done).
     - Never both at once, and never neither.
*/
