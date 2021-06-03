import Link from 'next/link';
import React from 'react';
import Tilt from 'react-tilt';
import styles from './CaseStudyCard.module.scss';

const CaseStudyCard = ({ casestudy }) => {
	return (
		<Tilt options={{ scale: 1.1 }}>
			<Link href={casestudy.slug}>
				<article
					className={styles.CaseStudyCard}
					style={{ backgroundImage: `url(${casestudy.bgImg})` }}
				>
					<img
						src={casestudy.electricLogo}
						alt={`${casestudy.name} Case Study with The Kirk Concept`}
					/>
					<Link href={`/case-study${casestudy.slug}`}>
						<a className="casestudy-link">View Case Study</a>
					</Link>
				</article>
			</Link>
		</Tilt>
	);
};

export default CaseStudyCard;
