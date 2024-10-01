import React from 'react'
import {Link} from 'react-router-dom'
import navItems from "../constants/navItems"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/images/logo.svg"


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
        <div className="fixed right-0 z-20 bg-white-900 w-full p-12 flex flex-col justify-center items-center backdrop-blur-xl lg:hidden">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4 text-xl font-semibold tracking-tighter">
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </nav>
  )
}

export default navbar