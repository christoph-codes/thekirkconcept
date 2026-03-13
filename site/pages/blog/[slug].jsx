import { promises as fs } from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Post from '../../templates/Post';

const BlogPost = ({ source, frontMatter }) => {
	return (
		<Post frontMatter={frontMatter}>
			<MDXRemote {...source} />
		</Post>
	);
};

export default BlogPost;

export const getStaticPaths = async () => {
	const postsDirectory = path.join(process.cwd(), 'content/blog');
	const filenames = await fs.readdir(postsDirectory);

	const paths = filenames
		.filter((filename) => filename.endsWith('.mdx'))
		.map((filename) => ({
			params: { slug: filename.replace('.mdx', '') },
		}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const { slug } = params;
	const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
	const rawContent = await fs.readFile(filePath, 'utf8');
	const { data: frontMatter, content } = grayMatter(rawContent);

	const source = await serialize(content);

	return {
		props: {
			source,
			frontMatter: {
				...frontMatter,
				date: frontMatter.date ? String(frontMatter.date) : null,
			},
		},
	};
};
