import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './Section.module.scss';

const Section = ({
	fullWidth,
	className,
	columns,
	children,
	containerClass,
	hero,
}) => {
	return (
		<section
			className={`${styles.Section} ${
				hero ? styles.hero : ''
			} d-flex ${className}`}
		>
			<Container
				className={containerClass}
				as='div'
				fluid={fullWidth || false}
			>
				{columns ? <Row>{children}</Row> : children}
			</Container>
		</section>
	);
};

export default Section;

Section.propTypes = {
	fullWidth: PropTypes.bool,
	className: PropTypes.string,
	containerClass: PropTypes.string,
	columns: PropTypes.bool,
};

Section.defaultProps = {
	fullWidth: false,
	className: '',
	containerClass: '',
	columns: false,
};
