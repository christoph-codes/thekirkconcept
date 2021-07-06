require('dotenv').config();
const { EmailTemplate } = require('../../emails/email_template');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

const webQuestionnaire = async (req, res) => {
	const { emailDetails } = req.body;
	if (emailDetails) {
		try {
			const msg = {
				to: 'hello@thekirkconcept.com', // Change to your recipient
				from: 'hello@thekirkconcept.com', // Change to your verified sender
				subject: 'Web Questionnaire Submission from TKCWEB',
				text: 'Make sure to reach out because you know you care!',
				html: EmailTemplate(emailDetails),
			};
			await sgMail
				.send(msg)
				.then(() => {
					console.log('Web Questionnaire Email Sent');
					res.json('Web Questionnaire Sent');
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (e) {
			console.log(e);
			res.send({ status: e });
		}
	} else {
		res.send({
			error: 'All of the details for this email has not been submitted.',
		});
	}
};
export default webQuestionnaire;
