/*
  Exclamation — the big lime exclamation mark (ROADMAP step 3.4)
  ==============================================================

  1. PURPOSE
     The tall lime "!" on the right side of the homepage sketch.

  2. WHAT IT RENDERS
     One inline <svg>: a tapered bar and a dot, both filled solid.
     Decorative: aria-hidden="true", focusable="false".

  3. PROPS
     - className?: string  (e.g. "h-64 w-auto text-lime")

  4. STATE
     None.

  5. CONCEPTS
     - fill vs stroke: the other doodles are outlines (stroke). This one is
       solid, so it uses fill="currentColor" and no stroke.
     - Aspect ratio: it's tall and thin. Set only the height with `h-*` plus
       `w-auto`, and the viewBox keeps the proportions right.

  6. STYLING
     SVG: viewBox, fill="currentColor". Size from className.

  7. BUILD STEPS
     1. Same Props and accessibility setup as Star.
     2. Draw a slightly wonky trapezoid (the bar) and a circle or blob (the
        dot).
     3. Use fill="currentColor".

  8. YOUR TURN
     Build it, then place it on the homepage later in step 10.

  9. DONE WHEN
     - A tall lime "!" that scales by height without stretching.
*/
