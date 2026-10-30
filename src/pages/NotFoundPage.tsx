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
