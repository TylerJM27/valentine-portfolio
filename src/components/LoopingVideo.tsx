/*
  LoopingVideo — muted looping clip with a pause button (ROADMAP step 8.4)
  ========================================================================

  1. PURPOSE
     The video at the very top of /performance: plays silently on a loop,
     with a visible button to pause it. Respects reduced motion.

  2. WHAT IT RENDERS
     A wrapper containing:
       - <video> with muted, loop, playsInline, the poster image, and
         autoPlay only when reduced motion is off. It has an aria-label from
         the data's `label`.
       - A <button type="button"> with visible text: "Pause video" while
         playing, "Play video" while paused.

  3. PROPS
     - video: LoopingVideoSource

  4. STATE
     - isPlaying: boolean (useState)
     - videoRef: a ref to the <video> element (useRef)
     - reduceMotion from usePrefersReducedMotion()

  5. CONCEPTS
     - Why a pause button is required: WCAG says anything that moves for more
       than 5 seconds needs a way to pause it. A looping video always does.
     - useRef for DOM elements: React doesn't have a prop for "pause now".
       You grab the real <video> element with a ref and call `.play()` or
       `.pause()` on it.
     - Trusting events, not guesses: `.play()` returns a Promise that can fail
       (browsers sometimes block autoplay). Set `isPlaying` from the video's
       own onPlay / onPause events, so the button label always matches
       reality.
     - Autoplay rules: phones only autoplay video that's muted and has
       playsInline. Both are required.
     - Reduced motion: no autoPlay, so the poster shows and the button says
       "Play".

  6. STYLING
     - Video: full width, fixed shape so the page doesn't jump. Look up:
       `w-full`, `aspect-video`, `object-cover`, `rounded-xl`, `border-4`,
       `border-white`.
     - Button: on top of the video corner. Look up: `relative` (wrapper),
       `absolute`, `bottom-3`, `right-3`, `min-h-11`, `px-4`, a plum
       background with white text (check contrast), and a visible focus ring.

  7. BUILD STEPS
     1. Render <video> with src/type/poster and muted, loop, playsInline.
     2. Add the ref and the button. The button calls play() or pause().
     3. Wire onPlay/onPause to setIsPlaying.
     4. Add reduced motion: only autoPlay when it's off; set the initial
        isPlaying to match.
     5. Style the wrapper, video and button.

  8. YOUR TURN
     Steps 1–3 yourself. For step 4, think first about what isPlaying should
     start as, then check your answer with me.

  9. DONE WHEN
     - It autoplays silently and loops on desktop and on a real phone.
     - The button pauses and resumes, and its text always matches.
     - With reduced motion emulated, it starts paused on the poster.
     - The button is reachable and usable by keyboard.
*/
