import Page from '../Page';
import Section from '../../components/Section';
import DominanceContact from '../../components/DominanceContact';
import { Container } from 'react-bootstrap';
import { dateTime } from '../../utilities/helpers';
import styles from './Post.module.scss';

const Post = ({ children, frontMatter, ...rest }) => {
	return (
		<Page
			title={frontMatter.title}
			description={frontMatter.description}
			date={frontMatter.date}
			image={frontMatter.image}
			keywords={frontMatter.keywords}
			slug={frontMatter.slug}
			{...rest}
			className={`${styles.Post}`}
		>
			<Section
				className={`${styles.PostSection} bg-gray-dark text-center align-items-center`}
				bgImg={frontMatter.image}
				bgOverlay
			>
				<h1 className="fs-2xl font-weight-bold text-white mt-50">
					{frontMatter.title}
					<span className="text-primary">.</span>
				</h1>
			</Section>
			<Container as="article" className={`${styles.postContent} py-100`}>
				<div className="d-flex justify-content-between">
					<small className="badge badge-primary">
						{dateTime(frontMatter.date)}
					</small>
					<small className="text-gray">
						Written by: Christopher Jones
					</small>
				</div>
				<hr className="my-30" />
				<h2 className="mt-10 mb-30 fs-sm">{frontMatter.description}</h2>
				<img src={frontMatter.image} alt={frontMatter.title} />
				{children}
			</Container>
			<DominanceContact />
		</Page>
	);
};

export default Post;
