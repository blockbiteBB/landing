import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                chillax: ["var(--font-chillax)"],
                montserrat: ["var(--font-montserrat)"],
                sourceCodePro: ["var(--font-source-code-pro)"],
            },
            backgroundImage: {
                hero: "linear-gradient(0deg, #FFDB58 -9.87%, #FF914D 73.68%)",
                btn: "linear-gradient(180deg, #FFDB58 0%, #FF914D 100%)",
            },
            boxShadow: {
                "small-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                "custom-shadow": "0px 4px 25px 0px rgba(0, 0, 0, 0.25)",
            },
            colors: {
                brand: {
                    "app-orange": "#FF914D",
                    black: "#121212",
                },
            },
            animation: {
                scrollEffect: "scrollEffect 200s linear infinite",
                revertScrollEffect: "revertScrollEffect 130s linear infinite",
            },
            keyframes: {
                scrollEffect: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                revertScrollEffect: {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
