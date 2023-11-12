import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import {TbSchool} from 'react-icons/tb'
import { GrHomeRounded, GrContactInfo, GrFolderOpen } from 'react-icons/gr'
import {BsTools} from 'react-icons/bs' 
import Link from 'next/link'
import Projects from '../components/Projects'
import Header from '../components/Header'
import {motion} from 'framer-motion'
import Contact from '../components/Contact'
import About from '../components/Services'
import Services from '../components/Services'

 

export default function Home() {
  return (
    <>
      <Head>
        <title>George Igboanugo - Portfolio</title>
        <meta name="description" content="Software Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&family=Monofett&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />      
        </Head>
              
      <main className="lg:h-full">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-[100px_minmax(900px,_1fr)_100px] items-center lg:h-full">
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="menu-links hidden lg:flex lg:flex-col lg:items-center lg:space-y-8">
            <ul className="menu rounded-box">
              <li>
                <Link href='#hero' title='Home'><GrHomeRounded className='lg:text-2xl text-primary'/></Link>
              </li>
              <li>
                <Link href="#services" title='About me'><BsTools className='lg:text-2xl' /></Link>
              </li>              
              <li>
                <Link href='#projects' title='Projects'><GrFolderOpen className='lg:text-2xl' /> </Link>
              </li>
              <li>
                <Link href="#contact" title='Contact Me'><GrContactInfo className='lg:text-2xl' /></Link>
              </li>              
            </ul> 
          </motion.div>
            <div className="lg:h-screen lg:overflow-y-scroll py-7" id="content">
              <section id="hero" className='lg:h-[100vh] min-h-[100vh] overflow-y-auto flex lg:flex justify-center items-center'>
                <Hero />
              </section>              
              <section id="services" className='lg:h-[100vh] min-h-[100vh] overflow-y-auto lg:flex lg:justify-center lg:items-center'>
                <Services />
              </section>              
              <section id="projects" className='lg:h-[100vh] min-h-[100vh] overflow-y-auto lg:flex lg:justify-center lg:items-center'>
                <Projects />
              </section> 
              <section id="contact" className='lg:h-[100vh] min-h-[100vh] overflow-y-auto lg:flex lg:justify-center lg:items-center'>
                <Contact />
              </section>                       
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }} className="socials hidden lg:flex lg:flex-col lg:items-center lg:self-end lg:space-y-4">
            <ul className="menu bg-ghost rounded-box">
              <li>
                <Link href="https://www.facebook.com/georgeigboanugo" target="_blank"><FaFacebookF className='text-2xl' /></Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/george-igboanugo-b3137a172" target="_blank"><FaLinkedin className='text-2xl' /></Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/igeorge"target="_blank"><FaTwitter className='text-2xl' /></Link>
              </li>
              <li>
                <Link href="https://github.com/iGEORGE17" target="_blank"><FaGithub className='text-2xl' /></Link>
              </li>              
            </ul>  
            <div className="w-[2px] h-32 bg-primary"></div>          
          </motion.div>          
        </div>
      </main>
    </>
  )
}
