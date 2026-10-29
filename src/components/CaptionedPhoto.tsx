/*
  CaptionedPhoto — one performance photo with caption (ROADMAP step 8.1)
  ======================================================================

  1. PURPOSE
     Shows one production photo with its caption and optional photo credit,
     on the Performance page.

  2. WHAT IT RENDERS
     <figure> containing:
       - <img> (lazy, with width and height)
       - <figcaption> with the caption, and the credit if there is one

  3. PROPS
     - photo: PerformancePhoto
       (The type is PerformancePhoto, not CaptionedPhoto, so it doesn't clash
        with this component's name.)

  4. STATE
     None.

  5. CONCEPTS
     - Rendering optional data: `credit` may be missing. Use
       `{photo.credit && <span>...</span>}`, which shows nothing when there's
       no credit. (Watch out: with numbers, a 0 would render as "0". Strings
       are safe.)
     - Reuse: this is the same idea as DesignPieceCard. If they end up nearly
       identical, notice it, but don't merge them yet; they'll likely diverge.

  6. STYLING
     - Image: `w-full`, `h-auto`, a white border like the design cards,
       `rounded-md`.
     - Caption: body font, plum, `text-base`. Credit: smaller (`text-sm`) but
       still plum. Check its contrast, and don't lighten it.

  7. BUILD STEPS
     1. Props type.
     2. Figure, image, caption.
     3. Conditionally render the credit.

  8. YOUR TURN
     Write it. Give one placeholder photo a credit and leave it off another,
     to test both cases.

  9. DONE WHEN
     - A photo with a credit shows it, and one without shows no empty gap.
*/
