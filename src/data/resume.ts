import type { ResumeData } from "./types";

export const resume: ResumeData = {
    pdfUrl: "/placeholders/lily-valentine-resume-placeholder.pdf",
    sections: [
        {
            id: "theatre",
            heading: "Theatre",
            entries: [
                {
                    id: "theatre-1",
                    title: "[Production Title One]",
                    role: "[Role]",
                    organization: "[Theatre Company]",
                    year: "[Year]",
                },
                {
                    id: "theatre-2",
                    title: "[Production Title Two]",
                    role: "[Role]",
                    organization: "[Theatre Company]",
                    year: "[Year]",
                },
                {
                    id: "theatre-3",
                    title: "[Production Title Three]",
                    role: "[Role]",
                    organization: "[Theatre Company]",
                    year: "[Year]",
                },
            ],
        },
        {
            id: "writing",
            heading: "Writing",
            entries: [
                {
                    id: "writing-1",
                    title: "[Play or Script Title]",
                    role: "Playwright",
                    organization: "[Reading / Festival]",
                    year: "[Year]",
                },
                {
                    id: "writing-2",
                    title: "[Short Film Script]",
                    role: "Screenwriter",
                    organization: "[Production Co.]",
                    year: "[Year]",
                },
            ],
        },
        {
            id: "directing",
            heading: "Directing",
            entries: [
                {
                    id: "directing-1",
                    title: "[Production Title]",
                    role: "Director",
                    organization: "[Theatre Company]",
                    year: "[Year]",
                },
                {
                    id: "directing-2",
                    title: "[Short Film Title]",
                    role: "Director",
                    organization: "[Festival Screening]",
                    year: "[Year]",
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
