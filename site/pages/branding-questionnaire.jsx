import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Col } from 'react-bootstrap';
import Section from '../components/Section';
import Page from '../templates/Page';
import SubHero from '../components/SubHero';
import Input, { TextArea } from '../components/Input';
import Button from '../components/Button';
import DominanceContact from '../components/DominanceContact';
import Card from '../components/Card';

import styles from '../styles/Contact.module.scss';

const BrandingQuestionnaire = () => {
	const [decisionMaker, setDecisionMaker] = useState('');
	const [businessName, setBusinessName] = useState('');
	const [email, setEmail] = useState('');
	const [businessDescription, setBusinessDescription] = useState('');
	const [usp, setUsp] = useState('');
	const [competitors, setCompetitors] = useState('');
	const [adjectives, setAdjectives] = useState('');
	const [primaryMessage, setPrimaryMessage] = useState('');
	const [idealCustomer, setIdealCustomer] = useState('');
	const [additionalComments, setAdditionalComments] = useState('');
	const [successfulSubmission, setSuccessfulSubmission] = useState(false);

	const submitQuestionnaire = (e) => {
		e.preventDefault();
		const emailDetails = {
			decisionMaker,
			businessName,
			email,
			businessDescription,
			usp,
			competitors,
			adjectives,
			primaryMessage,
			idealCustomer,
			additionalComments,
		};
		console.log(emailDetails);
		// axios
		// 	.post('/api/branding-questionnaire', {
		// 		emailDetails,
		// 	})
		// 	.then((data) => {
		// 		if (data.status === 200) {
		// 			console.log('ALL IS WELL ');
		// 			setSuccessfulSubmission(true);
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log('Error on the front end:', err);
		// 	});
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
					brand questionnaire<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					Answer these questions and we can get started creating your
					custom brand.
				</p>
			</Section>
			<SubHero tagline="hello@thekirkconcept.com">
				<Col sm={8}>
					<Card>
						{!successfulSubmission ? (
							<>
								<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
									Contact us for questions.
								</h3>
								<p>
									Please fill out the form below and this will
									give us a better understanding of the brand
									you want to create.
								</p>
								<form>
									<Input
										type="text"
										onChange={(e) =>
											setDecisionMaker(e.target.value)
										}
										placeholder="ie. Chris Jones"
										label="Full Name"
										name="decisionMaker"
										id="decisionMaker"
										value={decisionMaker}
									/>
									<Input
										type="text"
										onChange={(e) =>
											setBusinessName(e.target.value)
										}
										placeholder="The Kirk Concept"
										label="Business Name"
										name="businessName"
										id="businessName"
										value={businessName}
									/>
									<Input
										type="text"
										onChange={(e) =>
											setEmail(e.target.value)
										}
										label="Decision Maker Email"
										placeholder="hello@thekirkconcept.com"
										name="email"
										id="email"
										value={email}
									/>
									<TextArea
										type="text"
										onChange={(e) =>
											setBusinessDescription(
												e.target.value
											)
										}
										label="What does your business/product do? (2 sentences)"
										placeholder="Brief description. Be short and specific."
										name="businessDescription"
										id="businessDescription"
										value={businessDescription}
									/>
									<Input
										type="text"
										onChange={(e) =>
											setCompetitors(e.target.value)
										}
										label="Who are your 3 main competitors (direct or indirect)?"
										placeholder="What are some things you like and dislike about each?"
										id="competitors"
										name="competitors"
										value={competitors}
									/>
									<TextArea
										type="text"
										onChange={(e) => setUsp(e.target.value)}
										label="What sets you apart from your competitors"
										placeholder="Your unique selling proposition"
										id="usp"
										name="usp"
										value={usp}
									/>
									<Input
										type="text"
										onChange={(e) =>
											setAdjectives(e.target.value)
										}
										label="Share 5 adjective or words that best describe your company."
										placeholder="inspiring, determined, bright, etc."
										id="adjectives"
										name="adjectives"
										value={adjectives}
									/>
									<TextArea
										type="text"
										onChange={(e) =>
											setIdealCustomer(e.target.value)
										}
										label="Describe your ideal customer?"
										placeholder="Who is your business trying to attract?"
										id="idealCustomer"
										name="idealCustomer"
										value={idealCustomer}
									/>
									<TextArea
										type="text"
										onChange={(e) =>
											setPrimaryMessage(e.target.value)
										}
										label="What is the primary message you want to convey to your customers?"
										placeholder="When your customers leave your brand what do you want them to know?"
										id="primaryMessage"
										name="primaryMessage"
										value={primaryMessage}
									/>
									<TextArea
										type="text"
										onChange={(e) =>
											setAdditionalComments(
												e.target.value
											)
										}
										label="Additional Comments"
										id="additionalComments"
										name="additionalComments"
										value={additionalComments}
									/>
									<Button
										className="w-100"
										variant="primary"
										type="submit"
										onClick={(e) => submitQuestionnaire(e)}
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
							<>
								<img
									src="/images/letsgettowork-siliconvalley.gif"
									alt="Thank you for your submission"
								/>
								<h4 className="mt-24">
									You are awesome! We will get in touch with
									you shortly. In the meantime, go tell
									someone you love them!
								</h4>
							</>
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
		</Page>
	);
};

export default BrandingQuestionnaire;
