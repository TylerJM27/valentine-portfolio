/*
  VideoCard — one click-to-load YouTube video (ROADMAP step 11.1)
  ===============================================================

  1. PURPOSE
     Shows one directing video as a thumbnail with a play button. The real
     YouTube player (heavy, with tracking) only loads after a click.

  2. WHAT IT RENDERS
     <article> containing:
       - <h2> with the video title
       - <LiteYouTubeEmbed> from react-lite-youtube-embed, using the
         youtubeId, the title, and its privacy (youtube-nocookie) option
       - the optional description and year

  3. PROPS
     - video: YouTubeVideo

  4. STATE
     None of your own. The embed component tracks "clicked yet?" itself.

  5. CONCEPTS
     - Facade pattern: show a lightweight picture of the player, and swap in
       the real thing on click. A normal YouTube embed loads hundreds of KB of
       script per video up front; this loads almost nothing until a click.
     - Third-party components: you read its README for props, instead of
       writing them. CLAUDE.md asks you to check the current README for the
       exact prop names (id, title, the no-cookie option) and the CSS import.
     - The library's CSS: it ships its own stylesheet. That's an exception to
       "one global stylesheet", because it's a library's CSS, not ours. We'll
       decide together whether to import it in main.tsx or in index.css.

  NEW CONCEPTS (first time in this project)
     a) Default imports, and importing a package's CSS
        `import Name from "pkg"` (no braces) takes the package's default
        export; braces take named exports. Importing a .css file from a
        package makes Vite bundle it.

          import Confetti from "some-confetti-package";
          import "some-confetti-package/dist/confetti.css";

          <Confetti pieces={50} />

        Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
              https://vite.dev/guide/features#css

  6. STYLING
     - Card: `flex`, `flex-col`, `gap-3`.
     - Player area: the library sets a 16:9 box. Wrap it in a hand-drawn
       frame (`border-4`, `border-white`, `rounded-xl`, `overflow-hidden`).
     - Title: `font-display`, `text-white`, `text-2xl`.

  7. BUILD STEPS
     1. Install `react-lite-youtube-embed` (we'll talk first about what it
        does and why).
     2. Read its README: props, privacy option, CSS import.
     3. Props type, then render the title, embed and description.
     4. Style the frame.

  8. YOUR TURN
     Read the README yourself and pick the props. Tell me which you chose
     and why before writing the component.

  9. DONE WHEN
     - The page loads with thumbnails only. DevTools > Network shows no
       youtube.com player scripts until you click.
     - After a click, the request goes to youtube-nocookie.com.
     - The play button is reachable by Tab, and a screen reader announces
       the video's title.
*/
