type Props = { className?: string };

export function Spiral({ className }: Props) {
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
            strokeLinecap="round"
        >
            <path d="M16.507 1.24117C16.399 1.12448 15.9022 0.889763 14.6049 0.581725C13.6619 0.357826 12.3859 0.637871 11.2185 0.894385C10.0976 1.14067 9.40516 1.46048 8.20291 2.02304C6.79133 2.68356 5.92996 3.26642 5.79022 3.35427C5.19598 3.72788 4.26527 4.49724 3.90541 4.87287C3.25243 5.55447 2.51926 6.42164 2.12201 6.86135C1.72248 7.30358 1.27424 8.07654 1.02281 8.6085C0.781588 9.11886 0.571348 9.94105 0.515968 10.3997C0.442214 11.0105 0.631171 12.4494 0.912279 13.2975C1.09817 13.8584 1.42566 14.6257 1.70607 15.1321C2.36736 16.3264 2.90529 16.6822 3.72922 17.363C4.48249 17.9854 5.03919 18.1504 5.71545 18.4725C6.42562 18.8108 7.03383 19.0315 7.36004 19.1412C7.72958 19.2654 8.6789 19.6313 10.1557 20.0492C11.4493 20.4153 12.2219 20.4262 12.6245 20.4702C14.004 20.6211 15.1274 20.1646 16.0375 19.8695C16.7158 19.6497 17.4716 19.0919 18.2483 18.7545C19.0155 18.4214 19.3251 17.9038 19.5905 17.5653C19.8813 17.1946 20.0887 16.8169 20.478 16.0626C20.7516 15.5325 20.915 14.867 21.0321 14.4242C21.1632 13.9283 21.3356 13.3979 21.3828 12.9419C21.4319 12.4679 21.4917 12.0328 21.4999 10.2905C21.5043 9.35792 21.1982 8.45613 20.7848 7.5045C20.4672 6.77321 19.9822 6.57049 19.3681 6.09445C18.9212 5.74804 18.4091 5.57262 18.0817 5.38854C17.711 5.18013 17.0874 4.98605 15.5622 4.64036C15.0381 4.52156 14.5937 4.54392 14.0948 4.50737C13.0995 4.43445 12.5373 4.61702 12.0924 4.71963C11.39 4.88162 10.9166 4.96931 10.4723 5.09372C9.75225 5.29538 9.31169 5.57086 8.94529 5.7906C8.37452 6.1329 7.86384 6.65504 7.41846 7.14781C7.1455 7.44981 6.68052 8.20777 6.3431 8.74788C5.99077 9.31184 5.86827 9.78164 5.52547 10.7714C5.41818 11.0811 5.43083 11.4986 5.46168 12.0046C5.491 12.4857 5.92809 12.6458 6.2085 12.8587C6.66128 13.2025 7.69934 13.5248 8.885 13.9372C9.63985 14.1997 10.009 14.202 10.5457 14.2831C11 14.3516 11.797 14.3641 12.7535 14.335C14.0308 14.2962 14.9124 13.8083 15.4774 13.4845C15.9209 13.2303 16.4565 12.3446 16.81 11.5114C16.9022 11.2942 16.8809 10.9609 16.8115 10.4924C16.6757 9.57617 15.963 9.38883 15.2793 9.02971C14.7329 8.74274 14.2815 8.75735 13.8681 8.69085C13.3836 8.61292 13.0346 8.75647 12.327 9.01254C11.873 9.17685 11.5858 9.40204 11.2351 9.62178C11.1488 9.69532 11.0717 9.78252 11.0012 9.84923C10.9306 9.91595 10.8689 9.95954 10.7586 10.0925" />
        </svg>
    );
}

/*
  Spiral — round spiral doodle (ROADMAP step 3.6)
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

  NEW CONCEPTS (first time in this project)
     a) Transform utilities and negative values in Tailwind
        `rotate-12` turns an element 12 degrees clockwise. A leading minus
        flips the direction: `-rotate-12`. The same minus works for position
        and spacing, like `-top-4` or `-ml-2`. Transforms can be combined.

          <div className="-rotate-6 scale-110">A tilted sticker</div>

        Docs: https://tailwindcss.com/docs/rotate

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
