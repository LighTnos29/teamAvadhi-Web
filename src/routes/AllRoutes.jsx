import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sponsors from '../pages/Sponsors'
import Contact from '../pages/Contact'
import Home from "../pages/Home"
import Events from "../pages/Events"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Register from "../pages/Registration"

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/events" element={<Events />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}

export default AllRoutes