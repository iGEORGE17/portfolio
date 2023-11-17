"use strict";
const nodemailer = require("nodemailer");

const email = "www.igeorge.www@gmail.com"

export const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: email,
    pass: "elmj vupx rdnr ucsz",
  },
});

export const mailOptions = {
    from: email, // sender address
    to: "bar@example.com, baz@example.com",    
}

// async..await is not allowed in global scope, must use a wrapper


