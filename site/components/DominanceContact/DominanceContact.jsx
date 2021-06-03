import React from 'react';
import Link from 'next/link';
import Section from '../Section';
import Button from '../Button';
import styles from './DominanceContact.module.scss';

const DominanceContact = (props) => {
	return (
		<Section
			className={`DominanceContact ${styles.DominanceContact} bg-primary text-center py-50`}
		>
			<h2 className="fs-6xl font-weight-bold mw-lg text-gray-dark">
				dominance
			</h2>
			<p className="fs-sm mw-lg text-gray-dark">
				We love working with businesses that have been validated and are
				serious about making a statement in their industry! If you are
				interested in any of our services and want to see if we are a
				great fit working together, fill out our questionnaire to see if
				you are ready for brand dominance!
			</p>
			<Link href="/qualify"><a><Button variant="secondary" className="mt-20">
				Get qualified
			</Button></a></Link>
			
		</Section>
	);
};

export default DominanceContact;
