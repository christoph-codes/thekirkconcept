import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Section from '../components/Section';
import Page from '../components/templates/Page';

export default function Home() {

	return (
		<Page>
			<Head>
				<title>The Kirk Concept</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section bg='bg-gray'>
				<h1 className="text-4xl font-bold text-gray-light">We unlock brand<br/><span className="text-9xl font-bold text-white">dominance</span><span className="text-primary text-9xl font-bold ">.</span></h1>
				<p className="text-2xl font-bold text-gray-light mb-5">branding. design systems. <span className="text-primary">app development.</span></p>
				<Link href="/get-qualified">
					<a className="rounded-full inline-block p-3 px-7 font-bold bg-primary">get started</a>
				</Link>
			</Section>
		</Page>
	);
}