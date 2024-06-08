import React from "react";
import one from "../assets/CallsStatics_v2 (1).svg";
import two from "../assets/CentersStatics_v2 (1).svg";
import three from "../assets/NewHomeStatics_v2.svg";
import home from "../assets/Homepage-Impact-Map-2024-US.webp";
import abouti from "../assets/abouti.webp";
import bedi from "../assets/bedi.webp";
import bedire from "../assets/IconBubble.svg";
import SlideNew from "../Design/SlideNew";
import shera from '../assets/Hero_ATC_2024_DT_US.webp'

const About = () => {
  return (
    <div>
        <div className="relative">
            <img src={shera} alt="" />
            <div className="absolute top-7 lg:top-32">
                <h1 className="text-xl lg:text-6xl font-bold">Help Pets & Families Stay</h1>
                <h1 className="text-3xl lg:text-9xl font-bold">Together</h1>
                <p className=" mt-5 lg:mt-10 lg:text-4xl">Your Donation helps make veterinary  care more accessbile <br /> and affordable .</p>
            </div>
        </div>
      <div data-aos="zoom-in" className="flex items-center justify-center">
        <img className="flex items-center justify-center" src={home} alt="" />
      </div>
      <div data-aos="fade-left">
        <div className="h-[900px] bg-blue-900  lg:flex">
          <img src={abouti} alt="" />
          <div className=" font-bold mt-20 text-white font-samu">
            <h1 className="text-5xl lg:text-9xl">Let's</h1>
            <h1 className="text-5xl lg:text-9xl">Work</h1>
            <h1 className="text-5xl lg:text-9xl">Together</h1>
            <p className="text-3xl lg:text-4xl mt-32">
              Since 1994 we have supported nonprofits and governmenmt entities
              with over $500 millon in grants fund
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="relative h-[1000px] lg:flex justify-center"
      >
        <div className="bg-[#ffbe76] lg:px-60">
          {" "}
          <img className="w-[650px] h-[700px] mt-32" src={bedire} alt="" />
        </div>
        <div className="absolute top-36 lg:top-44 lg:left-60">
          <h1 className="text-6xl lg:text-8xl font-bold text-red-700">
            Become <br /> A Champion
          </h1>
          <p className="text-black mt-5 text-xl font-bold">
            Our Champions have already changed the lives of millions of pets{" "}
            <br /> in need. Join us to improve the lives of millions more.
          </p>
        </div>
        <img className="w-[800px] " src={bedi} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  items-center justify-center bg-blue-200 px-5 py-10">
        <img className="ml-0 lg:ml-36" src={one} alt="" />
        <img className="ml-0 lg:ml-36" src={two} alt="" />
        <img className="ml-0 lg:ml-36" src={three} alt="" />
      </div>
      <SlideNew></SlideNew>
    </div>
  );
};

export default About;
