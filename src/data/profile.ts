import type { Profile } from "./types";

export const profile: Profile = {
    name: "Lily Valentine",
    headshots: {
        silly: {
            src: "/placeholders/silly-headshot.webp",
            alt: "Lily Valentine in a long strawberry-blond wig, blue fish-scale face makeup, and blue lipstick sits straddling a backward chair, gripping its back and gazing upward with their mouth open. She wears a pale blue suit jacket and a pale blue tie painted with the word “TUNA” and red splatters, under lavender stage light, with audience silhouettes in the foreground.",
            width: 1200,
            height: 960,
        },
        serious: {
            src: "/placeholders/serious-headshot.webp",
            alt: "Lily Valentine in oversized red glasses and a rust-colored sweater stands center stage, grinning mid-line and pointing at themself with both thumbs, while five ensemble members gather behind them against a gray wall, one with bright red hair looking on.",
            width: 1200,
            height: 960,
        },
    },
    bio: [
        "Lily Valentine is a Portland-raised, Chicago-based comedian, Writer, Performer, and Glue Gun Owner. They are a 2027 graduate of the Comedy Arts program at The Theatre School at DePaul University, and have spent the last four years sharpening their skills in sketch, improv, solo performance, and behind-the-scenes production. Coming from a musical theatre background, they strive to incorporate elements of musicality, dance, and marvel wherever they can.",
        "Lily is the co-creator of BUSH, an all lesbian sketch group that packed the house for a run on The Annoyance Theater Mainstage. They acted as the head writer, performer, and director of TTSNL, an SNL-style live sketch show that had a four-week sold-out run on the Theatre School Watts Stage. They are also passionate about solo work and have self-produced two solo shows, The Best Policy, a show about the importance of gossip, which ran for a four-week run on The Annoyance Cabaret stage in Spring 2026, and Unicorn, which debuted in January 2027 at MessFest, an all-student-run comedy festival at The Annoyance Theater. In 2025, Lily served as the assistant artistic director of MessFest, in which they oversaw the aesthetic direction, execution, and fluidity of the four-day festival.",
        "Lily creates comedy for those who believe they don’t need it. They push for radical honesty from both themselves and from their audience. They are mean, embarrassing, and truthful. They find the funny in the absurd, in the uncomfortable, and in the mundane. They are most inspired by other people and the limits within which we can push ourselves as human beings. They believe we, as people, can be a spectacle all on our own.",
    ],
    socialLinks: [
        {
            platform: "instagram",
            href: "https://www.instagram.com/lilyv4lentine/",
            label: "Lily on Instagram",
        },
        {
            platform: "email",
            href: "/resume#contact",
            label: "Contact Lily",
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
