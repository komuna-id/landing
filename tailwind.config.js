/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Reddit Sans', 'sans-serif'],
				sans: ['Manrope', 'sans-serif']
			},
			fontSize: {
				sm: '0.85rem',
				base: '0.9425rem'
			}
		}
	},
	plugins: []
};
