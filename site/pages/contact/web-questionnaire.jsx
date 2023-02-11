import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Col } from 'react-bootstrap';
import Section from '../../components/Section';
import Page from '../../templates/Page';
import SubHero from '../../components/SubHero';
import Input, { Dropdown, TextArea } from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';

import styles from '../../styles/Contact.module.scss';

const WebQuestionnaire = () => {
	const [decisionMaker, setDecisionMaker] = useState('');
	const [businessName, setBusinessName] = useState('');
	const [email, setEmail] = useState('');
	const [businessDescription, setBusinessDescription] = useState('');
	const [website, setWebsite] = useState('');
	const [websiteGoal, setWebsiteGoal] = useState('');
	const [websiteContentProvider, setWebsiteContentProvider] = useState('');
	const [trafficDriver, setTrafficDriver] = useState('');
	const [maintenance, setMaintenance] = useState('Please Choose');
	const [brandImplementation, setBrandImplementation] =
		useState('Please Choose');
	const [usp, setUsp] = useState('');
	const [competitors, setCompetitors] = useState('');
	const [additionalComments, setAdditionalComments] = useState('');
	const [successfulSubmission, setSuccessfulSubmission] = useState(false);
	const [error, setError] = useState();

	const submitQuestionnaire = (e) => {
		e.preventDefault();
		const emailDetails = {
			decisionMaker,
			businessName,
			email,
			businessDescription,
			usp,
			competitors,
			website,
			websiteGoal,
			websiteContentProvider,
			maintenance,
			trafficDriver,
			brandImplementation,
			additionalComments,
			formType: 'Web Questionnaire',
		};
		if (
			decisionMaker &&
			businessName &&
			email &&
			businessDescription &&
			websiteGoal
		) {
			axios
				.post('/api/web-questionnaire', {
					emailDetails,
				})
				.then((data) => {
					if (data.status === 200) {
						setError();
						setSuccessfulSubmission(true);
					}
				})
				.catch((err) => {
					setError('Error on the front end:', err);
				});
		} else {
			setError('You must enter required fields');
		}
	};
	return (
		<Page
			title="Web Questionnaire for The Kirk Concept"
			description="Answer these questions and we can get started creating your
		custom brand."
		>
			<Section
				className={`${styles.WebQuestionnaire} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/web_questionnaire_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					web questionnaire<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					Answer these questions and we can get started creating your
					custom brand.
				</p>
			</Section>
			<SubHero tagline="let's create a dominant web experience for your business">
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
								{error && (
									<p className="py-8 px-16 border-top border-bottom border-danger text-center text-danger">
										{error}
									</p>
								)}
								<form onSubmit={submitQuestionnaire}>
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
										required
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
										required
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
										required
									/>
									<Input
										type="text"
										onChange={(e) =>
											setWebsite(e.target.value)
										}
										label="Website"
										placeholder="https://thekirkconcept.com"
										name="website"
										id="website"
										value={website}
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
										required
									/>
									<TextArea
										type="text"
										onChange={(e) =>
											setWebsiteGoal(e.target.value)
										}
										label="What is the goal of your website"
										placeholder="ie: To sell products. To inform customers."
										name="websiteGoal"
										id="websiteGoal"
										value={websiteGoal}
										required
									/>
									<Input
										type="text"
										onChange={(e) =>
											setWebsiteContentProvider(
												e.target.value
											)
										}
										label="Who will be responsible for providing website content?"
										placeholder="Team Manager, Steve"
										id="websiteContentProvider"
										name="websiteContentProvider"
										value={websiteContentProvider}
									/>
									<Dropdown
										type="text"
										onChange={(e) =>
											setMaintenance(e.target.value)
										}
										label="Will you need website maintenance and management once the website is complete?"
										placeholder="Please Choose"
										id="maintenance"
										value={maintenance}
										required
									>
										<option disabled value="Please Choose">
											Please Choose
										</option>
										<option value="Yes">{`Yes`}</option>
										<option value="No">{`No`}</option>
									</Dropdown>
									<Dropdown
										type="text"
										onChange={(e) =>
											setBrandImplementation(
												e.target.value
											)
										}
										label="Do you have a brand to implemenet throughout the website?"
										placeholder="Please Choose"
										id="brandImplementation"
										value={brandImplementation}
										required
									>
										<option disabled value="Please Choose">
											Please Choose
										</option>
										<option value="Yes">{`Yes`}</option>
										<option value="No">{`No`}</option>
									</Dropdown>
									<Input
										type="text"
										onChange={(e) =>
											setTrafficDriver(e.target.value)
										}
										label="How will you be driving traffic to your website?"
										placeholder="Marketing. Cold calls. Emails. etc."
										id="trafficDriver"
										name="trafficDriver"
										value={trafficDriver}
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
					Suite 140-273
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

export default WebQuestionnaire;
