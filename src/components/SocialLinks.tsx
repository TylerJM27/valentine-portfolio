/*
  SocialLinks — the row of social icons (ROADMAP step 10.2)
  =========================================================

  1. PURPOSE
     The group of social icon links near the bottom of the homepage
     (Instagram and email for now).

  2. WHAT IT RENDERS
     A <ul> with one <li> per link, each holding <SocialIconLink />.

  3. PROPS
     - links: SocialLink[]

  4. STATE
     None.

  5. CONCEPTS
     - Passing data down instead of importing it: HomePage reads the profile
       and passes `profile.socialLinks` here. That keeps this component
       reusable (e.g. in a footer later) and easy to test with fake data.

  6. STYLING
     Look up: `flex`, `gap-4`, `items-center`. Remove list bullets with
     `list-none` (Tailwind's base styles usually already do this).

  7. BUILD STEPS
     1. Props type.
     2. Map links to <li><SocialIconLink link={...} /></li>. The key can be
        `platform`, since each platform appears once.
     3. Add the row styling.

  8. YOUR TURN
     Write it. It should take about two minutes by now.

  9. DONE WHEN
     - Both icons show in a row with comfortable spacing on phones.
*/
