import React from 'react'
import Slider from '../components/Slider'

function Home() {
  return (
    <div >
      {/* Slide */}
      <Slider />

      {/* our mission */}
      <div className='flex flex-col-center '><iframe width="560" height="315" src="https://www.youtube.com/embed/cuIFuOVG9eA?si=7wGHBimrdGVTEDCf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <div className='bg-[url(/images/home/bg-building.jpg)] bg-no-repeat bg-cover'>
        <div className=' w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-2 py-2'>

          <div>  </div>
          <div className='bg-primary/80 opacity-80 p-10 text-white'>
            <h2 className='font-bold text-4xl mb-5'>Our Mission</h2>
            <p className='text-justify'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sunt dolorem ipsam blanditiis. Dolor laudantium rem ad debitis ut provident at saepe commodi dolorum blanditiis eius aperiam error ab suscipit dicta, delectus asperiores accusantium nisi molestias? Sed accusantium impedit debitis iste necessitatibus nulla nesciunt eligendi totam illum minus voluptatem, tempora reiciendis quasi ad porro incidunt provident et animi dolorem perspiciatis. Nam molestias officiis quam corporis tempora nobis nemo cum numquam hic, excepturi temporibus magni architecto ipsum animi doloremque autem! Eum exercitationem nihil cumque. Culpa, iste saepe minima odit corrupti voluptatum vel ratione mollitia beatae accusamus blanditiis nobis, veniam atque odio.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aliquid at expedita. Ratione velit quasi aut. Itaque incidunt tempore hic adipisci iste suscipit possimus maiores laudantium, ea, dignissimos repudiandae dolorem dolor, molestiae doloribus natus earum vero a et ducimus at. Reprehenderit cum est modi. Error iusto quam quisquam repellendus minus. Vitae atque maxime similique! Aperiam non quod error officiis facere quae porro ducimus explicabo nostrum! Aliquid blanditiis aliquam, debitis voluptatum asperiores natus? Non reiciendis dolorum modi quidem quas. Quod ipsam hic amet quasi voluptatum at officiis, possimus quia maiores recusandae a optio laborum in doloremque ab laudantium. Mollitia, qui sit!
            </p>
          </div>
        </div>
      </div >

    </div >
  )
}

export default Home
