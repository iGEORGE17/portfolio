import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"


const projectsData = [
  {
    id: 1,
    image: "Work1",
    title: "Web design",
    category: "web",
  },
  {
    id: 2,
    image: "Work2",
    title: "App movil",
    category: "app",
  },
  {
    id: 3,
    image: "Work3",
    title: "Brand design",
    category: "design",
  },
  {
    id: 4,
    image: "Work4",
    title: "App movil",
    category: "app",
  },
  {
    id: 5,
    image: "Work5",
    title: "Web design",
    category: "web",
  },
];

const Projects = () => {


  return (
    <div className="w-full lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-7">
      <div className="lg:flex lg:justify-start gap-3 lg:items-center">
        <h1 className="lg:text-4xl">Projects</h1>
        <div className="w-[200px] h-[2px] bg-primary"></div>
      </div>
        <div className='grid lg:grid-cols-3 w-full'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="lg:flex justify-between items-center">
                <h2 className="card-title">Noteyy</h2>
                <div className="lg:flex lg:items-center lg:justify-between lg:space-x-3">
                  <Link href=""><FaGithub /></Link>
                  <FiExternalLink className="lg:text-xl" />
                </div>                
              </div>
                
                <p>A notes writing application built with Nexjs, react, typescript, prisma, tRPC and supabase with next-Auth google login</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="lg:flex justify-between items-center">
                <h2 className="card-title">Gameco</h2>
                <div className="lg:flex lg:items-center lg:justify-between lg:space-x-3">
                  <Link href=""><FaGithub /></Link>
                  <FiExternalLink className="lg:text-xl" />
                </div> 
              </div>

                <p>A game listing application that renders a list of games from an external api with search and sort functionality</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>  
                </div>          
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem deserunt ea accusamus magni porro!</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
      </div>
  )
}

export default Projects