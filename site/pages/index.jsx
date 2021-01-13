import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Section from '../components/Section';
import Page from '../components/templates/Page';
import testfetch from './api/testfetch';

export default function Home() {
	// const [randomPup, setRandomPup] = useState('');

	// const imgStyle = {
	// 	width: '60%',
	// 	margin: '0 auto',
	// 	display: 'block',
	// };

	// const reFetch = () => {
	// 	testfetch().then((data) => {
	// 		setRandomPup(data);
	// 	});
	// };

	// useEffect(() => {
	// 	// console.log(excitedImg);
	// 	reFetch();
	// }, []);

	return (
		<Page>
			<Head>
				<title>The Kirk Concept</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section bgimg='bg-purple-900'>
				<Image
					src='/tkc_logo_floating.svg'
					width={155}
					height={200}
					layout='intrinsic'
					objectFit='cover'
					alt='The Kirk Concept, We get companies excited about their brand.'
				/>
				<p className='text-gray-light my-3 uppercase'>
					A Branding And Web Development Agency
				</p>
			</Section>
			<section bgimg='bg-purple-900 w-full'>
				<div className='flex container mx-auto my-20 gap-x-20'>
					<div className='w-1/3'>
						<h2>Branding</h2>
						<div className="service-list text-left">
							<p className='text-gray-light my-3 uppercase'>
								Brand Identity 
							</p>
							<p className='text-gray-light my-3 uppercase'>Art Direction</p>
							<p className='text-gray-light my-3 uppercase'>Logo Design</p>
							<p className='text-gray-light my-3 uppercase'>Iconography</p>
							<p className='text-gray-light my-3 uppercase'>Illustration</p>
							<p className='text-gray-light my-3 uppercase'>Animation</p>
						</div>
					</div>
					<div className='w-1/3'>
						<h2>Design</h2>
						<div className="service-list text-left">
							<p className='text-gray-light my-3 uppercase'>
								Brand Identity 
							</p>
							<p className='text-gray-light my-3 uppercase'>Art Direction</p>
							<p className='text-gray-light my-3 uppercase'>Logo Design</p>
							<p className='text-gray-light my-3 uppercase'>Iconography</p>
							<p className='text-gray-light my-3 uppercase'>Illustration</p>
							<p className='text-gray-light my-3 uppercase'>Animation</p>
						</div>
					</div>
					<div className='w-1/3'>
						<h2>Web Development</h2>
						<div className="service-list text-left">
							<p className='text-gray-light my-3 uppercase'>
								Brand Identity 
							</p>
							<p className='text-gray-light my-3 uppercase'>Art Direction</p>
							<p className='text-gray-light my-3 uppercase'>Logo Design</p>
							<p className='text-gray-light my-3 uppercase'>Iconography</p>
							<p className='text-gray-light my-3 uppercase'>Illustration</p>
							<p className='text-gray-light my-3 uppercase'>Animation</p>
						</div>
					</div>
				</div>
			</section>
			<Section bgimg='bg-gray-dark'>
				<div className='flex items-center justify-center'>
					<div className='w-1/2'>
						<Image
							src='/lazer-ladies-jumping.png'
							width={555}
							height={500}
							layout='intrinsic'
							objectFit='cover'
							alt='Lazer Ladies Gifts and Awards, The Kirk Concept, We get companies excited about their brand.'
						/>
					</div>
					<div className='w-1/2 text-left'>
						<h2 className="font-bold uppercase text-purple-light text-lg font-bold">Lazer Ladies</h2>
						<p className='text-gray-light my-3 uppercase text-4xl font-bold'>
							"Graphic design and branding is on point!"<br/>
							<span className='text-lg text-right text-purple-light font-light capitalize'>- Marylou Soto, Owner</span>
						</p>
					</div>
				</div>
			</Section>
			<Section bgimg='bg-gray-light'>
				<div className='flex items-center justify-center'>
				<div className='w-1/2 text-right pl-12'>
						<h2 className="font-bold uppercase text-purple-light text-lg font-bold">Firefly Energy Solar</h2>
						<p className='text-purple my-3 uppercase text-4xl font-bold'>
							"I Am thrilled with my new company logo and am proud to display it!"<br/>
							<span className='text-lg text-right text-purple-light font-light capitalize'>- Jarrod Walters, Owner</span>
						</p>
					</div>
					<div className='w-1/2'>
						<Image
							src='/firefly-logo.png'
							width={400}
							height={400}
							layout='intrinsic'
							objectFit='cover'
							alt='Firefly Energy Brand Logo, The Kirk Concept, We get companies excited about their brand.'
						/>
					</div>
				</div>
			</Section>
			<Section bgimg='bg-fngGreen'>
				<div className='flex items-center justify-center'>
					<div className='w-1/2'>
						<Image
							src='/forgottennotgone-logo.png'
							width={200}
							height={235}
							layout='intrinsic'
							objectFit='cover'
							alt='Forgotten Not Gone, The Kirk Concept, We get companies excited about their brand.'
						/>
					</div>
					<div className='w-1/2 text-left'>
						<h2 className="font-bold uppercase text-purple-light text-lg font-bold">Lazer Ladies</h2>
						<p className='text-gray-light my-3 uppercase text-4xl font-bold'>
							"Our new logo resonates better with the community of Veterans we serve."<br/>
							<span className='text-lg text-right text-purple-light font-light capitalize'>- Marylou Soto, Owner</span>
						</p>
					</div>
				</div>
			</Section>
		</Page>
	);
}
