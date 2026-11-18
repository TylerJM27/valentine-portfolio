import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { plumButton } from "../lib/buttonStyles";

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
            className={plumButton}
        >
            {paused ? `Play ${label}` : `Pause ${label}`}
        </button>
    );
}
