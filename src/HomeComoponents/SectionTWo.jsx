import React from "react";
import find from '../assets/FindaPetHero.png'
import { Link } from "react-router-dom";
import hand from '../assets/handdog.png'
const SectionTWo = () => {
  return (
    <div className="mt-36 lg:flex container mx-auto items-center">
      <div data-aos="fade-right" className="px-16 ">
        <h2 className=" text-4xl md:text-5xl lg:text-7xl font-samu">How adoption works</h2>
        <img src={hand} alt="" />
        <p className="mb-8 mt-5 lg:text-3xl font-semibold text-gray-500">
          Giving an animal in need a loving home is a wonderful thing to do.
          We’ll walk you through the <br /> process, from finding the right match to
          bringing your newest family member home, so you can both start a great
          life together.
        </p>
       
      </div>
      {/* _________ */}
      <div data-aos="fade-left" className="px-16 flex">
        <img src={find} alt="" />
       
      </div>
   
    </div>
  );
};

export default SectionTWo;
