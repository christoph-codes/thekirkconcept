import React from 'react';
import PropTypes from 'prop-types';
import Btn from 'react-bootstrap/Button';
import './Button.module.scss';

const Button = ({ children, className, variant }) => {
	const variantOutput = () => {
		switch (variant) {
			case 'primary':
				return 'bg-primary text-gray';
			case 'primary-outline':
				return 'outline-primary text-gray';

			default:
				break;
		}
	};
	return (
		<Btn
			className={`Button rounded-pill py-15 px-30 font-weight-bold ${className} ${variantOutput()}`}
		>
			{children}
		</Btn>
	);
};

export default Button;

Button.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf([
		'primary',
		'primary-outline',
		'secondary',
		'secondary-outline',
	]).isRequired,
};

Button.defaultProps = {
	className: '',
};
