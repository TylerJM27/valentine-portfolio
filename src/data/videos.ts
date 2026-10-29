import type { YouTubeVideo } from "./types";

export const directingVideos: YouTubeVideo[] = [
    {
        id: "youtube-video-1",
        youtubeId: "AVHEc5Qj6l4",
        title: "Tuna Queen",
        year: 2024,
    },
    {
        id: "youtube-video-2",
        youtubeId: "l4B6g3J9ZYo",
        title: "Bullying Works",
        year: 2024,
    },
    {
        id: "youtube-video-3",
        youtubeId: "fDjYH03Q8sY",
        title: "If You Knew My Story",
        year: 2024,
    },
];

/*
  videos.ts — Directing page videos (ROADMAP step 2.7)
  ====================================================

  1. PURPOSE
     The list of YouTube videos shown on /directing.

  2. WHAT IT RENDERS
     Nothing. It exports an array.

  3. PROPS
     Not a component. Exports:
     - directingVideos: YouTubeVideo[]  (2–4 entries)

  4. STATE
     None.

  5. CONCEPTS
     - YouTube IDs: the 11 characters after "v=" in a watch URL
       (youtube.com/watch?v=XXXXXXXXXXX) or after "youtu.be/". Store only the
       ID, not the whole URL; the embed component builds the URL.
     - Made-up IDs show a broken grey thumbnail. Use real public videos as
       placeholders (ideally Lily's own, or ask her).

  6. STYLING
     None.

  7. BUILD STEPS
     1. `import type { YouTubeVideo }`.
     2. Add 2–4 entries, each with a clear, unique title.

  8. YOUR TURN
     Find real video IDs and fill it in.

  9. DONE WHEN
     - Each youtubeId opens a real video at youtube.com/watch?v=<id>.
*/
