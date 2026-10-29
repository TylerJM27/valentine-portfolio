import type { PerformancePhoto, LoopingVideoSource } from "./types";

export const performanceVideo: LoopingVideoSource = {
    src: "/placeholders/performance-placeholder-clip.mp4",
    type: "video/mp4",
    poster: {
        src: "/placeholders/placeholder-image-1.webp",
        alt: "Lily Peering Down From Above",
        width: 1600,
        height: 1280,
    },
    label: "Cool People Doing Things",
};

export const performancePhotos: PerformancePhoto[] = [
    {
        id: "performance-1",
        image: {
            src: "/placeholders/placeholder-image-1.webp",
            alt: "Lily, in oversized red glasses and a black leather jacket, leans over a black railing and bares her teeth under a stage light, with a brick wall behind her.",
            width: 1600,
            height: 1280,
        },
        caption: "Lily Peering Down From Above",
    },
    {
        id: "performance-2",
        image: {
            src: "/placeholders/placeholder-image-2.webp",
            alt: "Three performers sit at a long desk beneath a large projected photo. Lily, on the right in a green blazer and red glasses, looks toward the audience with a sly expression while the performer in the center reads from a stack of papers.",
            width: 1600,
            height: 1067,
        },
        caption: "The Council of Three",
    },
    {
        id: "performance-3",
        image: {
            src: "/placeholders/placeholder-image-3.webp",
            alt: "Lily stands alone in a spotlight against a black background, wearing an oversized red suit and a lavender tie, hands raised mid-sentence as she speaks toward a music stand.",
            width: 900,
            height: 1600,
        },
        caption: "Welcome to my Ted Talk",
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
