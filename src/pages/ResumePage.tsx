import { ContactForm } from "../components/ContactForm";
import { Exclamation } from "../components/doodles/Exclamation";
import { Spiral } from "../components/doodles/Spiral";
import { SquareSpiral } from "../components/doodles/SquareSpiral";
import { Star } from "../components/doodles/Star";
import { resume } from "../data/resume";

const sectionHeadingStyles = "font-display text-white text-3xl";

// Side doodles only show from lg up, where they sit in the margins.
const sideDoodle = "hidden lg:block absolute motion-reduce:animate-none";

export function ResumePage() {
    return (
        <div className="relative max-w-3xl mx-auto py-8 space-y-10">
            <title>Resume · Lily Valentine</title>

            <Star className={`${sideDoodle} top-28 -left-28 size-16 text-lime rotate-12 animate-float`} />
            <Spiral className={`${sideDoodle} top-[22%] -right-28 size-20 text-orange animate-spin-slow`} />
            <SquareSpiral className={`${sideDoodle} top-[42%] -left-24 size-12 text-orange -rotate-12 animate-float [animation-delay:-2s]`} />
            <Exclamation className={`${sideDoodle} top-[60%] -right-24 w-12 text-lime rotate-12 animate-float [animation-delay:-4s]`} />
            <Spiral className={`${sideDoodle} top-[78%] -left-24 size-10 text-lime animate-spin-slow [animation-direction:reverse]`} />
            <Star className={`${sideDoodle} bottom-16 -right-24 size-10 text-orange -rotate-12 animate-float [animation-delay:-3s]`} />

            <header className="space-y-4">
                <div className="flex items-center gap-3">
                    <h1 className="font-display text-white text-5xl">Resume</h1>
                    <Star className="size-9 text-lime rotate-12 animate-float motion-reduce:animate-none" />
                    <Spiral className="size-7 text-orange animate-spin-slow motion-reduce:animate-none" />
                </div>
                {resume.headline && (
                    <p className="text-xl font-bold">{resume.headline}</p>
                )}
                {resume.summary && (
                    <p className="text-lg leading-relaxed max-w-prose">
                        {resume.summary}
                    </p>
                )}
                {resume.details && (
                    <ul className="flex flex-wrap gap-x-6 gap-y-1">
                        {resume.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                        ))}
                    </ul>
                )}
                <a
                    href={resume.pdfUrl}
                    download
                    className="inline-flex min-h-11 items-center rounded-md bg-plum px-5 font-display text-xl text-white hover:-rotate-2 transition-transform motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                    Download resume (PDF)
                </a>
            </header>

            {resume.sections.map((section) => (
                <section
                    key={section.id}
                    aria-labelledby={`${section.id}-heading`}
                    className="space-y-3"
                >
                    <h2 id={`${section.id}-heading`} className={sectionHeadingStyles}>
                        {section.heading}
                    </h2>
                    <ul className="space-y-3 sm:space-y-2">
                        {section.entries.map((entry) => (
                            <li
                                key={entry.id}
                                className="sm:grid sm:grid-cols-[2fr_1.5fr_2fr_7rem] sm:gap-x-4"
                            >
                                <span
                                    className={`block font-bold ${entry.role || entry.organization || entry.year ? "" : "sm:col-span-4 sm:font-normal"}`}
                                >
                                    {entry.title}
                                </span>
                                {entry.role && (
                                    <span className="block sm:col-start-2">{entry.role}</span>
                                )}
                                {entry.organization && (
                                    <span className="block sm:col-start-3">
                                        {entry.organization}
                                    </span>
                                )}
                                {entry.year && (
                                    <span className="block sm:col-start-4">{entry.year}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            <section id="contact" aria-labelledby="contact-heading" className="space-y-4">
                <h2 id="contact-heading" className={sectionHeadingStyles}>
                    Get in touch
                </h2>
                <ContactForm />
            </section>
        </div>
    );
}

/*
  ResumePage — "/resume" (stub in ROADMAP step 4.4, built in step 9.3)
  =====================================================================

  1. PURPOSE
     Shows Lily's resume as readable HTML, offers the PDF download, and ends
     with the contact form.

  2. WHAT IT RENDERS
     - <title>Resume · Lily Valentine</title>
     - <h1>Resume</h1>
     - A download link: <a href={resume.pdfUrl} download>Download resume
       (PDF)</a>
     - One <section> per resume section: an <h2> heading, then the entries as
       a list (title, role, organization, year)
     - A final <section> with <h2>Get in touch</h2> and <ContactForm />

  3. PROPS
     None. Reads `resume` from src/data/resume.ts.

  4. STATE
     None. ContactForm owns its own state.

  5. CONCEPTS
     - Nested .map(): sections.map(section => ... section.entries.map(entry
       => ...)). Each level needs its own `key`.
     - Heading order: h1 for the page, h2 for each section. Screen-reader
       users skim pages by headings, so don't skip levels.
     - The `download` attribute: asks the browser to save the file instead of
       opening it. Say "(PDF)" in the link text so people know what they'll
       get.
     - Linking sections to headings: aria-labelledby on <section>, pointing
       at the <h2>'s id, names the region.

  NEW CONCEPTS (first time in this project)
     a) A map inside a map
        The inner list gets its own keys. Keys only need to be unique among
        siblings, not across the whole page.

          {teams.map((team) => (
            <li key={team.id}>
              {team.name}
              <ul>
                {team.players.map((player) => (
                  <li key={player.id}>{player.name}</li>
                ))}
              </ul>
            </li>
          ))}

        Docs: https://react.dev/learn/rendering-lists

     b) download and aria-labelledby
          <a href="/files/menu.pdf" download>Download the menu (PDF)</a>

          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading">FAQ</h2>
          </section>

        Docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download
              https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby

  6. STYLING
     - Readable width: `max-w-3xl`, `mx-auto`, `space-y-10`.
     - Entries: on phones, stack each entry's fields. On wider screens, try a
       simple grid row: `sm:grid`, `sm:grid-cols-[2fr_1fr_1fr_auto]`,
       `gap-x-4`.
     - Download link: a button-looking link, at least `min-h-11`, plum
       background with white text, and a focus ring.
     - Section headings: `font-display`, `text-white`, `text-3xl`.

  7. BUILD STEPS
     1. (Step 4.4) Stub: <title> and <h1>.
     2. (Step 9.3) Add the download link.
     3. Map the sections and entries.
     4. Add the contact section with <ContactForm />.

  8. YOUR TURN
     Write the nested map yourself. Decide whether entries read better as a
     <ul> or a <table>, and tell me why. Either can be right.

  9. DONE WHEN
     - Every section and entry from resume.ts shows, in order.
     - The PDF downloads.
     - The heading outline (try a "headings map" browser extension) is
       h1 > h2, h2, h2... with no gaps.
     - The contact form works at the bottom.
*/
