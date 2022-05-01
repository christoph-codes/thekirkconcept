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
			description="We don’t recommend marketing without first
			establishing a brand that can handle it. We
			understand revenue is important to every business,
			but revenue doesn’t sustain itself, branding does."
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
					create a brand worth marketing.
				</p>
			</Section>
			<SubHero tagline="Marketing without a brand is a missed opportunity.">
				<Col as={Tilt} options={{ max: 15, scale: 1.05 }} sm={6}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Dominant Branding Sustains
						</h3>
						<p>
							We don’t recommend marketing without first
							establishing a brand that can handle it. We
							understand revenue is important to every business,
							but revenue doesn’t sustain itself, branding does.
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

			<Section className="pb-50 mt-50">
				<Row className="justify-content-center">
					<Col sm={6}>
						<h2>Our detailed Approach To branding</h2>
						<p>
							We’ve developed a detail-oriented and thorough
							approach to branding that delivers a trustworthy and
							timeless brand that lasts. Our goal is not only to
							create a brand, but align your company beliefs and
							values to the brand. When a business creates a
							personality that directly communicates their
							customers needs and values, it has found the sweet
							spot between company intentions and customer goals.{' '}
						</p>
						<p>
							We ONLY work with companies that are passionate
							about communicating their brand across all mediums
							and ultimately lead to customer retention and
							loyalty.
						</p>
					</Col>
				</Row>
			</Section>

			<Section spacer bgImg="/bgs/bombmethod_bg.png" />

			<Section className="pb-50 mt-50">
				<Row className="justify-content-center">
					<Col sm={6}>
						<h2>What you can Expect working With our team</h2>
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
