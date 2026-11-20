import { Link } from "react-router";
import { ProjectPoster } from "../components/ProjectPoster";
import { StarburstPhoto } from "../components/StarburstPhoto";
import { WavyWords } from "../components/WavyWords";
import { Exclamation } from "../components/doodles/Exclamation";
import { Spiral } from "../components/doodles/Spiral";
import { SquareSpiral } from "../components/doodles/SquareSpiral";
import { Star } from "../components/doodles/Star";
import { WavyLine } from "../components/doodles/WavyLine";
import { currentProjects } from "../data/currentProjects";
import { profile } from "../data/profile";
import { plumButton } from "../lib/buttonStyles";
import { posterMotion } from "../lib/posterMotion";

const sectionHeading = "font-display text-white text-4xl sm:text-5xl leading-tight pb-1";

export function HomePage() {
    return (
        <div className="relative py-8 space-y-16 md:space-y-20">
            <title>{profile.name}</title>
            {/* The site name in the header is a link, so the page's h1 is
                hidden text that also gives screen readers the scrolling roles. */}
            <h1 className="sr-only">
                {profile.name}: {profile.roles.join(", ")}
            </h1>

            {/* Hero */}
            {/* Phones: photo, then the ribbons below it.
                md and up: the ribbons become a full-width band across the
                screen (the full-bleed trick from the marquees), centered on
                the hero, and the photo sits on top of them (z-10). */}
            <section aria-label="Introduction" className="relative">
                <div className="relative z-10 md:w-1/2">
                    <StarburstPhoto
                        silly={profile.headshots.silly}
                        serious={profile.headshots.serious}
                    />
                    {/* Goes to the contact form at the bottom of the Resume
                        page (#contact is that section's id).
                        The wrapper copies the star's box (w-full max-w-md
                        mx-auto, see StarburstPhoto), so the button's left edge
                        can line up with the star's leftmost point. That point
                        is at 1% of the box, and the white outline (always
                        3px wide: non-scaling-stroke) pokes 1.5px further out,
                        hence ml-[calc(1%-1.5px)]. A margin in % is measured
                        against the wrapper's width, so it stays lined up at
                        every size. */}
                    <div className="mt-6 md:-mt-6 w-full max-w-md mx-auto">
                        <Link
                            to="/resume#contact"
                            className={`${plumButton} ml-[calc(1%_-_1.5px)]`}
                        >
                            Contact me
                        </Link>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:w-screen md:-ml-[50vw]">
                    <WavyWords words={profile.roles} />
                </div>
                <Spiral className="hidden lg:block absolute -top-6 right-12 size-12 text-lime animate-spin-slow motion-reduce:animate-none" />
                <Star className="hidden lg:block absolute -bottom-4 right-1/4 size-10 text-orange animate-wiggle motion-reduce:animate-none" />
            </section>

            {/* Artistic statement */}
            <section
                aria-labelledby="statement-heading"
                className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center"
            >
                <div className="space-y-5">
                    <h2 id="statement-heading" className={sectionHeading}>
                        Artistic Statement
                    </h2>
                    <p className="max-w-prose text-xl leading-relaxed">{profile.statement}</p>
                </div>
                <img
                    src={profile.statementPhoto.src}
                    alt={profile.statementPhoto.alt}
                    width={profile.statementPhoto.width}
                    height={profile.statementPhoto.height}
                    loading="lazy"
                    className="w-full aspect-video object-cover object-top rounded-md border-8 border-white shadow-xl rotate-2"
                />
                <SquareSpiral className="hidden md:block absolute -bottom-12 right-1/3 size-14 text-orange animate-wiggle motion-reduce:animate-none" />
                <Spiral className="hidden md:block absolute -top-10 right-6 size-10 text-lime animate-spin-slow [animation-direction:reverse] motion-reduce:animate-none" />
            </section>

            <WavyLine className="w-full h-3 text-white" />

            {/* About */}
            <section aria-labelledby="about-heading" className="relative lg:pr-44">
                <div className="space-y-5">
                    <h2 id="about-heading" className={sectionHeading}>
                        About
                    </h2>
                    <div className="space-y-4 text-lg leading-relaxed">
                        {profile.bio.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                    <Link to="/resume" className={plumButton}>
                        See my resume
                    </Link>
                </div>
                <Exclamation className="hidden lg:block absolute right-12 top-8 w-32 text-lime rotate-12 animate-float motion-reduce:animate-none" />
                <SquareSpiral className="hidden lg:block absolute right-4 bottom-24 size-16 text-orange -rotate-6 animate-wiggle [animation-delay:-1s] motion-reduce:animate-none" />
                {profile.cartoon && (
                    <img
                        src={profile.cartoon.src}
                        alt={profile.cartoon.alt}
                        width={profile.cartoon.width}
                        height={profile.cartoon.height}
                        loading="lazy"
                        className="mt-8 ml-auto w-40 lg:absolute lg:right-0 lg:bottom-0 lg:mt-0"
                    />
                )}
            </section>

            <WavyLine className="w-full h-3 text-white" />

            {/* Right Now preview */}
            <section aria-labelledby="right-now-heading" className="space-y-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <h2 id="right-now-heading" className={sectionHeading}>
                        Right Now
                    </h2>
                    <Link to="/right-now" className={plumButton}>
                        See all shows
                    </Link>
                </div>
                <ul className="grid gap-10 sm:grid-cols-3">
                    {currentProjects.map((project, index) => (
                        <li key={project.id} className="mx-auto w-full max-w-72 sm:max-w-none">
                            <Link
                                to="/right-now"
                                className={`${posterMotion(index)} space-y-3 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4`}
                            >
                                <ProjectPoster project={project} />
                                <span className="block">
                                    <span className="block font-display text-white text-2xl">
                                        {project.title}
                                    </span>
                                    <span className="block font-bold">
                                        {project.date} · {project.time}
                                    </span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
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
