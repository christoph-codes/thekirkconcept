import Link from 'next/link';
import React from 'react';
import styles from './CaseStudyCard.module.scss';

const CaseStudyCard = ({ casestudy }) => {
return (
<Link href={`/case-study${casestudy.slug}`} style={{ textDecoration: 'none' }}>
<article
className={styles.CaseStudyCard}
style={{ backgroundImage: `url(${casestudy.bgImg})` }}
>
<img
src={casestudy.electricLogo}
alt={`${casestudy.name} Case Study with The Kirk Concept`}
/>
<span className="casestudy-link">View Case Study</span>
</article>
</Link>
);
};

export default CaseStudyCard;
