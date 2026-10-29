import type { DesignPiece } from "./types";

export const designPieces: DesignPiece[] = [
    {
        id: "design-piece-1",
        title: "Design Piece 1",
        image: {
            src: "/placeholders/placeholder-image-1.webp",
            alt: "Lily, in oversized red glasses and a black leather jacket, leans over a black railing and bares her teeth under a stage light, with a brick wall behind her.",
            width: 1600,
            height: 1280,
        },
        description:
            "I drew the whole poster by hand, title included, then scanned it and added one flat color. The show is about a family that won’t stop talking over each other, so the lettering crowds the edges and nothing gets its own space.",
    },
    {
        id: "design-piece-2",
        title: "Design Piece 2",
        image: {
            src: "/placeholders/placeholder-image-2.webp",
            alt: "Three performers sit at a long desk beneath a large projected photo. Lily, on the right in a green blazer and red glasses, looks toward the audience with a sly expression while the performer in the center reads from a stack of papers.",
            width: 1600,
            height: 1067,
        },
        description:
            "A 12-page zine of things strangers said on my commute, each with a drawing of how I pictured the conversation going. Printed on pink paper at the library and folded by hand, about 50 copies.",
    },
    {
        id: "design-piece-3",
        title: "Design Piece 3",
        image: {
            src: "/placeholders/placeholder-image-3.webp",
            alt: "Lily stands alone in a spotlight against a black background, wearing an oversized red suit and a lavender tie, hands raised mid-sentence as she speaks toward a music stand.",
            width: 900,
            height: 1600,
        },
        description:
            "A logo, a social graphic template and a printed program for a monthly comedy show. The organizers wanted it to look homemade on purpose, so everything is built from cut-paper shapes and a typewriter font.",
    },
];

/*
  designPieces.ts — Design page content (ROADMAP step 2.8)
  ========================================================

  1. PURPOSE
     The graphic design pieces shown on /design, each an image with a title
     and description.

  2. WHAT IT RENDERS
     Nothing. It exports an array.

  3. PROPS
     Not a component. Exports:
     - designPieces: DesignPiece[]
         reuse PlaceholderImage1/2/3 (or their resized WebP copies) for now

  4. STATE
     None.

  5. CONCEPTS
     - Alt text vs description: alt says what the image looks like (for
       people who can't see it). The description says what it's for or why
       it was made (for everyone). Don't paste the same text into both.

  6. STYLING
     None.

  7. BUILD STEPS
     1. `import type { DesignPiece }`.
     2. Add three entries with distinct titles, descriptions and alt text.

  8. YOUR TURN
     Fill it in. This is the easiest data file, so a good first one to do.

  9. DONE WHEN
     - It type-checks, ids are unique, and no two alts are the same.
*/
