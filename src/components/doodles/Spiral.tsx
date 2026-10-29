/*
  Spiral — round spiral doodle (ROADMAP step 3.2)
  ===============================================

  1. PURPOSE
     The little lime spirals scattered around the sketch (next to the name,
     beside the headshot, in the corners).

  2. WHAT IT RENDERS
     One inline <svg> with a single curling path. Decorative:
     aria-hidden="true", focusable="false".

  3. PROPS
     - className?: string  (e.g. "size-12 text-lime -rotate-12")

  4. STATE
     None.

  5. CONCEPTS
     - Same pattern as Star: props for size and color, currentColor for the
       stroke.
     - Reuse with variety: render the same Spiral several times, each with a
       different size and rotation (`rotate-12`, `-rotate-45`) so the copies
       don't look stamped.

  6. STYLING
     Same SVG attributes as Star. Rotation and placement come from the
     className the parent passes in. Look up: `rotate-*`, `-rotate-*`,
     `absolute`, `top-*`, `left-*`.

  7. BUILD STEPS
     1. Copy Star's structure (Props type, aria-hidden, currentColor).
     2. Draw a spiral path. An Archimedean spiral drawn freehand in a vector
        tool works fine; it doesn't need to be mathematically perfect.
     3. Check it at small (size-8) and large (size-24) sizes.

  8. YOUR TURN
     Do it without looking back at Star. If you get stuck, compare after.

  9. DONE WHEN
     - It looks like the sketch's spirals in lime.
     - Three spirals with different sizes and rotations look different from
       each other.
*/
