import React from 'react'
import { IoCallOutline,  IoLocationOutline } from "react-icons/io5";

function Information() {
  return (
    <>
    <div className='flex flex-col lg:flex-row gap-8'> 
    <div className='flex py-7 px-10 rounded-xl bg-gray-800 md:w-full text-white'>
      <span className="text-4xl mx-4">
        <IoCallOutline/>
      </span>
      <div className='flex flex-col '>
        <h1 className='text-3xl mb-3 font-bold'>Call us</h1>
        <p className='text-xl'>+92 3183153371 </p>
        <p className='text-xl'>+92 3282164523</p>
      </div>
      
    </div>
    
    <div className='flex py-7 px-10 rounded-xl bg-gray-800 md:w-full text-white'>
      <span className="text-4xl mx-4">
        <IoLocationOutline/>
      </span>
      <div className='flex flex-col '>
        <h1 className='text-3xl mb-3 font-bold'>Email us</h1>
        <p className='text-xl'>example@gmail.com</p>
        <p className='text-xl'>example@gmail.com</p>
      </div>
      
    </div>
    <div className='flex py-7 px-10 rounded-xl bg-gray-800 md:w-full text-white'>
      <span className="text-4xl mx-4">
        <IoLocationOutline/>
      </span>
      <div className='flex flex-col '>
        <h1 className='text-3xl mb-3 font-bold'>Office address</h1>
        <p className='text-xl'>Scheme 33, Karachi</p>
        <p className='text-xl'>Scheme 33, Karachi</p>
      </div>
      
    </div>
    
    </div>

   </>    

  )
}

export default Information
