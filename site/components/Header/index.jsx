import Link from 'next/link';
import { IoMenuSharp } from 'react-icons/io5';
import {
	TiSocialFacebookCircular,
	TiSocialInstagramCircular,
	TiSocialDribbbleCircular,
	TiSocialTwitterCircular,
	TiSocialLinkedinCircular,
	TiSocialAtCircular,
} from 'react-icons/ti';

const Header = ({ props }) => {
	const openSideNav = () => {
		console.log('...Open Side Nav');
	};
	return (
		<div
			className={`bg-purple fixed w-screen p-1 h-auto mx-auto shadow-md flex content-center gap-4 items-center space-x-4 z-50`}
		>
			<div className='flex'>
				<button className='mr-3 text-white' onClick={openSideNav}>
					<IoMenuSharp size={24} />
				</button>
				<Link href='/'>
					<a>
						<h1 className='text-xl m-0 uppercase font-bold text-white hover:text-purple-light'>
							The Kirk Concept
						</h1>
					</a>
				</Link>
			</div>
			<div className='flex flex-auto'>
				<ul className='flex ml-auto list-none text-white'>
					<li className='text-white ml-2'>
						<a
							href='https://www.facebook.com/thekirkconcept'
							target='_blank'
						>
							<TiSocialFacebookCircular size={24} />
						</a>
					</li>
					<li className='text-white ml-2'>
						<a
							href='https://www.instagram.com/thekirkconcept'
							target='_blank'
						>
							<TiSocialInstagramCircular size={24} />
						</a>
					</li>
					<li className='text-white ml-2'>
						<a
							href='https://www.twitter.com/thekirkconcept'
							target='_blank'
						>
							<TiSocialTwitterCircular size={24} />
						</a>
					</li>
					<li className='text-white ml-2'>
						<a
							href='https://www.linkedin.com/company/thekirkconcept/'
							target='_blank'
						>
							<TiSocialLinkedinCircular size={24} />
						</a>
					</li>
					<li className='text-white ml-2'>
						<a
							href='https://www.dribbble.com/thekirkconcept'
							target='_blank'
						>
							<TiSocialDribbbleCircular size={24} />
						</a>
					</li>
					<li className='text-white ml-2'>
						<a
							href='mailto:info@thekirkconcept.com'
							target='_blank'
						>
							<TiSocialAtCircular size={24} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
