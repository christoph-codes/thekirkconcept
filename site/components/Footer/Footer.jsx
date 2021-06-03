import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Section from '../Section';
import {
	FaHeart,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaMedium,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import './Footer.module.scss';
import Link from 'next/link';

const Footer = (props) => {
	return (
		<Section className='Footer align-items-center' columns height='3rem'>
			<Col sm={3}>
				<Link href='https://facebook.com/thekirkconcept'>
					<a target="_blank" className='mr-10'>
						<FaFacebook color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://twitter.com/thekirkconcept'>
					<a target="_blank" className='mr-10'>
						<FaTwitter color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://instagram.com/thekirkconcept'>
					<a target="_blank" className='mr-10'>
						<FaInstagram color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://medium.com/thekirkconcept'>
					<a target="_blank" className='mr-10'>
						<FaMedium color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://youtube.com/thekirkconcept'>
					<a target="_blank" className='mr-10'>
						<FaYoutube color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://linkedin.com/thekirkconcept'>
					<a target="_blank" className='mr-10'>
						<FaLinkedin color='#454545' size={18} />
					</a>
				</Link>
			</Col>
			<Col className='text-right text-gray-dark'>
				Site made with <FaHeart color='#e2ff08' /> by The Kirk Concept.
				Copyright © 2021. All rights reserved.{' '}
			</Col>
		</Section>
	);
};

export default Footer;
