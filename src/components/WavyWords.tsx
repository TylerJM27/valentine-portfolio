import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Props = {
    words: string[];
};

type Ribbon = {
    y: number; // vertical center of the wave, in viewBox units
    phase: number; // shifts the wave sideways so the ribbons don't line up
    fill: string;
    speed: number; // multiplier on BASE_SPEED
    direction: "left" | "right";
};

const RIBBONS: Ribbon[] = [
    { y: 70, phase: 0, fill: "fill-white", speed: 1, direction: "left" },
    { y: 180, phase: 150, fill: "fill-lime", speed: 0.8, direction: "right" },
    { y: 290, phase: 75, fill: "fill-orange", speed: 1.15, direction: "left" },
];

// The drawing is very wide so it can span a whole desktop screen. The SVG
// uses preserveAspectRatio "slice" (like object-cover): it scales to the
// box's height and crops the sides, so narrower screens just see the middle.
const VIEW_WIDTH = 3000;
const VIEW_HEIGHT = 360;

const BASE_SPEED = 55; // viewBox units per second
// A long, gentle wave: tighter curves squash the letters together at the crests.
const AMPLITUDE = 16;
const PERIOD = 320;
// How many times the words repeat on each ribbon. Enough that, even after
// sliding by one full copy, the text still reaches past the right edge.
const COPIES = 4;

// A smooth wave across (and a little past) the viewBox.
// Q draws the first hump; each T repeats it, mirrored, so the wave is even.
function wavePath(y: number, phase: number) {
    const start = -60 - phase;
    let d = `M${start} ${y} Q${start + PERIOD / 4} ${y - AMPLITUDE * 2} ${start + PERIOD / 2} ${y}`;
    for (let x = start + PERIOD; x <= VIEW_WIDTH + 100; x += PERIOD / 2) {
        d += ` T${x} ${y}`;
    }
    return d;
}

// Three ribbons of words that travel along wavy lines across the hero.
// Each ribbon's text sits on an invisible SVG path (<textPath>); moving its
// startOffset slides the letters along the curve, so they bob as they go.
export function WavyWords({ words }: Props) {
    const reduceMotion = usePrefersReducedMotion();
    const textPathRefs = useRef<(SVGTextPathElement | null)[]>([]);
    const firstCopyRefs = useRef<(SVGTSpanElement | null)[]>([]);
    const hoveredRef = useRef(false);

    useEffect(() => {
        if (reduceMotion) return;

        let frame = 0;
        let last = performance.now();
        let distance = 0;

        const tick = (now: number) => {
            // Cap the step so a background tab doesn't make the text jump.
            const seconds = Math.min(now - last, 100) / 1000;
            last = now;
            if (!hoveredRef.current) {
                distance += seconds * BASE_SPEED;
            }

            RIBBONS.forEach((ribbon, i) => {
                const textPath = textPathRefs.current[i];
                const firstCopy = firstCopyRefs.current[i];
                if (!textPath || !firstCopy) return;
                // The copies are identical, so sliding by exactly one copy's
                // length and wrapping back looks seamless.
                const copyLength = firstCopy.getComputedTextLength();
                if (!copyLength) return;
                const moved = (distance * ribbon.speed) % copyLength;
                const offset = ribbon.direction === "left" ? -moved : moved - copyLength;
                textPath.setAttribute("startOffset", String(offset));
            });

            frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [reduceMotion]);

    const line = words.map((word) => word.toUpperCase()).join(" ✦ ") + " ✦ ";

    return (
        // Hovering pauses the ribbons.
        <div
            onMouseEnter={() => (hoveredRef.current = true)}
            onMouseLeave={() => (hoveredRef.current = false)}
        >
            <svg
                viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
                preserveAspectRatio="xMidYMid slice"
                className="block w-full h-60 md:h-80"
                aria-hidden="true"
                focusable="false"
            >
                <defs>
                    {RIBBONS.map((ribbon, i) => (
                        <path key={i} id={`wavy-words-${i}`} d={wavePath(ribbon.y, ribbon.phase)} />
                    ))}
                </defs>
                {RIBBONS.map((ribbon, i) => (
                    <text
                        key={i}
                        className={`font-display ${ribbon.fill} stroke-plum`}
                        fontSize={46}
                        strokeWidth={9}
                        strokeLinejoin="round"
                        paintOrder="stroke"
                    >
                        <textPath
                            href={`#wavy-words-${i}`}
                            ref={(el) => {
                                textPathRefs.current[i] = el;
                            }}
                        >
                            {Array.from({ length: COPIES }, (_, copy) => (
                                <tspan
                                    key={copy}
                                    ref={
                                        copy === 0
                                            ? (el) => {
                                                  firstCopyRefs.current[i] = el;
                                              }
                                            : undefined
                                    }
                                >
                                    {line}
                                </tspan>
                            ))}
                        </textPath>
                    </text>
                ))}
            </svg>
        </div>
    );
}
