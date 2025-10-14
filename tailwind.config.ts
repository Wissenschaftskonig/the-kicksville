import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				zoom: {
					"0%": { transform: "scale(0.95)" },
					"50%": { transform: "scale(1)" },
					"100%": { transform: "scale(0.95)" },
				},
			},
			animation: {
				zoom: "zoom 3s ease-in-out infinite",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			boxShadow: {
				custom: "0 4px 30px rgba(0, 0, 0, 0.1)",
				underlay: "12px 12px 0 -2.5px #fff, 12px 12px 0 0 #000;",
				darkUnderlay: "12px 12px 0 -1.5px #c80000, 12px 12px 0 0 #000;",
			},
			dropShadow: {
				customDrop: "1rem 1.2rem 1rem rgba(54, 53, 53, 0.87)",
			},
			fontFamily: {
				"century-gothic": ["var(--font-century-gothic)", "sans-serif"],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["wireframe", "retro"],
	},
} satisfies Config;
