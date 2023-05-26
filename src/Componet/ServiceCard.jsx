import React from 'react'

const ServiceCard = (props) => {

    const {title, details, icon} = props

     const heading = title.toUpperCase()

  return (
    <div className='card-item shadow-xl py-6 px-6 flex flex-col justify-between items-start text-left gap-4 bg-slate-300 rounded-xl hover:-translate-y-2 transition-transform hover:bg-slate-500 hover:text-white'>
        {icon}
        <h3 className=' text-xl font-medium'>{heading}</h3>
        <p className='text-sm md:text-lg leading-7'>{details}</p>
    </div>
  )
}

export default ServiceCard