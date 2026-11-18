import { useState } from "react";
import { ImageMarquee } from "../components/ImageMarquee";
import { PageHeading } from "../components/PageHeading";
import { PauseButton } from "../components/PauseButton";
import { designPieces } from "../data/designPieces";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const half = Math.ceil(designPieces.length / 2);
const topRow = designPieces.slice(0, half);
const bottomRow = designPieces.slice(half);

export function DesignPage() {
    const [paused, setPaused] = useState(false);
    const reduceMotion = usePrefersReducedMotion();

    return (
        <div className="py-8 space-y-6">
            <title>Design · Lily Valentine</title>

            <PageHeading
                actions={
                    <PauseButton
                        paused={paused}
                        onToggle={() => setPaused((p) => !p)}
                        label="posters"
                    />
                }
            >
                Design
            </PageHeading>
            <p className="max-w-prose text-lg">
                Posters and show art, mostly hand-drawn.
                {!reduceMotion && " Hover over a row to pause it."}
            </p>

            {/* Full-bleed: break out of the page's max width to the screen edges. */}
            <div className="relative left-1/2 w-screen -ml-[50vw] space-y-4">
                <ImageMarquee items={topRow} direction="right" paused={paused} eager />
                <ImageMarquee items={bottomRow} direction="left" paused={paused} />
            </div>
        </div>
    );
}

/*
  DesignPage — "/design" (stub in ROADMAP step 4.4, built in step 11.2)
  ====================================================================

  1. PURPOSE
     Lily's graphic design pieces, each with an image and a description.
     This is the first content page after launch, and it sets the pattern
     the other content pages copy.

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

  NEW CONCEPTS (first time in this project)
     a) odd: / even: variants, or the map index
        Tailwind can style every other list item. .map() also passes each
        item's position as a second argument, if you need it in logic.

          <li className="odd:bg-white even:bg-lime">...</li>

          rows.map((row, index) => (
            <li key={row.id}>{index + 1}. {row.name}</li>
          ))

        Docs: https://tailwindcss.com/docs/hover-focus-and-other-states#first-last-odd-and-even

  6. STYLING
     - Space between pieces: `space-y-16` on the list.
     - Optional: flip the image/text sides on every other piece for variety
       (look up the `odd:` / `even:` variants, or use the map's index).

  7. BUILD STEPS
     1. (Step 4.4) Stub: <title> and <h1>.
     2. (Step 11.2) Import designPieces and map to <li><DesignPieceCard /></li>
        with key = id.
     3. Add spacing, and optionally the alternating layout.

  8. YOUR TURN
     All yours. You used .map() in NavLinks; this time each item becomes a
     whole card.

  9. DONE WHEN
     - All three placeholder pieces show, in data order.
     - Adding a fourth entry to designPieces.ts makes a fourth card appear
       without touching this file.
*/
