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
		<Row as={Section} className='Footer align-items-center'>
			<Col>
				<Link href='https://facebook.com/thekirkconcept'>
					<a className='mr-10'>
						<FaFacebook color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://twitter.com/thekirkconcept'>
					<a className='mr-10'>
						<FaTwitter color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://instagram.com/thekirkconcept'>
					<a className='mr-10'>
						<FaInstagram color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://medium.com/thekirkconcept'>
					<a className='mr-10'>
						<FaMedium color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://youtube.com/thekirkconcept'>
					<a className='mr-10'>
						<FaYoutube color='#454545' size={18} />
					</a>
				</Link>
				<Link href='https://linkedin.com/thekirkconcept'>
					<a className='mr-10'>
						<FaLinkedin color='#454545' size={18} />
					</a>
				</Link>
			</Col>
			<Col className='text-right'>
				Site made with <FaHeart color='#e2ff08' /> copyright © 2021 The
				Kirk Concept. All rights reserved.{' '}
			</Col>
		</Row>
	);
};

export default Footer;
