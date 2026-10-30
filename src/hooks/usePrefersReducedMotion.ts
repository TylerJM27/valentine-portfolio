/*
  usePrefersReducedMotion — "does this visitor want less motion?" (ROADMAP step 7.1)
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

  NEW CONCEPTS (first time in this project)
     a) A custom hook
        A function whose name starts with "use" and that calls other hooks.
        Components call it like any built-in hook.

          function useDocumentTitle(text: string) {
            useEffect(() => {
              document.title = text;
            }, [text]);
          }

          // in a component: useDocumentTitle("Checkout");

        Docs: https://react.dev/learn/reusing-logic-with-custom-hooks

     b) useSyncExternalStore
        Reads a value that lives outside React and re-renders when it
        changes. This version tracks whether the browser is online:

          function subscribe(onChange: () => void) {
            window.addEventListener("online", onChange);
            window.addEventListener("offline", onChange);
            return () => {
              window.removeEventListener("online", onChange);
              window.removeEventListener("offline", onChange);
            };
          }

          function getSnapshot() {
            return navigator.onLine;
          }

          const isOnline = useSyncExternalStore(subscribe, getSnapshot);

        Docs: https://react.dev/reference/react/useSyncExternalStore

     c) window.matchMedia
        Runs a CSS media query from JavaScript.

          const wide = window.matchMedia("(min-width: 900px)");
          console.log(wide.matches);  // true or false right now
          wide.addEventListener("change", () => console.log(wide.matches));

        Docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia

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
