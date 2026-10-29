/*
  DesignPage — "/design" (stub in ROADMAP step 4.4, built in step 7.2)
  ====================================================================

  1. PURPOSE
     Lily's graphic design pieces, each with an image and a description.
     This is the first real content page you'll build.

  2. WHAT IT RENDERS
     - <title>Design · Lily Valentine</title>
     - <h1>Design</h1>
     - A <ul> of <DesignPieceCard piece=... />, one per entry in designPieces

  3. PROPS
     None. Reads from src/data/designPieces.ts.

  4. STATE
     None.

  5. CONCEPTS
     - The data → page → component flow: the page imports the array, maps
       over it, and hands each item to a card as a prop. Every other content
       page follows this pattern, so get comfortable with it here.

  6. STYLING
     - Space between pieces: `space-y-16` on the list.
     - Optional: flip the image/text sides on every other piece for variety
       (look up the `odd:` / `even:` variants, or use the map's index).

  7. BUILD STEPS
     1. (Step 4.4) Stub: <title> and <h1>.
     2. (Step 7.2) Import designPieces and map to <li><DesignPieceCard /></li>
        with key = id.
     3. Add spacing, and optionally the alternating layout.

  8. YOUR TURN
     All yours. It's the first time you'll use .map() for real.

  9. DONE WHEN
     - All three placeholder pieces show, in data order.
     - Adding a fourth entry to designPieces.ts makes a fourth card appear
       without touching this file.
*/
