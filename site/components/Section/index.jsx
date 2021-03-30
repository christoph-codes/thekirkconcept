import styles from './Section.module.scss';

const Section = ({ bg, children, ...rest }) => {
	return (
		<div {...rest} className={`${styles.Section} ${bg} bg-center bg-cover h-screen px-2 flex items-center justify-center`}>
			<div className='section-content z-10 text-center'>
				{children}
			</div>
		</div>
	);
};

export default Section;
