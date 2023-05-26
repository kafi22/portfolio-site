import React from 'react'

const Footer = () => {

    const names = 'kafi ahmed';
    const email = 'kafyahmedfarabi@gmail.com';
    

  return (
    <div className=' bg-slate-700 text-white py-10 mx-auto px-6 max-w-[1120px] container mt-10 flex flex-col items-center text-center  rounded-t-lg'>
        <h4 className=' text-2xl mb-1'>{names}</h4>
        <p>{email}</p>
        <p className=' text-gray-500  mt-2'>this website is © by kafi, 2023 </p>
    </div>
  )
}

export default Footer