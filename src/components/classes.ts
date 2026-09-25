// Shared Tailwind class strings for the bento / timeline cards.
// Hover-driven props (transform, border-color) live here as utilities so they
// win over the inline base styles (which never set those properties).

// Shape + lift only; pair with a bg and hover border (never two of either).
export const cardShell =
    "rounded-3xl border border-line transition-[transform,border-color] duration-300 hover:-translate-y-1";

export const card = `${cardShell} bg-panel hover:border-line-2`;

export const sectionWrap = "mx-auto max-w-[1320px] px-[18px] md:px-7";
