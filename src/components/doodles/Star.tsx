type Props = { className?: string };

export function Star({ className }: Props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            focusable="false"
            strokeWidth={1.5}
            className={className}
            strokeLinejoin="round"
        >
            <path d="M1 9.53846H7.97561L12.2683 2L15.4878 9.53846H23L16.0244 16.5385L21.9268 22.4615L11.1951 19.7692L2.07317 23L7.43902 15.4615L1 9.53846Z" />
        </svg>
    );
}

/*
  Star — hand-drawn star doodle (ROADMAP step 3.1)
  ================================================

  1. PURPOSE
     The white stars on either side of the name in the header. This is the
     first doodle, and it sets the pattern the other doodles and icons copy.

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

  NEW CONCEPTS (first time in this project)
     a) A typed function component
        A component is a function that returns JSX. Its props arrive as one
        object, which you usually destructure right in the parameter list.

          type Props = { label: string; className?: string };

          export function Badge({ label, className }: Props) {
            return <span className={className}>{label}</span>;
          }

          // used as: <Badge label="New!" className="text-sm" />

        Docs: https://react.dev/learn/passing-props-to-a-component

     b) Inline SVG in JSX
        SVG can be written straight into JSX. Dashed attribute names become
        camelCase (stroke-width becomes strokeWidth). A <path> draws with
        letter commands: M = move to, L = line to, Z = close the shape. This
        one draws a triangle:

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 20 L12 4 L20 20 Z" />
          </svg>

        Docs: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
              https://react.dev/learn/writing-markup-with-jsx

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
     Make the whole thing yourself, then render it temporarily in App.tsx
     (HomePage isn't wired up until step 4) at two sizes and two colors to
     prove className works.

  9. DONE WHEN
     - `<Star className="size-20 text-white" />` shows a big white star.
     - Changing to `text-lime` turns it lime with no other changes.
     - A screen reader (or the DevTools accessibility tree) skips it.
*/
