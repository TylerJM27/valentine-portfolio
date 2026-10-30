/*
  Layout — the frame every page sits in (ROADMAP step 4.2)
  ========================================================

  1. PURPOSE
     Wraps every page with the shared pieces: skip link, header (name + nav),
     and the <main> area where the current page appears.

  2. WHAT IT RENDERS
     - <SkipLink />
     - <Header />
     - <main id="content"> containing <Outlet /> (the current page goes here)
     - <ScrollRestoration /> from react-router: starts each new page at the
       top, and puts you back where you were when you press Back.

  3. PROPS
     None. React Router renders it as the parent route's element.

  4. STATE
     None.

  5. CONCEPTS
     - <Outlet />: a placeholder that React Router fills with whichever child
       route matches the URL. Without it, the pages would never appear.
     - Landmarks: <header>, <nav> and <main> let screen-reader users jump
       straight to a region. Only one <main> per page.
     - Skip target: SkipLink points at "#content". Adding tabIndex={-1} to
       <main> makes sure focus actually moves there in every browser.

  NEW CONCEPTS (first time in this project)
     a) <Outlet /> and fragments
        <Outlet /> marks where the matched child route appears. `<>...</>` is
        a fragment: it groups elements without adding an extra <div>.

          import { Outlet } from "react-router";

          function BakeryShell() {
            return (
              <>
                <p>Open daily 7am to 3pm</p>
                <Outlet />
              </>
            );
          }

        Docs: https://reactrouter.com/api/components/Outlet
              https://reactrouter.com/api/components/ScrollRestoration
              https://react.dev/reference/react/Fragment

     b) Responsive prefixes in Tailwind
        Classes without a prefix apply at every width (mobile first).
        `sm:`, `md:` and `lg:` versions take over from that width up.

          <p className="text-base md:text-xl lg:text-3xl">Grows on bigger screens</p>

        Docs: https://tailwindcss.com/docs/responsive-design

  6. STYLING
     - Outer wrapper fills the screen in hot pink, with plum body text and the
       body font. Look up: `min-h-svh` plus your theme utilities from ROADMAP
       step 1 (e.g. `bg-pink`, `text-plum`, `font-body`).
     - Center the content and cap its width so lines don't get too long on big
       screens. Look up: `mx-auto`, `max-w-6xl`, `px-4`, `sm:px-6`.
     - `overflow-x-clip` on the wrapper stops absolutely placed doodles from
       causing a sideways scrollbar on phones.

  7. BUILD STEPS
     1. Create the component and return a wrapper <div>.
     2. Add <Header /> and <main id="content"> with <Outlet /> inside.
     3. Add <ScrollRestoration /> (it renders nothing visible).
     4. Add <SkipLink /> as the very first child.
     5. Apply the wrapper and <main> styling.

  8. YOUR TURN
     Build it with plain text in place of <Header /> at first (e.g. "HEADER
     GOES HERE"), click between pages, and watch only the <Outlet /> part
     change.

  9. DONE WHEN
     - Every route shows the same frame with a different middle.
     - If you scroll down one page and click a link, the next page starts at
       the top.
     - The background is pink edge to edge on phone and desktop.
*/
