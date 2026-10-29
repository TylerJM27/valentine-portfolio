import type { WritingPacket } from "./types";

export const writingPacket: WritingPacket = {
    title: "Writing Packet",
    pdfUrl: "/placeholders/writing-packet.pdf",
    pages: Array.from({ length: 15 }, (_, i) => {
        const pageNumber = i + 1;
        return {
            src: `/placeholders/writing/page-${String(pageNumber).padStart(2, "0")}.webp`,
            alt: `Page ${pageNumber} of 15`,
            width: 850,
            height: 1100,
        };
    }),
};
/*
  writing.ts — the writing packet (ROADMAP step 2.6)
  ==================================================

  1. PURPOSE
     The 15-page writing packet for the flipbook on /writing: the page images
     in order, plus the full PDF.

  2. WHAT IT RENDERS
     Nothing. It exports one WritingPacket.

  3. PROPS
     Not a component. Exports:
     - writingPacket: WritingPacket
         title  -> the packet's title
         pdfUrl -> /placeholders/writing-packet.pdf
         pages  -> /placeholders/writing/page-01.webp ... page-15.webp
                   (already in the repo)

  4. STATE
     None.

  5. CONCEPTS
     - Generating repetitive data: instead of typing 15 near-identical
       objects, `Array.from({ length: 15 }, (_, i) => ...)` can build them,
       with `String(i + 1).padStart(2, "0")` making "01", "02" and so on.
       Optional; typing them out by hand is fine too.
     - Alt text for text pages: for placeholders, "Page 3 of 15" is enough.
       For the real packet, each page's alt should briefly say what happens on
       it, and the PDF link is the full-text fallback.

  6. STYLING
     None.

  7. BUILD STEPS
     1. `import type { WritingPacket }`.
     2. Look up the page images' pixel size (all pages should match) for
        width and height.
     3. Build the pages array, by hand or with Array.from.

  8. YOUR TURN
     Try the Array.from version. Log the result once to check it.

  9. DONE WHEN
     - pages has exactly 15 entries, page-01 to page-15, in order.
*/
