import React from 'react'

import works from '../Db/work'
import AboutItems from '../Componet/AboutItems'
import Aboutme from '../Componet/Aboutme'

const About = () => {


    const work = works?.map((item, index) => (
        <AboutItems key={index} {...item} />
    ))

  return (
    <div className=' max-w-[1120px] container mx-auto py-10 px-6 mt-10'>
        <h1 className=' text-left text-3xl font-bold mb-16'>Recent Works</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {work}
        </div>

        <div className=' py-10'>
        <Aboutme />
        </div>
    </div>
  )
}

export default About