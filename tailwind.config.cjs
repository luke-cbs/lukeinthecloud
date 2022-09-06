/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'raleway': ['Raleway', 'sans-serif'],
				'fira': ['Fira Code', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
