import type { Profile } from "./types";

export const profile: Profile = {
    name: "Lily Valentine",
    headshots: {
        silly: {
            src: "/placeholders/silly-headshot.webp",
            alt: "Lily Valentine in a long strawberry-blond wig, blue fish-scale face makeup, and blue lipstick sits straddling a backward chair, gripping its back and gazing upward with her mouth open. She wears a pale blue suit jacket and a pale blue tie painted with the word “TUNA” and red splatters, under lavender stage light, with audience silhouettes in the foreground.",
            width: 1200,
            height: 960,
        },
        serious: {
            src: "/placeholders/serious-headshot.webp",
            alt: "Lily Valentine in oversized red glasses and a rust-colored sweater stands center stage, grinning mid-line and pointing at herself with both thumbs, while five ensemble members gather behind her against a gray wall, one with bright red hair looking on.",
            width: 1200,
            height: 960,
        },
    },
    bio: [
        "I’m Lily Valentine, an actor, writer, and director based in Chicago. I’ve been performing since I was 1 years old, when I felt the love of standup. These days I split my time between the stage, the page, and the director’s chair, and I like it best when the three get mixed up.",
        "As a writer, I make short form comedies about my life and things I have experienced. As a director, I’m drawn to [the kind of work, e.g. small casts, strange comedies, stories told out of order]. My most recent project was [title], which [one concrete detail: where it ran, who it was with, what it was about].",
        "I also do graphic design, mostly [posters, zines, show branding], often for my own productions. If you want to work together or just say hi, the contact form is on my resume page.",
    ],
    socialLinks: [
        {
            platform: "instagram",
            href: "https://instagram.com/example",
            label: "Lily on Instagram",
        },
        {
            platform: "email",
            href: "mailto:hello@example.com",
            label: "Email Lily",
        },
    ],
};
/*
  profile.ts — homepage content (ROADMAP step 2.3)
  ================================================

  1. PURPOSE
     Everything the homepage shows about Lily: name, both headshots, bio
     paragraphs, social links, and (later) the cartoon.

  2. WHAT IT RENDERS
     Nothing. It exports one Profile object.

  3. PROPS
     Not a component. Exports:
     - profile: Profile
         headshots.cute    -> /placeholders/SillyHeadshot.jpg   (6315 × 5052)
         headshots.serious -> /placeholders/SeriousHeadshot.jpg (6502 × 5202)
         bio               -> 2–3 placeholder paragraphs
         socialLinks       -> instagram (placeholder profile URL)
                              email ("mailto:" + a placeholder address)
         cartoon           -> leave out for now; there's no file yet

  4. STATE
     None.

  5. CONCEPTS
     - One object vs an array: there's only one Lily, so this file exports a
       single object, while design pieces and videos are arrays.
     - mailto: links open the visitor's email app with the address filled in.

  6. STYLING
     None.

  7. BUILD STEPS
     1. `import type { Profile }` from "./types".
     2. Export the object with the fields above.
     3. Write real alt text even for placeholders, e.g. "Lily Valentine
        laughing, wearing glasses". It's a good habit, and it's what ships if
        a placeholder is forgotten.
     4. Before wiring images in: the two headshots are full camera files
        (6–8 MB, over 6000px wide). Export smaller WebP copies (about
        1200px wide) and update src/width/height to match.

  8. YOUR TURN
     Fill it in yourself, including the alt text.

  9. DONE WHEN
     - It type-checks with no missing fields.
     - Headshot files are a few hundred KB, not several MB.
*/
