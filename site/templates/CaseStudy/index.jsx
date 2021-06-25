import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Page from '../Page';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Button from '../../components/Button';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';
import styles from './CaseStudy.module.scss';

const CaseStudy = ({ caseStudy, ...rest }) => {
	return (
		<Page
			className={styles.CaseStudy}
			title={caseStudy.name}
			description={caseStudy.description}
			date={caseStudy.date}
			image={caseStudy.bgImg}
			keywords={caseStudy.keywords}
			slug={caseStudy.slug}
			{...rest}
		>
			<Section
				className={`${styles.PostSection} bg-gray-dark text-center align-items-center`}
				bgImg={caseStudy.bgImg}
				hero
			>
				<h1 className="fs-2xl font-weight-bold text-white mt-50">
					{caseStudy.shortName}
					<span className="text-primary">.</span>
				</h1>
			</Section>
			<SubHero tagline={caseStudy.description}>
				<Col as={Tilt} sm={9} options={{ max: 15, scale: 1.01 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							brief
						</h3>
						<p>{caseStudy.brief}</p>
					</Card>
				</Col>
			</SubHero>
			<Section>
				<div className="mw-lg">
					<Row className="align-items-center">
						<Col>
							<img src={caseStudy.logo} alt={caseStudy.name} />
						</Col>
						<Col>
							<h3 className="text-right text-gray-light font-weight-bold">
								Primary logo
							</h3>
						</Col>
					</Row>
					<div className="p-50 shadow bg-white rounded-lg mt-100">
						<h3 className="text-center text-gray-light font-weight-bold mb-50">
							Primary Colors
						</h3>
						<Row className="align-items-center">
							<Col className="text-gray">
								<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
									{caseStudy.colors.primary.name}
								</h3>
								<p>Hex: {caseStudy.colors.primary.hex}</p>
								<p>RGB: {caseStudy.colors.primary.rgb}</p>
								<p>CMYK: {caseStudy.colors.primary.cmyk}</p>
							</Col>
							<Col>
								<div
									className={styles.colorSquare}
									style={{
										backgroundColor:
											caseStudy.colors.primary.hex,
									}}
								/>
							</Col>
						</Row>
						<Row className="align-items-center mt-50">
							<Col className="text-gray">
								<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
									{caseStudy.colors.secondary.name}
								</h3>
								<p>Hex: {caseStudy.colors.secondary.hex}</p>
								<p>RGB: {caseStudy.colors.secondary.rgb}</p>
								<p>CMYK: {caseStudy.colors.secondary.cmyk}</p>
							</Col>
							<Col>
								<div
									className={styles.colorSquare}
									style={{
										backgroundColor:
											caseStudy.colors.secondary.hex,
									}}
								/>
							</Col>
						</Row>
					</div>
					<Section className="mt-50" fullWidth>
						<h3 className="fs-sm font-weight-bold text-center text-gray-light mb-50">
							Secondary colors
						</h3>
						<Row>
							{caseStudy.colors.tertiary.map((color) => {
								return (
									<Col key={color}>
										<div
											className={styles.colorSquare}
											style={{
												backgroundColor: color,
											}}
										/>
									</Col>
								);
							})}
						</Row>
					</Section>
				</div>
			</Section>
			<Section
				className="bg-cover py-150 mt-50"
				style={{ backgroundPosition: 'center' }}
				bgImg={caseStudy.secondaryBgImg}
			/>
			<Section className="text-center mb-50">
				<h3 className="text-center mt-50 font-weight-bold text-gray-light mb-50">
					Website
				</h3>
				<Row className="justify-content-center">
					<Col sm={6} className="mb-32 mb-md-0">
						<img
							src={caseStudy.website.img.desktop}
							alt={`${caseStudy.name} Desktop Website`}
						/>
					</Col>
					<Col sm={3}>
						<img
							src={caseStudy.website.img.mobile}
							alt={`${caseStudy.name} Mobile Website`}
						/>
					</Col>
				</Row>
				{caseStudy.website.created && (
					<Link href={caseStudy.website.url}>
						<a target="_blank">
							<Button className="mt-50">Visit Website</Button>
						</a>
					</Link>
				)}
			</Section>
			<DominanceContact />
		</Page>
	);
};

export default CaseStudy;
