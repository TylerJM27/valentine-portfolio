export function SkipLink() {
    return (
        <a
            href="#content"
            className="focus:bg-white focus:text-plum focus:p-4 focus:rounded-md sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
        >
            Skip to content.
        </a>
    );
}

/*
  SkipLink — "Skip to content" for keyboard users (ROADMAP step 4.3)
  ==================================================================

  1. PURPOSE
     Lets keyboard and screen-reader users jump past the header and nav
     straight to the page content, instead of tabbing through six links on
     every page.

  2. WHAT IT RENDERS
     An <a href="#content"> with the text "Skip to content". It's invisible
     until it gets keyboard focus, then it appears in the top-left corner.

  3. PROPS
     None.

  4. STATE
     None.

  5. CONCEPTS
     - Visually hidden is not the same as hidden. `sr-only` hides something
       from the eye but keeps it for screen readers and keyboard focus;
       `display: none` would remove it for everyone.

  NEW CONCEPTS (first time in this project)
     a) State variants: focus: and focus-visible:
        A prefix applies a class only in that state. `focus:` applies on any
        focus. `focus-visible:` applies only when the browser would show a
        focus ring (usually keyboard focus, not a mouse click).

          <button className="bg-white focus:bg-lime focus-visible:outline-2">
            Save
          </button>

        Docs: https://tailwindcss.com/docs/hover-focus-and-other-states

     b) sr-only and not-sr-only
        `sr-only` hides something visually but keeps it for screen readers.
        `not-sr-only` undoes it, so it's often combined with a state variant.

          <span className="sr-only">Close dialog</span>

        Docs: https://tailwindcss.com/docs/display#screen-reader-only

  6. STYLING
     Look up: `sr-only`, `focus:not-sr-only`, `focus:absolute`, `focus:top-2`,
     `focus:left-2`, `focus:z-50`, plus a high-contrast look while shown
     (white background, plum text, padding, rounded corners).

  7. BUILD STEPS
     1. Return the <a> with href="#content".
     2. Add the hidden-until-focused classes.
     3. Style the focused state so it's clearly visible.

  8. YOUR TURN
     Write it, load any page, and press Tab once.

  9. DONE WHEN
     - It's invisible when you use the mouse.
     - The first Tab shows it. Pressing Enter moves focus into <main>, so the
       next Tab lands on the first link in the page, not in the nav.
*/
