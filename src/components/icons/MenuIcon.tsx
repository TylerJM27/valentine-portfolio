type Props = { className?: string; isOpen?: boolean };

export function MenuIcon({ className, isOpen = false }: Props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
            focusable="false"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {isOpen ? (
                <path d="M19 5L5 19M5.00001 5L19 19"></path>
            ) : (
                <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path>
            )}
        </svg>
    );
}
/*
  MenuIcon — hamburger / close icon (ROADMAP step 3.3)
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

  NEW CONCEPTS (first time in this project)
     a) The ternary operator in JSX
        `condition ? A : B` picks one of two things to render. Wrap it in {}
        inside JSX.

          {isLoggedIn ? <p>Welcome back!</p> : <button>Sign in</button>}

        Docs: https://react.dev/learn/conditional-rendering

     b) Default values while destructuring
        `= value` after a destructured name is used when the prop is missing.

          function Avatar({ size = 48 }: { size?: number }) {
            return <img src="/me.png" alt="" width={size} height={size} />;
          }

          // <Avatar /> is 48px; <Avatar size={96} /> is 96px

        Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value

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
