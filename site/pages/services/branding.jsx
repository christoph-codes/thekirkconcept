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
			title="Branding | The Kirk Concept"
			description="Our branding service provides strategy and design to create a unique, effective, and marketable brand for your business."
			image="/bgs/bombmethod_bg.png"
		>
			<Section
				className={`bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/branding_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					branding<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					Our branding service provides strategy and design to create
					a unique, effective, and marketable brand for your business.
				</p>
			</Section>
			<SubHero tagline="Marketing without a brand is a missed opportunity.">
				<Col as={Tilt} options={{ max: 15, scale: 1.05 }} sm={6}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							What is branding?
						</h3>
						<p>
							Branding is a strategic approach to creating and
							representing a unique and effective brand for your
							business. Our team of experts will work with you to
							develop a visual identity, messaging, and tone of
							voice that accurately reflects your business and
							resonates with your target audience. The result is a
							cohesive and consistent brand that drives growth and
							success.
						</p>
					</Card>
				</Col>
			</SubHero>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'strategy',
						'timeless',
						'imager',
						'values',
						'logos',
						'consistency',
						'beliefs',
						'messaging',
						'typorgraphy',
						'intentions',
						'voice',
						'personality',
						'retention',
						'loyalty',
						'colors',
						'icons',
					]}
					colors={['#A5A5A5', '#454545', '#e6fd36']}
				/>
			</Section>

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
							1. Research
						</h3>
						<p className="fw-light mw-lg">
							We gather information about your business, assessing
							your current brand, defining your brand goals, and
							gathering input from key stakeholders to develop a
							comprehensive understanding of your brand. This
							information is used to inform the development of a
							refined brand.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/pen-spot-icon.svg"
							alt="Custom Pen Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							2. Brand Strategy Development
						</h3>
						<p className="fw-light mw-lg">
							Based on the consultation, our team will develop a
							comprehensive brand strategy that includes the
							visual elements of your brand (such as a logo, color
							palette, and typography) as well as messaging, tone
							of voice, and brand positioning.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/puzzle-spot-icon.svg"
							alt="Custom Puzzle Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							3. Implementation & Delivery
						</h3>
						<p className="fw-light mw-lg">
							{`Our team will work with you to execute the brand
							strategy, including creating the visual elements of
							your brand and developing messaging and tone of
							voice guidelines. We'll provide ongoing support to
							ensure that your brand is consistently represented
							across all channels and is aligned with your
							business goals and target audience.`}
						</p>
					</Col>
				</Row>
			</Section>

			<Section>
				<p className="text-center">
					{`We know that great content is the foundation of a successful
					online presence. And we also know that most people hate
					writing. That's why we've got a team of creative wordsmiths
					who live for crafting killer content that will keep your
					audience engaged and coming back for more. So, whether you need blog posts, product descriptions, or
					website copy, The Kirk Concept's got you covered. And the
					best part? You won't have to lift a finger (except to click
					"submit").`}
				</p>
			</Section>

			<Section spacer bgImg="/bgs/bombmethod_bg.png" />

			<Section className="pb-50 mt-50">
				<Row className="justify-content-center">
					<Col sm={6}>
						<h2>What you can expect working with our team</h2>
						<p>
							Our process is extremely simple. To establish a
							clear understanding of your existing brand equity we
							have you answer a branding questionnaire to gather
							the necessary information for our research phase.
							Following the research phase we clarify and approve
							the desired direction. From there, we begin the
							design process.
						</p>
						<p>
							Whether we are keeping a logo and assets the same or
							recreating new assets for the new brand, we go
							through a series of internal sketch phases to
							provide options of directions that align with the
							new approved brand direction. This process becomes
							very collaborative between our team and your
							company. We understand the importance of your input
							throughout the process and it will be considered
							during our explorations.
						</p>
						<p>
							Once we confirm the new look and feel of the new
							brand, we will create a brand guideline for and your
							team to follow and hold the world accountable. In
							this brand guideline you will find brand voice,
							logos, colors, fonts, imagery, proportions, icons,
							and so much more to package up your brand into a
							reliable brand bible.
						</p>
					</Col>
				</Row>
			</Section>

			<DominanceContact />
		</Page>
	);
};

export default WebAppDevelopment;
