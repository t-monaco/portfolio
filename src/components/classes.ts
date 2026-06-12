// Shared Tailwind class strings for the bento / project cards.
// Hover-driven props (transform, border-color) live here as utilities so they
// win over the inline base styles (which never set those properties).

export const card =
    "rounded-3xl border border-line bg-panel transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-line-2";

export const sectionWrap = "mx-auto max-w-[1320px] px-7";
