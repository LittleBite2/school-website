import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
    AOS.refresh();

  }, []);
  return (
    <div >
      {/* Slide */}
      <Slider />

      {/* our mission */}
      <div className='w-11/12 mx-auto flex'>
        <div className='flex'>
          <img src="./images/home/home-welcome-1.jpg" data-aos="fade-up" alt="" />
          <img src="./images/home/home-welcome-2.jpg" alt="" />
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi libero quia veritatis obcaecati cum animi dolores rerum delectus sapiente in harum ducimus et, aliquid alias earum perspiciatis iusto possimus quibusdam distinctio unde vitae illo repellendus doloremque? Veritatis aliquid deleniti molestiae voluptas reprehenderit architecto expedita sapiente aperiam aliquam? Totam dolor, pariatur nostrum, dolore in dolorem cupiditate repudiandae temporibus ea ipsam dicta, doloribus assumenda voluptates quo? Quis nihil excepturi quaerat! Neque, soluta repellendus. Temporibus molestiae dolore consectetur vitae optio, pariatur earum, culpa aspernatur, minus magni sed eaque. In, saepe perspiciatis incidunt autem vel, reiciendis facilis dolor illo eum laboriosam aliquid corporis. Ullam?
        </div>
      </div>
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
