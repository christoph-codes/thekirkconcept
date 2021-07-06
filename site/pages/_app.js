import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/globals.scss';

const tagManagerArgs = {
	gtmId: 'GTM-THFLVR6',
};

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		TagManager.initialize(tagManagerArgs);
	});

	return <Component {...pageProps} />;
};

export default MyApp;
