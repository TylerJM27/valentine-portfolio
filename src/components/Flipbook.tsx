/*
  Flipbook — scroll-driven writing packet viewer (ROADMAP step 13.2)
  ==================================================================

  1. PURPOSE
     Shows the 15-page writing packet one page at a time. As you scroll down
     over it, the pages flip forward. Prev/Next buttons and a PDF link give
     keyboard and screen-reader users the same access without scrolling.

  2. WHAT IT RENDERS
     - A tall "track" <div> (its height is what you scroll through) holding:
       - A sticky viewer that stays on screen while the track scrolls past:
         - the current page <img>
         - "Page 4 of 15" text, inside an aria-live="polite" region
         - Prev and Next <button>s
     - A link to the full PDF, outside the track, easy to find.

  3. PROPS
     - packet: WritingPacket

  4. STATE
     - trackRef: a ref to the track element (useRef)
     - progress from useScrollProgress(trackRef): a number from 0 to 1
     - reduceMotion from usePrefersReducedMotion()
     - The current page is calculated, not stored:
       Math.min(pages.length - 1, Math.floor(progress * pages.length))

  5. CONCEPTS
     - Derived state: the page number comes from scroll progress, so don't
       store it in useState too. Two copies of one fact drift apart.
     - position: sticky: the viewer scrolls normally until it reaches the top
       of the screen, then stays there until its parent (the track) scrolls
       away. Here, that makes the viewer "pause" while the pages change.
     - Track height: about 25–35vh per page. Too tall and the page feels
       stuck, too short and pages flash by. CLAUDE.md warns about the "stuck"
       feeling, so start small and tune it.
     - Buttons that scroll: Prev/Next don't set the page directly. They
       scroll the window to the spot where that page shows (window.scrollTo),
       so scrolling and the buttons never disagree. Use behavior "smooth"
       unless reduceMotion is true.
     - Preloading: the next page image should already be loading, so flips
       don't show a blank. Render the next page hidden, or use
       `new Image().src`.

  NEW CONCEPTS (first time in this project)
     a) position: sticky
        The element scrolls normally until it reaches its `top` offset, then
        stays there until its parent scrolls out of view.

          <aside className="sticky top-4">Table of contents</aside>

        Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky_positioning

     b) Derived values instead of extra state, and clamping
        If a value can be calculated from props or state, calculate it during
        render. Math.min / Math.max keep a number inside a range.

          const fullName = `${first} ${last}`;            // no useState needed
          const volume = Math.min(10, Math.max(0, raw));  // always 0 to 10

        Docs: https://react.dev/learn/choosing-the-state-structure#avoid-redundant-state

     c) Scrolling from code
          window.scrollTo({ top: 600, behavior: "smooth" });
          console.log(window.scrollY);  // how far the page is scrolled now

        Docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo

     d) The style prop for computed values
        style takes an object with camelCase CSS names. Use it only for
        values that are calculated; everything else stays in Tailwind.

          <div style={{ height: `${rows * 40}px` }} />

        Docs: https://react.dev/reference/react-dom/components/common#applying-css-styles

     e) Preloading an image
          const next = new Image();
          next.src = "/photos/beach-2.jpg";  // the browser starts downloading now

        Docs: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image

  6. STYLING
     - Track: `relative`, with its height set from the page count (an inline
       style is fine for a computed value).
     - Viewer: `sticky`, `top-0`, `h-svh`, `flex`, `flex-col`,
       `items-center`, `justify-center`, `gap-4`.
     - Page image: fits the screen height. Look up: `max-h-[75svh]`,
       `w-auto`, `object-contain`, `bg-white`, `shadow-xl`, a slight
       rotation.
     - Buttons: `min-h-11`, `px-4`, plum background with white text, focus
       ring. `disabled:` styles on the first and last page.
     - PDF link: big and obvious, e.g. "Read the full packet (PDF)".

  7. BUILD STEPS
     1. Show page 1 only, plus the PDF link. That's the fallback, done first.
     2. Add the tall track and sticky viewer. Scroll and check the viewer
        stays put.
     3. Connect useScrollProgress and calculate the current page.
     4. Add the "Page X of 15" live region.
     5. Add Prev/Next that scroll to the right spot. Disable them at the
        ends.
     6. Preload the next page.
     7. Tune the track height on a phone and a laptop.

  8. YOUR TURN
     All of it, one step at a time. Step 5's math is the trickiest part;
     work it out on paper first (track top + page fraction × scrollable
     distance).

  9. DONE WHEN
     - Scrolling flips through all 15 pages in order, then the page carries
       on normally.
     - Prev/Next move exactly one page, and the scroll position matches.
     - A screen reader hears "Page 5 of 15" after pressing Next.
     - With reduced motion, the buttons jump instead of smooth-scrolling.
     - The PDF link works without JavaScript tricks.
*/
