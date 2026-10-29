/*
  DirectingPage — "/directing" (stub in ROADMAP step 4.4, built in step 9.2)
  ==========================================================================

  1. PURPOSE
     Lily's directing work: several YouTube videos, each loading only when
     clicked.

  2. WHAT IT RENDERS
     - <title>Directing · Lily Valentine</title>
     - <h1>Directing</h1>
     - A list of <VideoCard video=... />, one per entry in directingVideos

  3. PROPS
     None. Reads from src/data/videos.ts.

  4. STATE
     None.

  5. CONCEPTS
     - Performance budget: without click-to-load, 3–4 YouTube embeds would
       download several MB of script before the visitor does anything. With
       it, the page loads only thumbnails.

  6. STYLING
     - One column on phones, two on large screens. Look up: `grid`, `gap-10`,
       `lg:grid-cols-2`.

  7. BUILD STEPS
     1. (Step 4.4) Stub: <title> and <h1>.
     2. (Step 9.2) Map directingVideos to <li><VideoCard /></li> inside a
        <ul>, with key = id.
     3. Add the grid.

  8. YOUR TURN
     Write it. Then compare the Network tab's total transfer size before and
     after clicking one video.

  9. DONE WHEN
     - All the videos show as thumbnails, and each plays after a click.
     - Initial page weight is small (note the number in DevTools).
*/
