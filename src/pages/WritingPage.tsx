/*
  WritingPage — "/writing" (stub in ROADMAP step 4.4, built in step 13.3)
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
     2. (Step 13.3) Add the intro and <Flipbook />.
     3. Check the whole page from top to bottom on a phone.

  8. YOUR TURN
     Write the intro text and the page. Most of the work is in Flipbook.

  9. DONE WHEN
     - You can scroll into the flipbook, through all pages, and out again
       without it ever feeling stuck.
     - The PDF link is visible without scrolling through all 15 pages.
*/
