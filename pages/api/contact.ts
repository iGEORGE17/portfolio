import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from '../../lib/nodemailer';

const mail = "www.igeorge.www@gmail.com"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {fullname, email, message} = req.body;
  
  const mailOptions = {
    from: email,
    to: mail,
    subject: `Message From ${fullname}`,
    text: message,
    html: `<div>${message}</div>`
   }

  await transporter.sendMail(mailOptions, (err: any, info: any) => {
    if(err)
      console.log({"error ": err})
    else
    return res.status(200).json(info)
      console.log({"info": info})
  })

}


