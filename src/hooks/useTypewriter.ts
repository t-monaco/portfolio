import { useEffect, useState } from "react";

type Options = {
    typeSpeed?: number;
    deleteSpeed?: number;
    holdTime?: number;
    betweenTime?: number;
};

export function useTypewriter(words: string[], options: Options = {}) {
    const {
        typeSpeed = 70,
        deleteSpeed = 35,
        holdTime = 1600,
        betweenTime = 350,
    } = options;
    const [text, setText] = useState("");

    useEffect(() => {
        let i = 0;
        let j = 0;
        let deleting = false;
        let timer: ReturnType<typeof setTimeout>;

        const step = () => {
            const word = words[i];
            if (!deleting) {
                j++;
                setText(word.slice(0, j));
                if (j >= word.length) {
                    deleting = true;
                    timer = setTimeout(step, holdTime);
                    return;
                }
                timer = setTimeout(step, typeSpeed + Math.random() * 50);
            } else {
                j--;
                setText(word.slice(0, j));
                if (j <= 0) {
                    deleting = false;
                    i = (i + 1) % words.length;
                    timer = setTimeout(step, betweenTime);
                    return;
                }
                timer = setTimeout(step, deleteSpeed);
            }
        };

        step();
        return () => clearTimeout(timer);
    }, [words, typeSpeed, deleteSpeed, holdTime, betweenTime]);

    return text;
}
