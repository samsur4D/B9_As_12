import React from "react";
import black1 from "../assets/black1.jpg";
import black2 from "../assets/balck2.jpg";
import black3 from "../assets/balck3.jpg";
import dualdog from "../assets/dualdog.jpg";
import dualdog1 from "../assets/alexis-chloe-dD75iU5UAU4-unsplash.jpg";
import dualdog2 from "../assets/billura.jfif";
import dualdog3 from "../assets/fulkutta.jpg";
import dualdog4 from "../assets/kala.jpg";
import fresh from "../assets/artem-beliaikin-zfzt6yz0DE8-unsplash.jpg";
import fresh2 from "../assets/dot_lee_and_her_raccoon_on_the_beach_in_inspiring_stories_of_animals_helping_humans.jpg.webp";
import dhar1 from "../assets/Rectangle_373__1_.webp";
import dhar2 from "../assets/Rectangle_373__2_.webp";
import dhar3 from "../assets/adopt-card-3.webp";
import { Link } from "react-router-dom";
import arow from '../assets/arrow.svg'
import { TbArrowBigRightLines } from "react-icons/tb";
import { motion } from 'framer-motion'
import { fadeIn } from '../HomeComoponents/variants'

const Action = () => {
  return (
    <div className="extra-section bg-fixed">
      <div className="flex flex-col justify-between gap-72 px-5 py-56">
        {/* -------------------------------- */}
        <div data-aos="fade-right" className="">
          <h1 className="text-xl  lg:text-6xl text-gray-400 font-bold font-samu">
            Keeping and regularly playing with pets can significantly improve
            various aspects of health.
          </h1>
          <h1 className="text-xl lg:text-6xl mt-20 text-orange-500 font-bold font-samu">
            Here are some benefits:
          </h1>
        </div>
        {/* ------------------------------- */}
        <div className="grid grid-cols-1 items-center justify-center gap-10 px-16 lg:grid-cols-2  mr-10">
          <img className="lg:w-[1200px]" src={fresh} alt="" />
          <div>
            <h1 data-aos="fade-left" className="text-gray-400 text-3xl lg:text-5xl mt-12 font-samu">
              1.Reduced Stress and Anxiety
            </h1>
            <h1 data-aos="fade-left" className="text-gray-400 text-3xl lg:text-5xl mt-12 font-samu">
              2.Improved Mood
            </h1>
            <h1 data-aos="fade-left" className="text-gray-400 text-3xl lg:text-5xl mt-12 font-samu">
              3.Increased Physical Activity
            </h1>
            <h1 data-aos="fade-left" className="text-gray-400 text-3xl lg:text-5xl mt-12 font-samu">
              4.Lower Blood Pressure
            </h1>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className="grid grid-cols-1  items-center justify-center gap-10 px-16 lg:grid-cols-2  mr-10">
          <div>
            <h1 data-aos="fade-right" className="text-gray-400 text-3xl lg:text-5xl mt-12 font-samu">
              5.Boosted Immune System
            </h1>
            <h1 data-aos="fade-right" className="text-gray-400 text-3xl lg:text-5xl mt-12 font-samu">
              6.Improved Mental Health
            </h1>
            <h1 data-aos="fade-right" className="text-gray-400 text-3xl lg:text-5xl mt-12 font-samu">
              7.Increased Sense of Purpose
            </h1>
            <h1 data-aos="fade-right" className="text-gray-400 text-3xl lg:text-5xl mt-12 font-samu">
              8.Enhanced Social Interaction
            </h1>
          </div>
          <img className="w-[1200px]" src={fresh2} alt="" />
        </div>
        {/* ------------------------------- */}
        <motion.div
           
           variants={fadeIn("up" , 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false , amount:0.7}}
         
        className="grid grid-cols-1 flex gap-5 px-12 lg:grid-cols-3">
          <div className="max-w-lg gap-5 rounded-md shadow-md ">
            <img
              src={dhar1}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 "
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl text-gray-300 font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-gray-300">
                  Adopt a pet. Grow your family. Fill your home with love. With
                  Petco Love pet adoption, it’s easy to find your match.
                </p>
              </div>
              <button
                type="button"
                className="text-gray-300 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  dark:text-gray-50"
              >
                Read more
              </button>
            </div>
          </div>
          <div className="max-w-lg gap-5 mt-12 rounded-md shadow-md ">
            <h2 className="text-sm ml-16 lg:ml-0 lg:text-xl text-gray-300  font-samu mb-12">
              Love is always in the air somewhere
            </h2>
            <h1 className=" text-3xl lg:text-5xl text-orange-500 ml-16 lg:ml-0 font-samu mb-12">
              We bring pets+ <br /> people together.
            </h1>
            <img
              src={dhar2}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 "
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl text-gray-300 font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-gray-300">
                  When a family adopts a pet, everything changes for the better.
                  Check out heartwarming stories of pet adoption told by our
                  community members.
                </p>
              </div>
              <button
                type="button"
                className="text-gray-300 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  dark:text-gray-50"
              >
                Read more
              </button>
            </div>
          </div>
          <div className="max-w-lg gap-5 rounded-md shadow-md ">
            <img
              src={dhar3}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 "
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl text-gray-300 font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-gray-300">
                  Not ready or able to commit to adopting a dog, cat, or other
                  pet? No problem. You can still make a world of difference by
                  fostering a pet temporarily.
                </p>
              </div>
              <button
                type="button"
                className="text-gray-300 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  dark:text-gray-50"
              >
                Read more
              </button>
            </div>
          </div>
        </motion.div>
        {/* ---------------------------- */}
        <div data-aos="zoom-out" className="pureaction mb-20 items-center justify-center flex flex-col">
          <h1 className="text-3xl  lg:text-7xl font-bold font-samu text-gray-300">
            Over 5 MILLION
          </h1>
          <h1 className="text-3xl mt-4 font-bold font-samu text-orange-500">
            HOMELESS PETS NEED YOU
          </h1>
          <h3 className="text-xl text-gray-300 font-bold mt-5">
            We partner with shelters across Bangladesh to help more than 400,000
            pets find homes each year .
          </h3>
          <Link className="flex items-center mt-10 text-white justify-center">
            {" "}
            <button className="bg-orange-600 flex items-center justify-center px-5 py-3 rounded-lg font-samu font-semibold">
              Our Adoption Process
              <TbArrowBigRightLines className="text-3xl text-black ml-4"/>
            </button>
          </Link>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Action;
