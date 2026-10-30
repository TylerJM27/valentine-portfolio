/*
  useScrollProgress — how far through an element you've scrolled (ROADMAP step 13.1)
  ==================================================================================

  1. PURPOSE
     Powers the flipbook. Given a tall element (the scroll track), it returns
     a number from 0 (track top just reached the top of the screen) to 1
     (track bottom just reached the bottom of the screen).

  2. WHAT IT RENDERS
     Nothing. It returns a number between 0 and 1.

  3. PROPS
     Takes one argument:
     - ref: a React ref object pointing at the track element
       (RefObject<HTMLElement | null>)

  4. STATE
     - progress: number (useState)

  5. CONCEPTS
     - getBoundingClientRect(): where an element currently is relative to the
       screen. As you scroll down, its `top` goes negative.
     - The math: progress = -rect.top / (rect.height - window.innerHeight),
       clamped between 0 and 1.
     - Passive scroll listeners: `{ passive: true }` tells the browser the
       listener won't block scrolling, so scrolling stays smooth.
     - requestAnimationFrame: scroll events can fire many times per frame.
       Doing the work at most once per frame (and skipping if one is already
       scheduled) avoids wasted work.
     - Cleanup: remove the scroll and resize listeners, and cancel any pending
       frame, when the component unmounts.

  NEW CONCEPTS (first time in this project)
     a) getBoundingClientRect()
        Returns an element's size and its position relative to the visible
        screen, measured right now.

          const box = card.getBoundingClientRect();
          console.log(box.top, box.height);

        Docs: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

     b) requestAnimationFrame, with a "one at a time" guard
        Schedules work just before the next screen paint and returns an id
        for cancelAnimationFrame. This handler does the work at most once per
        frame, however often the mouse moves:

          let frame = 0;

          function onMouseMove() {
            if (frame) return;
            frame = requestAnimationFrame(() => {
              frame = 0;
              drawCursorTrail();
            });
          }

          // cleanup: cancelAnimationFrame(frame);

        Docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame

     c) Passive listeners
          window.addEventListener("touchmove", onTouch, { passive: true });

        Docs: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive

     d) A hook that takes a ref
        RefObject<T> is the type of what useRef returns, so a hook can accept
        one as an argument.

          import type { RefObject } from "react";

          function useIsHovered(ref: RefObject<HTMLElement | null>) { ... }

        Docs: https://react.dev/reference/react/useRef

  6. STYLING
     None.

  7. BUILD STEPS
     1. Set up state for progress.
     2. In a useEffect: write an update() that measures and sets progress.
     3. Add scroll and resize listeners that schedule update() with
        requestAnimationFrame.
     4. Call update() once at the start so it's right on load.
     5. Return a cleanup function that removes everything.
     6. Return progress.

  8. YOUR TURN
     Write the math first and log progress while scrolling. Get the numbers
     right before building any of the flipbook UI.

  9. DONE WHEN
     - The logged value is 0 before the track, rises smoothly to 1, and stays
       at 1 after it.
     - No listeners pile up after leaving and returning to /writing (check by
       logging inside the listener).
*/
