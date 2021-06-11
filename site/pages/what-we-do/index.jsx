import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import styles from '../../styles/Whatwedo.module.scss';
import WordRiver from '../../components/WordRiver';
import DominanceContact from '../../components/DominanceContact';
import Button from 'components/Button/Button';
import Link from 'next/link';

const WhatWeDo = () => {
	return (
		<Page className={styles.Whatwedo}>
			<Head>
				<title>What We Do | The Kirk Concept</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Section
				className={`${styles.workHero} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/whatwedo_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					what we do<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					We help companies with branding & digital product development
				</p>
			</Section>
			<SubHero tagline="Dominance comes with strategy, design, then development.">
				<Col
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					className="p-30 shadow bg-white rounded-lg text-gray"
				>
					<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
						Branding
					</h3>
					<ul className={styles.cardList}>
						<li>Audit</li>
						<li>Research</li>
						<li>Strategy</li>
						<li>Messaging</li>
						<li>Visual Design</li>
						<li>Brand Identity</li>
					</ul>
				</Col>
				<Col
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					className="p-30 shadow bg-white rounded-lg text-gray"
				>
					<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
						Design Systems
					</h3>
					<ul className={styles.cardList}>
						<li>Design Audit</li>
						<li>UI/UX</li>
						<li>Prototyping</li>
						<li>Visual Guidelines</li>
						<li>Asset Management</li>
						<li>Testing</li>
					</ul>
				</Col>
				<Col
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					className="p-30 shadow bg-white rounded-lg text-gray"
				>
					<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
						Development
					</h3>
					<ul className={styles.cardList}>
						<li>HTML/CSS/JS</li>
						<li>React/Vue</li>
						<li>Node/API builds</li>
						<li>Web Applications</li>
						<li>Native Mobile Apps</li>
						<li>Component Libraries</li>
					</ul>
					{/* <Link href="/what-we-do/web-app-development"><a><Button>Learn More</Button></a></Link> */}
					
				</Col>
			</SubHero>
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

			<Section
				containerClass="font-display"
				className="font-weight-light pb-50 mt-50"
			>
				<Row>
					<Col className="mr-md-100 mr-50">
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Strategy establishes a foundation that can be built
							upon
						</h3>
						<p className="fw-light fs-sm mw-lg">
							Brand strategy starts with research, then leads to
							positioning following brand messaging and
							development.
						</p>
						<img
							className="mt-150"
							src="/images/visual-identity.png"
							alt="Visual Identity custom graphic"
						/>
					</Col>
					<Col className="ml-md-100 ml-50">
						<img
							className="mt-150"
							src="/images/strategy-foundation.png"
							alt="Strategy Foundation custom graphic"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20  mt-100">
							Visual identity is only properly built from a solid
							foundation
						</h3>
						<p className="fw-light fs-sm mw-lg">
							Logos, colors, fonts, and imagery, should all stem
							from the strategy of the brand to clearly paint the
							picture for the future.
						</p>
					</Col>
				</Row>
				<Row>
					<Col className="mr-md-150 mr-50">
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Design Systems maintain brand equity and ensure
							quality assurance
						</h3>
						<p className="fw-light fs-sm mw-lg">
							A consistent brand across all mediums and platforms
							ensure sustainability and brand endurance as time
							progresses.
						</p>
						<img
							className="mt-150"
							src="/images/brand-to-life.png"
							alt="Bringing a brand to life custom graphic"
						/>
					</Col>
					<Col>
						<img
							className="mt-150"
							src="/images/design-system.png"
							alt="Design System custom graphic"
						/>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20  mt-100">
							Bring the brand to life as an experience through web
							and mobile apps
						</h3>
						<p className="fw-light fs-sm mw-lg">
							A brand that lives and breathes into an application
							ties the company personality to a tangible
							experience to associate with a brand. So make sure
							it is good!
						</p>
					</Col>
				</Row>
			</Section>

			<DominanceContact />
		</Page>
	);
};

export default WhatWeDo;
