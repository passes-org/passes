import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		// CSRF protection is enforced in a hook for every route except /request, which depends on CORS
		csrf: { checkOrigin: false }
	},

	// Use Svelte 5 Runes
	compilerOptions: { runes: true },

	preprocess: [vitePreprocess({})]
};

export default config;
