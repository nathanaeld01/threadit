import tailwindAnimate from "tailwindcss-animate";

import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: ["class"],
	plugins: [tailwindAnimate],
	theme: {
		extend: {
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			backgroundImage: {
				community: "linear-gradient(transparent, var(--card))",
			},
			colors: {
				alternate:
					"color-mix(in srgb, var(--alternate), transparent calc(100% - 100% * <alpha-value>))",
				background:
					"color-mix(in srgb, var(--background), transparent calc(100% - 100% * <alpha-value>))",
				border: {
					DEFAULT:
						"color-mix(in srgb, var(--border-base), transparent calc(100% - 100% * <alpha-value>))",
					hover: "color-mix(in srgb, var(--border-hover), transparent calc(100% - 100% * <alpha-value>))",
					ring: "color-mix(in srgb, var(--border-ring), transparent calc(100% - 100% * <alpha-value>))",
				},
				card: "color-mix(in srgb, var(--card), transparent calc(100% - 100% * <alpha-value>))",
				error: {
					DEFAULT:
						"color-mix(in srgb, var(--error), transparent calc(100% - 100% * <alpha-value>))",
					muted: "color-mix(in srgb, var(--error-muted), transparent calc(100% - 100% * <alpha-value>))",
					text: "color-mix(in srgb, var(--error-text), transparent calc(100% - 100% * <alpha-value>))",
				},
				foreground:
					"color-mix(in srgb, var(--foreground), transparent calc(100% - 100% * <alpha-value>))",
				muted: "color-mix(in srgb, var(--muted), transparent calc(100% - 100% * <alpha-value>))",
				primary: {
					DEFAULT:
						"color-mix(in srgb, var(--primary), transparent calc(100% - 100% * <alpha-value>))",
					hover: "color-mix(in srgb, var(--primary-hover), transparent calc(100% - 100% * <alpha-value>))",
				},
				secondary: {
					DEFAULT:
						"color-mix(in srgb, var(--secondary), transparent calc(100% - 100% * <alpha-value>))",
					hover: "color-mix(in srgb, var(--secondary-hover), transparent calc(100% - 100% * <alpha-value>))",
				},
				success: {
					DEFAULT:
						"color-mix(in srgb, var(--success), transparent calc(100% - 100% * <alpha-value>))",
					muted: "color-mix(in srgb, var(--success-muted), transparent calc(100% - 100% * <alpha-value>))",
					text: "color-mix(in srgb, var(--success-text), transparent calc(100% - 100% * <alpha-value>))",
				},
				tertiary: {
					DEFAULT:
						"color-mix(in srgb, var(--tertiary), transparent calc(100% - 100% * <alpha-value>))",
					hover: "color-mix(in srgb, var(--tertiary-hover), transparent calc(100% - 100% * <alpha-value>))",
				},
				warning: {
					DEFAULT:
						"color-mix(in srgb, var(--warning), transparent calc(100% - 100% * <alpha-value>))",
					muted: "color-mix(in srgb, var(--warning-muted), transparent calc(100% - 100% * <alpha-value>))",
					text: "color-mix(in srgb, var(--warning-text), transparent calc(100% - 100% * <alpha-value>))",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			spacing: {
				4.5: "1.125rem",
				15: "3.75rem",
				30: "7.5rem",
				38: "9.5rem",
			},
			zIndex: {
				1: "1",
			},
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
		},
	},
} satisfies Config;
