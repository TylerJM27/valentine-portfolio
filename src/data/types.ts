export type ImageAsset = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type PerformancePhoto = {
    id: string;
    image: ImageAsset;
    caption: string;
    credit?: string;
};

export type YouTubeVideo = {
    id: string;
    youtubeId: string;
    title: string;
    description?: string;
    year?: number;
};

export type DesignPiece = {
    id: string;
    title: string;
    image: ImageAsset;
    description: string;
    year?: number;
};

export type LoopingVideoSource = {
    src: string;
    type: "video/mp4" | "video/webm";
    poster: ImageAsset;
    label: string;
};

export type WritingPacket = {
    title: string;
    pdfUrl: string;
    pages: ImageAsset[];
};

export type SocialPlatform = "instagram" | "email";

export type SocialLink = {
    platform: SocialPlatform;
    href: string;
    label: string;
};

export type Profile = {
    name: string;
    headshots: { silly: ImageAsset; serious: ImageAsset };
    bio: string[];
    socialLinks: SocialLink[];
    cartoon?: ImageAsset;
};

export type ResumeEntry = {
    id: string;
    title: string;
    role?: string;
    organization?: string;
    year?: string;
};

export type ResumeSection = {
    id: string;
    heading: string;
    entries: ResumeEntry[];
};

export type ResumeData = {
    pdfUrl: string;
    sections: ResumeSection[];
};

export type NavItem = {
    label: string;
    to: string;
};

/*
  types.ts — the shapes of all content data (ROADMAP step 2.1)
  ============================================================

  1. PURPOSE
     Describes what every piece of content looks like (an image, a video, a
     design piece...). Every data file and every component that shows content
     imports these types. Later, when a CMS or API replaces the data files,
     these types become the contract it has to meet.

  2. WHAT IT RENDERS
     Nothing. Types only; they disappear completely when the code is built.

  3. PROPS
     Not a component. The types to write here, with their fields:

     ImageAsset           used by every image on the site
       src: string            path like "/placeholders/PlaceholderImage1.jpg"
       alt: string            required, so no image can skip alt text
       width: number          intrinsic pixel width
       height: number         intrinsic pixel height

     PerformancePhoto     Performance page photos
       id: string
       image: ImageAsset
       caption: string
       credit?: string        photographer, optional
       (Named PerformancePhoto, not CaptionedPhoto, so it doesn't clash with
        the CaptionedPhoto component when both are used in one file.)

     YouTubeVideo         Directing page
       id: string
       youtubeId: string      the 11-character ID from the YouTube URL
       title: string          required: every video gets a title
       description?: string
       year?: number

     DesignPiece          Design page
       id: string
       title: string
       image: ImageAsset
       description: string
       year?: number

     LoopingVideoSource   Performance page header video
       src: string
       type: "video/mp4" | "video/webm"
       poster: ImageAsset     shown before playback and with reduced motion
       label: string          short description of what the video shows

     WritingPacket        Writing page
       title: string
       pdfUrl: string
       pages: ImageAsset[]    15 pages, in order

     SocialPlatform       "instagram" | "email"
     SocialLink
       platform: SocialPlatform
       href: string           "https://instagram.com/..." or "mailto:..."
       label: string          accessible name, e.g. "Lily on Instagram"

     Profile              Home page
       name: string
       headshots: { cute: ImageAsset; serious: ImageAsset }
       bio: string[]          one string per paragraph
       socialLinks: SocialLink[]
       cartoon?: ImageAsset   the cartoon Lily; optional until it exists

     ResumeEntry          one line on the resume
       id: string
       title: string          production, class, or skill
       role?: string
       organization?: string  theatre, company, school, director
       year?: string          string, so "2024–25" works
     ResumeSection
       id: string
       heading: string        "Theatre", "Film", "Training", "Skills"...
       entries: ResumeEntry[]
     ResumeData
       pdfUrl: string
       sections: ResumeSection[]

     NavItem              one nav link
       label: string
       to: string             a route path like "/resume"

  4. STATE
     None.

  5. CONCEPTS
     - `type` aliases: a name for the shape of an object. TypeScript checks
       every object you claim is, e.g., a DesignPiece against it.
     - Optional fields (`?`): the field may be missing, and TypeScript makes
       you handle that case before using it.
     - String literal unions: "instagram" | "email" allows exactly those two
       strings. Later, a Record<SocialPlatform, ...> mapping platforms to
       icons will error if a platform has no icon.
     - Arrays of a type: `ImageAsset[]` means "an array where every item is
       an ImageAsset".
     - `export type`: lets other files import the type. With this project's
       `verbatimModuleSyntax` setting, the importing files must write
       `import type { ... }`.
     - Why every item has an `id`: React needs a stable `key` when rendering
       lists, and a future CMS will give items ids anyway.

  6. STYLING
     None.

  7. BUILD STEPS
     1. Write ImageAsset first, since almost everything uses it.
     2. Write the rest in the order above.
     3. Export each one.

  8. YOUR TURN
     Write all of them. Then deliberately make a DesignPiece without `alt` in
     designPieces.ts and read the error TypeScript gives you.

  9. DONE WHEN
     - `npm run build` passes.
     - Hovering a type name in VS Code shows its full shape.
     - Leaving out a required field in a data file is a red squiggle.
*/
