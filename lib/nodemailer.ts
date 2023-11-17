"use strict";
const nodemailer = require("nodemailer");

const mail = "www.igeorge.www@gmail.com"

export const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: mail,
    pass: "elmj vupx rdnr ucsz",
  },
});

export const mailOptions = {
    from: `${email}`, // sender address
    to: mail, 
    subject: "Enquiries", // subject
    html: `
      <p>Hello there!</p>
      <p>Fullname: ${fullname}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `   
}

// async..await is not allowed in global scope, must use a wrapper


