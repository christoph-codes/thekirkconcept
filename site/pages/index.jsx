import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Button from '../components/Button/Button';
import Section from '../components/Section';
import SubHero from '../components/SubHero';
import Page from '../templates/Page';
import WordRiver from '../components/WordRiver';
import CaseStudyCard from '../components/CaseStudyCard';
import DominanceContact from '../components/DominanceContact';
import Card from '../components/Card';
import svvc from '../utilities/caseStudies/svvc';
import fng from '../utilities/caseStudies/fng';
import pff from '../utilities/caseStudies/pff';
import styles from '../styles/Home.module.scss';

const Home = () => {
	return (
		<Page className={styles.Home}>
			<Section
				className={`${styles.homeHero} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/designsystem_bg@2x.png"
			>
				<h1 className="fs-xl font-weight-bold text-white-50">
					We unlock brand
					<br />
					<span className="text-white fs-8xl d-block">
						dominance<span className="text-primary">.</span>
					</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-4">
					branding. web development.{' '}
					<span className="text-primary">app development.</span>
				</p>
				<Link href="/get-started">
					<Button variant="primary" className="inline-block">
						get started
					</Button>
				</Link>
			</Section>
			<SubHero tagline="We have systems in place to birth excellence.">
				<Col as={Tilt} sm options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Branding
						</h3>
						<p>
							Branding is a strategic approach to creating and
							representing a unique and effective brand for your
							business.
						</p>
						<Link href="/services/branding">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col as={Tilt} sm options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold mb-20 text-gray-dark">
							Website Development
						</h3>
						<p>
							Websites are an awesome and mandatory way to
							showcase your brand with this forever growing trend
							of the internet.
						</p>
						<Link href="/services/website-development">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col as={Tilt} sm options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold mb-20 text-gray-dark">
							Software Development
						</h3>
						<p>
							Websites are an awesome and mandatory way to
							showcase your brand with this forever growing trend
							of the internet.
						</p>
						<Link href="/services/software-development">
							<a className="link">Learn More</a>
						</Link>
					</Card>
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
					through impeccable branding, cohesive website development,
					and intentional software application experiences.
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
				<h2 className="text-center text-primary font-weight-bold mt-30">
					Additional dominant brands we’ve worked with.
				</h2>
				<Row
					md={4}
					xs={6}
					className="my-50 mx-auto mw-lg align-items-center"
				>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_kinemedix_logo.svg"
								alt="Kinemedix Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_vegas_flag_logo.svg"
								alt="Vegas Flag Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_mysologym_logo.svg"
								alt="Mysologym Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_project_guardian_logo.svg"
								alt="Project Guardian Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_firefly_energy_logo.svg"
								alt="Firefly Energy Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_grubber_logo.svg"
								alt="Grubber Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_cheatsheet_logo.svg"
								alt="Showbiz Cheatsheet Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
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
