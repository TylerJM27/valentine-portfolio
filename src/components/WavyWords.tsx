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
    // A hidden, straight copy of one line of words, used only for measuring.
    const measureRef = useRef<SVGTextElement | null>(null);
    const hoveredRef = useRef(false);

    useEffect(() => {
        if (reduceMotion) return;

        let frame = 0;
        let last = performance.now();
        let distance = 0;

        // How long one copy of the words is. Measured on the straight hidden
        // text, not the curved text: some mobile browsers (Safari) only count
        // the letters currently drawn on the curve, so measuring the moving
        // text gives a different answer every frame and the ribbons jitter.
        // Re-measured once the display font loads and on resize, because
        // both change the length.
        let copyLength = 0;
        const measure = () => {
            copyLength = measureRef.current?.getComputedTextLength() ?? 0;
        };
        measure();
        document.fonts.ready.then(measure);
        document.fonts.addEventListener("loadingdone", measure);
        window.addEventListener("resize", measure);

        const tick = (now: number) => {
            // Cap the step so a background tab doesn't make the text jump.
            const seconds = Math.min(now - last, 100) / 1000;
            last = now;
            if (!hoveredRef.current) {
                distance += seconds * BASE_SPEED;
            }

            if (copyLength > 0) {
                RIBBONS.forEach((ribbon, i) => {
                    const textPath = textPathRefs.current[i];
                    if (!textPath) return;
                    // The copies are identical, so sliding by exactly one
                    // copy's length and wrapping back looks seamless.
                    const moved = (distance * ribbon.speed) % copyLength;
                    const offset = ribbon.direction === "left" ? -moved : moved - copyLength;
                    textPath.setAttribute("startOffset", String(offset));
                });
            }

            frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(frame);
            document.fonts.removeEventListener("loadingdone", measure);
            window.removeEventListener("resize", measure);
        };
    }, [reduceMotion]);

    // Ends in a non-breaking space (\u00A0): SVG drops an ordinary trailing
    // space at the end of a text element, which would make the measured
    // length one space short and the loop hitch at the seam.
    const line = words.map((word) => word.toUpperCase()).join(" ✦ ") + " ✦\u00A0";

    return (
        // Hovering with a mouse pauses the ribbons. Pointer events tell us
        // what's pointing: on a phone a tap also fires "enter" but never a
        // matching "leave", which used to freeze the ribbons for good, so
        // touch and pen are ignored.
        <div
            onPointerEnter={(e) => {
                if (e.pointerType === "mouse") hoveredRef.current = true;
            }}
            onPointerLeave={(e) => {
                if (e.pointerType === "mouse") hoveredRef.current = false;
            }}
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
                {/* Never shown: the same words, font and size on a straight
                    line, so their length can be measured reliably. */}
                <text
                    ref={measureRef}
                    className="font-display"
                    fontSize={46}
                    x={0}
                    y={-200}
                    visibility="hidden"
                >
                    {line}
                </text>
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
                                <tspan key={copy}>{line}</tspan>
                            ))}
                        </textPath>
                    </text>
                ))}
            </svg>
        </div>
    );
}
