import { useEffect, useState } from "react";

export function useClock(timeZone = "Australia/Sydney") {
    const [time, setTime] = useState("--:--:--");

    useEffect(() => {
        const tick = () =>
            setTime(
                new Date().toLocaleTimeString("en-GB", {
                    timeZone,
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [timeZone]);

    return time;
}
