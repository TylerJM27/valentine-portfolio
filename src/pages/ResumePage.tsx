import { ContactForm } from "../components/ContactForm";
import { PageHeading } from "../components/PageHeading";
import { TapedNote } from "../components/TapedNote";
import { Exclamation } from "../components/doodles/Exclamation";
import { Spiral } from "../components/doodles/Spiral";
import { SquareSpiral } from "../components/doodles/SquareSpiral";
import { Star } from "../components/doodles/Star";
import { resume } from "../data/resume";
import { dashedButton, plumButton } from "../lib/buttonStyles";

const sectionHeadingStyles = "font-display text-white text-3xl";

export function ResumePage() {
    const { photo } = resume;

    return (
        <div className="relative py-8 space-y-12">
            <title>Resume · Lily Valentine</title>

            <PageHeading
                actions={
                    <a
                        href={resume.pdfUrl}
                        download
                        className={plumButton}
                    >
                        Download resume (PDF)
                    </a>
                }
            >
                Resume
            </PageHeading>

            {/* Phones: document, then the photo below it.
                md and up: document on the left, the photo in a narrow column
                on the right that stays in view (sticky) while you scroll. */}
            <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_15rem] lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16 md:items-start">
                <div className="space-y-8">
                    {/* The resume as a sheet of paper. An image works on every
                        phone, where an embedded PDF often doesn't. Clicking it
                        opens the full PDF in a new tab, so phones can zoom in. */}
                    <a
                        href={resume.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/paper relative block -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-[scale,rotate] duration-300 ease-out motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
                    >
                        <img
                            src={resume.pageImage.src}
                            alt={resume.pageImage.alt}
                            width={resume.pageImage.width}
                            height={resume.pageImage.height}
                            className="w-full h-auto rounded-sm bg-white shadow-2xl"
                        />
                        {/* A visible cue that the paper is clickable (phones
                            have no hover). Its text is part of the link's name. */}
                        <span className="absolute bottom-3 right-3 inline-flex min-h-11 items-center gap-1 rounded-full bg-plum px-4 font-bold text-white shadow-lg group-hover/paper:-rotate-3 transition-[rotate] motion-reduce:transition-none">
                            Open PDF
                            <span aria-hidden="true">↗</span>
                            <span className="sr-only">(opens in a new tab)</span>
                        </span>
                    </a>

                    {/* The same resume as real text, for screen readers,
                        search engines, and anyone who wants to copy a line. */}
                    <details className="group">
                        <summary
                            className={`${dashedButton} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
                        >
                            <span
                                aria-hidden="true"
                                className="inline-block transition-transform group-open:rotate-45 motion-reduce:transition-none"
                            >
                                +
                            </span>
                            Read as text
                        </summary>

                        <div className="mt-6 space-y-8">
                            <div className="space-y-2">
                                <p className="font-display text-white text-3xl">Lily Valentine</p>
                                {resume.headline && (
                                    <p className="text-xl font-bold">{resume.headline}</p>
                                )}
                                {resume.details && (
                                    <ul className="flex flex-wrap gap-x-6 gap-y-1">
                                        {resume.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                                {resume.summary && (
                                    <p className="max-w-prose text-lg italic leading-relaxed">
                                        {resume.summary}
                                    </p>
                                )}
                            </div>

                            {resume.sections.map((section) => (
                                <section
                                    key={section.id}
                                    aria-labelledby={`${section.id}-heading`}
                                    className="space-y-3"
                                >
                                    <h2
                                        id={`${section.id}-heading`}
                                        className={sectionHeadingStyles}
                                    >
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
                                                    <span className="block sm:col-start-2">
                                                        {entry.role}
                                                    </span>
                                                )}
                                                {entry.organization && (
                                                    <span className="block sm:col-start-3">
                                                        {entry.organization}
                                                    </span>
                                                )}
                                                {entry.year && (
                                                    <span className="block sm:col-start-4">
                                                        {entry.year}
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>
                    </details>
                </div>

                {photo && (
                    <figure className="mx-auto w-full max-w-xs md:sticky md:top-8 md:max-w-none">
                        <div className="relative">
                            {/* A plum circle behind the cut-out photo, so the
                                coral suit doesn't blend into the pink. */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-[6%] top-[4%] aspect-square rounded-full bg-plum"
                            />
                            <img
                                src={photo.image.src}
                                alt={photo.image.alt}
                                width={photo.image.width}
                                height={photo.image.height}
                                loading="lazy"
                                className="relative w-full aspect-[30/34] object-cover object-bottom drop-shadow-xl"
                            />
                            <Star className="absolute -top-2 right-0 size-10 text-lime rotate-12 animate-wiggle motion-reduce:animate-none" />
                            <Spiral className="absolute top-1/3 -left-4 size-9 text-orange animate-spin-slow motion-reduce:animate-none" />
                        </div>
                        <TapedNote as="figcaption" className="mt-6 leading-snug">
                            {photo.caption}
                        </TapedNote>
                    </figure>
                )}
            </div>

            <section
                id="contact"
                aria-labelledby="contact-heading"
                className="relative max-w-3xl space-y-4 scroll-mt-8"
            >
                <h2 id="contact-heading" className={sectionHeadingStyles}>
                    Get in touch
                </h2>
                <ContactForm />
                <Exclamation className="hidden lg:block absolute top-4 -right-40 w-16 text-lime rotate-12 animate-float motion-reduce:animate-none" />
                <SquareSpiral className="hidden lg:block absolute bottom-10 -right-64 size-14 text-orange -rotate-12 animate-wiggle motion-reduce:animate-none" />
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
