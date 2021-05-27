import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../components/Section';
import Page from '../templates/Page';
import SubHero from '../components/SubHero';
import Input, { TextArea } from '../components/Input';

import styles from '../styles/Contact.module.scss';
import Button from '../components/Button';
import DominanceContact from '../components/DominanceContact';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [content, setContent] = useState('');

	const submitContact = (e) => {
		e.preventDefault();
		axios
			.post('/api/contact', {
				name: name,
				email: email,
				text: content,
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log('Error on the front end: ', err);
			});
	};
	return (
		<Page>
			<Head>
				<title>Contact The Kirk Concept</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section
				className={`${styles.contact} bg-gray-dark text-center align-items-center`}
				hero
			>
				<h1 className='fs-8xl font-weight-bold text-white'>
					contact<span className='text-primary'>.</span>
				</h1>
				<p className='fs-md font-weight-bold text-white-50 mb-20 nmt-2'>
					If you have questions, we’d love to hear from you
				</p>
			</Section>
			<SubHero tagline='hello@thekirkconcept.com'>
				<Col
					as={Tilt}
					sm={6}
					options={{ max: 15, scale: 1.01 }}
					className='p-30 shadow bg-white rounded-lg text-gray justify-self-center'
				>
					<h3 className='fs-sm font-weight-bold text-gray-dark mb-20'>
						Contact us for questions.
					</h3>
					<p>
						Please fill out the form below and a team member will
						reach out to you via email!
					</p>
					<form>
						<Input
							type='text'
							onChange={(e) => setName(e.target.value)}
							placeholder='Full Name'
							id='name'
							value={name}
						/>
						<Input
							type='text'
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
							id='email'
							value={email}
						/>
						<TextArea
							type='text'
							onChange={(e) => setContent(e.target.value)}
							placeholder='Message'
							id='content'
							value={content}
						/>
						<Button
							variant='primary'
							type='submit'
							onClick={(e) => submitContact(e)}
						>
							Send
						</Button>
						<small className='d-block mt-20'>
							By submitting this form you are agreeing to someone
							from our team reaching out to you to answer
							questions and/or conduct business. We have to keep
							this info on file so we know who to respond to!
							Thank you in advance.
						</small>
					</form>
				</Col>
			</SubHero>
			<Section>
				<p className='text-center'>
					6440 Sky Pointe Dr.
					<br />
					Suite 140-422
					<br />
					Las Vegas, NV 89131
					<br />
					702.336.0322
					<br />
					hello@thekirkconcept.com
				</p>
			</Section>
			<DominanceContact />
		</Page>
	);
};

export default Contact;
