import React from 'react'
import {Link} from 'react-router-dom'
import navItems from "../constants/navItems"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/images/logo.svg"
import {motion} from "framer-motion"


const navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 backround-backdrop-blur bg-zinc-950 text-[#dcdcdc] font-[Montserrat]">
    <div className="container px-4 mx-auto relative lg:text-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-[100px] w-[200px] mr-2" src={Logo} alt="Logo" />
        </div>
        <ul className="hidden lg:flex ml-14 space-x-12 font-semibold tracking-tighter">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <motion.div className="rounded-b-2xl fixed right-0 z-20 bg-white-900 w-full p-12 flex flex-col justify-center items-center bg-zinc-950 bg-opacity-70 lg:hidden"
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ type: "spring", stiffness: 60, damping: 15, duration: 0.5 }}
        >
          <ul>
            {navItems.map((item, index) => (
              <motion.li key={index} className="py-4 text-xl font-semibold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <a href={item.path}>{item.name}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  </nav>
  )
}

export default navbar