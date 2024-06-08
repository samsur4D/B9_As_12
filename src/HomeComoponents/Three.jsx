import React from "react";
import { NavLink } from "react-router-dom";

const Three = () => {
  return (
    <div className=" hero min-h-screen mt-32  p-5">
    <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img src='https://i.ibb.co/d2jpwLk/alan-king-KZv7w34tlu-A-unsplash.webp' className="hidden lg:block w-3/4 rounded-lg shadow-2xl" />
        <img src='https://i.ibb.co/xMFN5ST/steffi-pereira-Hl-I03b-NHh-BI-unsplash.webp' className="hidden lg:block w-[360px] mt-20 h-3/4 border-8 border-gray-300  absolute right-4 top-1/2 bottom-3 rounded-lg shadow-2xl" />
        </div>
      <div data-aos="fade-left" className='lg:w-1/2'>
        <h1 className="text-3xl lg:text-4xl font-samu text-orange-600 font-bold mb-5">About Us</h1>
        <div className='mt-7 mb-5'>
        <h1 className="text-4xl  lg:text-5xl font-samu  font-bold">We are qualified</h1>
        <h1 className="text-4xl  lg:text-5xl font-samu  font-bold">& of experience</h1>
        <h1 className="text-4xl  lg:text-5xl font-samu  font-bold">in this field</h1>
        </div>
       <div className='mt-5 mb-5'>
       <p>We’re saving more animals now than at any point in our history, but our work isn’t done until every dog and cat gets the chance to know care and companionship … in a safe and loving home. </p>
       
       </div>
        <NavLink to='/about'><button className="bg-orange-600 px-5 py-3 rounded-lg font-semibold">Explore More</button></NavLink>
      </div>
    
    </div>
  </div>
  );
};

export default Three;
