import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import WordRiver from '../../components/WordRiver';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';

const DesignSystems = () => {
	return (
		<Page
			title="Design Systems | The Kirk Concept"
			description="Custom design systems for brand consistency across mediums."
		>
			<Section
				className={`bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/designsystem_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					design systems<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					custom design systems for brand consistency across mediums.
				</p>
			</Section>
			<SubHero tagline="App development that focuses on delivering amazing experiences.">
				<Col as={Tilt} options={{ max: 15, scale: 1.05 }} sm={6}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							What is a design system?
						</h3>
						<p>
							A design system is a group or library of designed
							elements that are made to be reused throughout any
							digital experience. It is created from the core
							brand of any company or product and as each element
							is paired with one another it builds an experience
							that maintains consistency and is easily managed for
							growth and flexibility.
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
				className="font-weight-light py-64"
			>
				<Row>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/search-spot-icon.svg"
							alt="Custom Search Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							1. Audit
						</h3>
						<p className="fw-light mw-lg">
							To properly build a design system you must know
							where to start building and what to build upon. Our
							team will search your existing products,
							applications, and web/app experiences to find common
							design elements that can be replicated and group
							them into buckets to address.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/pen-spot-icon.svg"
							alt="Custom Pen Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							2. Establish Language
						</h3>
						<p className="fw-light mw-lg">
							Your design system language must be established and
							communicated to all teams who will be using it.
							Colors, typography, spacing, etc. must be consistent
							as this step is critical for the maintainability and
							governance of the design system.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/puzzle-spot-icon.svg"
							alt="Custom Puzzle Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							3. Build & Document
						</h3>
						<p className="fw-light mw-lg">
							After your core elements are built you can stack and
							group these elements into reuseable patterns for
							future use. Then once this is established you must
							document EVERY part of it into a library that
							conveys your new system.
						</p>
					</Col>
				</Row>
			</Section>

			<Section spacer bgImg="/bgs/customdesignsystem_bg@2x.png" />

			<DominanceContact />
		</Page>
	);
};

export default DesignSystems;
