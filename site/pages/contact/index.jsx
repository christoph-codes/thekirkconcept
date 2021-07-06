import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Col } from 'react-bootstrap';
import Section from '../../components/Section';
import Page from '../../templates/Page';
import SubHero from '../../components/SubHero';
import Input, { TextArea } from '../../components/Input';
import Button from '../../components/Button';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';

import styles from '../../styles/Contact.module.scss';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [content, setContent] = useState('');
	const [successfulSubmission, setSuccessfulSubmission] = useState(false);

	const submitContact = (e) => {
		e.preventDefault();
		const emailDetails = {
			name,
			email,
			content,
			formType: 'Contact',
		};
		axios
			.post('/api/contact', {
				emailDetails,
			})
			.then((data) => {
				if (data.status === 200) {
					console.log('ALL IS WELL ');
					setSuccessfulSubmission(true);
				}
			})
			.catch((err) => {
				console.log('Error on the front end:', err);
			});
	};
	return (
		<Page>
			<Head>
				<title>Contact The Kirk Concept</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Section
				className={`${styles.contact} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/contact_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					contact<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					If you have questions, we’d love to hear from you
				</p>
			</Section>
			<SubHero tagline="hello@thekirkconcept.com">
				<Col sm={6}>
					<Card>
						{!successfulSubmission ? (
							<>
								<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
									Contact us for questions.
								</h3>
								<p>
									Please fill out the form below and a team
									member will reach out to you via email!
								</p>
								<form>
									<Input
										type="text"
										onChange={(e) =>
											setName(e.target.value)
										}
										placeholder="Full Name"
										id="name"
										value={name}
									/>
									<Input
										type="text"
										onChange={(e) =>
											setEmail(e.target.value)
										}
										placeholder="Email"
										id="email"
										value={email}
									/>
									<TextArea
										type="text"
										onChange={(e) =>
											setContent(e.target.value)
										}
										placeholder="Message"
										id="content"
										value={content}
									/>
									<Button
										className="w-100"
										variant="primary"
										type="submit"
										onClick={(e) => submitContact(e)}
									>
										Send
									</Button>
									<small className="d-block mt-20">
										By submitting this form you are agreeing
										to someone from our team reaching out to
										you to answer questions and/or conduct
										business. We have to keep this info on
										file so we know who to respond to! Thank
										you in advance.
									</small>
								</form>
							</>
						) : (
							<div className="text-center">
								<img
									src="/images/letsgettowork-siliconvalley.gif"
									alt="Thank you for your submission"
								/>
								<h4 className="mt-24">
									You are awesome! We will get in touch with
									you shortly. In the meantime, go tell
									someone you love them!
								</h4>
							</div>
						)}
					</Card>
				</Col>
			</SubHero>
			<Section>
				<p className="text-center">
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
