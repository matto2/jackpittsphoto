/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				eau: ['Eau', 'sans-serif'], // Add your custom font
				// Add Red Rose to font family
			  },
	},
	plugins: [],
	},
}
