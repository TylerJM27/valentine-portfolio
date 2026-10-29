/*
  MenuIcon — hamburger / close icon (ROADMAP step 3.8)
  ====================================================

  1. PURPOSE
     The picture inside MobileMenu's button: three wavy lines while closed,
     an "X" while open.

  2. WHAT IT RENDERS
     One inline <svg>. Shows either the three lines or the X, depending on
     the `isOpen` prop. aria-hidden="true", focusable="false".

  3. PROPS
     - className?: string
     - isOpen?: boolean  (optional; treat a missing value as false)

  4. STATE
     None. Whether the menu is open is MobileMenu's state. This icon just
     draws what it's told.

  5. CONCEPTS
     - Conditional rendering: `{isOpen ? <X paths> : <three lines>}` inside
       the SVG.
     - Default values for optional props: give `isOpen` a default of false
       where you destructure the props.
     - Lifting state up: the open/closed state lives in the parent
       (MobileMenu), and children receive it as props. One source of truth.

  6. STYLING
     Same stroke style as the doodles. Sized about `size-7` inside the 44px
     button.

  7. BUILD STEPS
     1. Props type with both optional props.
     2. Draw three slightly wavy horizontal lines.
     3. Draw an X (two crossing lines).
     4. Choose between them with a ternary on `isOpen`.

  8. YOUR TURN
     Write the ternary and the default value yourself.

  9. DONE WHEN
     - <MenuIcon /> shows the lines and <MenuIcon isOpen /> shows the X.
*/
