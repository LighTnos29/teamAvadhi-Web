import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_8hmscro', 'template_15dnzfl', form.current, {
          publicKey: 'PmxjXETZdjK-nqiM_',
        })
        .then(
          () => {
            alert("Your query has been recorded , we will get back to you.")
            // window.location.href = '/'
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <div className='w-full h-[700px] bg-zinc-950 text-white flex justify-center font-[Montserrat]'>
        <img src="" alt="" />
      <form ref={form} onSubmit={sendEmail}>
        <div className='grid grid-cols-1 lg:w-[600px] w-full lg:mt-10 md:border-2 border-white rounded-xl p-20'>
        <h1 className='text-5xl text-center mb-10'>Contact Us</h1>
        <label className='text-xl mb-2'>Name</label>
        <input type="text" name="from_name" className='bg-transparent border-2 p-1 border-white rounded-sm outline-none mb-5' />
        <label className='text-xl mb-2'>Email</label>
        <input type="email" name="user_email"className='bg-transparent border-2 p-1 border-white rounded-sm outline-none mb-5'/>
        <label className='text-xl mb-2'>Message</label>
        <textarea name="message" className='bg-transparent border-2 p-1 border-white rounded-sm outline-none mb-5' />
        <input type="submit" value="Send" className='py-2 px-6 border-2 border-white rounded-md bg-transparent hover:bg-emerald-500'  />
        </div>
  
      </form>
      </div>
    );
  };


export default Contact