export function HomePage() {
    return (
        <div>
            <title>Home Page</title>
            <h1 className="flex justify-center text-5xl font-display text-white">
                Home Page
            </h1>
        </div>
    );
}

/*
  HomePage — "/" (stub in ROADMAP step 4.4, built in step 7.5)
  ============================================================

  1. PURPOSE
     The landing page from the sketch: headshot in a starburst on the left,
     "About" and the bio on the right, social icons near the bottom, a cartoon
     Lily in the bottom-right corner, and doodles everywhere.

  2. WHAT IT RENDERS
     - <title>Lily Valentine</title>
     - A two-column area:
         left:  <StarburstPhoto silly=... serious=... />
         right: <h1>About</h1>, the bio paragraphs, a <Link to="/resume">
                ("See my resume"), and <SocialLinks links=... />
     - The cartoon Lily image, bottom right (if profile.cartoon exists)
     - Doodles: the big lime <Exclamation />, a few <Spiral />s and
       <SquareSpiral />s placed around the edges, as in the sketch

  3. PROPS
     None. Pages read their own data: `profile` from src/data/profile.ts.

  4. STATE
     None directly. StarburstPhoto handles its own fading.

  5. CONCEPTS
     - Page titles in React 19: rendering <title> anywhere in a component
       moves it into the document <head>. Each page sets its own, with no
       extra library.
     - Pages own their data: the page imports from src/data/ and passes
       pieces down as props. Later, only the page changes when data comes
       from an API.
     - One <h1> per page: here it's "About". The site name in the header is a
       link, not a heading.
     - Body text contrast: bio text is plum on pink (about 5:1). White is
       only for large text like the "About" heading.

  NEW CONCEPTS (first time in this project)
     a) <title> inside a component (needed for the step 4.4 stub)
        React 19 moves a rendered <title> into the document <head>. It needs
        a single string, so build mixed text with a template literal.

          function Inbox({ unread }: { unread: number }) {
            return (
              <section>
                <title>{`Inbox (${unread})`}</title>
                <h1>Inbox</h1>
              </section>
            );
          }

        Docs: https://react.dev/reference/react-dom/components/title

     b) Grid columns in Tailwind (needed in step 7.5)
        `grid` turns on CSS grid, and `grid-cols-*` sets the number of
        equal columns. Combined with a responsive prefix:

          <ul className="grid gap-4 sm:grid-cols-3">  one column on phones, three from sm up

        Docs: https://tailwindcss.com/docs/grid-template-columns

  6. STYLING
     - Phones: one column, photo first, then text. Desktop: two columns. Look
       up: `grid`, `gap-8`, `md:grid-cols-2`, `md:items-center`.
     - Heading: `font-display`, `text-white`, `text-5xl`, with a hand-drawn
       underline (`underline`, `decoration-white`, `underline-offset-8`).
     - Bio: `text-lg`, `leading-relaxed`, `space-y-4`, `max-w-prose`.
     - Doodles and cartoon: `relative` on the page wrapper, then `absolute`
       with `top-*` / `right-*` / `bottom-*`. Hide some on phones with
       `hidden lg:block`, so they never cover text.

  7. BUILD STEPS
     1. (Step 4.4) Stub: just <title> and <h1>About</h1>.
     2. (Step 7.5) Add the grid with StarburstPhoto and the bio.
     3. Add the resume link and SocialLinks.
     4. Add the cartoon (once it exists) and the doodles.
     5. Check at 375px, 768px and 1280px against docs/homepage-sketch.jpg.

  8. YOUR TURN
     The layout is all yours. Treat the sketch as a mood, not a pixel-perfect
     spec, especially on phones.

  9. DONE WHEN
     - At desktop width it looks like the sketch.
     - On a phone it's one clean column with no sideways scroll, and no
       doodle covers text.
     - The tab order goes: nav, resume link, Instagram, email.
     - The browser tab says "Lily Valentine".
*/
