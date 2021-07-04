require('dotenv').config();
const { BrandQuestionnaireTemplate } = require('../../emails/contact_template');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

const brandQuestionnaire = async (req, res) => {
	const { emailDetails } = req.body;
	if (emailDetails) {
		try {
			const msg = {
				to: 'hello@thekirkconcept.com', // Change to your recipient
				from: 'hello@thekirkconcept.com', // Change to your verified sender
				subject: 'Brand Questionnaire Submission from TKCWEB',
				text: 'Make sure to reach out because you know you care!',
				html: BrandQuestionnaireTemplate(emailDetails),
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
export default brandQuestionnaire;
