module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: { montserrat: ['Montserrat', 'sans-serif'], opensans: ['Open Sans', 'sans-serif'] },
		},
	},
	plugins: [require('tailwindcss-animated')],
}
