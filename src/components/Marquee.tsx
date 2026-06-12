import { Fragment } from "react";
import { marqueeWords } from "../constants";

export function Marquee() {
    // Render the set twice so the -50% translate loops seamlessly.
    const loop = [...marqueeWords, ...marqueeWords];

    return (
        <div className="relative overflow-hidden border-y border-[#1a1a1a] bg-ink-2 py-[22px]">
            <div
                className="flex w-max gap-14 whitespace-nowrap font-display text-[32px] font-semibold tracking-[-0.02em]"
                style={{ animation: "marquee 38s linear infinite" }}
            >
                {loop.map((word, i) => (
                    <Fragment key={i}>
                        <span className="text-paper">{word}</span>
                        <span className="text-acid">✦</span>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
