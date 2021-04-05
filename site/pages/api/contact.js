require('dotenv').config();
const nodemailer = require('nodemailer');
const { ContactTemplate } = require('../../emails/contact_template');

const contact = (req, res) => {
	const { name, email, text } = req.body;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		// host: process.env.MAILERHOST,
		// port: process.env.MAILERPORT,
		secure: true, // true for 465, false for other ports
		auth: {
			user: process.env.MAILERUSERNAME, // generated ethereal user
			pass: process.env.MAILERPASS, // generated ethereal password
		},
	});

	const message = {
		from: process.env.MAILERUSERNAME,
		to: process.env.MAILERUSERNAME,
		subject: `New TKC Website Contact Submission from ${req.body.name}`,
		html: ContactTemplate(req.body),
	};

	transporter.sendMail(message, (err, data) => {
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
