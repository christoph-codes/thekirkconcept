import Head from 'next/head';
import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import Page from '../../templates/Page';
import Section from '../../components/Section';
import WordRiver from '../../components/WordRiver';
import Card from '../../components/Card';
import SubHero from '../../components/SubHero';
import styles from '../../styles/LogoDesign.module.scss';
import DominanceContact from '../../components/DominanceContact';

const LogoDesign = ({ props }) => {
	return (
		<Page
			title="Logo Design » The Kirk Concept"
			description="Dominate your industry with our expert logo design services."
			image="/bgs/logo_design2_bg.png"
			className={styles.LogoDesign}
		>
			<Section
				className={`${styles.WebQuestionnaire} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/logo_design_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white animate__animated animate__bounce">
					logo design<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					Dominate your industry with our expert logo design services.
				</p>
			</Section>
			<SubHero tagline="Unlock your brand's full potential with an awesome logo">
				<Col sm={8}>
					<Card>
						<h3>
							What is the first thing you notice about an awesome
							brand.
						</h3>
						<p>
							An awesome logo of course. Great logo design catches
							your customer’s eye immediately!. Most of the time a
							company will overlook getting a custom logo for
							their business for the simple fact they don’t
							understand the value of investing into the visual
							parts of their brand with graphic design. Believe it
							or not, a custom logo will help sell your awesome
							product before your potential customer even see’s or
							finds your product!
						</p>
					</Card>
				</Col>
			</SubHero>
			<Container>
				<Row className="my-60 align-items-center">
					<Col md={6}>
						<Image
							src="/images/tkc-dribbble-2019-hypermax-v1.png"
							width={800}
							height={600}
							layout="intrinsic"
							alt="Custom Logo Design for Hypermax by The Kirk Concept."
							className="rounded-lg"
						/>
					</Col>
					<Col md={6}>
						<div className="p-32">
							<h3>We create custom logos for domainant brands</h3>
							<p>
								It is very easy to pay less than $50 to find a
								template, change the name and call it your logo.
								There are platforms that allow you to do this
								but I can guarantee you that after a year in
								business, you will grow to hate your
								cookie-cutter template logo. In short, you will
								feel disconnected from it because it wasn’t made
								for you. All of TKC’s logos are custom created
								for each and every client. Every client has a
								different industry, audience, brand, and no one
								logo can work for another business. The time is
								taken to carefully craft the logo the business
								dreams of.
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			<WordRiver
				words={[
					'symbol',
					'icon',
					'repitition',
					'colors',
					'typeface',
					'shapes',
					'accents',
					'identity',
					'favicon',
					'alternate',
					'grayscale',
					'primary',
					'rotate',
					'scale',
					'grow',
				]}
				colors={['#A5A5A5', '#454545', '#e6fd36']}
			/>
			<Container>
				<Row className="my-60 align-items-center">
					<Col
						md={{ span: 6, order: 'first' }}
						sm={{ span: 12, order: 'last' }}
					>
						<div className="p-32">
							<h3>Your brand is in the right hands with TKC</h3>
							<p>
								A logo is an essential part of every company.
								With our proven logo designing process, we have
								been able to successfully create and revamp a
								multitude of company’s visual branding with a
								customized and tailored logo. All of our logos
								follow the basic fundamentals of a successful
								logo design with a touch of creativity to leave
								your customers in awe!
							</p>
						</div>
					</Col>
					<Col
						md={{ span: 6, order: 'last' }}
						sm={{ span: 12, order: 'first' }}
					>
						<Image
							src="/images/abc_hyundai.png"
							width={800}
							height={600}
							layout="intrinsic"
							alt="Custom Logo Design for ABC Hyundai by The Kirk Concept."
							className="rounded-lg"
						/>
					</Col>
				</Row>
			</Container>
			<Section
				containerClass="font-display"
				className="font-weight-light py-64"
			>
				<h2 className="text-center mb-32 h1">Our Process</h2>
				<Row>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/search-spot-icon.svg"
							alt="Custom Search Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							1. Discovery
						</h3>
						<p className="fw-light mw-lg">
							Our team will work with you to understand your
							business, values, target audience, and desired look
							and feel for your logo.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/pen-spot-icon.svg"
							alt="Custom Pen Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							2. Design & Conceptualize
						</h3>
						<p className="fw-light mw-lg">
							Our expert designers will create multiple logo
							design concepts and directions for you to choose
							from.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/puzzle-spot-icon.svg"
							alt="Custom Puzzle Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							3. Package & Deliver
						</h3>
						<p className="fw-light mw-lg">
							Once approved, the final logo(s) will be packaged in
							all required sizes and delivered to you in various
							file formats for use across different platforms and
							mediums.
						</p>
					</Col>
				</Row>
			</Section>
			<DominanceContact />
		</Page>
	);
};

export default LogoDesign;
