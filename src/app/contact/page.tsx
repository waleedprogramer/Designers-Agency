import React from 'react'
import Heading from '../components/Heading'
import Image from 'next/image'
import contact from '../images/contact.png'
import Form from '../components/Form'
import Information from '../components/Information'

function Contact() {
  return (
    <>
      <div className="text-center py-5">
        <Heading title="Contact Us" subtitle="Contact us for a personal experience" />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 p-6">
        <Form />
        <div className="flex justify-center lg:pr-24 md:items-center">
          <Image
            src={contact}
            alt="Contact Image"
            className="lg:w-96 md:w-80 w-full  rounded-2xl"
            style={{ border: "10px solid black" }}
          />
        </div>
      </div>

      <div className="text-center py-5">
          <Heading subtitle='Contact Information' title=''/>
        </div>
        <div className='p-6'>
          <Information/>
        </div>
    </>
  )
}

export default Contact;
