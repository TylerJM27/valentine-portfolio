/*
  InstagramIcon — camera glyph for the Instagram link (ROADMAP step 3.6)
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
