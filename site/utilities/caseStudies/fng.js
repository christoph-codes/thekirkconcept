const fng = {
	name: 'Forgotten Not Gone',
	shortName: 'FNG',
	slug: '/fng',
	bgImg: '/bgs/bg_fng.png',
	secondaryBgImg: '/bgs/fng-secondary-bg.png',
	logo: '/logos/fng_logo.svg',
	electricLogo: '/logos/electric_fng_logo.svg',
	description: 'Forgotten Not Gone rebrand.',
	brief: 'To create a dominant brand for Forgotten Not Gone, a leading non-profit that focuses on Suicide Prevention through Veteran Peer Support Outdoor Recreation. FNG was looking to create a memorable brand that is recognizeable to the entire veteran community but entice emotion for those who have a heart for our soldiers who has served. They wanted their brand to breath veteran and military ambiance along with caring aspect to bring about country-wide awareness.',
	colors: {
		primary: {
			name: 'Vet Green',
			hex: '#444f22',
			rgb: '68, 79, 34',
			cmyk: '100, 84, 33, 20',
		},
		secondary: {
			name: 'Relief Gold',
			hex: '#f8c417',
			rgb: '248, 196, 23',
			cmyk: '66, 47, 100, 44',
		},
		tertiary: ['#2f2425', '#000000', '#C92323', '#bbb5b4'],
	},
	typography: {
		fontFamily: `'Radjhani', sans-serif;'`,
		title: 'It’s Not Just Where You Live. It’s Where You Do Life.',
		paragraph: (
			<>
				#FNG is Proactive in Veteran Suicide Prevention by addressing
				the triggers of suicide and WHY it continues to happen. We
				Provide and Maintain a Fleet of Velomobile Recumbent trikes (3
				and 4 Wheel Bicycles, some with electric assist) FREE of charge
				to ride for our local Veterans and their families to
				#GetOutTheDamnHouse and learn to live life #StigmaFree
			</>
		),
	},
	website: {
		created: true,
		url: 'https://forgottennotgone.org',
		img: {
			mobile: '/images/fng-website-mobile@2x.png',
			desktop: '/images/fng-website-desktop@2x.png',
		},
	},
};
export default fng;
