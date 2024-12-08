import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		plugins: {
			prettier: prettierPlugin,
		},
	},
		{
			ignores: ['dist', 'node_modules', 'eslint.config.mjs'],
		},
		js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2020,
			},
		},
	},
	{
		files: ['**/*.{js}'],
		rules: {
			...prettierPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules,
			'prefer-const': 'error',
			'max-lines': ['warn', { max: 124 }],
			'max-params': ['error', 3],
		},
	},
];