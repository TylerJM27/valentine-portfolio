import { NavLink } from "react-router";
import { navItems } from "../../data/navigation";

type Props = { className?: string };
const NavLinkStyles =
    "font-display text-white text-2xl lg:text-3xl inline-block focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 hover:-rotate-2 transition-transform motion-reduce:transition-none";

export function NavLinks({ className }: Props) {
    return (
        <ul className={className}>
            {navItems.map((item) => (
                <li key={item.to}>
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                            isActive
                                ? `font-bold underline decoration-lime decoration-wavy underline-offset-5 ${NavLinkStyles}`
                                : `font-normal ${NavLinkStyles}`
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

/*
  NavLinks — the row of five page links (ROADMAP step 5.3)
  ========================================================

  1. PURPOSE
     The desktop and tablet nav: Resume, Performance, Writing, Directing,
     Design, in the sketch's order, with the current page marked.

  2. WHAT IT RENDERS
     A <ul> with one <li> per item in src/data/navigation.ts. Each <li> holds
     a <NavLink>.

  3. PROPS
     None (it imports the nav list directly).
     Optional later: `className?: string` if Nav needs to adjust spacing.

  4. STATE
     None. NavLink works out by itself whether its URL is the current page.

  5. CONCEPTS
     - .map() with `key`: turns an array of data into an array of elements.
       React needs a stable `key` (use the item's `to`) to tell items apart
       between renders.
     - NavLink: like Link, but it sets aria-current="page" on the active link
       automatically. Its `className` can be a function that receives
       `{ isActive }`, so the current page can look different.
     - Don't mark the current page with color alone. Add an underline or a
       doodle as well.

  NEW CONCEPTS (first time in this project)
     a) .map() in JSX, with key
        .map() calls a function for each item and returns a new array. In
        JSX, an array of elements renders as a list.

          const fruits = ["apple", "pear", "plum"];

          <ul>
            {fruits.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>

        Docs: https://react.dev/learn/rendering-lists

     b) A function as className
        NavLink accepts a function instead of a string. It's called with
        `{ isActive }` and returns the classes to use.

          <NavLink
            to="/inbox"
            className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
          >
            Inbox
          </NavLink>

        Docs: https://reactrouter.com/api/components/NavLink

     c) Transitions, and switching them off for reduced motion
        `transition-*` animates a change, such as one caused by hover.
        `motion-reduce:` applies only when the visitor asked for less motion.

          <button className="transition-transform hover:scale-105 motion-reduce:transition-none">
            Grow
          </button>

        Docs: https://tailwindcss.com/docs/transition-property
              https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion

  6. STYLING
     - Spread the row across the width like the sketch. Look up: `flex`,
       `justify-between`, `items-baseline`, `gap-4`.
     - Links: `font-display`, `text-white`, `text-2xl`, `lg:text-3xl`.
     - Active link: a lime underline. Look up: `underline`, `decoration-lime`,
       `decoration-wavy`, `underline-offset-8`.
     - Focus: a clear outline. Look up: `focus-visible:outline-2`,
       `focus-visible:outline-white`, `focus-visible:outline-offset-4`.
     - Hover: something playful that doesn't flash, like a small rotate. Look
       up: `hover:-rotate-2`, `transition-transform`,
       `motion-reduce:transition-none`.

  7. BUILD STEPS
     1. Import the nav list and map it to <li><NavLink /></li>.
     2. Add the row layout.
     3. Pass a function to NavLink's className to style the active link.
     4. Add the focus-visible and hover styles.

  8. YOUR TURN
     Write the map and the active-state function yourself. Then inspect the
     active link in DevTools and find the aria-current="page" that NavLink
     added.

  9. DONE WHEN
     - All five links work, in sketch order.
     - The current page is marked both visually and with aria-current.
     - Tabbing through the links shows a clear focus ring on each.
*/
