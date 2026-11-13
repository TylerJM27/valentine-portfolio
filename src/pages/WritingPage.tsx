import { Flipbook } from "../components/Flipbook";
import { Exclamation } from "../components/doodles/Exclamation";
import { Spiral } from "../components/doodles/Spiral";
import { SquareSpiral } from "../components/doodles/SquareSpiral";
import { Star } from "../components/doodles/Star";
import { writingPacket } from "../data/writing";

// Side doodles only show from lg up, either side of the flipbook page.
const sideDoodle = "hidden lg:block absolute motion-reduce:animate-none";

export function WritingPage() {
    return (
        <div className="relative py-8 pb-24 space-y-6">
            <title>Writing · Lily Valentine</title>

            <Exclamation className={`${sideDoodle} top-10 right-8 w-20 text-lime rotate-12 animate-float`} />
            <SquareSpiral className={`${sideDoodle} top-[22%] left-6 size-16 text-orange -rotate-6 animate-float [animation-delay:-2s]`} />
            <Spiral className={`${sideDoodle} top-[34%] right-10 size-24 text-orange animate-spin-slow`} />
            <Star className={`${sideDoodle} top-[50%] left-12 size-14 text-lime -rotate-12 animate-float [animation-delay:-4s]`} />
            <Star className={`${sideDoodle} top-[63%] right-20 size-10 text-lime rotate-6 animate-float [animation-delay:-1s]`} />
            <Spiral className={`${sideDoodle} top-[76%] left-8 size-16 text-lime animate-spin-slow [animation-direction:reverse]`} />
            <SquareSpiral className={`${sideDoodle} top-[88%] right-12 size-12 text-orange rotate-12 animate-float [animation-delay:-3s]`} />

            <div className="flex items-center gap-3">
                <h1 className="font-display text-white text-5xl">Writing</h1>
                <Exclamation className="w-6 text-lime rotate-12 animate-float motion-reduce:animate-none" />
                <SquareSpiral className="size-7 text-orange -rotate-6 animate-spin-slow motion-reduce:animate-none" />
            </div>
            <div className="max-w-prose text-lg leading-relaxed space-y-3">
                <p>
                    A packet of short comedic scripts and one song: Halloween, Pants
                    to Prom, Gay And Boring, Wrigleyville Speed Dating, and Shotta
                    Pink Whitney.
                </p>
                <p>
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
