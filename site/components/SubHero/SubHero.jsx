import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Section from '../Section';

const SubHero = ({ tagline, children, className }) => {
	return (
		<>
			<Section size="none" className={`SubHero bg-primary text-gray py-30 ${className}`}>
				<Container>
					<h2 className='fs-lg font-weight-bold text-center mb-30'>{tagline}</h2>
				</Container>
			</Section>
			<Container className="nmt-2 mb-50">
				<Row style={{ gap: '2rem'}}>
					{children}
				</Row>
			</Container>
		</>
	);
};

export default SubHero;
