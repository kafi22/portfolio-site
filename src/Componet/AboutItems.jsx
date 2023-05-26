import React from 'react'
import Technology from './Technology'

const AboutItems = (props) => {

    const {img, title, technology} = props

  return (
    <div  className=' flex flex-col justify-between items-start gap-3  bg-slate-400 text-black hover:bg-zinc-500 hover:text-white transition-colors mb-6 rounded-xl shadow-lg '>
        <img src={img} alt="" className=' w-full object-cover h-auto md:h-[270px] rounded-t-xl' />
        <div className=' py-4 px-4 text-left flex flex-col gap-6'>
            <h3 className=' text-xl capitalize text-slate-900'>{title}</h3>
            <div className=' flex space-x-1 md:space-x-4'>
             {technology.map((item, index) => (
                <Technology key={index} item={item} />
             ))}
            </div>
        </div>
    </div>
  )
}

export default AboutItems