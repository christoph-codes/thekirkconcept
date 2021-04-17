const withMDX = require('@next/mdx')();

module.exports = {
	env: {
		MAILERUSERNAME: 'cjones@thekirkconcept.com',
		MAILERPASS: 'kirk4lyf',
	},
};

module.exports = withMDX({
	pageExtensions: ['jsx', 'js', 'mdx'],
});
