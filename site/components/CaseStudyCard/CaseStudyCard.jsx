import Link from 'next/link';
import React from 'react';
import styles from './CaseStudyCard.module.scss';

const CaseStudyCard = ({ casestudy }) => {
	return (
		<article
			className={styles.CaseStudyCard}
			style={{ backgroundImage: `url(${casestudy.bgImg})` }}
		>
			<img
				src={casestudy.logo}
				alt={`${casestudy.name} Case Study with The Kirk Concept`}
			/>
			<Link href={`/${casestudy.slug}`}>
				<a className='casestudy-link'>View Case Study</a>
			</Link>
		</article>
	);
};

export default CaseStudyCard;
