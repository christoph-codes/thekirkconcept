import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import Tilt from 'react-tilt';
import { Col } from 'react-bootstrap';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import Card from '../../components/Card';
import { dateTime } from '../../utilities/helpers';
import styles from '../../styles/Blog.module.scss';

const Blog = ({ posts }) => {
	return (
		<Page
			image
			title="The Kirk Concept » Branding & App Development"
			description="The Kirk Concept Official Blog » Branding & App Development"
			keywords="blog, branding, web, app, development"
		>
			<Section
				className={`${styles.Blog} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/bgs/blog_bg.png"
			>
				<h1 className="fs-8xl font-weight-bold text-white">
					blog<span className="text-primary">.</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-2">
					Hoarding knowledge doesn&apos;t benefit anyone, so enjoy!
				</p>
			</Section>
			<SubHero tagline="Our top posts for your reading.">
				{posts.map((post) => {
					return (
						<Col
							as={Tilt}
							options={{ max: 15, scale: 1.05 }}
							lg={4}
							sm={5}
							xs={12}
							key={post.path}
							className="mb-32 cursor-pointer"
						>
							<Link href={post.path}>
								<a>
									<Card className="h-100">
										<img
											src={post.image}
											alt={post.title}
											className="mb-20"
										/>
										<small className="badge badge-primary mb-10">
											{dateTime(post.date)}
										</small>
										<h3 className="fs-sm font-weight-bold text-gray-dark">
											{post.title}
										</h3>
										<Link href={post.path}>
											<a className="text-gray-dark justify-self-end primary-underline mt-auto">
												Read Now!
											</a>
										</Link>
									</Card>
								</a>
							</Link>
						</Col>
					);
				})}
			</SubHero>
		</Page>
	);
};

export default Blog;

export const getStaticProps = async () => {
	const postsDirectory = path.join(process.cwd(), 'pages/blog');
	const filenames = await fs.readdir(postsDirectory);

	const files = await Promise.all(
		filenames.map(async (filename) => {
			if (filename !== 'index.jsx') {
				const filePath = path.join(postsDirectory, filename);
				const content = await fs.readFile(filePath, 'utf8');
				const matter = grayMatter(content);
				return {
					filename,
					matter,
				};
			} else {
				return null;
			}
		})
	);

	const filteredPosts = files.filter((file) => {
		return file !== null;
	});

	const posts = filteredPosts
		.map((file) => {
			return {
				path: `/blog/${file.filename.replace('.mdx', '')}`,
				title: file.matter.data.title,
				description: file.matter.data.description,
				image: file.matter.data.image,
				date: file.matter.data.date,
			};
		})
		.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});

	// const sortedPosts = posts;

	return {
		props: {
			posts,
		},
	};
};
