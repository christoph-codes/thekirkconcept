import styles from './puppyfetch.module.scss';

const puppyfetch = ({ props }) => {
     return (
        <div className={styles.puppyfetch}>
            <h1>The Kirk Concept</h1>
			<button onClick={reFetch}>Find new pup</button>
			{randomPup !== '' && (
				<div style={imgStyle}>
					<img style={{ width: '100%' }} src={randomPup} alt='Puppy Name' />
				</div>
			)}
        </div>
    );
}

export default puppyfetch;
