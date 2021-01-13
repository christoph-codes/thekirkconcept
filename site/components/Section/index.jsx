import styles from './Section.module.scss';

const Section = ({ bgimg, children }) => {
	return (
		<div className={`${styles.Section} ${bgimg} bg-center bg-cover h-screen px-2 flex items-center justify-center`}>
			<div className='section-content z-10 text-center'>
				{children}
			</div>
		</div>
	);
};

export default Section;
