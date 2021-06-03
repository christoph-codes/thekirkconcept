require('dotenv').config();
const nodemailer = require('nodemailer');
const { ContactTemplate } = require('../../emails/contact_template');

const mailerEmail = process.env.MAILERUSERNAME;
const mailerPassword = process.env.MAILERPASS;

const contact = (req, res) => {
	const { name, email, text } = req.body;

	const transporter = nodemailer.createTransport({
		service: process.env.MAILER_SERVICE_PROVIDER || 'gmail',
		// host: process.env.MAILERHOST,
		// port: process.env.MAILERPORT,
		// secure: true
		auth: {
			user: mailerEmail,
			pass: mailerPassword,
		},
	});

	const message = {
		from: email,
		to: mailerEmail,
		subject: `New TKC Website Contact Submission from ${req.body.name}`,
		html: ContactTemplate(req.body),
	};

	transporter.sendMail(message, (err, data) => {
		console.log('Message: ', message);
		if (err) {
			console.log(err);
			res.send('error' + JSON.stringify(err));
		} else {
			console.log('mail send');
			res.send('success');
		}
	});

	console.log(name, email, text);
	res.send('success');
};
export default contact;
