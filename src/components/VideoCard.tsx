import { useRef } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import type { YouTubeVideo } from "../data/types";
import { TapedNote } from "./TapedNote";

type Props = {
    video: YouTubeVideo;
    // Called when the video starts playing, so the page can stop other motion.
    onPlay?: () => void;
    // Called when the video is paused or ends.
    onStop?: () => void;
};

export function VideoCard({ video, onPlay, onStop }: Props) {
    const headingId = `${video.id}-title`;
    // The embed needs a ref to its <iframe> to say "I'm listening" to
    // YouTube. Without one, YouTube never reports play/pause, and
    // onPlay/onPause/onEnd never fire.
    const iframeRef = useRef<HTMLIFrameElement>(null);

    return (
        // Phones and tablets: title, video, then the description note below.
        // lg and up: the note sits to the right of the video, like a label
        // beside a piece in a gallery.
        <article
            aria-labelledby={headingId}
            className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-x-10 lg:items-center"
        >
            <h2
                id={headingId}
                className="font-display text-white text-3xl sm:text-4xl leading-tight pb-1 lg:col-span-2"
            >
                {video.title}
                {video.year && <span className="text-2xl"> ({video.year})</span>}
            </h2>

            {/* The frame shows a focus outline when the play button inside
                it is focused by keyboard. */}
            <div className="overflow-hidden rounded-xl border-8 border-white bg-plum shadow-2xl has-[:focus-visible]:outline-4 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-white">
                {/* Only a thumbnail and a play button until it's clicked. The
                    player then loads from youtube-nocookie.com (cookie={false},
                    which is also the default), so nothing tracks visitors
                    until they press play.
                    enableJsApi lets the player report play/pause/end back to
                    us, which is what the onPlay/onPause/onEnd props use. */}
                <LiteYouTubeEmbed
                    ref={iframeRef}
                    id={video.youtubeId}
                    title={video.title}
                    cookie={false}
                    webp
                    lazyLoad
                    enableJsApi
                    onPlay={onPlay}
                    onPause={onStop}
                    onEnd={onStop}
                />
            </div>

            {video.description && (
                // whitespace-pre-line keeps the line breaks written in the data.
                <TapedNote
                    as="p"
                    tilt="left"
                    className="mt-4 lg:mt-0 leading-relaxed whitespace-pre-line"
                >
                    {video.description}
                </TapedNote>
            )}
        </article>
    );
}

/*
  VideoCard — one click-to-load YouTube video (ROADMAP step 13.1)
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
