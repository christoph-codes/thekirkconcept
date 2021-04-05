import React from 'react';

const SubHero = ({ tagline, children }) => {
	return (
		<section className='SubHero bg-primary text-gray py-5'>
			<div className='container text-center'>
				<h2 className='text-4xl font-bold'>{tagline}</h2>
				<div className=''>{children}</div>
			</div>
		</section>
	);
};

export default SubHero;
