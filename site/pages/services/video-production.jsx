import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import WordRiver from '../../components/WordRiver';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';

const VideoProduction = () => {
	return (
		<Page
			title="Video Production | The Kirk Concept"
			description="Boost your brand's impact with professional, custom videos from The Kirk Concept. Our experienced team, headed by video production guru Evan Harris, will collaborate with you to bring your vision to fruition and produce videos that fulfill your specific requirements and surpass your expectations."
			image="/bgs/video_production2_bg.png"
		>
			<Section
				className={`bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/video_production2_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					video production<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					{`Boost your brand's impact with professional video
					production.`}
				</p>
			</Section>
			<SubHero tagline="Unleash the power of video.">
				<Col as={Tilt} options={{ max: 15, scale: 1.05 }} sm={6}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							What is a video production?
						</h3>
						<p>
							Video production is the process of creating
							high-quality, custom videos for a variety of
							purposes, including commercials, promotions,
							interviews, campaign videos, and special events. The
							goal of video production is to effectively
							communicate a brand message and engage with a target
							audience through the use of compelling visuals,
							sound, and storytelling.
						</p>
					</Card>
				</Col>
				<Col as={Tilt} options={{ max: 15, scale: 1.05 }} sm={6}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							The Team
						</h3>
						<p>
							{`Evan Harris is the video production guru who leads
							The Kirk Concept's video production team. With a
							degree from UNLV Film School, Evan brings a wealth
							of knowledge and experience to the table, ensuring
							that every video produced by The Kirk Concept is of
							the highest quality and meets your specific needs
							and expectations.`}
						</p>
					</Card>
				</Col>
			</SubHero>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'creation',
						'high-quality',
						'custom',
						'commercials',
						'promotions',
						'interviews',
						'campaign',
						'b-roll',
						'events',
						'visuals',
						'sound',
						'production',
						'storytelling',
						'editing',
						'premiere',
						'cinemaphotography',
						'scene',
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
							1. Pre-production
						</h3>
						<p className="fw-light mw-lg">
							Our team will work with you to understand your
							goals, target audience, and desired outcomes, and
							develop a comprehensive video production plan that
							meets your requirements.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/pen-spot-icon.svg"
							alt="Custom Pen Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							2. Production
						</h3>
						<p className="fw-light mw-lg">
							Production is the stage in the video production
							process where the actual filming takes place. This
							is where the creative vision for the video is
							brought to life, capturing the footage that will be
							used in the final product.
						</p>
					</Col>
					<Col className="px-50 text-center justify-content-center">
						<img
							className="mb-50 px-100"
							src="/icons/puzzle-spot-icon.svg"
							alt="Custom Puzzle Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							3. Post Production
						</h3>
						<p className="fw-light mw-lg">
							{`Post-production is a critical component of the video
							production process and is where the raw footage
							captured during production is transformed into a
							polished and professional final product. We'll then
							handle all post-production tasks, including editing,
							color correction, sound design, and special effects.`}
						</p>
					</Col>
				</Row>
			</Section>

			<Section>
				<p className="text-center">
					{`Don't settle for generic, cookie-cutter videos. Elevate your
					brand with custom videos from The Kirk Concept. Contact us
					today to learn more about our professional video production
					services.`}
				</p>
			</Section>

			<Section spacer bgImg="/bgs/video_production_bg.png" />

			<DominanceContact />
		</Page>
	);
};

export default VideoProduction;
