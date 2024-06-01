import baseTailwind from "@threadit/tailwind";
import plugin from "tailwindcss/plugin";

export default {
	content: [
		"./src/**/*.tsx",
		"./src/**/*.ts",
		"./src/**/*.js",
		"./src/**/*.jsx",
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
