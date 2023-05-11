import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"

const Projects = () => {
  return (
    <div className="w-full flex flex-col lg:space-y-7">
      <div className="lg:flex lg:justify-start lg:items-center justify-center space-x-2 flex">
        <h1 className="lg:text-4xl text-4xl mt-10 py-5 lg:py-0 lg:mt-0 font-bold">Projects</h1>
        <div className="w-[200px] h-[2px] bg-primary hidden lg:flex"></div>
      </div>
        <div className='grid lg:grid-cols-3 lg:content-center gap-5 mx-5'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="lg:flex justify-between items-center flex">
                <h2 className="card-title">Noteyy</h2>
                <div className="lg:flex lg:items-center lg:justify-between lg:space-x-3 flex space-x-3">
                  <Link href="https://github.com/iGEORGE17/notetaker" target="_blank"><FaGithub className="text-2xl" /></Link>
                  <Link href="" target="_blank"><FiExternalLink className="lg:text-xl text-2xl" /></Link>
                </div>                
              </div>                
                <p>A notes writing application built with Nexjs, react, typescript, prisma, tRPC and supabase with next-Auth google login</p>
            </div>
            </div>

            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="lg:flex justify-between items-center flex">
                <h2 className="card-title">Gameco</h2>
                <div className="lg:flex lg:items-center lg:justify-between lg:space-x-3 flex space-x-3">
                  <Link href="https://github.com/iGEORGE17/gameco" target="_blank"><FaGithub className="text-2xl" /></Link>
                  <Link href="" target="_blank"><FiExternalLink className="lg:text-xl text-2xl" /></Link>
                </div> 
              </div>
                <p>A game listing application that renders a list of games from an external api with search and sort functionality</p>  
                </div>          
            </div>

            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="lg:flex justify-between items-center flex">
                <h2 className="card-title">whatsapp clone</h2>
                <div className="lg:flex lg:items-center lg:justify-between lg:space-x-3 flex space-x-3">
                  <Link href="https://github.com/iGEORGE17/whatsapp-clone-with-flutter" target="_blank"><FaGithub className="text-2xl" /></Link>
                  <Link target="_blank" href=""><FiExternalLink className="lg:text-xl text-2xl" /></Link>
                </div>   
                </div>             
                <p>a whatsapp clone mobile application using react-native</p>
            </div>
            </div>

            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="lg:flex justify-between items-center flex">
                <h2 className="card-title">Tesla clone</h2>
                <div className="lg:flex lg:items-center lg:justify-between lg:space-x-3 flex space-x-3">
                  <Link href="https://github.com/iGEORGE17/Tesla-Clone-with-React-Native" target="_blank"><FaGithub className="text-2xl" /></Link>
                  <Link href="" target="_blank"><FiExternalLink className="lg:text-xl text-2xl" /></Link>
                </div>  
                </div>              
                <p>a tesla clone mobile application using flutter</p>
            </div>
            </div>

            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="lg:flex justify-between items-center flex">
                <h2 className="card-title">Random Quote Machine</h2>
                <div className="lg:flex lg:items-center lg:justify-between lg:space-x-3 flex space-x-3">
                  <Link href="https://github.com/iGEORGE17/random-quote-machine" target="_blank"><FaGithub className="text-2xl" /></Link>
                  <Link href="https://igeorge17.github.io/random-quote-machine" target="_blank"><FiExternalLink className="lg:text-xl text-2xl" /></Link>
                </div>  
                </div>              
                <p>a react application that displays random quotes with different background colors</p>
            </div>
            </div>            

        </div>
      </div>
  )
}

export default Projects


