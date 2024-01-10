/** @type { import('eslint').Linter.FlatConfig } */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
  ],
  parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.astro'],
    parser: '@typescript-eslint/parser',
	},
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Support client-side typescript
      processor: 'astro/client-side-ts',
    },
  ],
  env: {
		browser: true,
		es2017: true,
		node: true
	}
};
