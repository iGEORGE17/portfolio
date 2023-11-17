"use strict";
const nodemailer = require("nodemailer");

const mail = "www.igeorge.www@gmail.com"

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: mail,
    pass: "elmj vupx rdnr ucsz",
  },
});

// async..await is not allowed in global scope, must use a wrapper


