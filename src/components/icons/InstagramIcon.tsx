type Props = { className?: string };

export function InstagramIcon({ className }: Props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            aria-hidden="true"
            focusable="false"
            strokeWidth={0}
            className={className}
            strokeLinejoin="round"
            strokeLinecap="round"
        >
            <path d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"></path>{" "}
        </svg>
    );
}

/*
  InstagramIcon — camera glyph for the Instagram link (ROADMAP step 3.4)
  ======================================================================

  1. PURPOSE
     The picture inside the Instagram social link on the homepage.

  2. WHAT IT RENDERS
     One inline <svg>: a rounded square, a circle (lens) and a small dot.
     Drawn in the same hand-drawn stroke style as the doodles so it fits the
     page. aria-hidden="true", focusable="false".

  3. PROPS
     - className?: string

  4. STATE
     None.

  5. CONCEPTS
     - Who carries the name: the SVG is hidden from screen readers, and the
       <a> around it (SocialIconLink) has aria-label="Lily on Instagram". If
       both had a name, screen readers might read it twice.

  NEW CONCEPTS (first time in this project)
     a) SVG basic shapes
        Instead of a <path>, simple shapes have their own elements. EmailIcon
        uses <polyline> too. This draws a traffic light and a check mark:

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="8" y="2" width="8" height="20" rx="2" />  rx rounds the corners
            <circle cx="12" cy="7" r="2" />                    center x, center y, radius
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="17" r="2" />
          </svg>

          <polyline points="4,12 9,17 20,6" />                 straight lines joining the points

        Docs: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

  6. STYLING
     Same as the doodles: viewBox, stroke="currentColor", round caps.
     Usually sized `size-7` inside a 44px link.

  7. BUILD STEPS
     1. Same Props and accessibility setup as Star.
     2. Draw the three shapes (rect with rx, circle, small circle).
     3. Check that it still reads as "Instagram" at 28px.

  8. YOUR TURN
     Build it from the three basic shapes. Use <rect> and <circle> instead of
     <path> this time.

  9. DONE WHEN
     - At 28px it's recognisably the Instagram camera.
     - It recolors with className.
*/
