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
};

// A row of images that drifts sideways forever. The items are rendered
// twice, and the track slides by exactly half its width (one full copy), so
// the second copy lands where the first started and the loop has no seam.
export function ImageMarquee({
    items,
    direction,
    paused,
    eager = false,
    imageHeight = "h-[34svh] sm:h-[38svh]",
}: Props) {
    const reduceMotion = usePrefersReducedMotion();
    const loading = eager ? "eager" : "lazy";

    function renderItem(item: MarqueeItem, hidden: boolean) {
        return (
            <li key={item.id} className="shrink-0">
                <figure className="space-y-2">
                    <img
                        src={item.image.src}
                        alt={hidden ? "" : item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        loading={loading}
                        className={`${imageHeight} w-auto max-w-none rounded-md border-4 border-white shadow-xl bg-white`}
                    />
                    {item.caption && (
                        <figcaption className="max-w-[min(22rem,80vw)] text-sm font-bold leading-snug">
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
                className={`flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] ${direction === "right" ? "[animation-direction:reverse]" : ""} ${paused ? "[animation-play-state:paused]" : ""}`}
            >
                {[0, 1].map((copy) => (
                    <ul
                        key={copy}
                        aria-hidden={copy === 1 || undefined}
                        className="flex shrink-0 items-start gap-4 pr-4"
                    >
                        {items.map((item) => renderItem(item, copy === 1))}
                    </ul>
                ))}
            </div>
        </div>
    );
}
