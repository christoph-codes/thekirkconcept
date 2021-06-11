import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import Button from '../components/Button/Button';
import Section from '../components/Section';
import SubHero from '../components/SubHero';
import Page from '../templates/Page';
import styles from '../styles/Home.module.scss';
import WordRiver from '../components/WordRiver';
import CaseStudyCard from '../components/CaseStudyCard';
import DominanceContact from '../components/DominanceContact';

import svvc from '../utilities/caseStudies/svvc';
import fng from '../utilities/caseStudies/fng';
import pff from '../utilities/caseStudies/pff';
import Tilt from 'react-tilt';

const Home = () => {
	return (
		<Page className={styles.Home}>
			<Head>
				<title>The Kirk Concept</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Section
				className={`${styles.homeHero} bg-gray-dark text-center align-items-center`}
				hero
			>
				<h1 className="fs-xl font-weight-bold text-white-50">
					We unlock brand
					<br />
					<span className="text-white fs-8xl nmt-2 d-block">
						dominance<span className="text-primary fs-8xl">.</span>
					</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					branding. design systems.{' '}
					<span className="text-primary">app development.</span>
				</p>
				<Link href="/get-qualified">
					<Button variant="primary" className="inline-block">
						get started
					</Button>
				</Link>
			</Section>
			<SubHero tagline="We have systems in place to birth excellence.">
				<Col
					as={Tilt}
					sm
					xs={10}
					options={{ max: 15, scale: 1.05 }}
					className="p-30 shadow bg-white rounded-lg text-gray"
				>
					<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
						Branding
					</h3>
					<p>
						Brand dominance is only achieved with a clear and
						purposeful brand strategy and visual connection that
						resonates with your audience and industry.
					</p>
					<Link href="/branding">
						<a className="text-gray-dark primary-underline">
							Learn More
						</a>
					</Link>
				</Col>
				<Col
					sm
					xs={10}
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					className="p-30 shadow bg-white rounded-lg text-gray"
				>
					<h3 className="fs-sm font-weight-bold mb-20 text-gray-dark">
						Design System
					</h3>
					<p>
						A dominant design systems creates consistent experiences
						across multiple mediums and platforms to establish brand
						equity on the digital level.
					</p>
					<Link href="/design-system">
						<a className="text-gray-dark primary-underline">
							Learn More
						</a>
					</Link>
				</Col>
				<Col
					sm
					xs={10}
					as={Tilt}
					options={{ max: 15, scale: 1.05 }}
					className="p-30 shadow bg-white rounded-lg text-gray"
				>
					<h3 className="fs-sm font-weight-bold mb-20 text-gray-dark">
						App Development
					</h3>
					<p>
						Mobile and web application development brings a dominant
						brand to life through user experiences that connect a
						product and a loyal customer.
					</p>
					<Link href="/development">
						<a className="text-gray-dark primary-underline">
							Learn More
						</a>
					</Link>
				</Col>
			</SubHero>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'adobe illustrator',
						'reactjs',
						'logos',
						'consistency',
						'docker',
						'vscode',
						'branding',
						'ios',
						'systems',
						'custom',
						'sketches',
						'git',
						'button',
						'mobile app',
						'efficiency',
						'storybook',
						'api',
						'icons',
						'dashboard',
						'grid',
						'hooks',
						'strategy',
						'launch',
						'messaging',
					]}
					colors={['#e6fd36', '#454545', '#A5A5A5']}
				/>
			</Section>
			<Section
				containerClass="font-display"
				className="text-center font-weight-light pb-50"
			>
				<hr className="primary small-width" />
				<p className="fw-light fs-sm mw-lg">
					TKC exists to establish industry visual dominance for SMB’s
					through impeccable branding, cohesive design systems, and
					intentional web and mobile app experiences.
				</p>
			</Section>
			<Section
				containerClass="font-display"
				className="text-center font-weight-light bg-gray text-white py-70"
			>
				<h2 className="text-center text-primary font-weight-bold">
					Featured dominance worthy brands
				</h2>
				<CaseStudyCard casestudy={svvc} />
				<CaseStudyCard casestudy={fng} />
				<CaseStudyCard casestudy={pff} />
				<h2 className="text-center text-gray-dark font-weight-bold mt-30">
					Additional dominant brands we’ve worked with.
				</h2>
				<Row
					md={3}
					xs={6}
					className="my-100 mx-auto mw-lg align-items-center"
				>
					<Col className="p-30">
						<Tilt>
							<img
								src="/logos/gray_kinemedix_logo.svg"
								alt="Kinemedix Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col className="p-30">
						<Tilt>
							<img
								src="/logos/gray_vegas_flag_logo.svg"
								alt="Vegas Flag Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col className="p-30">
						<Tilt>
							<img
								src="/logos/gray_mysologym_logo.svg"
								alt="Mysologym Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col className="p-30">
						<Tilt>
							<img
								src="/logos/gray_project_guardian_logo.svg"
								alt="Project Guardian Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col className="p-30">
						<Tilt>
							<img
								src="/logos/gray_firefly_energy_logo.svg"
								alt="Firefly Energy Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col className="p-30">
						<Tilt>
							<img
								src="/logos/gray_grubber_logo.svg"
								alt="Grubber Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col className="p-30">
						<Tilt>
							<img
								src="/logos/gray_cheatsheet_logo.svg"
								alt="Showbiz Cheatsheet Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col className="p-30">
						<Tilt>
							<img
								src="/logos/gray_the10_logo.svg"
								alt="The 10 Jewelry Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
				</Row>
			</Section>
			<DominanceContact />
		</Page>
	);
};

export default Home;
