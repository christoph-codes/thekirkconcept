import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import NavLink from '../NavLink';
import styles from './Header.module.scss';

const Header = ({ props }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	

	useEffect(() => {
		// disabling scrolling when navigation is open
		if (isNavOpen === true) {
			document.querySelector('body').classList.add('overflow-hidden');
		} else {
			document.querySelector('body').classList.remove('overflow-hidden');
		}
	}, [isNavOpen]);

	return (
		<>
			<header
				className={`${styles.Header} position-absolute p-10 px-30 d-flex`}
			>
				<Link href="/">
					<a>
						<Image
							src="/logo_primary.svg"
							width={114}
							height={76}
							layout="intrinsic"
							alt="The Kirk Concept, We unlock brand dominance through branding, design systems, and app development."
						/>
					</a>
				</Link>
				<ul className="text-white d-none d-md-flex">
					<li className="text-white px-5 font-weight-bold">
						<NavLink href="/what-we-do">
							what we do
						</NavLink>
					</li>
					<li className="text-white px-5 font-weight-bold">
						<NavLink href="/case-study">
							case studies
						</NavLink>
					</li>
					<li className="text-white px-5 font-weight-bold">
						<NavLink href="/contact">
							contact
						</NavLink>
					</li>
					<li className="text-white px-5 font-weight-bold">
						<NavLink href="/blog">
							blog
						</NavLink>
					</li>
					<li className="text-white font-weight-bold">
						<Link href="/qualify">
							<a className={`${styles.headerButton} bg-primary rounded-pill px-25 py-10 text-gray-dark font-bold`}>
								get qualified
							</a>
						</Link>
					</li>
				</ul>
				{!isNavOpen && <button
					className={`text-white d-md-none d-flex bg-transparent border-0`}
					onClick={() => setIsNavOpen(!isNavOpen)}
				>
					<AiOutlineMenu size={36} />
				</button>}
				{isNavOpen && <button
					className="text-white d-md-none d-flex bg-transparent border-0"
					onClick={() => setIsNavOpen(!isNavOpen)}
				>
					<AiOutlineCloseCircle size={36} />
				</button>}
			</header>
			<div
				className={`h-100 bg-gray ${
					!isNavOpen ? 'd-none' : 'd-flex'
				}`}
			>
				<div className="navigation flex items-center justify-center h-full">
					<ul className="text-center py-3 md:inline-block">
						<li className="py-3 text-xl text-white">
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li className="py-3 text-xl text-white">
							<Link href="/brands">
								<a>Brands</a>
							</Link>
						</li>
						<li className="py-3 text-xl text-white">
							<Link href="/logo-design">
								<a>Logo Design</a>
							</Link>
						</li>
						<li className="py-3 text-xl text-white">
							<Link href="/unlimited-graphic-design">
								<a>Unlimited Graphic Design</a>
							</Link>
						</li>
						<li className="py-3 text-xl text-white">
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
						<li className="py-3 text-xl text-white">
							<Link href="/testimonials">
								<a>Testimonials</a>
							</Link>
						</li>
						<li className="py-3 text-xl text-white">
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
						<li className="py-3 text-xl text-white">
							<Link href="/lets-talk">
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
