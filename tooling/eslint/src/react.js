import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			react: reactPlugin,
			"react-hooks": hooksPlugin,
		},
		rules: {
			...reactPlugin.configs["jsx-runtime"].rules,
			...hooksPlugin.configs.recommended.rules,
			"perfectionist/sort-imports": [
				"error",
				{
					groups: [
						"side-effect-style",
						["builtin", "external"],
						["internal", "parent", "sibling", "index"],
						["type"],
					],
					"internal-pattern": ["@/**"],
				},
			],
		},
		languageOptions: {
			globals: {
				React: "writable",
			},
		},
	},
];
