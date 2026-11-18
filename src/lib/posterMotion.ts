// Classes for a show poster that rests with a slight alternating tilt, then
// grows and twists the other way on hover or keyboard focus. Shared by the
// Right Now page and the home page's Right Now preview.
export function posterMotion(index: number) {
    const tilt =
        index % 2
            ? "rotate-1 hover:-rotate-2 focus-visible:-rotate-2"
            : "-rotate-1 hover:rotate-2 focus-visible:rotate-2";
    return `relative block ${tilt} hover:z-10 hover:scale-105 focus-visible:z-10 focus-visible:scale-105 transition-[scale,rotate] duration-300 ease-out motion-reduce:transition-none`;
}
