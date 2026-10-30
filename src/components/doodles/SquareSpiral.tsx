type Props = { className?: string };

export function SquareSpiral({ className }: Props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            focusable="false"
            strokeWidth={1}
            className={className}
            strokeLinejoin="round"
        >
            <path d="M18.5 0.500061L0.5 3.00006L1 20.5001L21 19.5001L15.5 2.50006L1.5 8.00006L5.5 19.0001L19 16.0001L9.5 7.50006L6 12.0001L9.5 15.5001L11 12.0001" />
        </svg>
    );
}
/*
  SquareSpiral — orange squared-off spiral (ROADMAP step 3.7)
  ===========================================================

  1. PURPOSE
     The orange spiral-in-a-square shapes near the bottom of the sketch.

  2. WHAT IT RENDERS
     One inline <svg> with a squared, tilted spiral (nested squares joined
     into one line). Decorative: aria-hidden="true", focusable="false".

  3. PROPS
     - className?: string  (e.g. "size-16 text-orange rotate-12")

  4. STATE
     None.

  5. CONCEPTS
     - Straight-line paths: this one is mostly straight segments, so it's a
       good place to practise reading path commands (M = move, L = line to).

  6. STYLING
     Same SVG attributes as Star. The sketch draws it slightly rotated, which
     you can do with the className (`rotate-12`) instead of in the path.

  7. BUILD STEPS
     1. Same Props and accessibility setup as Star.
     2. Draw the squared spiral as one path.
     3. Try it in orange at a couple of rotations.

  8. YOUR TURN
     Write the path yourself, with M and L commands only, on a small grid
     (e.g. viewBox "0 0 24 24"). Then adjust it to look hand-drawn.

  9. DONE WHEN
     - It looks like the sketch's orange squares.
     - It recolors with className like the other doodles.
*/
