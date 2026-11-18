import { Flipbook } from "../components/Flipbook";
import { PageHeading } from "../components/PageHeading";
import { TapedNote } from "../components/TapedNote";
import { Exclamation } from "../components/doodles/Exclamation";
import { Spiral } from "../components/doodles/Spiral";
import { SquareSpiral } from "../components/doodles/SquareSpiral";
import { Star } from "../components/doodles/Star";
import { writingPacket, writingPhoto } from "../data/writing";

// Side doodles only show from lg up, either side of the flipbook page.
const sideDoodle = "hidden lg:block absolute motion-reduce:animate-none";

export function WritingPage() {
    return (
        <div className="relative pt-8 space-y-10">
            <title>Writing · Lily Valentine</title>

            <SquareSpiral className={`${sideDoodle} top-[30%] left-6 size-16 text-orange -rotate-6 animate-float [animation-delay:-2s]`} />
            <Spiral className={`${sideDoodle} top-[40%] right-10 size-24 text-orange animate-spin-slow`} />
            <Star className={`${sideDoodle} top-[52%] left-12 size-14 text-lime -rotate-12 animate-float [animation-delay:-4s]`} />
            <Star className={`${sideDoodle} top-[64%] right-20 size-10 text-lime rotate-6 animate-float [animation-delay:-1s]`} />
            <Spiral className={`${sideDoodle} top-[76%] left-8 size-16 text-lime animate-spin-slow [animation-direction:reverse]`} />
            <SquareSpiral className={`${sideDoodle} top-[88%] right-12 size-12 text-orange rotate-12 animate-float [animation-delay:-3s]`} />

            {/* Phones and tablets: heading, photo, then the hint right above
                the flipbook it explains.
                lg and up: heading and hint on the left, the photo on the
                right spanning both rows. */}
            <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[20rem_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-14">
                <div className="lg:col-start-1 lg:row-start-1">
                    <PageHeading>Writing</PageHeading>
                </div>

                <figure className="relative mx-auto w-full max-w-md lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:max-w-2xl lg:mr-0">
                    <img
                        src={writingPhoto.image.src}
                        alt={writingPhoto.image.alt}
                        width={writingPhoto.image.width}
                        height={writingPhoto.image.height}
                        className="w-full h-auto rounded-md border-8 border-white shadow-xl rotate-2"
                    />
                    {/* The caption overlaps the bottom of the photo a little,
                        like a note taped onto it. */}
                    <TapedNote
                        as="figcaption"
                        tilt="left"
                        className="-mt-4 mx-4 text-sm font-bold leading-snug sm:mx-8"
                    >
                        {writingPhoto.caption}
                    </TapedNote>
                    <Exclamation className="hidden lg:block absolute top-1/3 -left-12 w-10 text-lime -rotate-12 animate-float motion-reduce:animate-none" />
                </figure>

                <p className="max-w-prose text-lg leading-relaxed lg:col-start-1 lg:row-start-2">
                    Scroll down to flip through the pages, or use the Prev and Next
                    buttons. The full packet is also available as a PDF.
                </p>
            </div>

            <Flipbook packet={writingPacket} />
        </div>
    );
}

/*
  WritingPage — "/writing" (stub in ROADMAP step 4.4, built in step 10.3)
  =======================================================================

  1. PURPOSE
     Shows Lily's writing packet as a scroll-driven flipbook, with an easy
     link to the full PDF.

  2. WHAT IT RENDERS
     - <title>Writing · Lily Valentine</title>
     - <h1>Writing</h1>
     - A short intro: what the packet is, plus a hint like "Scroll to flip
       through, or use the buttons."
     - <Flipbook packet={writingPacket} />
     - Some ordinary content (or the end of the page) after the flipbook, so
       you can check that scrolling carries on normally past it.

  3. PROPS
     None. Reads from src/data/writing.ts.

  4. STATE
     None. Flipbook handles it.

  5. CONCEPTS
     - Telling people how it works: a scroll-driven effect surprises people.
       One line of instructions helps everyone, including users who can't
       scroll easily.
     - Fallbacks: the PDF link inside Flipbook means the writing is readable
       even if the scroll effect fails.

  6. STYLING
     - Intro: `max-w-prose`, `text-lg`, plum.
     - Leave space below the flipbook (`pb-24`) so the last page isn't stuck
       against the page bottom.

  7. BUILD STEPS
     1. (Step 4.4) Stub: <title> and <h1>.
     2. (Step 10.3) Add the intro and <Flipbook />.
     3. Check the whole page from top to bottom on a phone.

  8. YOUR TURN
     Write the intro text and the page. Most of the work is in Flipbook.

  9. DONE WHEN
     - You can scroll into the flipbook, through all pages, and out again
       without it ever feeling stuck.
     - The PDF link is visible without scrolling through all 15 pages.
*/
