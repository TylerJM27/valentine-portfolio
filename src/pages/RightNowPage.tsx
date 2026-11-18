import { PageHeading } from "../components/PageHeading";
import { ProjectPoster } from "../components/ProjectPoster";
import { Spiral } from "../components/doodles/Spiral";
import { SquareSpiral } from "../components/doodles/SquareSpiral";
import { currentProjects } from "../data/currentProjects";
import { posterMotion } from "../lib/posterMotion";

export function RightNowPage() {
    return (
        <div className="relative py-8 space-y-8">
            <title>Right Now Â· Lily Valentine</title>

            <SquareSpiral className="hidden lg:block absolute top-6 right-4 size-14 text-orange rotate-12 animate-float motion-reduce:animate-none" />
            <Spiral className="hidden lg:block absolute top-24 right-28 size-10 text-lime animate-spin-slow motion-reduce:animate-none" />

            <div className="space-y-3">
                <PageHeading>Right Now</PageHeading>
                <p className="max-w-prose text-lg">Catch Lily live. Hereâ€™s whatâ€™s coming up.</p>
            </div>

            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {currentProjects.map((project, index) => {
                    const motion = posterMotion(index);
                    return (
                        <li key={project.id}>
                            <article
                                aria-labelledby={`${project.id}-title`}
                                className="flex h-full flex-col gap-4"
                            >
                                {project.href ? (
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} tickets (opens in a new tab)`}
                                        className={`${motion} focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4`}
                                    >
                                        <ProjectPoster project={project} eager />
                                    </a>
                                ) : (
                                    <div className={motion}>
                                        <ProjectPoster project={project} eager />
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <h2
                                        id={`${project.id}-title`}
                                        className="font-display text-white text-3xl"
                                    >
                                        {project.title}
                                    </h2>
                                    <p className="font-bold text-lg">
                                        {project.date} Â· {project.time}
                                        <br />
                                        {project.venue}
                                    </p>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>

                                <div className="mt-auto">
                                    {project.href ? (
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex min-h-11 items-center rounded-md bg-plum px-5 font-display text-xl text-white hover:-rotate-2 transition-transform motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                                        >
                                            Get tickets
                                            <span className="sr-only">
                                                {" "}
                                                for {project.title} (opens in a new tab)
                                            </span>
                                        </a>
                                    ) : (
                                        <p className="inline-block rounded-md border-2 border-dashed border-plum px-4 py-2 font-display text-lg">
                                            Tickets coming soon
                                        </p>
                                    )}
                                </div>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
