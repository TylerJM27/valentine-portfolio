// Shared button looks, used on links and buttons across the site, so every
// button matches and a style change happens in one place.

// The main button: plum, white display text, a small tilt on hover.
export const plumButton =
    "inline-flex min-h-11 items-center rounded-md bg-plum px-5 font-display text-xl text-white hover:-rotate-2 transition-transform motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2";

// The quieter button: dashed plum outline that fills in on hover.
export const dashedButton =
    "inline-flex min-h-11 items-center gap-2 rounded-md border-2 border-dashed border-plum px-4 font-display text-xl hover:bg-plum hover:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2";
