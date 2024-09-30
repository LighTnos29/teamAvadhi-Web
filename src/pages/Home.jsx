import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import About from '../components/About'


const Home = () => {
  return (
    <div className="h-full w-full m-0 p-0 font-[Montserrat]">
      <div>
      <HeroSection/>
      <About/>
      </div>
    </div>
  )
}

export default Home