const composePlugings = require('next-compose-plugins');
const mdxEnhanced = require('next-mdx-enhanced');

module.exports = composePlugings([
	mdxEnhanced({
		layoutPath: './templates',
	}),
]);
