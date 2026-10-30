type Props = { className?: string };

export function WavyLine({ className }: Props) {
    return (
        <svg
            viewBox="0 0 400 12"
            fill="none"
            className={className}
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="none"
        >
            <path
                d="M1 6C9.5 3 28.9 -1.2 38.5 6C48.1 13.2 63.8333 8.33333 70.5 5C76.6667 2.66666 90.6 -0.600003 97 5C105 12 127 11 128 7.5C129 4 151.5 -1.5 159.5 2.5C167.5 6.5 173 15 198 7.5C223 0 225 0.5 229 4C233 7.5 234.5 14.5 256.5 7.5C278.5 0.5 278 2 284.5 5.5C291 9 315 13.5 322.5 6.5C330 -0.5 356.5 0.5 358 6.5C359.5 12.5 399 10.5 399 5.5"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}

/*
  WavyLine — hand-drawn line above and below the nav (ROADMAP step 3.2)
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

  NEW CONCEPTS (first time in this project)
     a) Curves in SVG paths
        Q draws a curve: a control point that pulls the line toward it, then
        the end point. T continues with a matching curve, mirroring the last
        control point, so a chain of T's makes an even wave.

          <path d="M0 10 Q 10 0 20 10" />          one hump
          <path d="M0 10 Q 10 0 20 10 T 40 10" />  a hump, then a dip

        Docs: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#curve_commands

     b) Stretching an SVG without fattening its lines
        Here a square drawing is stretched into a wide, short box. The square
        becomes a long rectangle, and its outline stays the same thickness.

          <svg viewBox="0 0 10 10" preserveAspectRatio="none" className="h-4 w-full">
            <rect width="10" height="10" fill="none" stroke="currentColor"
                  vectorEffect="non-scaling-stroke" />
          </svg>

        Docs: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
              https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect

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
