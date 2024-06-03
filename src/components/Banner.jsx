import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center  bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
        
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white lg:text-6xl font-samu">
            {text}
          </h1>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Banner;
