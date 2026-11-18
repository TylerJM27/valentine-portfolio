import type { ReactNode } from "react";
import { Spiral } from "./doodles/Spiral";
import { Star } from "./doodles/Star";

type Props = {
    children: ReactNode;
    // Anything that sits on the same row, like a pause button.
    actions?: ReactNode;
};

// The page title with a couple of moving doodles beside it.
export function PageHeading({ children, actions }: Props) {
    return (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
                <h1 className="font-display text-white text-5xl leading-tight pb-2">{children}</h1>
                <Star className="size-9 text-lime -rotate-12 animate-wiggle motion-reduce:animate-none" />
                <Spiral className="size-7 text-orange animate-spin-slow motion-reduce:animate-none" />
            </div>
            {actions}
        </div>
    );
}
