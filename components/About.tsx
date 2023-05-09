import {BiBriefcaseAlt, BiSupport} from "react-icons/bi"
import {BsBarChart, BsFiletypePdf} from "react-icons/bs"
import Image from "next/image"

const About = () => {
  return (
  <div className="w-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-7">
      <div className="lg:flex xs:flex lg:justify-start xs:justify-center gap-3 lg:items-center">
        <h1 className="lg:text-4xl">About Me</h1>
        <div className="w-[200px] h-[2px] bg-primary"></div>
      </div> 
      <div className="lg:flex lg:justify-between lg:items-start lg:mx-[200px] gap-10">
        <div className="self-center">
            <div className="avatar">
            <div className="w-80 h-full rounded-xl">
                <Image src="/me.jpg" width="80" height="80" alt="" />
            </div>
            </div>
        </div>
        <div className="lg:flex lg:flex-col gap-3">
            <div className="lg:flex flex lg:justify-between xs:flex-wrap justify-center lg:items-center gap-2">
                <div className="card w-64 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="lg:flex lg:flex-col lg:items-center">
                        <BsBarChart className="lg:text-2xl" />
                        <h2 className="card-title">Experience</h2>
                        <p>4+ working</p>
                    </div>
                </div>
                </div>

                <div className="card w-64 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="lg:flex lg:flex-col lg:items-center">
                        <BiBriefcaseAlt className="lg:text-2xl" />
                        <h2 className="card-title">Projects</h2>
                        <p>4 completed</p>
                    </div>
                </div>
                </div>

                <div className="card w-64 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="lg:flex lg:flex-col lg:items-center">
                        <BiSupport className="lg:text-2xl" />
                        <h2 className="card-title">Support</h2>
                        <p>Online 24/7</p>
                    </div>
                </div>
                </div>                                

            </div>

            <div className="lg:flex lg:flex-col gap-3 lg:px-10 px-2">
                <p className="">I'm a software developer, 
                I create applications on various platforms e.g mobile, web, and
                 desktop using top web technologies.
                 I have years of experience and i keep up with the latest technologies.
                 </p>
                <div className="">
                    <button className="btn gap-2 ">
                        Download Resume <BsFiletypePdf />
                    </button>
                </div>            
            </div>
        </div>
      </div>       
    </div>
  )
}

export default About