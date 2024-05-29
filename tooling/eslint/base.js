import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	perfectionistNatural,
	{
		ignores: ["**/*.config.js"],
	},
	{
		files: ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.jsx"],
		plugins: {
			perfectionist: perfectionistPlugin,
		},
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{
					prefer: "type-imports",
				},
			],
			"@typescript-eslint/no-misused-promises": [
				2,
				{
					checksVoidReturn: {
						attributes: false,
					},
				},
			],
			"@typescript-eslint/no-unnecessary-condition": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
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
	},
	{
		linterOptions: { reportUnusedDisableDirectives: true },
		languageOptions: { parserOptions: { project: true } },
	},
);
