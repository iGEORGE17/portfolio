import Image from "next/image"
import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub, FaHome, FaFolder, FaSchool } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {BiBriefcaseAlt, BiSupport} from "react-icons/bi"
import {BsBarChart, BsFiletypePdf} from "react-icons/bs"

const Hero = () => {
  return (
    <div className="flex flex-col space-y-5">
    <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:space-x-20 space-y-10 lg:max-w-[1000px] w-full">
        <div className="">
            <div className="avatar">
                <div className="lg:w-80 w-48 rounded-full shadow-lg shadow-primary">
                    <Image src="/me2.jpg" alt="profile picture" width={360} height={651} />
                </div>
            </div>        
        </div>        
        <div className="flex flex-col lg:items-start items-center justify-center space-y-4">
            <div className="flex flex-col space-y-0 lg:items-start items-center justify-center">
                <motion.h1             
                  initial={{ y:10 , opacity: 0 }}
                  animate={{ y:0, opacity: 1 }}
                  transition={{ duration:0.5, delay: 0.3 }} 
                  className="text-3xl lg:text-4xl"><span className="font-bold"> George Igboanugo</span>
                </motion.h1>
                
                <motion.h3             
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }} 
                  className="lg:text-5xl text-2xl text-primary font-semibold">Software Developer<br/>(Web and Mobile)
                </motion.h3>
            </div>
            
            <div className="flex flex-col space-y-8 justify-center items-center lg:justify-start lg:items-start">
                <motion.p initial={{ y:10 , opacity: 0 }}
                  animate={{ y:0, opacity: 1 }}
                  transition={{ duration:0.5, delay: 1.5 }}
                  className="text-xl flex justify-center px-5 lg:px-0 text-center lg:text-start">
                    I'm a product driven software developer currently based in Nigeria.  
                I create applications on various platforms e.g mobile, web, and
                 desktop.                              
                </motion.p>
                <Link href="/resume.pdf" target="_blank" className="btn gap-2 btn-primary" download="Resume.pdf">
                        Download Resume <BsFiletypePdf />
                    </Link>
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
            </div>          
        </div>                
    </div>
    <div className="hidden lg:flex flex-wrap justify-between w-full items-center lg:gap-2 mt-52">
        <div className="card w-max">
        <div className="card-body">
            <div className="flex justify-between items-center space-x-2">
                <BsBarChart className="text-3xl" />
                <h3 className="font-bold text-4xl text-primary">4+</h3>
                <h2 className="card-title">Experience</h2>
            </div>
        </div>
        </div>

        <div className="card w-max">
        <div className="card-body">
            <div className="flex justify-between items-center space-x-2">
                <BiBriefcaseAlt className="lg:text-4xl text-3xl" />
                <h3 className="font-bold text-4xl text-primary">6</h3>
                <h2 className="card-title">Projects</h2>
            </div>
        </div>
        </div>

        <div className="card w-max">
        <div className="card-body">
            <div className="flex justify-between items-center space-x-2">
                <BiSupport className="lg:text-4xl text-3xl"/>
                <h2 className="card-title">Support</h2>
                <h3 className="font-bold text-4xl text-primary">24/7</h3>
            </div>
        </div>
        </div>         
    </div>      
    </div>
  )
}

export default Hero