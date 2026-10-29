/*
  EmailIcon — envelope glyph for the email link (ROADMAP step 3.7)
  ================================================================

  1. PURPOSE
     The picture inside the email social link on the homepage.

  2. WHAT IT RENDERS
     One inline <svg>: an envelope (a rectangle plus a "V" for the flap).
     aria-hidden="true", focusable="false".

  3. PROPS
     - className?: string

  4. STATE
     None.

  5. CONCEPTS
     Same as InstagramIcon: the link carries the accessible name, and the
     icon is hidden.

  6. STYLING
     Same stroke style as the other icons. Usually `size-7`.

  7. BUILD STEPS
     1. Same Props and accessibility setup.
     2. Draw a rect and a polyline for the flap.

  8. YOUR TURN
     Build it entirely yourself. By now the pattern should feel familiar.

  9. DONE WHEN
     - It reads as an envelope at 28px and matches InstagramIcon's style.
*/
