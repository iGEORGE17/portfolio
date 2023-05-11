import {SiMinutemailer} from "react-icons/si"
import {HiOutlineMail} from "react-icons/hi"
import {BsWhatsapp} from "react-icons/bs"


const Contact = () => {
  return (
    <div className="w-full lg:flex lg:flex-col lg:space-y-10">
        <div className="lg:flex lg:justify-start gap-3 lg:items-center">
            <h1 className="lg:text-4xl">Get In Touch</h1>
            <div className="w-[200px] h-[2px] bg-primary"></div>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center lg:mx-[100px] space-y-9 mx-5">
            <div className="lg:flex lg:flex-col space-y-3">
                <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="lg:flex lg:justify-start lg:items-center gap-3 flex flex-col items-center">
                        <div className="lg:flex lg:justify-center lg:items-center flex flex-col items-center gap-1">
                            <HiOutlineMail className="lg:text-2xl text-4xl"/>
                            <p className="lg:font-bold font-bold">Email</p>
                        </div>
                        <p>www.igeorge.www@gmail.com</p>
                    </div>
                </div>
                </div>  

                <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="lg:flex lg:justify-start lg:items-center gap-3 flex flex-col items-center">
                        <div className="lg:flex lg:justify-center lg:items-center flex flex-col items-center gap-1">
                            <BsWhatsapp className="lg:text-2xl text-4xl"/>
                            <p className="lg:font-bold font-bold">Whatsapp</p>
                        </div>
                        <p>+2349076840990</p>
                    </div>
                </div>
                </div>                        

            </div>
            <div className="lg:w-[600px] space-y-6">
                <div className="">
                <p className="lg:text-4xl font-bold">Let's talk about your next project</p>
                </div>
                <div className="">
                    <form action="" className="lg:flex lg:flex-col space-y-4">
                        <div className="form-control">
                        <input type="text" placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <input type="email" placeholder="Enter your email" className="input input-bordered" />
                        </div>                        
                        <textarea className="textarea textarea-bordered lg:min-h-[250px] w-full min-h-[150px]" placeholder="Message"></textarea>
                        <div className="">
                            <button className="btn btn-primary gap-2">SEND
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