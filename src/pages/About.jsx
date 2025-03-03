import React from 'react'

function About() {
  return (
    <div>
      <div>
        <img src="/images/about-bg.jpg" alt="" />
        <div className='bg-gray-100 py-10'>
          <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-12 gap-3'>
            <div className='sm:col-span-3 bg-white rounded-md p-3 grid grid-cols-1'>
              <button className='border border-gray-200 p-2 cursor-pointer text-primary font-semibold'>Mission & Vision</button>
              <button className='border border-gray-200 p-2 cursor-pointer text-primary font-semibold'>Phylosophy</button>
              <button className='border border-gray-200 p-2 cursor-pointer text-primary font-semibold'>Chairmans Desk</button>
              <button className='border border-gray-200 p-2 cursor-pointer text-primary font-semibold'>Principles Desk</button>
              <button className='border border-gray-200 p-2 cursor-pointer text-primary font-semibold'>Our Aim</button>
              <button className='border border-gray-200 p-2 cursor-pointer text-primary font-semibold'>Our Distinctions</button>
            </div>
            <div className='sm:col-span-9 bg-white rounde-md p-3'>
              hi
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About
