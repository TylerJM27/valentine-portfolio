import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    // Which element to render: a <figcaption> inside a <figure>, a <p> for a
    // paragraph, or a plain <div>.
    as?: "div" | "p" | "figcaption";
    // Which way the note leans.
    tilt?: "left" | "right";
    // Extra classes for spacing and text size (not rotation; use `tilt`).
    className?: string;
};

// A white card that looks taped onto the page: slight tilt, shadow, and an
// orange strip of "tape" across the top. Plum on white is easy to read.
export function TapedNote({ children, as: Tag = "div", tilt = "right", className = "" }: Props) {
    const rotation = tilt === "right" ? "rotate-1" : "-rotate-1";

    return (
        <Tag
            className={`relative ${rotation} rounded-sm bg-white px-4 pt-5 pb-4 text-plum shadow-xl ${className}`}
        >
            <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-orange/80"
            />
            {children}
        </Tag>
    );
}
