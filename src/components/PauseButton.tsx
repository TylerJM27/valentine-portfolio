import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Props = {
    paused: boolean;
    onToggle: () => void;
    // What's moving, e.g. "posters" -> "Pause posters".
    label: string;
};

// Pause/play for the moving rows. Hidden when the visitor asked for reduced
// motion, because then nothing moves.
export function PauseButton({ paused, onToggle, label }: Props) {
    const reduceMotion = usePrefersReducedMotion();
    if (reduceMotion) return null;

    return (
        <button
            type="button"
            aria-pressed={paused}
            onClick={onToggle}
            className="min-h-11 px-5 rounded-md bg-plum text-white font-display text-xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
            {paused ? `Play ${label}` : `Pause ${label}`}
        </button>
    );
}
