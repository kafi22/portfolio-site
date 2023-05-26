import React from 'react'


const Hero = () => {



  return (
    <div className=' flex justify-center items-center flex-col py-16 w-full'>
        <h1 className=' text-center text-2xl md:text-3xl lg:text-5xl font-bold text-blue-400'>Hello, <br></br> This is kafi Ahmed</h1>
        <p className='dark:text-white max-w-[500px]  text-sm md:text-xl font-semibold leading-6 tracking-wider text-center py-6'>Hi there, i'm kafi ahmed. i am passionate front end developer. currently i work with react.js and tailwind css. i live in Bangladesh. my dream will become a full stack developer. </p>
        <button className='  hover:bg-black hover:text-white transition-colors  bg-blue-500 h-[45px] w-[150px] text-white  rounded-lg text-xl flex justify-center items-center text-center'>See Works</button>
    </div>
  )
}

export default Hero