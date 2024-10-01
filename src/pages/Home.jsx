import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import About from "../components/About";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div>
      <div className="h-full w-full m-0 p-0 font-[Montserrat]">
        <HeroSection />
        <About />
      </div>
    </motion.div>
  );
};

export default Home;
