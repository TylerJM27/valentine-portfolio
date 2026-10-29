/*
  usePrefersReducedMotion — "does this visitor want less motion?" (ROADMAP step 8.3)
  ==================================================================================

  1. PURPOSE
     Returns true if the visitor has turned on "reduce motion" in their
     operating system. StarburstPhoto, LoopingVideo and Flipbook use it to
     switch off autoplay and animation for them.

  2. WHAT IT RENDERS
     Nothing. It's a custom hook, and it returns a boolean.

  3. PROPS
     None. Usage: `const reduceMotion = usePrefersReducedMotion();`

  4. STATE
     None of its own. It reads the browser's media query
     "(prefers-reduced-motion: reduce)" through window.matchMedia.

  5. CONCEPTS
     - Custom hook: a function starting with "use" that calls other hooks.
       It lets three components share one piece of logic.
     - matchMedia: the JavaScript version of a CSS media query. It can tell
       you the current answer and notify you when it changes.
     - useSyncExternalStore: React's hook for reading a value that lives
       outside React (here, a browser setting). You give it a "subscribe"
       function and a "get current value" function. It's the right tool here,
       and it avoids the useState + useEffect version that this project's
       lint rules would flag.
     - Why not just CSS? Tailwind's `motion-reduce:` handles CSS animations,
       but autoplaying a <video> and running a JavaScript timer need to know
       in JavaScript.

  6. STYLING
     None.

  7. BUILD STEPS
     1. Write a subscribe(callback) function that adds a "change" listener
        to the media query list and returns a function that removes it.
     2. Write a getSnapshot() that returns `.matches`.
     3. Return useSyncExternalStore(subscribe, getSnapshot).
     4. Keep subscribe and getSnapshot outside the hook, so they aren't
        re-created on every render.

  8. YOUR TURN
     Write it with the steps above, then ask me to explain anything about
     useSyncExternalStore that's unclear. It's the least familiar hook in
     the project.

  9. DONE WHEN
     - In Chrome DevTools > Rendering > "Emulate CSS prefers-reduced-motion",
       toggling the setting flips the hook's value live, without a reload.
*/
