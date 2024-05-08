/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Reddit Sans', 'sans-serif'],
				sans: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};
