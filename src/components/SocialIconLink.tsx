/*
  SocialIconLink — one icon-only social link (ROADMAP step 10.1)
  ==============================================================

  1. PURPOSE
     A single social link (Instagram or email) shown as just an icon, but
     with a proper accessible name and a big enough tap target.

  2. WHAT IT RENDERS
     <a href={link.href} aria-label={link.label}> containing the right icon
     for `link.platform` (InstagramIcon or EmailIcon).

  3. PROPS
     - link: SocialLink

  4. STATE
     None.

  5. CONCEPTS
     - Accessible name on icon-only links: without aria-label, a screen
       reader would say just "link". aria-label gives it the name "Lily on
       Instagram".
     - Picking a component from data: a lookup object with the type
       Record<SocialPlatform, ComponentType<{ className?: string }>> maps
       "instagram" to InstagramIcon and "email" to EmailIcon. Record<K, V>
       means "an object with exactly these keys, each holding a V". If a new
       platform is added to SocialPlatform, TypeScript errors here until it
       has an icon.
     - New tabs: opening Instagram in a new tab surprises some users. Either
       keep the same tab, or, if you use target="_blank", add
       rel="noopener noreferrer" and mention "(opens in new tab)" in the
       label.

  6. STYLING
     - Tap target at least 44×44px. Look up: `inline-flex`, `size-11`,
       `items-center`, `justify-center`.
     - Icon: `size-7`, `text-white`.
     - Hover/focus: a small playful change (`hover:rotate-6`,
       `transition-transform`, `motion-reduce:transition-none`) and a clear
       `focus-visible:outline-*`.

  7. BUILD STEPS
     1. Props type.
     2. Write the platform-to-icon lookup object outside the component.
     3. Look up the icon for link.platform and render it inside the <a>.
     4. Add aria-label and the size classes.

  8. YOUR TURN
     Write the Record lookup. It's the first time you'll use a component
     stored in a variable, and its name must start with a capital letter to
     render.

  9. DONE WHEN
     - Each link shows the right icon and goes to the right place.
     - The DevTools accessibility pane shows names like "Lily on Instagram".
     - The tap area measures at least 44×44px in DevTools.
*/
