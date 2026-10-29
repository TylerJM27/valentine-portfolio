/*
  PhotoGrid — grid of captioned photos (ROADMAP step 8.2)
  =======================================================

  1. PURPOSE
     Lays out the performance photos in a responsive grid.

  2. WHAT IT RENDERS
     A <ul> grid with one <li> per photo, each holding <CaptionedPhoto />.

  3. PROPS
     - photos: PerformancePhoto[]

  4. STATE
     None.

  5. CONCEPTS
     - Why a list: a <ul> tells screen-reader users "list, 6 items" up front,
       so they know how much there is.
     - Container vs item: PhotoGrid only arranges, and CaptionedPhoto only
       displays. Small, single-job components are easier to change.

  6. STYLING
     - One column on phones, two on tablets, three on desktop. Look up:
       `grid`, `grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-3`, `gap-6`.
     - Mixed portrait and landscape photos: try `items-start` so each card
       keeps its own height. Later, consider a masonry look with `columns-2`
       / `columns-3` instead of grid.

  7. BUILD STEPS
     1. Props type.
     2. Map photos to <li><CaptionedPhoto photo={...} /></li> with key = id.
     3. Add the grid classes.

  8. YOUR TURN
     Write it, then try the `columns-*` approach too and compare.

  9. DONE WHEN
     - 1 / 2 / 3 columns at phone / tablet / desktop widths.
     - No sideways scroll at 375px.
*/
