/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: 'var(--accent)',
				'accent-dark': 'var(--accent-dark)',
				black: 'rgb(var(--black))',
				'gray': 'rgb(var(--gray))',
				'gray-light': 'rgb(var(--gray-light))',
				'gray-dark': 'rgb(var(--gray-dark))',
			}
		},
	},
	plugins: [],
}
