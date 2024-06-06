import React from "react";
import vdo from "../assets/mixkit-sleepy-kitten-watching-a-toy-behind-the-camera-45406-hd-ready.mp4";
import vdo2 from "../assets/31936-360.mp4";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Viedo1 = () => {
  return (
    <div className="relative">
      <div className="video-container">
        <video className="w-full" autoPlay loop muted>
          <source src={vdo} type="video/mp4" />
        </video>
        <div className="absolute  inset-0 flex flex-col items-center justify-center">
          <span style={{ color: 'white', fontWeight: 'bold' }} className="text-white text-3xl lg:text-8xl font-bold font-samu h-full w-full bg-black bg-opacity-20 px-3 lg:px-4 py-5 rounded">
          <br />
          <Typewriter
            words={['" Every Paw Deserves a Loving Home. Donate Today and Save them All "']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            
            deleteSpeed={150}
            delaySpeed={1000}
            
          />
          
         
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default Viedo1;

