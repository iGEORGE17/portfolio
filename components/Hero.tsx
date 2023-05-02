import Image from "next/image"
import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub, FaHome, FaFolder, FaSchool } from 'react-icons/fa'
import {BsFiletypePdf} from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:space-x-20 space-y-10 lg:max-w-[1000px] w-full">
        <div className="">
            <div className="avatar">
                <div className="lg:w-80 w-48 rounded-full shadow-lg shadow-primary">
                    <Image src="/me.jpg" alt="profile picture" width="360" height="651" />
                </div>
            </div>        
        </div>        
        <div className="flex flex-col lg:items-start items-center justify-center space-y-4">
            <div className="flex flex-col space-y-0 lg:items-start items-center justify-center">
                <motion.h1             
                initial={{ y:10 , opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ duration:0.5, delay: 0.3 }} 
          className="text-4xl"><span className="font-bold"> George Igboanugo</span>
          </motion.h1>
                
                <motion.h3             
                initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }} 
          className="lg:text-5xl text-3xl text-primary">Full Stack Developer
          </motion.h3>
            </div>
            
            <div className="flex flex-col space-y-8 justify-center items-center lg:justify-start lg:items-start">
                <motion.p initial={{ y:10 , opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ duration:0.5, delay: 1.5 }}
           className="text-xl flex justify-center px-5 lg:px-0">
                    Looking for a challenging role in a reputable organization to utilize my technical, 
                    database, and management skills for the growth of the organization 
                    as well as to enhance my knowledge about new and emerging trends in the IT sector                
                </motion.p>
            <ul className="menu menu-horizontal bg-ghost rounded-box lg:hidden">
              <li>
                <Link href="https://www.facebook.com/georgeigboanugo"><FaFacebookF className='text-2xl' /></Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/george.igboanugo"><FaLinkedin className='text-2xl' /></Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/igeorge"><FaTwitter className='text-2xl' /></Link>
              </li>
              <li>
                <Link href="https://www.github.com/igeorge"><FaGithub className='text-2xl' /></Link>
              </li>              
            </ul>                
                <div className="flex justify-between items-center gap-6">
                    <button className="btn gap-2 ">
                        Download Resume <BsFiletypePdf />
                    </button>
                    <button className="btn gap-2">
                        Button
                    </button>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Hero