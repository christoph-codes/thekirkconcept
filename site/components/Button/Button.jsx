import React from 'react';
import PropTypes from 'prop-types';
import Btn from 'react-bootstrap/Button';
import './Button.module.scss';

const Button = ({ children, className, variant, ...rest }) => {
	const variantOutput = () => {
		switch (variant) {
			case 'primary':
				return 'bg-primary text-gray-dark rounded-pill';
			case 'primary-outline':
				return 'outline-primary text-gray-dark rounded-pill';
			case 'secondary':
				return 'bg-gray-dark text-primary rounded-pill';

			default:
				return 'background-transparent text-gray-dark';
		}
	};
	return (
		<Btn
			className={`Button py-15 px-30 font-weight-bold ${className} ${variantOutput()}`}
			{...rest}
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
