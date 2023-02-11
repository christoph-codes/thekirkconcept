import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import WordRiver from '../../components/WordRiver';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';

const WebsiteDevelopment = () => {
	return (
		<Page
			title="Website Development | The Kirk Concept"
			description="Custom website development & maintenance"
			image="/bgs/website_development2_bg.png"
		>
			<Section
				className={`bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/website_development_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					websites<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					custom website development & maintenance
				</p>
			</Section>
			<SubHero tagline="Custom Website Design & Development For Your Business">
				<Col as={Tilt} options={{ max: 15, scale: 1.05 }} sm={6}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							The Web
						</h3>
						<p>
							Websites are an awesome and mandatory way to
							showcase your brand with this forever growing trend
							of the internet. It is not only the most important
							component for a business, but it is critical for
							drumming up new business, aka marketing. Your
							website is normally the last touch point before
							money hits your pockets, so you better make sure it
							is good.
						</p>
					</Card>
				</Col>
			</SubHero>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'website',
						'design',
						'wordpress',
						'shopify',
						'css',
						'hosting',
						'code',
						'content',
						'databases',
						'html',
						'javascript',
						'domains',
						'maintenance',
						'styles',
						'paragraphs',
						'images',
						'content',
						'godaddy',
						'business',
					]}
					colors={['#A5A5A5', '#454545', '#e6fd36']}
				/>
			</Section>

			<Section
				containerClass="font-display"
				className="font-weight-light pb-50 m-50"
			>
				<Row>
					<Col
						xs="auto"
						md={4}
						className="pb-md-0 pb-30 text-center justify-content-center"
					>
						<img
							className="mb-50 w-50"
							src="/icons/one-spot-icon.svg"
							alt="Custom Laptop Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Client Questionnaire
						</h3>
						<p className="fw-light mw-lg">
							We ask a few questions to get a better understanding
							of your business needs regarding your website. This
							sets the stage for a better understanding of your
							business and how to best serve your customers.
						</p>
					</Col>
					<Col
						xs="auto"
						md={4}
						className="pb-md-0 pb-30 text-center justify-content-center"
					>
						<img
							className="mb-50 w-50"
							src="/icons/two-spot-icon.svg"
							alt="Custom Window Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Planning
						</h3>
						<p className="fw-light mw-lg">
							During this phase we will determine goals for the
							website that align with your business goals. We will
							establish the sitemap, all of the pages, and the
							content for each page so that design can commence.
						</p>
					</Col>
					<Col
						xs="auto"
						md={4}
						className="pb-md-0 pb-30 text-center justify-content-center"
					>
						<img
							className="mb-50 w-50"
							src="/icons/three-spot-icon.svg"
							alt="Custom Shopping Spot Icon"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Development
						</h3>
						<p className="fw-light mw-lg">
							Once the plan is in place, we can begin doing what
							we do best and that is make your new website a
							reality. We will work together as a team to finalize
							pages as we complete them until the final signoff.
							If there is training to be done, we will assist you
							with that.
						</p>
					</Col>
				</Row>
			</Section>

			<SubHero tagline="Check out our latest website development work">
				<Col
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					sm={4}
					className="mb-30"
				>
					<img src="/images/svvc-website.png" alt="SVVC Website" />
				</Col>
				<Col
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					sm={4}
					className="mb-30"
				>
					<img
						src="/images/equippd-website.png"
						alt="Equippd Website"
					/>
				</Col>
				<Col
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					sm={4}
					className="mb-30"
				>
					<img
						src="/images/labelle-website.png"
						alt="LaBelle Terre Website"
					/>
				</Col>
				<Col
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					sm={4}
					className="mb-30"
				>
					<img
						src="/images/ito-website.png"
						alt="Inthisorder Website"
					/>
				</Col>
				<Col
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					sm={4}
					className="mb-30"
				>
					<img
						src="/images/kikstarterz-website.png"
						alt="Kikstarterz Website"
					/>
				</Col>
				<Col
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					sm={4}
					className="mb-30"
				>
					<img
						src="/images/nextbill-website.png"
						alt="The Next Bill Website"
					/>
				</Col>
			</SubHero>

			<DominanceContact />
		</Page>
	);
};

export default WebsiteDevelopment;
