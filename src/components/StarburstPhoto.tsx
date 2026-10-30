/*
  StarburstPhoto — headshot in a starburst frame, slow crossfade (ROADMAP step 7.4)
  =================================================================================

  1. PURPOSE
     The homepage's main picture: Lily's headshot clipped into a starburst
     shape with a white hand-drawn outline, slowly fading between a silly
     photo and a serious photo.

  2. WHAT IT RENDERS
     A square wrapper containing:
       - The silly and serious <img>s stacked on top of each other, both
         clipped to the starburst shape. The top one fades in and out.
       - An SVG starburst outline drawn over them (decorative, aria-hidden).

  3. PROPS
     - silly: ImageAsset
     - serious: ImageAsset
     - intervalMs?: number  (optional; time between swaps, default ~6000)

  4. STATE
     - showSerious: boolean (useState). Which photo is on top.
     - reduceMotion from usePrefersReducedMotion()

  5. CONCEPTS
     - Crossfade by stacking: put both images in the same spot (absolute
       positioning) and change only the top one's opacity with a slow CSS
       transition. Both are already loaded, so nothing flashes.
     - Flash safety: CLAUDE.md says nothing may flash more than 3 times per
       second. A ~2 second fade every ~6 seconds is far below that.
     - setInterval inside useEffect, with cleanup: start a timer that flips
       `showSerious`, and return a function that calls clearInterval.
       Without the cleanup, leaving and returning to the homepage would stack
       up timers that flip faster and faster.
     - Reduced motion: if reduceMotion is true, don't start the timer at all,
       and show only one photo.
     - clip-path: CSS that cuts an element to a shape. A
       `polygon(x y, x y, ...)` with alternating far and near points around
       the center makes a starburst. Use the same points for the SVG outline
       so they line up.
     - Alt text with stacked images: the visible photo should carry the alt.
       Simplest approach: give the bottom image the real alt, and give the
       top (fading) image alt="" so screen readers don't read two photos.

  NEW CONCEPTS (first time in this project)
     a) setInterval in an effect, and the updater form of a setter
        setInterval runs a function every N milliseconds and returns an id;
        clearInterval(id) stops it. Inside a timer, pass the setter a
        function: it receives the latest value, so it's never stale.

          const [seconds, setSeconds] = useState(0);

          useEffect(() => {
            const id = setInterval(() => setSeconds((s) => s + 1), 1000);
            return () => clearInterval(id);
          }, []);

        Docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
              https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state

     b) clip-path: polygon()
        Cuts an element to a shape made of points, given as "x y" pairs in
        percentages of its box. A triangle:

          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);

        Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

     c) Arbitrary values and properties in Tailwind
        Square brackets accept any value Tailwind doesn't have a class for.
        `[property:value]` sets any CSS property. Use _ where the CSS would
        have a space.

          <div className="w-[37px] [clip-path:polygon(50%_0%,100%_100%,0%_100%)]" />
          <div className="transition-opacity duration-[2500ms]" />

        Docs: https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values
              https://tailwindcss.com/docs/transition-duration

  6. STYLING
     - Wrapper: `relative`, `aspect-square`, `w-full`, `max-w-md`.
     - Images: `absolute`, `inset-0`, `size-full`, `object-cover`, plus the
       clip-path as an arbitrary value (look up "Tailwind arbitrary
       properties", e.g. `[clip-path:polygon(...)]`).
     - Fade: `transition-opacity`, a long duration (look up `duration-*` and
       arbitrary durations), `opacity-0` / `opacity-100` chosen by state,
       `motion-reduce:transition-none`.
     - Outline SVG: `absolute`, `inset-0`, `text-white`, `pointer-events-none`.

  7. BUILD STEPS
     1. Render one image clipped to a starburst. Get the shape right first.
     2. Draw the matching SVG outline on top.
     3. Stack the second image and toggle its opacity with a temporary
        button.
     4. Replace the button with a setInterval in useEffect (with cleanup).
     5. Skip the timer when reduceMotion is true.
     6. Check the alt text approach in the accessibility tree.

  8. YOUR TURN
     Steps 1–3 yourself. Before step 4, explain back to me why the cleanup
     function is needed. That's the key idea of this component.

  9. DONE WHEN
     - The photos fade slowly and smoothly, with no flash or blank moment.
     - With reduced motion emulated, one photo stays still.
     - Leaving and returning to home several times doesn't speed up the swap.
     - A screen reader announces one photo with its alt text.
*/
