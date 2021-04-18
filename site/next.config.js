const withMDX = require('@next/mdx')();

module.exports = {
	env: {
		MAILERUSERNAME: 'cjones@thekirkconcept.com',
		MAILERPASS: 'kirk4lyf',
		MAILCHIMP_API_KEY: '963ff46bde06ad08e94def28e898a3b7-us7',
		MAILCHIMP_SERVER_PREFIX: 'us7',
		MAILCHIMP_AUDIENCE_ID: 'd4f452d978',
	},
};

module.exports = withMDX({
	pageExtensions: ['jsx', 'js', 'mdx'],
});
