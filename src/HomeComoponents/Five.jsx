import React from 'react';
import { FaClinicMedical } from 'react-icons/fa';

const Five = () => {
    return (
        <div
      
        className="finaly-hw mt-32 hero bg-fixed  h-[550px] ">
        <div className="hero-overlay bg-black  bg-opacity-30"></div>
        <div className="hero-content text-center bg-black opacity-60 px-10 py-10 rounded-2xl text-neutral-content">
        <div data-aos="zoom-in-down" className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-samu font-bold">Paw Pixie</h1>
       <div className='flex items-center justify-center'>   <h1 className="mb-5 text-2xl text-orange-600 font-samu font-bold">Standing With Shelters </h1><FaClinicMedical className='text-9xl'/></div>
          <p className="mb-5 text-xl font-semibold">
          We work to save more lives faster by providing shelters and rescue groups with ways to collaborate and connect so they can increase the number of animals they can rehome in their communities.
          </p>
        </div>
        </div>
      </div>
    );
};

export default Five;