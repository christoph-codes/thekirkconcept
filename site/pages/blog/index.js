import { getAllPosts } from '../api/posts';

const Blog = ({ posts }) => {
	posts.map((post) => {
		return <li>{post.title}</li>;
	});
};

Blog.getInitialProps = async ({ req }) => {
	const res = await getAllPosts();
	const json = await res.json();
	return { posts: json };
};

export default Blog;
