import React from "react";
import cardItems from "../constants/cardItem";

const Card = () => {
  return (
    <div className="card flex flex-col md:flex-row justify-center items-center mt-5 md:gap-x-14 gap-[10vh] font-[Montserrat] tracking-tighter flex-wrap w-full">
      {cardItems.map((item, index) => (
        <div
          className=" md:h-[70vh] h-full flex-col flex border border-white transform transition-transform hover:scale-110"
          key={index}
        >
          <div className=" w-full md:w-[50vh] md:h-[55vh] ">
            <div className="Image">
              <img
                src={item.image}
                alt=""
                className="w-screen object-contain"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-2 p-5 text-center">
              <p className="md:text-2xl text-lg font-thin">{item.name}</p>
              <p className="md:text-xl text-lg font-semibold mt-2 ">
                {item.designation}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
