import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import WordRiver from '../../components/WordRiver';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';

const Consulting = () => {
	return (
		<Page
			title="Consulting | The Kirk Concept"
			description="Grow your business with our consulting service helping you
            with your business websites, software, marketing, branding,
            and more."
			image="/bgs/consulting2_bg.png"
		>
			<Section
				className={`bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/consulting_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					consulting<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					grow your business with our consulting service helping you
					with your business websites, software, marketing, branding,
					and more.
				</p>
			</Section>
			<SubHero tagline="Unleash the power of words.">
				<Col as={Tilt} options={{ max: 15, scale: 1.05 }} sm={6}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							What is consulting?
						</h3>
						<p>
							Our consulting service is a comprehensive solution
							that combines our expertise in website design and
							development, marketing, and branding to deliver a
							tailored approach that addresses your unique needs
							and goals. We believe that every business deserves a
							custom solution that reflects its values, target
							audience, and desired outcomes.
						</p>
					</Card>
				</Col>
			</SubHero>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'strategy',
						'expertise',
						'growth',
						'success',
						'assessment',
						'recommendation',
						'implement',
						'execute',
						'tailored',
						'comprehensive',
						'analysis',
						'support',
						'unique',
						'professional',
						'solutions',
						'outcome',
						'results',
						'drive',
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
							1. Assessment
						</h3>
						<p className="fw-light mw-lg">
							Our team will work with you to understand your
							business, target audience, and goals, and conduct a
							thorough analysis of your existing website,
							marketing, and branding efforts.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/pen-spot-icon.svg"
							alt="Custom Pen Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							2. Strategy Development
						</h3>
						<p className="fw-light mw-lg">
							Based on the assessment, our team will develop a
							comprehensive strategy that includes recommendations
							for website design and development, marketing, and
							branding to drive growth and achieve your desired
							outcomes.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/puzzle-spot-icon.svg"
							alt="Custom Puzzle Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							3. Implementation
						</h3>
						<p className="fw-light mw-lg">
							{`Our team will work with you to execute the strategy,
							implementing discovered recommendations for your website 
                            apps, marketing, or branding to deliver results. We'll 
                            provide ongoing support to ensure that your business 
                            continues to grow and succeed.`}
						</p>
					</Col>
				</Row>
			</Section>

			<Section>
				<p className="text-center">
					{`Ready to take your business to the next level? Contact The
					Kirk Concept today to schedule a consultation and learn how
					our expert website, marketing, and branding services can
					help you achieve your goals. Our team of professionals is
					dedicated to delivering results that drive growth and
					success for your business. Don't settle for mediocrity –
					unlock your brand's full potential with The Kirk Concept.`}
				</p>
			</Section>
			<Section spacer bgImg="/bgs/consulting2_bg.png" />
			<DominanceContact />
		</Page>
	);
};

export default Consulting;
