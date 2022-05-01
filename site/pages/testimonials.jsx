import Card from '../components/Card';
import { Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Section from '../components/Section';
import Page from '../templates/Page';
import SubHero from '../components/SubHero';
import styles from '../styles/Testimonials.module.scss';
import DominanceContact from '../components/DominanceContact/DominanceContact';

const Testimonials = ({ props }) => {
	const testimonials = [
		{
			review: 'TKC has the vision and ability to create amazing large format visuals, graphic designs and print ready art. TKC also included layered art for Pantone Coated color matching. His designs are stunning, visually precise and on point. TKC’s best attribute, is the gift to provide clean and crisp designs which exceed 20′ heights and beyond. No pixelation, no jagged edges, no blurring… Highly recommend 5 out of 5 stars.',
			author: 'Mark, Big Printing',
		},
		{
			review: 'The Kirk Concept transformed a rough sketch (very VERY rough sketch) into an awesome trifold. Graphic design and branding is on point! Thanks',
			author: 'Marylou, Lazer Ladies',
		},
		{
			review: 'TKC has a amazing creators and takes pride in delivering quality work! They love what they does and it shows!!!',
			author: 'AJ Lewis, Inspired Efforts',
		},
		{
			review: 'It has been absolutely a pleasure to work with TKC during this process. They are purely professional, detailed and deadline focused.',
			author: 'Robert, Innovative Health Insurance Advisors',
		},
		{
			review: 'TKC is very good at taking a concept and turning it into a work of advertising art.',
			author: 'Kim, Mercantile Logistics & International Trade, Inc.',
		},
		{
			review: 'Very Professional, timely, and reasonable. The quality of work was fantastic and I look forward to doing more work with them.',
			author: 'Veronica, VBM Consulting',
		},
		{
			review: 'The Kirk Concept redid our Non Profit logo Forgotten Not Gone and the response has been amazing. He understands branding concepts well, that less is more and not to crowd designs. Are you looking for a clean branding design that you will be proud of? We are happy and Proud of our Kirk Concept logo design. Our new logo resonates better with the community of Veterans we serve.',
			author: 'Peter, Forgotten Not Gone',
		},
		{
			review: 'Absolutely loved how the experience turned out. I approached TKC with a few thoughts of what I might want but gave him creative control. They came back with many many choices to help me narrow down what I wanted. They were extremely timely and more than worth the money spent. I Am thrilled with my new company logo and am proud to display it! Would recommend TKC 10 times out of 10.',
			author: 'Jarrod, Firefly Energy',
		},
		{
			review: 'The Kirk Concept is very professional and has remarkable skills creating and originating brands and logos. My wife and I have both used TKC for our projects and we couldn’t be happier. The communication throughout the process was exactly what we were looking for, and the end result has blown everyone one away who’s seen them. We cannot thank TKC enough for legitimizing and bringing to life our brand ideas, and I look forward to seeing what he creates for our future projects. Thanks TKC!',
			author: 'Jared, The Lone Star Podcast',
		},
	];
	return (
		<Page
			title="Testimonials for The Kirk Concept"
			description="Testimonials to check out what our clients are saying about working with us."
		>
			<Section
				className={`${styles.contact} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/testimonials_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					testimonials<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					Check out what our clients are saying about working with us.
				</p>
			</Section>
			<SubHero tagline="real reviews from real brands.">
				<Row as="main" className={`${styles.Testimonials}`}>
					{testimonials.map((review, index) => {
						return (
							<Col
								md={4}
								sm={6}
								xs={12}
								key={index}
								className="mb-32"
							>
								<Card>
									<p>{review.review}</p>
									<p className="text-gray-dark">
										<strong>- {review.author}</strong>
									</p>
								</Card>
							</Col>
						);
					})}
				</Row>
			</SubHero>
			<DominanceContact />
		</Page>
	);
};

export default Testimonials;
