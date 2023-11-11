import {BiBriefcaseAlt, BiSupport} from "react-icons/bi"
import {BsBarChart, BsFiletypePdf, BsAndroid2} from "react-icons/bs"
import {FaCss3Alt, FaHtml5, FaNode, FaPython, FaReact} from "react-icons/fa"
import {SiTailwindcss, SiReactrouter, SiFlutter} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"
import {AiFillApple} from "react-icons/ai"
import Image from "next/image"
import Link from "next/link"

const Services = () => {
  return (
  <div className="w-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-7">
      <div className="lg:flex xs:flex lg:justify-start flex justify-center gap-3 lg:items-center">
        <h1 className="lg:text-4xl text-4xl font-bold py-5">Services</h1>
        <div className="w-[200px] h-[2px] bg-primary hidden lg:block"></div>
      </div> 
      <div className="flex flex-col items-center lg:flex-row lg:justify-between justify-center lg:items-start">
        <div className="lg:flex lg:flex-col gap-3 w-full">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:mx-[100px] mx-[50px]">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Web Design</h2>
                        <ul className="menu rounded-box">
                            <li>
                                <a>
                                    <FaHtml5 className="text-2xl"/> HTML 5
                                                               </a>
                            </li>
                            <li>
                                <a>
                                    <FaCss3Alt className="text-2xl"/> CSS 3
                            </a>
                            </li>
                            <li>
                                <a><IoLogoJavascript className="text-2xl"/> Javascript                            
                                </a>
                            </li>
                            <li>
                                <a><SiTailwindcss className="text-2xl"/> Tailwind CSS                            
                                </a>
                            </li>                            
                        </ul>                        
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Web Development</h2> 
                        <ul className="menu rounded-box">
                            <li>
                                <a>
                                    <FaPython className="text-2xl"/> 
                                    Python                           </a>
                            </li>
                            <li>
                                <a>
                                    <FaReact className="text-2xl"/>    React 
                            </a>
                            </li>
                            <li>
                                <a><FaNode className="text-2xl"/> Node JS                            
                                </a>
                            </li>
                        </ul>                                           
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Mobile App Development</h2>
                        <ul className="menu rounded-box">
                            <li>
                                <a>
                                    <FaReact className="text-2xl"/> React Native
                            </a>
                            </li>
                           <li>
                                <a>
                                    <SiFlutter className="text-2xl"/> Flutter                         
                                 </a>
                            </li>                            
                            <li>
                                <a><BsAndroid2 className="text-2xl"/> Android </a>
                            </li>
                            <li>
                                <a><AiFillApple className="text-2xl"/> iOS                            
                                </a>
                            </li>                            
                        </ul>
                    </div>
                </div>                
            </div>
        </div>
      </div>       
    </div>
  )
}

export default Services