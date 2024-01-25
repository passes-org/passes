/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
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
};

module.exports = config;