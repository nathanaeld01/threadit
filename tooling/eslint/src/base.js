import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.stylisticTypeChecked,
	perfectionist.configs["recommended-natural"],
	{
		files: ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.jsx"],
		rules: {
			"sort-imports": "off",
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
					internalPattern: ["@/**"],
				},
			],
		},
	},
	{
		linterOptions: { reportUnusedDisableDirectives: true },
		languageOptions: { parserOptions: { project: true } },
	},
	prettier,
	prettierRecommended,
);
