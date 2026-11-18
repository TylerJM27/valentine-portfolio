import type { PerformancePhoto, YouTubeVideo } from "./types";

// The videos in the middle of the page. Add more entries to show more.
export const performanceVideos: YouTubeVideo[] = [
    {
        id: "video-bullying-works",
        youtubeId: "l4B6g3J9ZYo",
        title: "Bullying Works",
        // Placeholder. The \n is a line break (shown thanks to whitespace-pre-line).
        description:
            "Annoyance Theatre and Bar, Chicago, Illinois\nPart of The Theatre School at DePaul University’s MessFest Comedy Festival",
    },
];

// The photos in the two moving rows. The first half goes in the top row,
// the rest in the bottom row. Captions come from Lily's file names.
export const performancePhotos: PerformancePhoto[] = [
    {
        id: "photo-tuna-queen",
        image: {
            src: "/performance/tuna-queen.webp",
            alt: "Lily in drag as Tuna Queen: silver-blue face paint with fish-scale texture, a long lavender wig and a red-and-black feather boa, mouth wide open, one hand on their chest.",
            width: 960,
            height: 1200,
        },
        caption: "Lily performing as Tuna Queen, their drag persona",
    },
    {
        id: "photo-bush-bows",
        image: {
            src: "/performance/bush-bows.webp",
            alt: "Seven performers in a line on a white-walled stage, arms flung out in a big finale pose and laughing, each with a tuft of fur on their hip. Lily is second from the left in red glasses.",
            width: 1200,
            height: 960,
        },
        caption: "BUSH, January 2026",
    },
    {
        id: "photo-best-policy",
        image: {
            src: "/performance/best-policy.webp",
            alt: "Lily alone in a spotlight in an oversized coral suit and red glasses, arms open and grinning out at the audience.",
            width: 675,
            height: 1200,
        },
        caption: "The Best Policy, January 2026",
    },
    {
        id: "photo-ttsnl-weekend-update",
        image: {
            src: "/performance/ttsnl-weekend-update.webp",
            alt: "Three performers at a news desk under a big projected photo. Lily sits on the right in a green blazer and red glasses, hands folded, while the anchor in the middle reads from his papers.",
            width: 1200,
            height: 800,
        },
        caption: "TTSNL Weekend Update, pictured with Tanner Devore and Peyton Baisden",
    },
    {
        id: "photo-night-of-unexpected-passion",
        image: {
            src: "/performance/night-of-unexpected-passion.webp",
            alt: "Seen from below against a pale sky: Lily in a pink blazer and red glasses laughs over a railing, tugging the tie of a man in a white tuxedo jacket.",
            width: 900,
            height: 1200,
        },
        caption: "A Night of Unexpected Passion feat. Henry Hipp",
    },
    {
        id: "photo-this-blows",
        image: {
            src: "/performance/this-blows.webp",
            alt: "A row of performers under purple and blue light, leaning forward mid-song on a checkered stage floor. Lily is second from the left in glasses.",
            width: 1200,
            height: 687,
        },
        caption: "This Blows! January 2026",
    },
    {
        id: "photo-triple-threat",
        image: {
            src: "/performance/triple-threat.webp",
            alt: "Lily in red glasses, a rust sweater and jeans, pointing sideways mid-song with their mouth open, as other improvisers dance behind them.",
            width: 960,
            height: 1200,
        },
        caption: "Triple Threat Musical Improv, January 2026",
    },
    {
        id: "photo-bush-sketch",
        image: {
            src: "/performance/bush-sketch.webp",
            alt: "Four performers in a frantic sketch moment: one lunges forward with a shocked face while Lily, in red glasses, throws their head back laughing in a chair.",
            width: 1200,
            height: 960,
        },
        caption: "BUSH, January 2026",
    },
    {
        id: "photo-being-creative",
        image: {
            src: "/performance/being-creative.webp",
            alt: "Lily in full zombie makeup at night: stitched-up bald cap, bloodshot eyes, fake fangs and a patched sweater covered in red stitches.",
            width: 900,
            height: 1200,
        },
        caption: "Lily being creative",
    },
    {
        id: "photo-tuna-queen-friends",
        image: {
            src: "/performance/tuna-queen-friends.webp",
            alt: "Three drag performers against a blue wall, arms outstretched in a dramatic pose: one in a red dress, Tuna Queen in the middle in a black bra and blonde wig, and one in a pink corset and pink wig.",
            width: 1200,
            height: 923,
        },
        caption: "Tuna Queen with her friends, Our Lady and Blondeshell",
    },
];

/*
  performance.ts — Performance page content (ROADMAP step 2.5)
  ============================================================

  1. PURPOSE
     The looping header video and the captioned photos for /performance.

  2. WHAT IT RENDERS
     Nothing. It exports two things.

  3. PROPS
     Not a component. Exports:
     - performanceVideo: LoopingVideoSource
         src    -> /placeholders/PerformancePlaceholderClip.mp4 (about 4.5 MB,
                   under the ~5 MB rule in CLAUDE.md)
         poster -> a still frame from the clip. None exists yet, so export one
                   frame as a WebP.
     - performancePhotos: PerformancePhoto[]
         use PlaceholderImage1.jpg (6472 × 5178), PlaceholderImage2.jpg
         (5047 × 3365) and PlaceholderImage3.jpg (3248 × 5776)

  4. STATE
     None.

  5. CONCEPTS
     - Named exports: one file can export several things. Pages import just
       the ones they need: `import { performancePhotos } from ...`.
     - Mixed orientations: the photos are landscape and portrait. Real
       width/height values let the browser reserve the right space for each.

  6. STYLING
     None.

  7. BUILD STEPS
     1. `import type` both types from "./types".
     2. Export the video object.
     3. Export the photo array with captions and alt text.
     4. Before wiring in: the three JPGs are 7–15 MB each. Make WebP copies at
        about 1600px on the long side and update the paths and sizes.

  8. YOUR TURN
     Write it, and write captions that sound like real show credits so the
     layout gets tested with realistic text lengths.

  9. DONE WHEN
     - It type-checks.
     - Each image is under about 300 KB.
*/
