/*
  MobileMenu — hamburger button + dropdown (ROADMAP step 6)
  =========================================================

  1. PURPOSE
     Phones don't have room for five links in a row, so a hamburger button
     opens a dropdown with the same five pages. This is the first component
     with state, and the one with the most accessibility rules to get right.

  2. WHAT IT RENDERS
     - A real <button type="button"> showing <MenuIcon />, with:
         aria-label     "Menu" (an icon-only button needs a name)
         aria-expanded  true/false (tells screen readers if it's open)
         aria-controls  the id of the dropdown list
     - The dropdown: a <ul id={...}> of the same NavLinks, rendered only
       while open.

  3. PROPS
     None. It reads src/data/navigation.ts like NavLinks does.

  4. STATE
     - `isOpen: boolean` (useState, starts false)
     - a ref to the button, used to return focus there after Escape (useRef)
     - a stable id for aria-controls (useId)

  5. CONCEPTS
     - useState: a value React remembers between renders. Calling its setter
       re-renders the component. Needed because "open or closed" changes over
       time.
     - useEffect with cleanup: runs code after render, here adding a keydown
       listener while the menu is open. The function it returns removes the
       listener. Without that, every open would add one more listener.
     - useRef: a box that holds a value (the button element) without causing
       re-renders. Used to call .focus() on the button.
     - useId: makes a unique id string for aria-controls, so ids never clash.
     - Closing after a page is chosen: give each link an onClick that closes
       the menu. That's simpler than watching the URL, and it avoids calling
       setState directly inside an effect, which this project's React lint
       rules warn about.

  6. STYLING
     - Button: at least 44×44px. Look up: `size-11`, `inline-flex`,
       `items-center`, `justify-center`, and a visible focus outline.
     - Dropdown: sits under the header, on top of the page. Look up:
       `absolute`, `inset-x-0`, `top-full`, `z-40`, `bg-pink` (or a darker
       pink; check the contrast), `py-4`, `flex`, `flex-col`, `gap-2`.
     - Links inside: big tap areas. Look up: `block`, `py-3`, `px-4`,
       `text-2xl`, `font-display`, `text-white`.
     - Nav hides this whole component from `md` up with `md:hidden`.

  7. BUILD STEPS
     1. Add the `isOpen` state and a button that toggles it.
     2. Add aria-label, aria-expanded and aria-controls to the button.
     3. Render the dropdown list only while `isOpen` is true.
     4. Close it when a link is clicked (onClick on each NavLink).
     5. Add a useEffect that, while the menu is open, listens for Escape,
        closes the menu, and moves focus back to the button. Clean up the
        listener.
     6. Show an "X" icon while open (MenuIcon's `isOpen` prop).
     7. Optional: close it when the user clicks outside the menu.

  8. YOUR TURN
     Do steps 1–4 yourself, then try step 5. The Escape effect is the
     interesting part, so ask me for a hint before you look it up.

  9. DONE WHEN
     Test in a narrow window using only the keyboard:
     - Tab to the button. Enter opens the menu; Enter again closes it.
     - aria-expanded switches between "true" and "false" (check DevTools).
     - With the menu open, Escape closes it and focus returns to the button.
     - Choosing a page navigates there and closes the menu.
     - On a real phone, the button is easy to tap.
*/
