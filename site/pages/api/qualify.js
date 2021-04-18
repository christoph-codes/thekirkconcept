require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');
const { ContactTemplate } = require('../../emails/contact_template');

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g. us1
});
const listId = process.env.MAILCHIMP_AUDIENCE_ID;

export default async (req, res) => {
	const {
		fname,
		lname,
		phone,
		email,
		upgrade,
		budget,
		website,
		additionalComments,
	} = req.body;
	// Logging everything we received.
	console.log(
		fname,
		lname,
		phone,
		email,
		budget,
		upgrade,
		website,
		additionalComments,
	);

	if (!email || !fname || !lname) {
		console.log('Enter all the fields response.', res.status);
		return res
			.status(400)
			.json({ error: 'First & Last Name and Email are required' });
	}

	console.log('mcid: ', listId);

	try {
		await mailchimp.lists.addListMember('d4f452d978', {
			merge_fields: {
				FNAME: fName,
				LNAME: lName,
				PHONE: phone,
				INTEREST: upgrade,
				BUDGET: budget,
				WEBSITE: website,
			},
			status: 'subscribed',
		});

		return res.status(200).json({ error: '' });
	} catch (error) {
		return res
			.status(500)
			.json({ error: error.message || error.toString() });
	}
};
