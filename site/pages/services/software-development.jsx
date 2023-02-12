import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import WordRiver from '../../components/WordRiver';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';

const WebAppDevelopment = () => {
	return (
		<Page
			title="Software Development | The Kirk Concept"
			description="Custom Web Application and Mobile Application Development"
			image="/bgs/software_development2_bg.png"
		>
			<Section
				className={`bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/app_development_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					software development<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					Mobile & Web Application Development
				</p>
			</Section>
			<SubHero tagline="App development that focuses on delivering amazing experiences.">
				<Col as={Tilt} options={{ max: 15, scale: 1.05 }} sm={6}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							What we solve
						</h3>
						<p>
							We provide application solutions to make customer
							experiences easier to use as well as internal teams
							to become more efficient with day-to-day processes
							and more. Our team focuses on creating solutions
							that are responsive for all devices, consistent to
							maintain brand cohesiveness, and flexible to adapt
							to ever changing business growth.
						</p>
					</Card>
				</Col>
			</SubHero>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'react',
						'vue',
						'javascript',
						'UI/UX',
						'css',
						'git',
						'firebase',
						'node',
						'vercel',
						'databases',
						'mysql',
						'nosql',
						'aws',
						'components',
						'library',
						'npm',
						'yarn',
						'nextjs',
						'react native',
						'ios',
						'android',
					]}
					colors={['#A5A5A5', '#454545', '#e6fd36']}
				/>
			</Section>

			<Section
				containerClass="font-display"
				className="font-weight-light pb-50 mt-50"
			>
				<Row>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/laptop-spot-icon.svg"
							alt="Custom Laptop Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Client Facing Software
						</h3>
						<p className="fw-light mw-lg">
							We develop software as a service for startups or
							dominant and growing businesses to improve customer
							value and generate additional revenue.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/window-spot-icon.svg"
							alt="Custom Window Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Account Management Portals
						</h3>
						<p className="fw-light mw-lg">
							We make account management easier to store and
							update client information while maintaining
							information safe and secure to relieve privacy
							concerns.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/shop-spot-icon.svg"
							alt="Custom Shopping Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Custom Ecommerce
						</h3>
						<p className="fw-light mw-lg">
							We build custom, intuitive, and properly integrated
							ecommerce solutions to add value and connect
							directly with any merchant API that is used.
						</p>
					</Col>
				</Row>
			</Section>

			<Section spacer bgImg="/bgs/software_development2_bg.png" />

			<Section>
				<p className="text-center mt-16">
					{`Unlock the full potential of your business with The Kirk
					Concept's expert software development services. Our team of
					professionals will work with you to understand your needs,
					identify opportunities for growth, and develop a
					comprehensive software solution that drives results.
					Our software development services are designed to deliver
					custom solutions that meet your unique business needs.
					Whether you need a custom application, a mobile solution, or
					an integration with existing systems, our team has the
					expertise to deliver a solution that meets your requirements
					and exceeds your expectations.`}
				</p>
			</Section>

			<DominanceContact />
		</Page>
	);
};

export default WebAppDevelopment;
