import axios from 'axios';

const nodemailer = require('nodemailer');

let testAccount = await nodemailer.createTestAccount();
        
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

// Send a contact form to my email
const sendContact = async (req, res) => {
	try {
        const res = await axios.get({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res;
        
        // res.statusCode = 200;
		// res.send( req.formdata );
	} catch (err) {
		res.send({ status: 'Everything is NOT healthy BUD' });
	}
};
export default sendContact;