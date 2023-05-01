import React from 'react'

const Projects = () => {
  return (
    <div className='grid lg:grid-cols-3 w-full'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
        <div className="card-body">
            <h2 className="card-title">Noteyy</h2>
            <p>A notes writing application</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius commodi maxime, ratione tempore odio.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem deserunt ea accusamus magni porro!</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Projects