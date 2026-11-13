import type { ResumeData } from "./types";

export const resume: ResumeData = {
    pdfUrl: "/documents/lily-valentine-resume.pdf",
    headline: "Writer, Performer, Producer, Comedian",
    summary:
        "Lily creates comedy for those who believe they don’t need it. They push for radical honesty from both themselves and the audience. They are creative, embarrassing, and truthful.",
    details: ["Height: 5’6”", "Voice: Mezzo/Soprano"],
    sections: [
        {
            id: "sketch",
            heading: "Sketch/Variety/Solo Performance",
            entries: [
                {
                    id: "sketch-whatchamacallit",
                    title: "Whatchamacallit",
                    role: "Writer/Performer",
                    organization: "Annoyance, Dir. Julia Morales",
                },
                {
                    id: "sketch-free-beer",
                    title: "Free Beer",
                    role: "Writer/Performer",
                    organization: "iO Theater, Dir. Julia Morales",
                },
                {
                    id: "sketch-ttsnl",
                    title: "TTSNL",
                    role: "Producer/Head Writer/Director",
                    organization: "The Watts Theater",
                },
                {
                    id: "sketch-bush",
                    title: "BUSH",
                    role: "Co-producer/Writer/Performer",
                    organization: "Annoyance Theater, MessFest",
                },
                {
                    id: "sketch-best-policy",
                    title: "The Best Policy",
                    role: "Producer/Writer/Performer",
                    organization: "Annoyance Theater, MessFest",
                },
                {
                    id: "sketch-unicorn",
                    title: "Unicorn",
                    role: "Writer/Performer",
                    organization: "Annoyance, Dir. Evelyn Mae",
                },
                {
                    id: "sketch-tts-convocation",
                    title: "TTS Centennial Convocation",
                    role: "Writer/Performer",
                    organization: "The Theatre School",
                },
                {
                    id: "sketch-jules-astaire",
                    title: "Jules Astaire’s Variety Hour",
                    role: "Performer",
                    organization: "Annoyance, iO Theater",
                },
                {
                    id: "sketch-bitrake",
                    title: "BitRake Radio",
                    role: "Writer/Performer",
                    organization: "Radio DePaul",
                },
                {
                    id: "sketch-24-hour",
                    title: "24 Hour Sketch Show",
                    role: "Producer/Head Writer/Performer",
                    organization: "The Theatre School",
                },
                {
                    id: "sketch-this-blows",
                    title: "This Blows!",
                    role: "Writer/Performer",
                    organization: "Annoyance",
                },
                {
                    id: "sketch-tldr",
                    title: "TL;DR",
                    role: "Writer/Performer",
                    organization: "In Production, Dir. Peyton Baisden",
                },
                {
                    id: "sketch-huff-the-glue",
                    title: "We Huff The Glue We Work With",
                    role: "Writer/Puppeteer",
                    organization: "Annoyance Theater",
                },
                {
                    id: "sketch-spend-the-night",
                    title: "Spend The Night",
                    role: "Writer/Performer",
                    organization: "Annoyance Theater, MessFest",
                },
            ],
        },
        {
            id: "improv",
            heading: "Improvisation",
            entries: [
                {
                    id: "improv-back-in-five",
                    title: "Back in Five",
                    role: "Performer",
                    organization: "The Theatre School, Dir. Anneliese Toft",
                },
                {
                    id: "improv-harold",
                    title: "Natalia’s 21st Bday Harold",
                    role: "Performer",
                    organization: "iO, Dir. Liz Joynt Sandberg",
                },
                {
                    id: "improv-impulse",
                    title: "Impulse XV, XVI",
                    role: "Performer (musical improv)",
                    organization: "Curious Comedy Theater",
                },
                {
                    id: "improv-measure-up",
                    title: "Measure Up!",
                    role: "Performer (musical improv)",
                    organization: "Annoyance, Dir. Justin Jacobs",
                },
                {
                    id: "improv-triple-threat",
                    title: "Triple Threat",
                    role: "Performer (musical improv)",
                    organization: "Annoyance, Dir. Brady Barrow",
                },
            ],
        },
        {
            id: "training",
            heading: "Training",
            entries: [
                {
                    id: "training-bfa",
                    title: "Comedy Arts BFA",
                    organization: "The Theatre School at DePaul University",
                },
                {
                    id: "training-io",
                    title: "Improv 5 Level Program",
                    organization: "iO Training Center",
                },
                {
                    id: "training-improv-sketch",
                    title: "Improv/Sketch",
                    organization: "Liz Joynt-Sandberg/Julia Morales",
                },
                {
                    id: "training-comedic-acting",
                    title: "Comedic Acting/Performance",
                    organization: "Eunji Kim/Arti Ishak/Brit Anderson",
                },
                {
                    id: "training-musical-comedy",
                    title: "Musical Comedy",
                    organization: "Brad Kemp",
                },
            ],
        },
        {
            id: "leadership",
            heading: "Leadership",
            entries: [
                {
                    id: "leadership-assistant",
                    title: "Assistant to Prof. Liz Joynt-Sandberg",
                    organization: "The Theatre School at DePaul University",
                    year: "2025–present",
                },
                {
                    id: "leadership-messfest",
                    title: "Assistant Artistic Director",
                    organization: "MessFest Comedy Festival",
                    year: "2025–2026",
                },
            ],
        },
        {
            id: "directing",
            heading: "Directing",
            entries: [
                {
                    id: "directing-hand2mouth",
                    title: "Youth Devising Program",
                    role: "Director/Teaching Artist",
                    organization: "Hand2Mouth Theatre",
                },
                {
                    id: "directing-oct",
                    title: "Improv Program",
                    role: "Director/Teaching Artist",
                    organization: "Oregon Children’s Theatre",
                },
            ],
        },
        {
            id: "skills",
            heading: "Special Skills",
            entries: [
                {
                    id: "skills-list",
                    title: "Singing, drag performance, makeup, puppetry, prop making, song writing, marketing, graphic design",
                },
            ],
        },
    ],
};

/*
  resume.ts — resume content (ROADMAP step 2.4)
  =============================================

  1. PURPOSE
     The resume as data, so ResumePage can show it as real HTML (readable,
     searchable, resizes for phones) instead of an embedded PDF.

  2. WHAT IT RENDERS
     Nothing. It exports one ResumeData object.

  3. PROPS
     Not a component. Exports:
     - resume: ResumeData
         pdfUrl    -> the downloadable PDF. There's no resume PDF in
                      public/placeholders yet (only ResumePlaceholder.png),
                      so add a small placeholder PDF.
         sections  -> e.g. Theatre, Film, Training, Skills, each with a few
                      ResumeEntry items

  4. STATE
     None.

  5. CONCEPTS
     - Nested data: an object holding an array of sections, each holding an
       array of entries. The page will use .map() inside .map() to show it.
     - Keeping two copies in sync: the PDF and this file say the same thing.
       When the real resume changes, update both. That was the trade-off of
       choosing HTML.

  6. STYLING
     None.

  7. BUILD STEPS
     1. `import type { ResumeData }` from "./types".
     2. Use public/placeholders/ResumePlaceholder.png as a guide for which
        sections and columns a real acting resume has.
     3. Add 2–3 sections with 2–4 entries each.

  8. YOUR TURN
     Type out the sections from the placeholder image yourself.

  9. DONE WHEN
     - It type-checks, and every section and entry has a unique id.
*/
