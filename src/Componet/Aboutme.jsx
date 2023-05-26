import React from 'react'

import about_img from '../assets/image/hero.c69e7a76.jpg'

const Aboutme = () => {
  return (
    <div className=' flex flex-col justify-between items-center md:flex-row w-full space-y-20 md:space-x-10 lg:space-x-16 mt-6'>
        <div className="left-side flex flex-col justify-between items-start space-y-6  md:w-1/2">
            <h1 className=' text-3xl font-medium  text-blue-400 about-me relative'>About Me</h1>
            <p className=' dark:text-slate-100 text-sm md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, amet delectus corporis modi dolore perspiciatis doloremque molestiae dolores in ducimus magnam. A enim laboriosam aliquam harum suscipit ducimus veritatis quibusdam!</p>
            <a href="#" className='text-sm md:text-xl dark:text-slate-100 hover:underline transition-transform tracking-wider'>kafyahmedfarabi@gmail.com</a>
        </div>
        <div className="right-side relative z-10">
        <img src={about_img} alt=""  className=' w-full object-cover rounded-xl  '/>
        </div>
    </div>
  )
}

export default Aboutme