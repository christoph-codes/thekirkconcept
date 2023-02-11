import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import WordRiver from '../../components/WordRiver';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';

const ContentWriting = () => {
	return (
		<Page
			title="Content Writing | The Kirk Concept"
			description="Elevate your online presence with our expert content writing service."
			image="/bgs/content_writing2_bg.png"
		>
			<Section
				className={`bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/content_writing_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					content writing<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					Elevate your online presence with our expert content writing
					service.
				</p>
			</Section>
			<SubHero tagline="Unleash the power of words.">
				<Col as={Tilt} options={{ max: 15, scale: 1.05 }} sm={6}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							What is a content writing?
						</h3>
						<p>
							{`Content writing is the art of crafting compelling,
							relevant, and optimized words that drive engagement,
							inform, and persuade your target audience. It's a
							powerful tool that can elevate your brand, build
							trust, and drive results. we take content writing 
                            seriously, delivering top-notch writing that connects 
                            with your audience and propels your business forward.`}
						</p>
					</Card>
				</Col>
			</SubHero>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'copy',
						'text',
						'language',
						'message',
						'voice',
						'tone',
						'words',
						'expression',
						'communicate',
						'narrative',
						'composition',
						'script',
						'story',
						'information',
						'pursuade',
						'engage',
						'articulate',
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
							1. Consultation
						</h3>
						<p className="fw-light mw-lg">
							Our team will work with you to understand your
							business, target audience, and content goals to
							ensure that the writing aligns with your vision.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/pen-spot-icon.svg"
							alt="Custom Pen Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							2. Writing
						</h3>
						<p className="fw-light mw-lg">
							Our expert writers will craft high-quality,
							engaging, and SEO-optimized content tailored to your
							needs.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/puzzle-spot-icon.svg"
							alt="Custom Puzzle Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							3. Review & Deliver
						</h3>
						<p className="fw-light mw-lg">
							{`You'll have the opportunity to review the content
							and provide feedback, and once approved, the final
							content will be delivered to you in the desired
							format.`}
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

			<Section spacer bgImg="/bgs/content_writing2_bg.png" />

			<DominanceContact />
		</Page>
	);
};

export default ContentWriting;
