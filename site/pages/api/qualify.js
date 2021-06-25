require('dotenv').config();
const { QualifyTemplate } = require('../../emails/qualify_template');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const qualify = async (req, res) => {
	const { emailDetails } = req.body;

	const msg = {
		to: 'hello@thekirkconcept.com', // Change to your recipient
		from: 'hello@thekirkconcept.com', // Change to your verified sender
		subject: 'Qualify Submission from TKCWEB',
		text: 'Someone is looking to work with TKC!',
		html: QualifyTemplate(emailDetails),
	};
	await sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
			res.json('everything sent');
		})
		.catch((error) => {
			console.error(error);
		});
};
export default qualify;
