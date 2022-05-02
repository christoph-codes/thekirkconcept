import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col, Accordion } from 'react-bootstrap';
import BootCard from 'react-bootstrap/Card';
import Tilt from 'react-tilt';
import Page from '../templates/Page';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import WordRiver from '../components/WordRiver';
import styles from '../styles/UnlimitedGraphicDesign.module.scss';

const UnlimitedGraphicDesign = ({ props }) => {
	const graphicServices = [
		{
			imgSrc: '/images/social-graphics.png',
			label: 'Social Media Graphics',
		},
		{
			imgSrc: '/images/flyers.png',
			label: 'Flyers',
		},
		{
			imgSrc: '/images/powerpoint-graphics.png',
			label: 'Powerpoint Presentations',
		},
		{
			imgSrc: '/images/apparel-design.png',
			label: 'Apparel Design',
		},
		{
			imgSrc: '/images/book-cover-design.png',
			label: 'Book Covers',
		},
		{
			imgSrc: '/images/web-graphics.png',
			label: 'Website Graphics',
		},
		{
			imgSrc: '/images/ad-design.png',
			label: 'Ad Design',
		},
		{
			imgSrc: '/images/landing-page-design.png',
			label: 'Landing Pages',
		},
		{
			imgSrc: '/images/sticker-design.png',
			label: 'Stickers',
		},
		{
			imgSrc: '/images/billboard-design.png',
			label: 'Billboards',
		},
		{
			imgSrc: '/images/menu-design.png',
			label: 'Restaurant Menus',
		},
		{
			imgSrc: '/images/icon-design.png',
			label: 'Custom Icons',
		},
	];
	return (
		<Page className={styles.UnlimitedGraphicDesign}>
			<Head>
				<title>Unlimited Graphic Design by The Kirk Concept</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Section
				className={`bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/unlimited_design_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					unlimited graphic design
					<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					unlimited graphic design for your business
				</p>
			</Section>
			<Section className="bg-primary text-gray-dark py-30 text-center">
				<h2 className="m-0">
					A dedicated designer to support your business.
				</h2>
			</Section>
			<Section className="text-center py-64">
				<h2>How Our Service Works</h2>
				<p>
					Our process is proven and is so simple your office pet can
					put in a request and have something back within 48 hours.
				</p>
				<Row as="main" className={`mt-32`}>
					<Col md={4} sm className="mb-32">
						<div className="px-32">
							<Image
								alt="Airplane Icon"
								src="/images/request-icon.svg"
								width={100}
								height={100}
								layout="intrinsic"
							/>
							<h4 className="mt-32">Send us your requests</h4>
							<p>
								Your queue is where you will live. Add your
								request and your dedicated designer will handle
								it from there.
							</p>
						</div>
					</Col>
					<Col md={4} sm className="mb-32">
						<div className="px-32">
							<Image
								alt="Airplane Icon"
								src="/images/design-icon.svg"
								width={100}
								height={100}
								layout="intrinsic"
							/>
							<h4 className="mt-32">
								Your Designer Gets To Work
							</h4>
							<p>
								Once your designer has your request they will
								start there masterpiece and notify you once they
								are complete.
							</p>
						</div>
					</Col>
					<Col md={4} sm className="mb-32">
						<div className="px-32">
							<Image
								src="/images/upload-icon.svg"
								width={100}
								height={100}
								layout="intrinsic"
								alt="Upload Icon"
							/>
							<h4 className="mt-32">Files Are Ready</h4>
							<p>
								We will upload your file artwork and notify you
								everything is ready.
							</p>
						</div>
					</Col>
				</Row>
			</Section>
			<Section className="text-center py-64 bg-gray-lightest">
				<h2>Included Services</h2>
				<Row className="mt-32">
					{graphicServices.map((service, index) => {
						return (
							<Col md={3} sm={6} key={index} className="mb-16">
								<Image
									src={service.imgSrc}
									width={250}
									height={250}
									layout="intrinsic"
								/>
								<h5>{service.label}</h5>
							</Col>
						);
					})}
				</Row>
			</Section>
			<Section className="text-center py-64">
				<h2>Simple Pricing</h2>
				<p>
					We have two simple pricing plans that fit all businesses.
					Prices are limited to a single brand and are 3 month
					minimums.
				</p>
				<Row className="mt-32">
					<Col
						as={Tilt}
						options={{ max: 15, scale: 1.05 }}
						sm={6}
						className="mb-16"
					>
						<Card>
							<h3>Starter - $349</h3>
							<ul className="my-32 text-left">
								<li className="py-8 text-gray-dark">
									5 design requests per month
								</li>
								<li className="py-8 text-gray-dark">
									1 design request at a time
								</li>
								<li className="py-8 text-gray-dark">
									48 hour turn around time
								</li>
								<li className="py-8 text-gray-dark">
									Unlimited revisions
								</li>
								<li className="py-8 text-gray-dark">
									1 company or brand
								</li>
								<li className="py-8 text-gray-dark">
									3 month minimum
								</li>
							</ul>
							<Button
								variant="secondary"
								className="d-block"
								href="/ugd-signup"
							>
								Starter Sign Up
							</Button>
						</Card>
					</Col>
					<Col
						as={Tilt}
						options={{ max: 15, scale: 1.05 }}
						sm={6}
						className="mb-16"
					>
						<Card className="bg-gray-dark">
							<h3 className="text-primary">Premium - $749</h3>
							<ul className="my-32 text-left text-white">
								<li className="py-8">
									Unlimited design requests per month
								</li>
								<li className="py-8">
									3 design request at a time
								</li>
								<li className="py-8">24 hour turn around</li>
								<li className="py-8">Unlimited revisions</li>
								<li className="py-8">
									Landing Page Design Included
								</li>
								<li className="py-8">Dedicated designer</li>
								<li className="py-8">
									Source Files upon request
								</li>
								<li className="py-8">No contract commitment</li>
							</ul>
							<Button
								variant="primary"
								className="d-block"
								href="/ugd-signup"
							>
								Starter Sign Up
							</Button>
						</Card>
					</Col>
				</Row>
				<p>
					Need one design with a quick turn around? Our rush design
					fee of $199 will have your custom graphic to you within 48
					hours.{' '}
					<Link href="/design-a-la-cart">
						<a>Get Started Today</a>
					</Link>
				</p>
			</Section>
			<WordRiver
				words={[
					'stationery',
					'flyers',
					'billboards',
					'brochures',
					'stickers',
					'car wraps',
					'uniforms',
					'landing pages',
					'websites',
					'posts',
					'emails',
					'powerpoints',
					'menus',
					'ebooks',
				]}
			/>
			<Section>
				<Card>
					<h2 className="text-center">Frequently Asked Questions</h2>
					<Accordion defaultActiveKey="0">
						<BootCard>
							<Accordion.Toggle
								as="button"
								className="background-none"
								eventKey="0"
							>
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<BootCard.Body>{`Hello! I'm the body`}</BootCard.Body>
							</Accordion.Collapse>
						</BootCard>
						<BootCard>
							<Accordion.Toggle as="button" eventKey="1">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<BootCard.Body>
									{`Hello! I'm the body`}
								</BootCard.Body>
							</Accordion.Collapse>
						</BootCard>
					</Accordion>
				</Card>
			</Section>
		</Page>
	);
};

export default UnlimitedGraphicDesign;
