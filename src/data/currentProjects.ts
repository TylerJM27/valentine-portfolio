import type { CurrentProject } from "./types";

// Shows on /right-now and in the homepage preview. Leave `poster` out to show
// a "poster coming soon" card, and `href` out until tickets are available.
export const currentProjects: CurrentProject[] = [
    {
        id: "unicorn",
        title: "Unicorn",
        poster: {
            src: "/design/unicorn.webp",
            alt: "Unicorn poster: giant pink-outlined letters spelling UNICORN, filled with close-up photos of a glitter-covered face.",
            width: 675,
            height: 900,
        },
        description:
            "Unicorn is a 45 minute solo performance piece by Lily Valentine about relationships, arts and crafts, glitter, and learning how to be your own best friend.",
        date: "January 16",
        time: "10:15 pm",
        venue: "Annoyance Cabaret",
    },
    {
        id: "senior-showcase",
        title: "Senior Showcase",
        description:
            "Lily is graduating in June! See the fruits of their labor in their DePaul Comedy Arts Senior Showcase!",
        date: "January 15",
        time: "4:30 pm",
        venue: "Annoyance Mainstage",
    },
    {
        id: "whatchamacallit",
        title: "Whatchamacallit",
        poster: {
            src: "/design/whatchamacallit.webp",
            alt: "Whatchamacallit poster: four performers lie on a floor of quilts and stuffed animals, shot from above in purple light, with the title in rainbow-outlined jagged letters. Text: Jan 15th, 8:45 PM, Annoyance Theatre. A sketch show you'll never forget the name of.",
            width: 900,
            height: 1200,
        },
        description:
            "Whatchamacallit: The sketch show you’ll never forget the name of. Written and performed by Lily Valentine, Charlotte Eich, Lucy B. Holan, and Aidan Bieger.",
        date: "January 15",
        time: "8:45 pm",
        venue: "Annoyance Cabaret",
    },
];
