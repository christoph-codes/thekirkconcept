import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './Section.module.scss';

const Section = ({ fullWidth, size, className, columns, children }) => {
	const sizeProp = () => {
		switch (size) {
			case 'small':
				return '50';
			case 'medium':
				return '75';
			case 'large':
				return '100';

			default:
				console.warn('Please select a valid size prop');
		}
	};
	return (
		<section
			className={`${styles.Section} d-flex ${className} py-${sizeProp()}`}
		>
			<Container as='div' fluid={fullWidth || false}>
				{columns ? <Row>{children}</Row> : children}
			</Container>
		</section>
	);
};

export default Section;

Section.propTypes = {
	fullWidth: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	className: PropTypes.string,
	columns: PropTypes.bool,
};

Section.defaultProps = {
	fullWidth: false,
	size: 'medium',
	className: '',
	columns: false,
};
