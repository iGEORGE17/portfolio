import {SiMinutemailer} from "react-icons/si"
import {TfiSkype} from "react-icons/tfi"
import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import Image from "next/image"
import { FormEvent, useState } from "react"


const Contact = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullname, email, message })
            }).then((res) => {
                    console.log('Response succeeded!')
                    setSubmitted(true)
                    setFullname("")
                    setEmail("")
                    setMessage("")
        })

 }


  return (
    <div className="w-full lg:flex lg:flex-col lg:space-y-10">
        <div className="lg:flex lg:justify-start gap-3 lg:items-center flex justify-center">
            <h1 className="lg:text-4xl text-4xl font-bold py-5">Get In Touch</h1>
            <div className="w-[200px] h-[2px] bg-primary hidden lg:block"></div>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center lg:mx-[100px] space-y-9 mx-5">
            <div className="lg:flex lg:flex-col space-y-3">
                <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="lg:flex lg:justify-start lg:items-center gap-3 flex flex-col items-center">
                            <div className="lg:flex lg:justify-center lg:items-center flex flex-col items-center gap-1">
                                <BsWhatsapp className="lg:text-2xl text-4xl"/>
                                <Link href="https://wa.link/bl9mo2" className="lg:font-bold font-bold">Whatsapp</Link>
                                <Image src="/wa.link_u5p9yv.png" alt="whatsapp qrcode" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                </div>  

                <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="lg:flex lg:justify-start lg:items-center gap-3 flex flex-col items-center">
                            <div className="lg:flex lg:justify-center lg:items-center flex flex-col items-center gap-1">
                                <TfiSkype className="lg:text-2xl text-4xl"/>
                                <Link href="https://join.skype.com/invite/AWDlaZJUr22D" className="lg:font-bold font-bold">Skype</Link>
                            </div>
                        </div>
                    </div>
                </div>                        

            </div>
            <div className="lg:w-[600px] space-y-6">
                <div className="">
                <p className="lg:text-4xl font-bold">Let's talk about your next project</p>
                </div>
                <div className="">
                    <form className="lg:flex lg:flex-col space-y-4" onSubmit={handleSubmit}>
                        <div className="form-control">
                        <input type="text" placeholder="Enter your name" name="fullname" className="input input-bordered" 
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}  
                        required                      
                        />
                        </div>
                        <div className="form-control">
                        <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}   
                        required                     
                        />
                        </div>                        
                        <textarea className="textarea textarea-bordered lg:min-h-[250px] w-full min-h-[130px]" placeholder="Message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        ></textarea>
                        <div className="">
                            <button className="btn btn-primary gap-2" type="submit">SEND
                            <SiMinutemailer className="lg:text-2xl" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact