/*
  WavyLine — hand-drawn line above and below the nav (ROADMAP step 3.5)
  =====================================================================

  1. PURPOSE
     The long, slightly wobbly white lines that frame the nav row in the
     sketch. They stretch across the full width of the header.

  2. WHAT IT RENDERS
     One inline <svg> with a long, gently wavy path. Decorative:
     aria-hidden="true", focusable="false".

  3. PROPS
     - className?: string  (e.g. "w-full h-3 text-white")

  4. STATE
     None.

  5. CONCEPTS
     - Stretching an SVG: preserveAspectRatio="none" lets the drawing stretch
       to any width instead of keeping its proportions. Exactly what a
       full-width line needs.
     - vector-effect="non-scaling-stroke" (vectorEffect in JSX): keeps the
       line thickness the same when the SVG is stretched. Without it, the line
       gets fatter or thinner as the screen width changes.

  6. STYLING
     Look up: `w-full`, `h-2` / `h-3`. In the SVG: a wide viewBox (e.g.
     "0 0 400 10"), preserveAspectRatio="none", stroke="currentColor".

  7. BUILD STEPS
     1. Same Props and accessibility setup as Star.
     2. Draw a long path with a few gentle waves (a few curve commands).
     3. Add preserveAspectRatio="none" and non-scaling stroke.
     4. Test at phone and desktop widths.

  8. YOUR TURN
     Build it, then remove vectorEffect for a moment and resize the window
     to see what it fixes.

  9. DONE WHEN
     - The line spans the full width at every screen size.
     - The stroke thickness looks the same on phone and desktop.
*/
