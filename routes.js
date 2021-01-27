const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { ContactTemplate } = require('./emails/contact_template');

// ...Routes all go here!

// Always check to see our server is running and healthy
router.post('/contact', (req, res) => {

    const sendContact = () => {

      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: process.env.MAILERHOST,
        port: process.env.MAILERPORT,
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
      }

      transporter.sendMail(message, (error, response) => {
          if (error) {
              console.error(error);
          } else {
              console.log('Email sent successfully');
          }
          transporter.close();
      });
    
      // transporter.verify((error, success) => {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log("Server is ready to take our messages");
      //   }
      // });
    }
    
    sendContact();
    
});

router.post('/REPLACETHISURL', (req, res) => {
  try {
    // Do Something
  } catch {
    // Do error handling
  }
});

router.get('/healthcheck', (req, res) => {
 try {
   // Do Something
   res.status(200).send({status: 'App is healthy'});
 } catch(err) {
   // Do error handling
   res.send({ status: err });
 }
});

module.exports = router;