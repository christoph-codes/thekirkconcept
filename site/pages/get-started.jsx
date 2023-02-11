import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import Section from '../components/Section';
import Page from '../templates/Page';
import SubHero from '../components/SubHero';
import Input, { TextArea, Dropdown } from '../components/Input';
import Card from '../components/Card';
import Button from '../components/Button';
import styles from '../styles/Contact.module.scss';

const GetStarted = () => {
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');
	const [upgrade, setUpgrade] = useState('Please Choose');
	const [budget, setBudget] = useState('Please Choose');
	const [additionalComments, setAdditionalComments] = useState('');
	const [successfulSubmission, setSuccessfulSubmission] = useState(false);
	const [error, setError] = useState();

	const submitGetStarted = (e) => {
		e.preventDefault();
		if (fname && lname && email && upgrade && budget) {
			axios
				.post('/api/get-started', {
					emailDetails: {
						fname,
						lname,
						phone,
						email,
						upgrade,
						budget,
						website,
						additionalComments,
						formType: 'Get Started',
					},
				})
				.then((data) => {
					if (data.status === 200) {
						setError();
						setSuccessfulSubmission(true);
						return (
							<h1>
								Thank you for inquiring. Someone from our team
								will be reaching out to you shortly!
							</h1>
						);
					} else {
						setError('...Something went wrong.');
					}
				})
				.catch((err) => {
					setError('There was an error with your submission: ', err);
				});
		} else {
			setError('You must enter all required fields.');
		}
	};
	return (
		<Page
			title="Get Started » The Kirk Concept"
			description="We love working with businesses that have been validated and are serious about making a statement in their industry"
		>
			<Section
				className={`${styles.GetStarted} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/qualified_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					get started<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20">
					We love working with businesses that have been validated and
					are serious about making a statement in their industry
				</p>
			</Section>
			<SubHero tagline="get started on the path for brand dominance.">
				<Col sm={8}>
					<Card>
						{!successfulSubmission ? (
							<>
								<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
									Let’s see how serious you are
								</h3>
								<p>
									Please fill out the form below and a team
									member will reach out to you via email!
								</p>
								<form onSubmit={submitGetStarted}>
									<Row>
										<Col>
											<Input
												type="text"
												onChange={(e) =>
													setFname(e.target.value)
												}
												label="First Name"
												placeholder="Christoph"
												id="fname"
												value={fname}
												required
											/>
										</Col>
										<Col>
											<Input
												as={Input}
												type="text"
												onChange={(e) =>
													setLname(e.target.value)
												}
												label="Last Name"
												placeholder="Jones"
												id="lname"
												value={lname}
												required
											/>
										</Col>
									</Row>
									<Input
										type="website"
										onChange={(e) =>
											setWebsite(e.target.value)
										}
										label="Website"
										placeholder="https://christophk.com"
										id="website"
										value={website}
									/>
									<Input
										type="text"
										onChange={(e) =>
											setEmail(e.target.value)
										}
										label="Email"
										placeholder="hello@thekirkconcept.com"
										id="email"
										value={email}
										required
									/>
									<Input
										type="text"
										onChange={(e) =>
											setPhone(e.target.value)
										}
										label="Phone Number"
										placeholder="(702)336-0322"
										id="phone"
										value={phone}
									/>
									<Dropdown
										type="text"
										onChange={(e) =>
											setUpgrade(e.target.value)
										}
										label="What area would you like to upgrade?"
										placeholder="Please Choose"
										id="upgrade"
										value={upgrade}
										required
									>
										<option disabled value="Please Choose">
											Please Choose
										</option>
										<option value="Branding">
											Branding
										</option>
										<option value="Website Development">
											Website Development
										</option>
										<option value="Software Development">
											Software Development
										</option>
										<option value="Logo Design">
											Logo Design
										</option>
										<option value="Consulting">
											Consulting
										</option>
										<option value="Content Writing">
											Content Writing
										</option>
									</Dropdown>
									<Dropdown
										type="text"
										onChange={(e) =>
											setBudget(e.target.value)
										}
										label="What is your budget?"
										placeholder="Please Choose"
										id="budget"
										value={budget}
										required
									>
										<option disabled value="Please Choose">
											Please Choose
										</option>
										<option value="$10k">{`$10k`}</option>
										<option value="$10k - $25k">{`$10k - $25k`}</option>
										<option value="$25k - $50k">{`$25k - $50k`}</option>
										<option value="$50 - $100k">
											{`$50k - $100k`}
										</option>
									</Dropdown>
									<TextArea
										type="text"
										onChange={(e) =>
											setAdditionalComments(
												e.target.value
											)
										}
										label="Additional Comments"
										placeholder="If there are any additional details you would like to include, this is the place for it!"
										id="additionalComments"
										value={additionalComments}
									/>
									<Button
										className="w-100"
										variant="primary"
										type="submit"
									>
										Submit
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
									className="mx-auto"
									src="/images/letsgettowork-siliconvalley.gif"
									alt="Thank you for your submission"
								/>
								<h4 className="mt-24">
									You are awesome! We will get in touch with
									you shortly. In the meantime, check out our{' '}
									<Link href="/case-study">
										<a className="text-gray text-underline">
											case studies!
										</a>
									</Link>
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

export default GetStarted;
