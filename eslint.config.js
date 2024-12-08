import js from "@eslint/js"
import globals from "globals"
import prettierPlugin from "eslint-plugin-prettier"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
	{
		plugins: {
			prettier: prettierPlugin
		}
	},
	{
		ignores: ["dist", "node_modules", "eslint.config.js"]
	},
	js.configs.recommended,

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2020
			}
		}
	},
	{
		files: ["src/**/*.js"],
		rules: {
			...prettierPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules,
			"max-lines": ["warn", { max: 150 }],
			"max-params": ["error", 3]
		}
	}
]
