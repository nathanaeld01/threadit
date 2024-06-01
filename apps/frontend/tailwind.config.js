import baseTailwind from "@threadit/tailwind";
import plugin from "tailwindcss/plugin";

export default {
	content: [
		"./src/**/*.{jsx,js,ts,tsx}",
		"../../packages/ui/src/**/*.{jsx,js,ts,tsx}",
	],
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				".size-dv": {
					height: "100dvh",
					width: "100dvw",
				},
				".unset": {
					position: "unset",
				},
			});
		}),
	],
	presets: [baseTailwind],
};
