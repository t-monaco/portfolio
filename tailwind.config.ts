import type { Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#050816",
                secondary: "#aaa6c3",
                tertiary: "#151030",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
                "pink-wall": "url('/src/assets/bg-pink-wall.jpg')",
                "main-wall": "url('/src/assets/main-wall.png')",
                "main-solid": "url('/src/assets/main-solid.png')",
                "main-transp": "url('/src/assets/main-transp.png')",
                "bg-wall-bw": "url('/src/assets/bg-wall-bw.png')",
            },
        },
    },
    plugins: [],
} satisfies Config;
