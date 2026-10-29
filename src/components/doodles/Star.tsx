/*
  Star — hand-drawn star doodle (ROADMAP step 3.1)
  ================================================

  1. PURPOSE
     The white stars on either side of the name in the header. This is the
     first doodle, and it sets the pattern the other four copy.

  2. WHAT IT RENDERS
     One inline <svg> with a single wobbly five-point star outline.
     Decorative only: aria-hidden="true" and focusable="false".

  3. PROPS
     - className?: string  (optional; size and color come from the parent,
       e.g. "size-16 text-white")

  4. STATE
     None. A pure component: same props in, same picture out.

  5. CONCEPTS
     - Props: the inputs a component receives, like a function's arguments.
       Typing them in a `Props` type means TypeScript catches typos such as
       `classname`.
     - Optional prop (`?`): the parent may leave it out.
     - currentColor: if the SVG uses stroke="currentColor", it draws in the
       CSS text color. Then `text-white` or `text-lime` on the component
       recolors it, so one Star works in any color.
     - viewBox: the SVG's own coordinate system. With a viewBox, the drawing
       scales cleanly to whatever size CSS gives it.

  6. STYLING
     No Tailwind inside the SVG except the passed-in className on <svg>.
     SVG attributes to look up: viewBox, fill="none", stroke="currentColor",
     strokeWidth, strokeLinecap="round", strokeLinejoin="round".

  7. BUILD STEPS
     1. Write the `Props` type with `className?: string`.
     2. Draw the star path. Either sketch it in Figma/Inkscape and copy the
        path, or trace the star in docs/homepage-sketch.jpg. Slightly uneven
        points look more hand-drawn than a perfect star.
     3. Return the <svg> with viewBox, the path, aria-hidden and focusable.
     4. Spread className onto the <svg>.

  8. YOUR TURN
     Make the whole thing yourself, then render it temporarily on HomePage at
     two sizes and two colors to prove className works.

  9. DONE WHEN
     - `<Star className="size-20 text-white" />` shows a big white star.
     - Changing to `text-lime` turns it lime with no other changes.
     - A screen reader (or the DevTools accessibility tree) skips it.
*/
