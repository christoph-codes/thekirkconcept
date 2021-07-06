require('dotenv').config();
const { EmailTemplate } = require('../../emails/email_template');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

const getStarted = async (req, res) => {
	const { emailDetails } = req.body;

	const msg = {
		to: 'hello@thekirkconcept.com', // Change to your recipient
		from: 'hello@thekirkconcept.com', // Change to your verified sender
		subject: 'Getting Started Submission from TKCWEB',
		text: 'Someone is looking to work with TKC!',
		html: EmailTemplate(emailDetails),
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
export default getStarted;
