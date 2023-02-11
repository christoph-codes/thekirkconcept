import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import styles from '../../styles/Work.module.scss';
import WordRiver from '../../components/WordRiver';
import CaseStudyCard from '../../components/CaseStudyCard';
import DominanceContact from '../../components/DominanceContact';

import svvc from '../../utilities/caseStudies/svvc';
import fng from '../../utilities/caseStudies/fng';
import pff from '../../utilities/caseStudies/pff';
import LogoCard from '../../components/LogoCard';

const CaseStudies = () => {
	return (
		<Page
			title="The Case Studies Created by The Kirk Concept"
			description="Our case studies showcase dominance through a wonderful body of work."
			className={styles.CaseStudies}
		>
			<Section
				className={`${styles.caseStudiesHero} bg-gray-dark text-center align-items-center`}
				bgImg="/bgs/work_bg.png"
				hero
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					case studies<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					dominance speaks through our body of work.
				</p>
			</Section>
			<SubHero tagline="We take pride in the brands we work with.">
				<Col className="nmt-4">
					<CaseStudyCard casestudy={svvc} />
					<CaseStudyCard casestudy={fng} />
					<CaseStudyCard casestudy={pff} />
				</Col>
			</SubHero>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'abc hyundai',
						'the10jewelry',
						'svvc',
						'ylm',
						'lone star',
						'forgottennotgone',
						'firefly energy',
						'showbiz',
						'cheatsheet',
						'remoter',
						'press forward',
						'equippd',
						'level up',
						'encore',
						'kinemedix',
						'inthisorder',
						'mysologym',
						'fairway chevy',
						'jav imagery',
						'blue steel jewelry',
						'forrest and harold',
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
			<Section className="text-center font-weight-light pb-50">
				<h1 className="fs-lg font-weight-bold text-gray-dark mb-50">
					{`Brands we've worked with.`}
				</h1>
				<Row>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_equippd_logo.svg"
							logoAlt="Equippd Life Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_resorts_world_logo.svg"
							logoAlt="Resorts World Las Vegas Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_kinemedix_logo.svg"
							logoAlt="Kinemedix Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_grubber_logo.svg"
							logoAlt="Grubber App Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_project_guardian_logo.svg"
							logoAlt="Project Guardian Las Vegas"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_cheatsheet_logo.svg"
							logoAlt="Showbiz Cheatsheet Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_firefly_energy_logo.svg"
							logoAlt="Firefly Energy Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_the10_logo.svg"
							logoAlt="The10 Jewelry Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_inthisorder_logo.svg"
							logoAlt="InThisOrder Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_mysologym_logo.svg"
							logoAlt="Mysologym Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_icoa_logo.svg"
							logoAlt="Investment Club of America Logo"
						/>
					</Col>
					<Col sm={4} xs={6}>
						<LogoCard
							logoSrc="/logos/gray_vegas_flag_logo.svg"
							logoAlt="Vegas Flag Logo"
						/>
					</Col>
				</Row>
			</Section>

			<DominanceContact />
		</Page>
	);
};

export default CaseStudies;
