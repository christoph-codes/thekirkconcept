import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../components/Section';
import Page from '../templates/Page';
import SubHero from '../components/SubHero';
import Input, { TextArea, Dropdown } from '../components/Input';

import styles from '../styles/Contact.module.scss';
import Button from '../components/Button';
import DominanceContact from '../components/DominanceContact';

const Qualify = () => {
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');
	const [upgrade, setUpgrade] = useState('Please Choose');
	const [budget, setBudget] = useState('Please Choose');
	const [additionalComments, setAdditionalComments] = useState('');

	const submitQualify = (e) => {
		e.preventDefault();
		console.log({
			fname,
			lname,
			phone,
			email,
			upgrade,
			budget,
			website,
			additionalComments,
		});
		axios
			.post('/api/qualify', {
				fname,
				lname,
				phone,
				email,
				upgrade,
				budget,
				website,
				additionalComments,
			})
			.then((data) => {
				if (data.status === 200) {
					console.log('Response to a successful call', data);
					return (
						<h1>
							Thank you for inquiring. Someone from our team will
							be reaching out to you shortly!
						</h1>
					);
				} else {
					console.log('...Something went wrong.');
				}
			})
			.catch((err) => {
				console.log('Error on the front end: ', err);
			});
	};
	return (
		<Page>
			<Head>
				<title>Get Qualified » The Kirk Concept</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section
				className={`${styles.Qualify} bg-gray-dark text-center align-items-center`}
				hero
			>
				<h1 className='fs-8xl font-weight-bold text-white'>
					get qualified<span className='text-primary'>.</span>
				</h1>
				<p className='fs-md font-weight-bold text-white-50 mb-20'>
					We only work with businesses that have been validated and
					are serious about making a statement in their industry.
				</p>
			</Section>
			<SubHero tagline='See if you qualify for brand dominance.'>
				<Col
					as={Tilt}
					sm={6}
					options={{ max: 15, scale: 1.01 }}
					className='p-30 shadow bg-white rounded-lg text-gray justify-self-center'
				>
					<h3 className='fs-sm font-weight-bold text-gray-dark mb-20'>
						Let’s see how serious you are
					</h3>
					<p>
						Please fill out the form below and a team member will
						reach out to you via email!
					</p>
					<form>
						<Row className='mx-0'>
							<Col
								className='mr-10'
								as={Input}
								type='text'
								onChange={(e) => setFname(e.target.value)}
								placeholder='First Name*'
								id='fname'
								value={fname}
								required
							/>
							<Col
								className='ml-10'
								as={Input}
								type='text'
								onChange={(e) => setLname(e.target.value)}
								placeholder='Last Name*'
								id='lname'
								value={lname}
								required
							/>
						</Row>
						<Input
							type='website'
							onChange={(e) => setWebsite(e.target.value)}
							placeholder='Website*'
							id='website'
							value={website}
						/>
						<Input
							type='text'
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email*'
							id='email'
							value={email}
							required
						/>
						<Input
							type='text'
							onChange={(e) => setPhone(e.target.value)}
							placeholder='Phone Number'
							id='phone'
							value={phone}
							required
						/>
						<Dropdown
							type='text'
							onChange={(e) => setUpgrade(e.target.value)}
							placeholder='What area would you like to upgrade?*'
							id='upgrade'
							value={upgrade}
							required
						>
							<option disabled value='Please Choose'>
								What area would you like to upgrade?*
							</option>
							<option value='Branding'>Branding</option>
							<option value='Design System'>Design System</option>
							<option value='Web Development'>
								Web Development
							</option>
							<option value='App Development'>
								App Development
							</option>
						</Dropdown>
						<Dropdown
							type='text'
							onChange={(e) => setBudget(e.target.value)}
							placeholder='What is your budget?*'
							id='budget'
							value={budget}
							required
						>
							<option disabled value='Please Choose'>
								What is your budget?*
							</option>
							<option value='$10k'>{`$10k`}</option>
							<option value='$10k - $25k'>{`$10k - $25k`}</option>
							<option value='$25k - $50k'>{`$25k - $50k`}</option>
							<option value='$50 - $100k'>
								{`$50k - $100k`}
							</option>
						</Dropdown>
						<TextArea
							type='text'
							onChange={(e) =>
								setAdditionalComments(e.target.value)
							}
							placeholder='Additional Comments'
							id='additionalComments'
							value={additionalComments}
						/>
						<Button
							variant='primary'
							type='submit'
							onClick={(e) => submitQualify(e)}
						>
							Submit
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
					Suite 140-422 Las Vegas, NV 89131
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

export default Qualify;
