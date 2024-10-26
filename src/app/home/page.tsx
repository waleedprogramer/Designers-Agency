import React from 'react'
import Image from 'next/image'
import hero from '../images/hero.png'

function Main() {
  return (
   <>
  <div className="h-1/2 flex lg:flex-row justify-around flex-col pt-36">
    <div className="content flex flex-col justify-center text-center lg:w-1/2	">
      <h1 className='text-7xl font-bold text-indigo-600'>A creative design studio</h1>
      <p className='mt-3 text-md'>We are a creative design studio specializing in meeting the needs of the new generation. We offer innovative and cutting-edge design solutions to help our clients stand out in todays fast-paced.</p>
      <span>
      <button className='bg-indigo-600 p-5 mt-5 rounded-full text-white text-lg font-bold hover:opacity-95'>Book a free consultation</button>
      </span>
    </div>

    <div className="w-full lg:w-auto flex justify-center mt-10 lg:mt-0 rounded">
      <Image src={hero} width={400} alt=''></Image>
    </div>
  </div>
   </>
  )
}

export default Main
