type Props = { className?: string };

export function Exclamation({ className }: Props) {
    return (
        <svg
            viewBox="0 0 24 28"
            fill="currentColor"
            stroke="currentColor"
            aria-hidden="true"
            focusable="false"
            strokeWidth={1}
            className={className}
            strokeLinejoin="round"
        >
            <path d="M4.5 5L20.5 2L15 21C13.3333 20.6667 10 20.2 10 21C10 21.8 6.33333 10.6667 4.5 5Z" />
            <path d="M12.7479 23.0692C12.6915 23.0118 12.1828 22.9654 11.8617 23.0687C11.5525 23.1683 11.307 23.7257 11.1881 23.9399C11.075 24.1435 11.0504 24.3953 11.0171 24.758C10.947 25.5223 11.1067 25.7803 11.2393 25.9713C11.3716 26.1618 11.5426 26.3232 11.8976 26.5251C12.1963 26.6949 12.481 26.8079 12.846 26.9007C13.1681 26.9826 13.5144 27.0046 14.1209 26.9992C14.4132 26.9967 14.5398 26.648 14.6585 26.4517C14.8067 26.2064 14.9097 25.9673 14.9671 25.7362C15.0495 25.4038 14.9581 24.8829 14.901 24.6282C14.8452 24.3789 14.7117 24.1897 14.593 24.0048C14.4628 23.8018 14.2661 23.6932 14.0576 23.5545C13.8413 23.4107 13.6498 23.2777 13.4599 23.1792C13.2606 23.1156 13.0993 23.0464 12.9624 23.0118C12.8725 23 12.7411 23 12.6056 23" />
        </svg>
    );
}

/*
  Exclamation — the big lime exclamation mark (ROADMAP step 3.8)
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
     Build it, then place it on the homepage later in step 7.

  9. DONE WHEN
     - A tall lime "!" that scales by height without stretching.
*/
