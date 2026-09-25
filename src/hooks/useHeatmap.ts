const COLORS = ["#161a14", "#1d3a25", "#2d6e3f", "#5fa55a", "#c4f542"];

export type HeatCell = { color: string; delay: number };

// Generated once at module load — the stylized commit grid is stable per session
// and must not recompute (or call Math.random) during render.
function generate(cols: number, rows: number): HeatCell[] {
    const cells: HeatCell[] = [];
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            const recency = col / cols;
            const r = Math.random();
            let level: number;
            if (r < 0.35 - recency * 0.2) level = 0;
            else if (r < 0.55) level = 1;
            else if (r < 0.75) level = 2;
            else if (r < 0.92) level = 3;
            else level = 4;
            if (recency > 0.7 && Math.random() > 0.4)
                level = Math.min(4, level + 1);
            cells.push({ color: COLORS[level], delay: (col * rows + row) * 3 });
        }
    }
    return cells;
}

export const HEATMAP_COLS = 52;

const CELLS = generate(HEATMAP_COLS, 7);

export function useHeatmap(): HeatCell[] {
    return CELLS;
}
