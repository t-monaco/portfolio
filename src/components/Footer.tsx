import { profile } from "../constants";
import { currentYear, deployStamp } from "../utils/date";

export function Footer() {
    const year = currentYear();
    const stamp = deployStamp();

    return (
        <footer className="border-t border-[#1a1a1a] px-7 py-7">
            <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-faint">
                <div>
                    © {year} tomas monaco. last deploy{" "}
                    <span className="text-muted">{stamp}</span>
                </div>
                <div className="flex items-center gap-3.5">
                    <span className="inline-flex items-center gap-[7px]">
                        <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{
                                background: "#4ade80",
                                animation: "pulse-dot 2s infinite",
                            }}
                        />
                        all systems operational
                    </span>
                    <span className="text-line-2">·</span>
                    <span>{profile.version}</span>
                </div>
            </div>
        </footer>
    );
}
