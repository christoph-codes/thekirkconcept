import Head from 'next/head';
import { useEffect, useState } from 'react';
import testfetch from './api/testfetch';

export default function Home() {
	const [randomPup, setRandomPup] = useState('');

	const imgStyle = {
		width: '60%',
		margin: '0 auto',
		display: 'block',
	};

	const reFetch = () => {
		testfetch().then((data) => {
			setRandomPup(data);
		});
	};

	useEffect(() => {
		reFetch();
	}, []);

	return (
		<div>
			<Head>
				<title>The Kirk Concept</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>The Kirk Concept</h1>
			<button onClick={reFetch}>Find new pup</button>
			{randomPup !== '' && (
				<div style={imgStyle}>
					<img  style={{ width: '100%'}} src={randomPup} alt='Puppy Name' />
				</div>
			)}
		</div>
	);
}
