import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/Button/Button';
import Section from '../components/Section';
import SubHero from '../components/SubHero/SubHero';
import Page from '../templates/Page';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<Page className={styles.Home}>
			<Head>
				<title>The Kirk Concept</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section className='home-hero bg-gray text-center align-items-center'>
				<h1 className='fs-xl font-weight-bold text-white-50'>
					We unlock brand
					<br />
					<span className='text-white fs-8xl nmt-2 d-block'>
						dominance<span className='text-primary fs-8xl'>.</span>
					</span>
				</h1>
				<p className='fs-md font-weight-bold text-white-50 mb-20 nmt-2'>
					branding. design systems.{' '}
					<span className='text-primary'>app development.</span>
				</p>
				<Link href='/get-qualified'>
					<Button variant='primary' className='inline-block'>
						get started
					</Button>
				</Link>
			</Section>
			<SubHero tagline='We have systems in place to birth excellence.'>
				<p>this is awesome</p>
			</SubHero>
		</Page>
	);
}
