require('dotenv').config();
const { ContactTemplate } = require('../../emails/contact_template');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const contact = async (req, res) => {
	const { emailDetails } = req.body;

	const msg = {
		to: 'hello@thekirkconcept.com', // Change to your recipient
		from: 'hello@thekirkconcept.com', // Change to your verified sender
		subject: 'Contact Submission from TKCWEB',
		text: 'Make sure to reach out because you know you care!',
		html: ContactTemplate(emailDetails),
	  }
	  await sgMail.send(msg)
		.then(() => {
		  console.log('Email sent');
		  res.json('everything sent')
		})
		.catch((error) => {
		  console.error(error)
		});
};
export default contact;
