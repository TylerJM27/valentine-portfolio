import { useCallback, useState } from "react";
import { ImageMarquee } from "../components/ImageMarquee";
import { PageHeading } from "../components/PageHeading";
import { PauseButton } from "../components/PauseButton";
import { VideoCard } from "../components/VideoCard";
import { Exclamation } from "../components/doodles/Exclamation";
import { Spiral } from "../components/doodles/Spiral";
import { SquareSpiral } from "../components/doodles/SquareSpiral";
import { performancePhotos, performanceVideos } from "../data/performance";

const half = Math.ceil(performancePhotos.length / 2);
const topRow = performancePhotos.slice(0, half);
const bottomRow = performancePhotos.slice(half);

// Much shorter than the Design rows, so the video stays the focus.
const rowHeight = "h-32 sm:h-36 lg:h-40";
// Full-bleed: break out of the page's max width to the screen edges.
const fullBleed = "relative left-1/2 w-screen -ml-[50vw]";

export function PerformancePage() {
    // Two separate reasons the rows can be stopped:
    // - pausedByButton: the visitor pressed "Pause photos".
    // - pausedForVideo: a video is playing right now.
    // The rows stop if either is true. Keeping them apart means pausing the
    // video only restarts the rows if the video is what stopped them.
    const [pausedByButton, setPausedByButton] = useState(false);
    const [pausedForVideo, setPausedForVideo] = useState(false);
    const paused = pausedByButton || pausedForVideo;

    // useCallback keeps these the same function between renders. The video
    // library re-subscribes to YouTube whenever its callbacks change, so a
    // new arrow function on every render would make it redo that work.
    const handleVideoPlay = useCallback(() => setPausedForVideo(true), []);
    const handleVideoStop = useCallback(() => setPausedForVideo(false), []);

    function togglePause() {
        if (paused) {
            // "Play photos" always restarts the rows, even mid-video.
            setPausedByButton(false);
            setPausedForVideo(false);
        } else {
            setPausedByButton(true);
        }
    }

    return (
        <div className="relative py-8 space-y-8">
            <title>Performance · Lily Valentine</title>

            <PageHeading
                actions={
                    <PauseButton
                        paused={paused}
                        onToggle={togglePause}
                        label="photos"
                    />
                }
            >
                Performance
            </PageHeading>

            <div className={fullBleed}>
                <ImageMarquee
                    items={topRow}
                    direction="right"
                    paused={paused}
                    eager
                    imageHeight={rowHeight}
                    repeat={3}
                />
            </div>

            {/* While a video plays, both photo rows stop; when it's paused or
                ends, they start again. */}
            <section
                aria-label="Videos"
                className="relative mx-auto max-w-3xl lg:max-w-5xl space-y-16 py-2"
            >
                {performanceVideos.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        onPlay={handleVideoPlay}
                        onStop={handleVideoStop}
                    />
                ))}
                <Spiral className="hidden xl:block absolute top-2 -left-16 size-12 text-lime animate-spin-slow motion-reduce:animate-none" />
                <SquareSpiral className="hidden xl:block absolute bottom-4 -left-14 size-12 text-orange -rotate-12 animate-wiggle motion-reduce:animate-none" />
                <Exclamation className="hidden lg:block absolute top-0 right-6 w-12 text-lime rotate-12 animate-float motion-reduce:animate-none" />
            </section>

            <div className={fullBleed}>
                <ImageMarquee
                    items={bottomRow}
                    direction="left"
                    paused={paused}
                    imageHeight={rowHeight}
                    repeat={3}
                />
            </div>
        </div>
    );
}

/*
  PerformancePage — "/performance" (stub in ROADMAP step 4.4, built in step 12.4)
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
     2. (Step 12.4) Add PhotoGrid with the data.
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
