import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:space-x-20 space-y-10 lg:max-w-[1000px] w-full">
        <div className="">
            <div className="avatar">
                <div className="lg:w-80 w-48 rounded-full shadow-lg shadow-primary">
                    <Image src="/me.jpg" alt="profile picture" width={360} height={651}/>
                </div>
            </div>        
        </div>        
        <div className="flex flex-col lg:items-start items-center justify-center space-y-4">
            <div className="flex flex-col space-y-0 lg:items-start items-center justify-center">
                <h1 className="text-2xl"><span className="hidden"> I'm </span><span className="font-bold">George Igboanugo</span></h1>
                <h1 className="lg:text-4xl text-2xl font-bold lg:font-semibold text-primary">Full Stack Developer</h1>
            </div>
            <div className="flex flex-col space-y-8 justify-center items-center lg:justify-start lg:items-start">
                <p className="text-xl">
                    Looking for a challenging role in a reputable organization to utilize my technical, 
                    database, and management skills for the growth of the organization 
                    as well as to enhance my knowledge about new and emerging trends in the IT sector                
                </p>
                <div className="flex justify-between items-center">
                    <button className="btn gap-2">
                        Button
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn gap-2">
                        Button
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Hero