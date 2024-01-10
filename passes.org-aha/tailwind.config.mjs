/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
      'display': ['"SF Pro Display"', 'system-ui', 'sans-serif'],
      'text': ['"SF Pro Text"', 'system-ui', 'sans-serif'],
      'rounded': ['"SF Pro Rounded"', 'system-ui-rounded', 'sans-serif'],
    },

		extend: {
			container: { center: true },
		}
	},
	plugins: [],
}
