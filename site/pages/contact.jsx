import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import Section from '../components/Section';
import Page from '../components/templates/Page';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [content, setContent] = useState('');

	const submitContact = (e) => {
		e.preventDefault();
		axios.post('http://localhost:7000/contact', {
			name,
			email,
			content
		}).then(res => {
			console.log('Successful Post', res.data)
		}).catch(err => {
			console.log('Error: ', err.message);
		});

    };
    return (
		<Page>
			<Head>
				<title>Contact The Kirk Concept</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section bgimg='bg-gray-light'>
				<input
					type='text'
					onChange={(e) => setName(e.target.value)}
					id='name'
					value={name}
				/>
				<input
					type='text'
					onChange={(e) => setEmail(e.target.value)}
					id='email'
					value={email}
				/>
				<input
					type='text'
					onChange={(e) => setContent(e.target.value)}
					id='content'
					value={content}
				/>
				<button onClick={(e) => submitContact(e)} type='submit'>
					Send
				</button>
			</Section>
		</Page>
	);
}

export default Contact;
