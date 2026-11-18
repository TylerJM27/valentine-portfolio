import type { ImageAsset } from "../data/types";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export type MarqueeItem = { id: string; image: ImageAsset; caption?: string };

type Props = {
    items: MarqueeItem[];
    direction: "left" | "right";
    paused: boolean;
    eager?: boolean;
    // Tailwind height classes for the images.
    imageHeight?: string;
    // How many times to repeat the items inside each copy. Short rows of
    // small images need this, or one copy is narrower than the screen and
    // the loop shows an empty gap.
    repeat?: number;
};

// How long one copy takes to scroll past at repeat = 1.
const BASE_SECONDS = 60;

// A row of images that drifts sideways forever. The items are rendered
// twice, and the track slides by exactly half its width (one full copy), so
// the second copy lands where the first started and the loop has no seam.
export function ImageMarquee({
    items,
    direction,
    paused,
    eager = false,
    imageHeight = "h-[34svh] sm:h-[38svh]",
    repeat = 1,
}: Props) {
    const reduceMotion = usePrefersReducedMotion();
    const loading = eager ? "eager" : "lazy";

    // hidden: a duplicate, so screen readers skip it (each photo is
    // announced once).
    function renderItem(item: MarqueeItem, hidden: boolean, key: string = item.id) {
        return (
            <li key={key} aria-hidden={hidden || undefined} className="shrink-0">
                {/* w-min: the figure is as wide as its image, so a long
                    caption wraps under the photo instead of widening it.
                    min-w-36 keeps a caption under a narrow portrait photo
                    from being squeezed into a tall column of words. */}
                <figure className={`w-min space-y-2 ${item.caption ? "min-w-36" : ""}`}>
                    <img
                        src={item.image.src}
                        alt={hidden ? "" : item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        loading={loading}
                        className={`${imageHeight} w-auto max-w-none rounded-md border-4 border-white shadow-xl bg-white`}
                    />
                    {item.caption && (
                        <figcaption className="text-sm font-bold leading-snug">
                            {item.caption}
                        </figcaption>
                    )}
                </figure>
            </li>
        );
    }

    // Reduced motion: no animation and no copy, just a row people scroll.
    if (reduceMotion) {
        return (
            <ul className="flex gap-4 overflow-x-auto px-4 pb-3">
                {items.map((item) => renderItem(item, false))}
            </ul>
        );
    }

    return (
        <div className="group overflow-hidden py-2">
            <div
                // A longer copy has further to travel, so it gets more time
                // and the speed stays the same.
                style={{ animationDuration: `${BASE_SECONDS * repeat}s` }}
                className={`flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] ${direction === "right" ? "[animation-direction:reverse]" : ""} ${paused ? "[animation-play-state:paused]" : ""}`}
            >
                {[0, 1].map((copy) => (
                    <ul
                        key={copy}
                        aria-hidden={copy === 1 || undefined}
                        className="flex shrink-0 items-start gap-4 pr-4"
                    >
                        {Array.from({ length: repeat }, (_, set) =>
                            items.map((item) =>
                                renderItem(item, copy === 1 || set > 0, `${item.id}-${set}`),
                            ),
                        )}
                    </ul>
                ))}
            </div>
        </div>
    );
}
