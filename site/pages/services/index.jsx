import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import WordRiver from '../../components/WordRiver';
import CaseStudyCard from '../../components/CaseStudyCard';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';
import svvc from '../../utilities/caseStudies/svvc';
import fng from '../../utilities/caseStudies/fng';
import pff from '../../utilities/caseStudies/pff';
import styles from '../../styles/Whatwedo.module.scss';

const WhatWeDo = () => {
	return (
		<Page
			title="Services | The Kirk Concept"
			description="Services offered by The Kirk Concept include logo design, branding, website development and software development."
			className={styles.Whatwedo}
		>
			<Section
				className={`${styles.workHero} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/whatwedo_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					services<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					We help companies with branding & digital product
					development
				</p>
			</Section>
			<SubHero tagline="Dominance comes with strategy, design, then development.">
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Branding
						</h3>
						<ul className={styles.cardList}>
							<li>Audit</li>
							<li>Research</li>
							<li>Brand Strategy</li>
							<li>Messaging</li>
							<li>Logo Design</li>
							<li>Brand Identity</li>
						</ul>
						<Link href="/services/branding">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Website Development
						</h3>
						<ul className={styles.cardList}>
							<li>Responsive Design</li>
							<li>Search Engine Optimization</li>
							<li>Dynamic Content</li>
							<li>Custom Design</li>
							<li>User Friendly</li>
							<li>High Performance</li>
						</ul>
						<Link href="/services/website-development">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Software Development
						</h3>
						<ul className={styles.cardList}>
							<li>Custom Development</li>
							<li>Web Applications</li>
							<li>Native Mobile Applications</li>
							<li>User-Friendly Interfaces</li>
							<li>Scalable Platforms</li>
							<li>Testing & Quality Assurance</li>
						</ul>
						<Link href="/services/software-development">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
			</SubHero>
			<Section
				className={`${styles.workHero} align-items-center pt-0`}
				columns
			>
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Logo Design
						</h3>
						<ul className={styles.cardList}>
							<li>Unique</li>
							<li>Visual Identity</li>
							<li>Typography</li>
							<li>Iconography</li>
							<li>Color Palette</li>
							<li>Imagery</li>
						</ul>
						<Link href="/services/logo-design">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Consulting
						</h3>
						<ul className={styles.cardList}>
							<li>Website Audit & Analysis</li>
							<li>Branding & Design Recommendations</li>
							<li>Marketing Plans</li>
							<li>SEO Strategy</li>
							<li>Content Enhancements</li>
							<li>Functionality Assessment</li>
						</ul>
						<Link href="/services/consulting">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Content Writing
						</h3>
						<ul className={styles.cardList}>
							<li>Blog Post Writing</li>
							<li>Website Copy</li>
							<li>Product Descriptions</li>
							<li>Email Marketing</li>
							<li>Social Media Posts</li>
							<li>Ad Content Writing</li>
						</ul>
						<Link href="/services/content-writing">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
			</Section>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'audit',
						'research',
						'strategy',
						'UI/UX',
						'messaging',
						'identity',
						'management',
						'builds',
						'native',
						'Prototyping',
						'assets',
						'testing',
						'html',
						'react',
						'guidelines',
						'vue',
						'css',
						'node',
						'components',
						'api',
						'apps',
						'library',
						'css',
						'javascript',
					]}
					colors={['#A5A5A5', '#454545', '#e6fd36']}
				/>
			</Section>

			{/* <Section
				containerClass="font-display"
				className="font-weight-light pb-50 mt-50 text-md-left text-center"
			>
				<Row className="w-75 mx-auto mb-32">
					<Col sm="auto" className="d-flex align-items-center">
						<img
							className={`mx-sm-0 mx-auto ${styles.serviceImage}`}
							src="/images/visual-identity.png"
							alt="Visual Identity custom graphic"
						/>
					</Col>
					<Col>
						<h3 className="fs-sm font-weight-bold text-gray-dark my-20">
							Strategy establishes a foundation that can be built
							upon
						</h3>
						<p className="fw-light fs-xs">
							Brand strategy starts with research, then leads to
							positioning following brand messaging and
							development.
						</p>
					</Col>
				</Row>
				<Row className="w-75 mx-auto mb-32">
					<Col sm="auto" className="d-flex align-items-center">
						<img
							className={`mx-sm-0 mx-auto ${styles.serviceImage}`}
							src="/images/strategy-foundation.png"
							alt="Strategy Foundation custom graphic"
						/>
					</Col>
					<Col>
						<h3 className="fs-sm font-weight-bold text-gray-dark my-20">
							Visual identity is only properly built from a solid
							foundation
						</h3>
						<p className="fw-light fs-xs">
							Logos, colors, fonts, and imagery, should all stem
							from the strategy of the brand to clearly paint the
							picture for the future.
						</p>
					</Col>
				</Row>
				<Row className="w-75 mx-auto mb-32">
					<Col sm="auto" className="d-flex align-items-center">
						<img
							className={`mx-sm-0 mx-auto ${styles.serviceImage}`}
							src="/images/design-system.png"
							alt="Design System custom graphic"
						/>
					</Col>
					<Col>
						<h3 className="fs-sm font-weight-bold text-gray-dark my-20">
							Design Systems maintain brand equity and ensure
							quality assurance
						</h3>
						<p className="fw-light fs-xs">
							A consistent brand across all mediums and platforms
							ensure sustainability and brand endurance as time
							progresses.
						</p>
					</Col>
				</Row>
				<Row className="w-75 mx-auto mb-32">
					<Col sm="auto" className="d-flex align-items-center">
						<img
							className={`mx-sm-0 mx-auto ${styles.serviceImage}`}
							src="/images/brand-to-life.png"
							alt="Bringing a brand to life custom graphic"
						/>
					</Col>
					<Col>
						<h3 className="fs-sm font-weight-bold text-gray-dark my-20">
							Bring the brand to life as an experience through web
							and mobile apps
						</h3>
						<p className="fw-light fs-xs">
							A brand that lives and breathes into an application
							ties the company personality to a tangible
							experience to associate with a brand. So make sure
							it is good!
						</p>
					</Col>
				</Row>
			</Section> */}

			<SubHero tagline="Featured dominance worthy brands">
				<Col className="nmt-4">
					<CaseStudyCard casestudy={svvc} />
					<CaseStudyCard casestudy={fng} />
					<CaseStudyCard casestudy={pff} />
				</Col>
			</SubHero>

			<DominanceContact />
		</Page>
	);
};

export default WhatWeDo;
