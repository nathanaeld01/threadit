import baseTailwind from "@threadit/tailwind";

export default {
	content: [...baseTailwind.content, "../../packages/ui/**/*.{ts,tsx}"],
	presets: [baseTailwind],
};
