import type { CurrentProject } from "../data/types";
import { Exclamation } from "./doodles/Exclamation";

type Props = {
    project: CurrentProject;
    eager?: boolean;
};

// A show's poster, or a hand-drawn "coming soon" card when there isn't one
// yet. Both keep the same 3:4 shape so a row of them lines up.
export function ProjectPoster({ project, eager = false }: Props) {
    if (project.poster) {
        return (
            <img
                src={project.poster.src}
                alt={project.poster.alt}
                width={project.poster.width}
                height={project.poster.height}
                loading={eager ? "eager" : "lazy"}
                className="w-full aspect-[3/4] object-cover rounded-md border-4 border-white shadow-xl bg-white"
            />
        );
    }

    return (
        <div className="relative w-full aspect-[3/4] rounded-md border-4 border-white shadow-xl bg-plum flex flex-col items-center justify-center gap-4 p-6 text-center overflow-hidden">
            <Exclamation className="w-10 text-lime animate-float motion-reduce:animate-none" />
            <p className="font-display text-white text-3xl leading-tight">{project.title}</p>
            <p className="font-display text-orange text-xl">Poster coming soon</p>
        </div>
    );
}
