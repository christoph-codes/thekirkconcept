import {useState,useEffect} from 'react';
import testfetch from '../pages/api/testfetch'
const puppyfetch = ({ props }) => {
	const [randomPup, setRandomPup] = useState('');

	const imgStyle = {
		width: '60%',
		margin: '0 auto',
		display: 'block',
	};

	const reFetch = () => {
		testfetch().then((data) => {
			setRandomPup(data);
		});
	};

	useEffect(() => {
		reFetch();
	}, []);

     return (
        <div>
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
