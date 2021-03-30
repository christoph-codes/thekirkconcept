const colors = require('tailwindcss/colors');
module.exports = {
	purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
	darkMode: 'media', // or 'media' or 'class'
	loaders: [
		{
			test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
			loader: 'url-loader?limit=100000' }
	],
	theme: {
		colors: {
			transparent: 'transparent',
			currentColor: 'currentColor',
			black: colors.black,
			white: colors.white,
			green: colors.green,
			red: colors.rose,
			yellow: colors.amber,
			primary: {
				DEFAULT: '#e6fd36',
				light: '#F3FE9B',
				lightest: '#FDFFEB'
			},
			gray: {
				DEFAULT: '#454545',
				light: '#767676',
			}
		},
		extend: {
			backgroundImage: theme => ({
				'home-hero': "url('../../assets/bgs/tkc19-hero-v4.jpg')",
			   }),
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
			   }
		},
		fontFamily: {
			sans: ['Heebo', 'ui-sans-serif', 'system-ui'],
			display: ['Heebo'],
			body: ['Heebo'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
