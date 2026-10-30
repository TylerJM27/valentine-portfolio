/*
  PerformancePage — "/performance" (stub in ROADMAP step 4.4, built in step 10.4)
  ===============================================================================

  1. PURPOSE
     Lily's acting work: a looping video right at the top, then production
     photos with captions.

  2. WHAT IT RENDERS
     - <title>Performance · Lily Valentine</title>
     - <h1>Performance</h1>. The video should be at the very top, so either
       make the h1 visually hidden (`sr-only`) or keep it small above the
       video. Your design call.
     - <LoopingVideo video={performanceVideo} />
     - <PhotoGrid photos={performancePhotos} />

  3. PROPS
     None. Reads from src/data/performance.ts.

  4. STATE
     None. The video handles its own play/pause state.

  5. CONCEPTS
     - Composition: this page has almost no logic of its own. It puts
       finished components together and hands them data. Most pages should
       look like this.
     - Above vs below the fold: the video is at the top, so it loads right
       away. The photos are below the fold, so lazy loading pays off here.

  6. STYLING
     - Vertical rhythm: `space-y-12` between the video and the grid.
     - Optionally an h2 like "Production photos" above the grid, in
       `font-display`, `text-white`.

  7. BUILD STEPS
     1. (Step 4.4) Stub: <title> and <h1>.
     2. (Step 10.4) Add PhotoGrid with the data.
     3. Add LoopingVideo above it.
     4. Decide how to show the h1.

  8. YOUR TURN
     Write it. It should be short; if it isn't, something belongs in a
     component.

  9. DONE WHEN
     - Video on top, playing silently, with its pause button.
     - Photos below in the responsive grid.
     - There's exactly one h1 (visible or not).
*/
