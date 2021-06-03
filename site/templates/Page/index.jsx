import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { dateTime } from '../../utilities/helpers';

const Page = ({
	children,
	date,
	description = 'The Kirk Concept, We unlock brand dominance through branding, design systems, and app development.',
	image,
	title = 'The Kirk Concept » Branding & App Development',
	keywords,
	router,
	className,
}) => {
	const domain = 'https://thekirkconcept.com';
	const url = router && router.asPath ? router.asPath : undefined;
	const canonical = url && url === '/' ? domain : domain + url;
	const featuredImage = domain + image;
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
				<meta
					content='width=device-width, initial-scale=1'
					name='viewport'
				/>
				{description && (
					<meta content={description} name='description' />
				)}
				{keywords && <meta content={keywords} name='keywords' />}
				<meta content='follow, index' name='robots' />
				<meta content='#ffffff' name='theme-color' />
				<meta content='#ffffff' name='msapplication-TileColor' />
				<meta
					content='/favicons/browserconfig.xml'
					name='msapplication-config'
				/>
				<link
					href='/favicon@3x.png'
					rel='apple-touch-icon'
					sizes='180x180'
				/>
				<link
					href='/favicon@2x.png'
					rel='icon'
					sizes='32x32'
					type='image/png'
				/>
				<link
					href='/favicon@3x.png'
					rel='icon'
					sizes='16x16'
					type='image/png'
				/>
				<link href='/favicons/site.webmanifest' rel='manifest' />
				<link
					color='#5bbad5'
					href='/favicons/safari-pinned-tab.svg'
					rel='mask-icon'
				/>
				<link href='/favicon.ico' rel='shortcut icon' />

				{url && <link href={canonical} rel='canonical' />}
				<meta content='en_US' property='og:locale' />
				<meta content={title} property='og:title' />
				<meta content={description} property='og:description' />
				<meta content={canonical} property='og:url' />
				<meta
					content='Christopher Kirk Jones'
					property='article:author'
				/>
				{/* <meta
					content='t28Kl2fGmZjIEgh6q3mGsf-7gGb8115VMQm1qbMMIKc'
					name='google-site-verification'
				/> */}
				{featuredImage && (
					<>
						<meta content={featuredImage} property='og:image' />
						<meta content={description} property='og:image:alt' />
					</>
				)}
				{date && (
					<>
						<meta content='article' property='og:type' />
						<meta
							content={dateTime(date)}
							property='article:published_time'
						/>
					</>
				)}
				<meta content='summary_large_image' name='twitter:card' />
				<meta content='@thekirkconcept' name='twitter:site' />
				<meta content='@thekirkconcept' name='twitter:creator' />
			</Head>
			<div className={`Page ${className}`}>
				<Header />
				<main className='content'>{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Page;

Page.propTypes = {
	className: PropTypes.string,
};

Page.defaultProps = {
	className: '',
};
