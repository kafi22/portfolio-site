import React from 'react'

import services from '../Db/services'
import ServiceCard from './ServiceCard'
import ServiceTitle from './ServiceTitle'

const Services = () => {

  const card = services?.map((item, index) => (

    <ServiceCard key={index} {...item} />

  ))
  return (
    <div className=' max-w-[1120px] container mx-auto py-4 px-6'>
        <ServiceTitle>Services</ServiceTitle>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-stretch gap-4'>
        {card}
      </div>
    </div>
  )
}

export default Services