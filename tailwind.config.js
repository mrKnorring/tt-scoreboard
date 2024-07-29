/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/views/*.hbs', './public/views/**/*.hbs', './src/interfaces/*.ts'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
}
