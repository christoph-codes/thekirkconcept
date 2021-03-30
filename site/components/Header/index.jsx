import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CgCloseO } from 'react-icons/cg';

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
			<header
				className={`text-gray h-24 fixed w-screen p-1 px-5 mx-auto flex content-center gap-4 items-center space-x-4 z-50`}
			>
				<div className='flex'>
					<Link href='/'>
						<a>
						<Image
							src='/logo_primary.svg'
							width={114}
							height={76}
							layout='intrinsic'
							objectFit='cover'
							alt='The Kirk Concept, We get companies excited about their brand.'
						/>
						</a>
					</Link>
				</div>
				<div className='flex flex-auto'>
					<ul className='ml-auto list-none text-white hidden md:flex'>
						<li className='text-white ml-1 px-5 font-bold'>
							<Link href='/work'>
								<a>work</a>
							</Link>
						</li>
						<li className='text-white ml-1 px-5 font-bold'>
							<Link href='/what-we-do'>
								<a>what we do</a>
							</Link>
						</li>
						<li className='text-white ml-1 px-5 font-bold'>
							<Link href='/contact'>
								<a>contact</a>
							</Link>
						</li>
						<li className='text-white ml-1 px-5 font-bold'>
							<Link href='/get-qualified'>
								<a className="bg-primary p-3 px-7 rounded-full text-gray font-bold">get qualified</a>
							</Link>
						</li>
					</ul>
				</div>
			</header>
			<div
				className={`w-full h-full bg-purple z-50 transform ease-in-out ${
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
