const composePlugings = require('next-compose-plugins');
const mdxEnhanced = require('next-mdx-enhanced');

module.exports = composePlugings(
	[
		mdxEnhanced({
			layoutPath: './templates',
		}),
	],
	{
		env: {
			MAILERUSERNAME: 'cjones@thekirkconcept.com',
			MAILERPASS: 'kirk4lyf',
			MAILCHIMP_API_KEY: '963ff46bde06ad08e94def28e898a3b7-us7',
			MAILCHIMP_SERVER_PREFIX: 'us7',
			MAILCHIMP_AUDIENCE_ID: 'd4f452d978',
		},
	},
);
