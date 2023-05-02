
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
    <div className="lg:flex lg:flex-col lg:space-y-7">
      <div className="lg:flex lg:justify-start gap-3 lg:items-center">
        <h1 className="lg:text-4xl">Projects</h1>
        <div className="w-[200px] h-[2px] bg-primary"></div>
      </div>
        <div className='grid lg:grid-cols-3 w-full'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Noteyy</h2>
                <p>A notes writing application</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius commodi maxime, ratione tempore odio.</p>
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