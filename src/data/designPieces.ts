import type { DesignPiece } from "./types";

export const designPieces: DesignPiece[] = [
    {
        id: "unicorn",
        title: "Unicorn",
        image: {
            src: "/design/unicorn.webp",
            alt: "Poster on black. Giant pink-outlined letters spell UNICORN, each filled with close-up photos of a glitter-covered face: eyes, teeth and lips. Text: glitter, karaoke, and learning how to be your own best friend. A solo experience by Lily Valentine. January 16, 10:15 pm, Annoyance Cabaret Stage.",
            width: 675,
            height: 900,
        },
        description: "Poster for Unicorn, Lily's solo show at MessFest.",
    },
    {
        id: "protect-bad-drag",
        title: "Protect Bad Drag!",
        image: {
            src: "/design/protect-bad-drag.webp",
            alt: "Glitchy neon-green collage poster with halftone cut-outs of eyes, ears, pointing hands and a shouting mouth in a megaphone, which blasts a pink banner. Text: Protect Bad Drag! January 15th, 11:45 PM. A messy drag show for the people. Annoyance Mainstage, messfestcomedy.com.",
            width: 675,
            height: 900,
        },
        description: "Poster for a drag show at MessFest.",
    },
    {
        id: "ttsnl",
        title: "TTSNL",
        image: {
            src: "/design/ttsnl.webp",
            alt: "Pencil-and-colored-pencil drawing of a Chicago L train coming down the tracks between buildings, with giant retro 3D letters reading TTSNL streaming across the top. Text: The Theatre School's Premiere Late Night Sketch Comedy Show. Featuring Tanner Devore, Jules Astaire. May 8th, 7:30 PM, Watts Theatre. A QR code sits in the corner.",
            width: 675,
            height: 900,
        },
        description: "Poster for TTSNL, the live sketch show Lily head-wrote and directed.",
    },
    {
        id: "bush-january",
        title: "BUSH (January)",
        image: {
            src: "/design/bush-january.webp",
            alt: "Peach poster. The word BUSH is drawn in fuzzy black hair above a hand holding up a blue razor clogged with hair. Text: A Lesbian Sketch Show. Jan 15, 6:15 PM, Annoyance Mainstage.",
            width: 674,
            height: 900,
        },
        description: "Poster for BUSH, the lesbian sketch group Lily co-created.",
    },
    {
        id: "bush-september",
        title: "BUSH (September)",
        image: {
            src: "/design/bush-september.webp",
            alt: "Drawing of hands unzipping dark jeans to show pink underwear, with BUSH scrawled across it in red. The belly reads: The L comes first! Text: A Lesbian Sketch Show. September 25th, 8 pm, Annoyance Theatre Main Stage.",
            width: 675,
            height: 900,
        },
        description: "A second poster for BUSH, for its September show.",
    },
    {
        id: "best-policy",
        title: "The Best Policy",
        image: {
            src: "/design/best-policy.webp",
            alt: "Photo of Lily in a hot-pink blazer, blue tie and red glasses talking on a phone in front of Chicago skyscrapers, with hand-drawn flames, a green monster shooting lasers and a UFO doodled over the city. Text: The Best Policy, by Lily Valentine. Sundays 8pm, Annoyance Theatre, April 19 - May 10.",
            width: 675,
            height: 900,
        },
        description: "Poster for The Best Policy, Lily's solo show about the importance of gossip.",
    },
    {
        id: "messfest",
        title: "MessFest",
        image: {
            src: "/design/messfest.webp",
            alt: "Pen drawing of the march-of-progress evolution line, from ape to human, ending with the human slipping on a banana peel. MESSFEST is lettered above in chunky yellow wooden-plank letters. Text: January 14-17, 2026 C.E., Annoyance Theatre + Bar.",
            width: 1625,
            height: 900,
        },
        description: "Poster for MessFest, the student-run comedy festival at The Annoyance.",
    },
    {
        id: "grad-showcase",
        title: "2026 Comedy Arts Grad Showcase",
        image: {
            src: "/design/grad-showcase.webp",
            alt: "Drawing on lined notebook paper. The words Comedy Arts Grad are in big bubble letters, each letter filled with a pencil portrait of a graduating student, surrounded by small colored doodles like a school bus, a pickle, a dog, pancakes and a bird. Text: 2026 Comedy Arts Grad Showcase.",
            width: 1200,
            height: 900,
        },
        description: "Poster for the 2026 Comedy Arts graduating class showcase.",
    },
    {
        id: "baggage",
        title: "Baggage",
        image: {
            src: "/design/baggage.webp",
            alt: "A tall stack of colorful hand-drawn suitcases, with a bra and a tie spilling out. Text on the suitcases: A new play by Jesse Swanson + Riley Woollen. Baggage, a comedic farce. 5/1, 5/8, 5/15, 5/22, 7:30 in Studio 408. Director Jesse Swanson, Assistant Director Ella Carey, Stage Manager Ally Montgomery.",
            width: 675,
            height: 900,
        },
        description: "Poster for Baggage, a new comedic farce.",
    },
    {
        id: "collective-rage",
        title: "Collective Rage",
        image: {
            src: "/design/collective-rage.webp",
            alt: "Pink painted poster of a huge open mouth biting down on a red boxing glove, speckled with red paint. Ransom-note letters spell Collective Rage. Text: A Play in 5 Betties, by Jen Silverman. Mondays 6:30, April 27 - June 1, Annoyance Theater. Directed by Arti Ishak, Asst. Directed by Orrie Rindal.",
            width: 675,
            height: 900,
        },
        description: "Poster for Collective Rage: A Play in 5 Betties.",
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
