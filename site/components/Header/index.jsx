import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { CgCloseO } from 'react-icons/cg';
import {
	TiSocialFacebookCircular,
	TiSocialInstagramCircular,
	TiSocialDribbbleCircular,
	TiSocialTwitterCircular,
	TiSocialLinkedinCircular,
	TiSocialAtCircular,
} from 'react-icons/ti';
import styles from './Header.module.scss';

const Header = ({ props }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		// disabling scrolling when navigation is open
		if(isNavOpen === true) {
			document.querySelector("body").classList.add("overflow-hidden");
		} else {
			document.querySelector("body").classList.remove("overflow-hidden");
		}
	}, [isNavOpen])

	return (
		<>
			<div
				className={`bg-purple fixed w-screen p-1 h-auto mx-auto shadow-md flex content-center gap-4 items-center space-x-4 z-50`}
			>
				<div className='flex'>
					<button
						className='mr-3 text-white'
						onClick={() => setIsNavOpen(!isNavOpen)}
					>
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
					<ul className='ml-auto list-none text-white hidden md:flex'>
						<li className='text-white ml-2'>
							<a href='https://www.facebook.com/thekirkconcept' target='_blank'>
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
							<a href='https://www.twitter.com/thekirkconcept' target='_blank'>
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
							<a href='https://www.dribbble.com/thekirkconcept' target='_blank'>
								<TiSocialDribbbleCircular size={24} />
							</a>
						</li>
						<li className='text-white ml-2'>
							<a href='mailto:info@thekirkconcept.com' target='_blank'>
								<TiSocialAtCircular size={24} />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div
				className={`${styles.mobileNav} w-full h-full bg-purple z-50 transform ease-in-out ${
					!isNavOpen ? 'hidden opacity-0' : 'fixed opacity-100'
				}`}
			>
				<button
					className='absolute top-3 left-3 text-white'
					onClick={() => setIsNavOpen(!isNavOpen)}
				>
					<CgCloseO size={24} />
				</button>
				<div className='navigation flex items-center justify-center h-full'>
					<ul className='text-center py-3 md:inline-block'>
						<li className='py-3 text-xl text-white'>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li className='py-3 text-xl text-white'>
							<Link href='/brands'>
								<a>Brands</a>
							</Link>
						</li>
						<li className='py-3 text-xl text-white'>
							<Link href='/logo-design'>
								<a>Logo Design</a>
							</Link>
						</li>
						<li className='py-3 text-xl text-white'>
							<Link href='/unlimited-graphic-design'>
								<a>Unlimited Graphic Design</a>
							</Link>
						</li>
						<li className='py-3 text-xl text-white'>
							<Link href='/blog'>
								<a>Blog</a>
							</Link>
						</li>
						<li className='py-3 text-xl text-white'>
							<Link href='/testimonials'>
								<a>Testimonials</a>
							</Link>
						</li>
						<li className='py-3 text-xl text-white'>
							<Link href='/about'>
								<a>About</a>
							</Link>
						</li>
						<li className='py-3 text-xl text-white'>
							<Link href='/lets-talk'>
								<a>Let's Talk</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
