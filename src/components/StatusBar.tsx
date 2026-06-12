import { useClock } from "../hooks/useClock";
import { profile } from "../constants";

const LIGHTS = ["#ff5f56", "#ffbd2e", "#27c93f"];

export function StatusBar() {
    const time = useClock(profile.timeZone);

    return (
        <div
            className="sticky top-0 z-50 border-b border-[#1a1a1a] font-mono text-xs text-muted"
            style={{
                background: "rgba(10,10,10,0.7)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
            }}
        >
            <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-7 py-2.5">
                <div className="flex items-center gap-3.5">
                    <div className="flex gap-1.5">
                        {LIGHTS.map((c) => (
                            <span
                                key={c}
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ background: c }}
                            />
                        ))}
                    </div>
                    <span>
                        <span className="text-faint">~/</span>
                        <span className="text-paper">tomas.monaco</span>
                        <span className="text-faint">/</span>
                        <span className="text-acid">index.tsx</span>
                    </span>
                </div>
                <div className="flex items-center gap-5">
                    <span className="inline-flex items-center gap-[7px]">
                        <span
                            className="h-[7px] w-[7px] rounded-full"
                            style={{
                                background: "#4ade80",
                                animation: "pulse-dot 2s infinite ease-in-out",
                                boxShadow: "0 0 8px #4ade80",
                            }}
                        />
                        available
                    </span>
                    <span className="text-faint">·</span>
                    <span className="hidden sm:inline">{profile.location}</span>
                    <span className="hidden text-faint sm:inline">·</span>
                    <span className="inline-block min-w-[70px] tabular-nums">
                        {time}
                    </span>
                </div>
            </div>
        </div>
    );
}
