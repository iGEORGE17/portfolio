import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from '../../lib/nodemailer';

const mail = "www.igeorge.www@gmail.com"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {fullname, email, message} = await req.body();

 const mailOptions = {
    from: email, // sender address
    to: mail, 
    subject: "Enquiries", // subject
    html: `
      <p>Hello there!</p>
      <p>Fullname: ${fullname}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `   
}

  await transporter.sendMail(mailOptions)
  console.log("sent")
}







// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });