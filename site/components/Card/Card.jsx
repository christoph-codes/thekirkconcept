import styles from './Card.module.scss';

const Card = ({ children, className, ...rest }) => {
	return (
		<article
			className={`${styles.Card} ${
				className || ''
			} p-30 shadow bg-white rounded-lg text-gray mb-md-0 mb-32`}
			{...rest}
		>
			{children}
		</article>
	);
};

export default Card;
