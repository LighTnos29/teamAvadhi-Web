import React from "react";
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className="bg-zinc-950 text-white h-[75vh] md:h-[90vh] p-20 md:p-[30vh]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="flex-row justify-center items-center">
                    <h1 className="lg:text-6xl text-4xl font-bold text-center">About us</h1>

                    <p className="lg:text-xl text-lg font-medium mt-10 text-wrap text-center">
                        TEAM AVADHI, Rocketry Club of the Department of Aerospace Engineering, is
                        involved in designing, building, and launching high-power rockets for various
                        competitions, such as those conducted by the Experimental Sounding Rocket Association
                        (ESRA) and Spaceport America Cup (SAC).
                    </p>
                </div>
                <div className="flex justify-center mt-10">
                    <a className="hover:bg-black border border-white hover:text-white rounded-xl py-2 px-6" href="/about">
                        Read More
                    </a>
                </div>
            </motion.div>

        </div>
    );
};

export default About;