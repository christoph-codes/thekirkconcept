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
			purple: {
				light: '#9966ff',
				DEFAULT: '#432fa8',
				lightest: ' #f2eff9',
				lazers: '#432f8a'
			},
			gray: {
				dark: '#292929',
				DEFAULT: '#555555',
				light: '#e6e6ec',
			},
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
			sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
			display: ['Open Sans'],
			body: ['Open Sans'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
