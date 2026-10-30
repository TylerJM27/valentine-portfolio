/*
  DesignPieceCard — one design piece (ROADMAP step 9.1)
  =====================================================

  1. PURPOSE
     Shows one graphic design piece: the image, its title, and a description.

  2. WHAT IT RENDERS
     <figure> containing:
       - <img> with src, alt, width, height from the data, loading="lazy"
       - <figcaption> holding an <h2> title and a <p> description

  3. PROPS
     - piece: DesignPiece

  4. STATE
     None.

  5. CONCEPTS
     - <figure> and <figcaption>: semantic HTML that ties a caption to its
       image, so assistive tech knows they belong together.
     - Lazy loading: loading="lazy" tells the browser not to download an
       image until it's about to scroll into view. Good for pages with many
       images below the fold.
     - width/height on <img>: even with CSS resizing the image, these let the
       browser reserve the right space before it loads, so the text below
       doesn't jump (layout shift).
     - Passing an object as a prop: one `piece` prop instead of four separate
       ones keeps the call site short and keeps the component tied to the
       data type.

  NEW CONCEPTS (first time in this project)
     a) <figure>, <figcaption> and lazy images
        figure groups an image with its caption. width/height (in pixels)
        reserve space before it loads, and loading="lazy" waits until it's
        near the screen.

          <figure>
            <img src="/charts/rainfall.png" alt="Bar chart: rain peaks in April"
                 width={800} height={450} loading="lazy" />
            <figcaption>Monthly rainfall, 2025</figcaption>
          </figure>

        Docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
              https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading

  6. STYLING
     - Phones: image on top, text below. Larger screens: side by side. Look
       up: `grid`, `gap-4`, `md:grid-cols-2`, `md:items-center`.
     - Image: fills its column without distorting. Look up: `w-full`,
       `h-auto`, plus a hand-drawn-feeling frame (`border-4`, `border-white`,
       `rounded-lg`, a slight `-rotate-1`).
     - Title: `font-display`, `text-white`, `text-3xl` (large, so white is
       OK). Description: body font in plum (the default text color).

  7. BUILD STEPS
     1. Props type with `piece: DesignPiece`.
     2. Render the figure, image and caption from `piece`.
     3. Add the lazy loading, width and height.
     4. Style for phones, then add `md:` columns.

  8. YOUR TURN
     Write it fully. It's the first card component, and CaptionedPhoto reuses
     its pattern later.

  9. DONE WHEN
     - It shows all three fields for a given piece.
     - With DevTools > Network throttled to "Slow 3G", the text doesn't jump
       when the image loads.
*/
