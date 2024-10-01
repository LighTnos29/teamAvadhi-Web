import React from "react";
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="bg-zinc-950 h-[2200px] lg:h-[700px] w-full text-white text-wrap text p-20 lg:pl-36 lg:pr-36 text-xl tracking-tighter">
      <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="lg:text-6xl text-3xl font-bold text-center pb-10 trac">
          About us
        </h1>
        <p className="text-center">
          <span className="lg:text-2xl text-xl font-semibold">TEAM AVADHI</span>{" "}
          , Rocketry Club of the Department of Aerospace Engineering, is
          involved in designing, building, and launching high-power rockets for
          various competitions, such as those conducted by the Experimental
          Sounding Rocket Association (ESRA) and Spaceport America Cup (SAC).
        </p>

        <p className="mt-10 text-center">
          <span className="lg:text-2xl text-xl font-semibold">Under</span> the
          mentorship of Dr. Allamaprabhu C Y, Team AVADHI fosters a
          collaborative and hands-on learning environment, inspiring students to
          push the boundaries of aerospace engineering and contribute to the
          advancement of space exploration. In addition to technical skills, the
          team members develop skills in project management,] teamwork, and
          leadership preparing them for future careers in the aerospace
          industry.
        </p>

        <p className="mt-10 text-center">
          <span className="lg:text-2xl text-xl font-semibold">Team AVADHI</span>{" "}
          has represented the Department in INAC (Industry and Academic ) 2.0
          held at School of Sciences, JAIN (Deemed-to-be University) on 19-21
          March 2024 It is currently participating in IN-SPACe Model Rocketry
          India Student Competition and IN-SPACe CANSAT India Student
          Competition, organized by Astronautical Society of India in
          association with ISRO and will represent the university at national
          level. These competitions aim to provide Undergraduate Student teams a
          realistic experience in design, development & launch an amateur rocket
          and CAN sized satellite that meets a specified set of mission and
          performance requirements. Team AVADHI is working on the design,
          development and testing of propulsion systems, avionics, structures,
          recovery systems and payload. They utilize advanced simulation tools,
          materials testing, and iterative prototyping to optimize their rocket
          designs for performance and safety.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
