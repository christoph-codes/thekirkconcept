import React from 'react';
import Tilt from 'react-tilt';
import styles from './LogoCard.module.scss';

const LogoCard = ({ logoSrc, logoAlt }) => {
	return (
		<Tilt>
			<div
				className={`${styles.LogoCard} p-30 shadow bg-white rounded-lg justify-content-center align-items-center`}
			>
				<img src={logoSrc} alt={logoAlt} />
			</div>
		</Tilt>
	);
};

export default LogoCard;
