import Page from '../Page';
import Section from '../../components/Section';
import DominanceContact from '../../components/DominanceContact';
import { Container } from 'react-bootstrap';
import { dateTime } from '../../utilities/helpers';
import styles from './Post.module.scss';

const Post = ({ children, meta, ...rest }) => {
	return (
		<Page
			title={meta.title}
			description={meta.description}
			date={meta.date}
			image={meta.image}
			keywords={meta.keywords}
			router={meta.router}
			{...rest}
			className={`${styles.Post}`}
		>
			<Section
				className={`${styles.PostSection} bg-gray-dark text-center align-items-center`}
				// style={{ backgroundImage: 'url(' + meta.image + ')' }}
				style={{
					backgroundImage: `url(${meta.image})`,
				}}
				bgOverlay
			>
				<h1 className='fs-2xl font-weight-bold text-white mt-50'>
					{meta.title}
					<span className='text-primary'>.</span>
				</h1>
			</Section>
			<Container as='article' className='w-50 py-100'>
				<h2 className='my-10 fs-sm'>{meta.description}</h2>
				<small className='badge badge-primary'>
					{dateTime(meta.date)}
				</small>
				<hr className='my-30' />
				{children}
			</Container>
			<DominanceContact />
		</Page>
	);
};

export default Post;
