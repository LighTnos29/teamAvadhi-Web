import React from 'react';
import Logo from '../assets/images/logo.png'
import Location from '../assets/images/Location.svg'
import Telephone from '../assets/images/Telephone.svg'
import Mail from '../assets/images/Mail.svg'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-white pt-28 md:h-[70vh] h-[90vh] md:pl-[20vh] pb-[100vh] md:pb-0 bg-zinc-950'>
      <div className='mb-10 md:mb-0 flex'>
        <img src={Logo} alt="logo" className='h-20 w-20 m-6' />
        <div className='m-2'>
          <p className='mt-4 text-2xl font-bold'>Team Avadhi</p>
          <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className=' flex justify-center items-center w-full'>

          </div>
          
          <p className='text-lg font-bold mt-10'>Our Socials</p>
          <div className="socials flex gap-4 mt-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="facebook" className='w-6 h-6' />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="insta" className='w-6 h-6' />
            <img src="https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg" alt="X-logo" className='w-6 h-6 rounded-md' />
            
          </div>
        </div>

      </div>

      {/* Column 2 */}
      <div className="lg:ml-16 p-10 pt-0  text-wrap">
        <div className='m-0 p-0 mt-10 flex text-lg'>
          <div className='h-10 w-10 absolute rounded-full'></div>
          <img src={Location} alt="Location-icon" className='h-10 w-10 m-2' />
          <p className='ml-4  mt-1 max-w-[70vh]'>334, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
        </div>

        <div className='m-0 p-0 mt-10 flex text-lg'>
          <div className=' h-10 w-10 absolute rounded-full'></div>
          <img src={Telephone} alt="Location-icon" className='h-10 w-10 m-2' />
          <p className='ml-4  mt-3 max-w-44'>+91 626347384934</p>
        </div>

        <div className='m-0 p-0 mt-10 flex text-lg'>
          <div className=' h-10 w-10 absolute rounded-full '></div>
          <img src={Mail} alt="Location-icon" className='h-10 w-10 m-2' />
          <p className='ml-4  mt-3 max-w-44'>xyz@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
