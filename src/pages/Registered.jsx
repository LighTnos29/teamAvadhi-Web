import React from 'react'
import { SiTicktick } from "react-icons/si";

const Registered = () => {
  return (
<div className='h-[650px] w-screen bg-zinc-950 flex justify-center tracking-tighter p-10'>
  <div className='text-center lg:mt-28 mt-20 text-white' >
    <SiTicktick className='h-28 w-28 text-green-400 mx-auto' />
    <h1 className='text-white text-3xl mt-6'>Message Sent Successfully!</h1>
    <p className='text-white mt-2 mb-2 text-xl'>Thank you for reaching out to us! We’ve received your message and will get back to you as soon as possible. We appreciate your interest!</p>
    <a href="/" className='text-blue-500'>Return to Home</a>
  </div>
</div>

  )
}

export default Registered