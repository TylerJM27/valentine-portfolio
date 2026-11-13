import type { WritingPacket } from "./types";

// One line per page: which piece it's from and what happens on it.
const pageDescriptions = [
    "Halloween, page 1: Mary, dressed as Larry David, and Lola, dressed as a nun, compliment each other's unsexy costumes. Nina arrives in a homemade Jar Jar Binks costume, and they're stunned.",
    "Halloween, page 2: Mary and Lola accuse Nina of breaking their no-sexy rule. Nina insists it's a tan sweater with paper ears, and the friends start carving butternut squash.",
    "Halloween, page 3: Mary and Lola are too distracted by Nina to carve or order food, and the three gossip about Isabelle's werewolf costume.",
    "Halloween, page 4: Nina turns around, revealing a fully covered back, and the others lose it. She steps out to meet the Doordasher, who is three hours away by bike.",
    "Halloween, page 5: Nina explains why Jar Jar means so much to her, and the scene ends on Lola's reaction. Blackout.",
    "Pants to Prom, page 1: Darcy opens the first weekly meeting of the St. Mary's High School Gay Straight Alliance, and the club looks for a bigger cause.",
    "Pants to Prom, page 2: Judas appears from the top of the theatre, smoking, and pitches three words: Pants. To. Prom.",
    "Pants to Prom, page 3: The club chants about wearing pants to prom while Lemon keeps worrying about her mom's prom dress.",
    "Pants to Prom, page 4: Everyone tells Lemon to burn the dress. Blackout.",
    "Gay And Boring, page 1: Four friends at a gay bar all secretly don't want to go to a leather nightclub, and admit they'd rather go home to bed.",
    "Gay And Boring, page 2: The friends realize they're gay and boring, and take turns confessing boring secrets, like early bedtimes and loving Friends.",
    "Gay And Boring, page 3: The confessions escalate to Macklemore, and they proudly declare themselves boring, gay, and proud before heading home.",
    "Gay And Boring, page 4: They slam their bills down and leave, and the bartender says they tip badly. Blackout.",
    "Wrigleyville Speed Dating, page 1: At a speed dating event, French brothers Jaquón and Jaquóf sit down with Evangeline together and tell her she must pick one. One always lies and one always tells the truth.",
    "Wrigleyville Speed Dating, page 2: The brothers' contradictory answers about tandem cycling confuse Evangeline, and they ask her an innocent question she misreads.",
    "Wrigleyville Speed Dating, page 3: The question turns out to be about swimming, for their triathlon, and the brothers reveal the tragic story of their third brother, Jaquít.",
    "Wrigleyville Speed Dating, page 4: Evangeline guesses they want a triathlon partner, but they still want her as their sweet lady. Blackout.",
    "Shotta Pink Whitney, page 1: A song. Three college freshmen introduce their first drink, Pink Whitney, followed by the first verse and chorus.",
    "Shotta Pink Whitney, page 2: The second verse, about texting a guy from Hinge, the chorus again, and a bridge of alliterative words spelling P-I-N-K.",
    "Shotta Pink Whitney, page 3: The final chorus.",
];

export const writingPacket: WritingPacket = {
    title: "Writing Packet",
    pdfUrl: "/documents/lily-valentine-writing-packet.pdf",
    pages: pageDescriptions.map((description, i) => {
        const pageNumber = i + 1;
        return {
            src: `/writing/page-${String(pageNumber).padStart(2, "0")}.webp`,
            alt: `Page ${pageNumber} of ${pageDescriptions.length}. ${description}`,
            width: 1200,
            height: 1553,
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
