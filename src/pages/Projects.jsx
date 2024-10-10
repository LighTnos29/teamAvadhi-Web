import React from "react";
import projectItems from "../constants/projectItems";
import { div } from "framer-motion/client";

const Projects = () => {
  return (
    <div className="bg-zinc-950 h-full lg:h-full w-full text-white text-wrap text p-10 text-xl tracking-tighter">
      <div className="Upcoming-events pb-10 pt-10">
        <h1 className="lg:text-6xl text-3xl font-bold text-center pb-10 tracking-tighter">
          Upcoming Events
        </h1>
        <div className='h-[300px] w-full items-center flex justify-center bg-zinc-950 text-white text-3xl lg:text-4xl text-center text-wrap tracking-tighter font-semibold'>Coming Soon....</div>
      </div>
      <div className="Previous-events">
        <h1 className="lg:text-6xl text-3xl font-bold text-center pb-10 tracking-tighter">
          Previous Events
        </h1>
        <div className="events">
          {projectItems.map((item, index) => (
            <div className="event text-center mt-10 " key={index}>
              <h1 className="lg:text-3xl text-3xl font-bold pb-10 tracking-tighter">
                {item.title}
              </h1>
              <div className="img-div flex justify-center">
                <img
                  src="https://revolutionized.com/wp-content/uploads/sites/5/2022/05/rocket-launch-at-sunset.jpg"
                  alt=""
                  className="h-64 w-72 mb-10 md:h-[300px] md:w-[500px]"
                />
              </div>
              <p className="">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
