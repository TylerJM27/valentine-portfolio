/*
  ResumePage — "/resume" (stub in ROADMAP step 4.4, built in step 11.3)
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
     2. (Step 11.3) Add the download link.
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
