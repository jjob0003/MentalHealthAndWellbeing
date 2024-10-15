// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendEmail = async(email, subject, message) => {
  try{
    const msg = {
      to: email, // Change to your recipient
      from: 'janicejobin12@gmail.com', // Change to your verified sender
      subject: subject,
      text: message,
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
      sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    });
  }catch(error){
    console.error('error sending email!', error);
  }
};