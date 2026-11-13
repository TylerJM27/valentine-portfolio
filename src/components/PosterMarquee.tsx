import type { DesignPiece } from "../data/types";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Props = {
    pieces: DesignPiece[];
    direction: "left" | "right";
    paused: boolean;
    eager?: boolean;
};

const imageStyles =
    "h-[34svh] sm:h-[38svh] w-auto max-w-none rounded-md border-4 border-white shadow-xl bg-white";

// A row of posters that drifts sideways forever. The pieces are rendered
// twice, and the track slides by exactly half its width (one full copy), so
// the second copy lands where the first started and the loop has no seam.
export function PosterMarquee({ pieces, direction, paused, eager = false }: Props) {
    const reduceMotion = usePrefersReducedMotion();
    const loading = eager ? "eager" : "lazy";

    // Reduced motion: no animation and no copy, just a row people scroll.
    if (reduceMotion) {
        return (
            <ul className="flex gap-4 overflow-x-auto px-4 pb-3">
                {pieces.map((piece) => (
                    <li key={piece.id} className="shrink-0">
                        <img
                            src={piece.image.src}
                            alt={piece.image.alt}
                            width={piece.image.width}
                            height={piece.image.height}
                            loading={loading}
                            className={imageStyles}
                        />
                    </li>
                ))}
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
                        className="flex shrink-0 gap-4 pr-4"
                    >
                        {pieces.map((piece) => (
                            <li key={piece.id} className="shrink-0">
                                <img
                                    src={piece.image.src}
                                    alt={copy === 0 ? piece.image.alt : ""}
                                    width={piece.image.width}
                                    height={piece.image.height}
                                    loading={loading}
                                    className={imageStyles}
                                />
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}
