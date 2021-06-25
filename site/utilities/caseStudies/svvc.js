import React from 'react';

const svvc = {
	name: 'Southern Vegas Valley Contracting',
	shortName: 'SVVC',
	slug: '/svvc',
	bgImg: '/bgs/bg_svvc.png',
	secondaryBgImg: '/bgs/svvc-secondary-bg.png',
	logo: '/logos/svvc-logo.svg',
	electricLogo: '/logos/electric_svvc_logo.svg',
	description: 'Southern Vegas Valley Contracting Rebrand.',
	brief: 'To create a dominant brand for Southern Vegas Valley Contracting, a high-end contracting business, that is looking to entice emotion and communicate a brand promise. They want their brand to communicate a feeling when coming in contact with marketing materials and their online presence.',
	colors: {
		primary: {
			name: 'Waterfall Navy',
			hex: '#1B3A68',
			rgb: '27, 58, 104',
			cmyk: '100, 84, 33, 20',
		},
		secondary: {
			name: 'Cement Gray',
			hex: '#8A929D',
			rgb: '138, 146, 157',
			cmyk: '49, 37, 31, 1',
		},
		tertiary: ['#7689A4', '#D1D8E1', '#B9BEC4', '#E8E9EB'],
	},
	typography: {
		fontFamily: `'Roboto', sans-serif;'`,
		title: 'It’s Not Just Where You Live. It’s Where You Do Life.',
		paragraph: (
			<>
				As an accomplished contractor in Las Vegas for more than 20
				years, Southern Vegas Valley Contracting, LLC (SVVC) currently
				specializes in customized kitchen and bath remodels,
				indoor-outdoor living spaces including upgraded or design-build
				pools, spas, outdoor kitchens, lounges, and fire feature spaces,
				and brand new home transformations.
			</>
		),
	},
	website: {
		created: true,
		url: 'https://svvcllc.com',
		img: {
			mobile: '/images/svvc-website-mobile@2x.png',
			desktop: '/images/svvc-website-desktop@2x.png',
		},
	},
};

export default svvc;
