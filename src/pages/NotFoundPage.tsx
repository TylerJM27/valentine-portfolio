import { Link, useLocation } from "react-router";
import { PageHeading } from "../components/PageHeading";
import { TapedNote } from "../components/TapedNote";
import { Exclamation } from "../components/doodles/Exclamation";
import { SquareSpiral } from "../components/doodles/SquareSpiral";
import { navItems } from "../data/navigation";
import { dashedButton, plumButton } from "../lib/buttonStyles";

export function NotFoundPage() {
    // useLocation gives the current URL, so the page can say which address
    // doesn't exist.
    const { pathname } = useLocation();

    return (
        <div className="relative py-8 space-y-10">
            <title>Page not found · Lily Valentine</title>

            <PageHeading>Page not found</PageHeading>

            <div className="relative max-w-xl">
                <TapedNote tilt="left" className="text-lg leading-relaxed space-y-2">
                    <p className="font-bold">Whoops! There’s nothing here.</p>
                    <p>
                        There’s no page at <span className="break-all font-bold">{pathname}</span>.
                        The link might have a typo, or the page may have moved.
                    </p>
                </TapedNote>
                <Exclamation className="hidden sm:block absolute -right-28 top-0 w-16 text-lime rotate-12 animate-float motion-reduce:animate-none" />
                <SquareSpiral className="hidden sm:block absolute -right-48 bottom-0 size-12 text-orange -rotate-6 animate-wiggle motion-reduce:animate-none" />
            </div>

            <Link
                to="/"
                className={plumButton}
            >
                Back to the home page
            </Link>

            <nav aria-labelledby="not-found-links" className="space-y-3">
                <h2 id="not-found-links" className="font-display text-white text-3xl">
                    Or try one of these
                </h2>
                <ul className="flex flex-wrap gap-3">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                className={dashedButton}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

/*
  NotFoundPage — any unknown URL (stub in ROADMAP step 4.4, finished in step 14.1)
  ================================================================================

  1. PURPOSE
     Catches mistyped or old links and gets the visitor back on track,
     instead of showing a blank page.

  2. WHAT IT RENDERS
     - <title>Page not found · Lily Valentine</title>
     - <h1>Page not found</h1> (something playful is fine, e.g. "Oops! No
       such page")
     - One line of explanation
     - A <Link to="/"> back home
     - A big <Exclamation /> doodle for fun (decorative)

  3. PROPS
     None.

  4. STATE
     None.

  5. CONCEPTS
     - The catch-all route: path "*" in routes.tsx matches anything no other
       route matched, so this page shows for every bad URL.
     - Deep links on Vercel: on the live site, a typo like /desing only
       reaches this page if vercel.json sends every URL to index.html (step
       8.1). Without that, Vercel shows its own 404.

  6. STYLING
     Centered and simple: `flex`, `flex-col`, `items-center`, `text-center`,
     `gap-6`, `py-24`. Heading in `font-display`, `text-white`, `text-5xl`.

  7. BUILD STEPS
     1. (Step 4.4) Stub: <title> and <h1>.
     2. (Step 14.1) Add the message, the home link and the doodle.

  8. YOUR TURN
     Write the copy and make it feel like Lily's site.

  9. DONE WHEN
     - /anything-made-up shows this page, with the header still there.
     - The home link works.
*/
