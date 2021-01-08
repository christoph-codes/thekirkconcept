import styles from './Hero.module.scss';

const Hero = ({ bgimg, children }) => {
	return (
		<div className={`${styles.Hero} ${bgimg} bg-center bg-cover  h-screen px-2 flex items-center justify-center`}>
			<div className='hero-content z-10 text-center'>
				{children}
			</div>
		</div>
	);
};

export default Hero;
