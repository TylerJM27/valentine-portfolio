import type { NavItem } from "./types";

export const navItems: NavItem[] = [
    { label: "Resume", to: "/resume" },
    { label: "Performance", to: "/performance" },
    { label: "Writing", to: "/writing" },
    { label: "Directing", to: "/directing" },
    { label: "Design", to: "/design" },
];

/*
  navigation.ts — the five nav links (ROADMAP step 2.2)
  =====================================================

  1. PURPOSE
     The single list of pages in the nav, in the sketch's order. Both
     NavLinks (desktop) and MobileMenu (phones) read it, so they can never
     disagree.

  2. WHAT IT RENDERS
     Nothing. It exports an array of NavItem.

  3. PROPS
     Not a component. Exports:
     - navItems: NavItem[], in this order:
         Resume       "/resume"
         Performance  "/performance"
         Writing      "/writing"
         Directing    "/directing"
         Design       "/design"
       (Home isn't in the list; the name in the header links home.)

  4. STATE
     None.

  5. CONCEPTS
     - Single source of truth: when two components need the same list, keep
       it in one place and have both import it.
     - Annotating an array: writing the NavItem[] type on the variable makes
       TypeScript check every entry.

  6. STYLING
     None.

  7. BUILD STEPS
     1. `import type { NavItem }` from "./types".
     2. Export the typed array with the five entries.

  8. YOUR TURN
     Write it. Then misspell one `to` (e.g. "/desing") once routing works,
     and see that it leads to NotFoundPage. TypeScript can't catch that kind
     of mistake, so it's good to know what it looks like.

  9. DONE WHEN
     - Both navs show the same five pages in the same order.
*/
