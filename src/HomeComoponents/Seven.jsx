import React from 'react';
import { FaMedrt } from 'react-icons/fa';

const Seven = () => {
    return (
        <div
      
      className="finaly2-hw hero bg-fixed  h-[550px]  ">
      <div className="hero-overlay bg-black  bg-opacity-30"></div>
      <div className="hero-content text-center bg-black opacity-60 px-10 py-10 rounded-2xl text-neutral-content">
      <div data-aos="zoom-in-down" className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-samu font-bold">Paw Pixie</h1>
          <div className="flex items-center justify-center">
            {" "}
            <h1 className="mb-5 text-2xl text-orange-600 font-samu font-bold">
              Saving Lives{" "}
            </h1>
     
            <FaMedrt className="text-9xl"/>
          </div>
          <p className="mb-5 text-xl font-semibold">
            We ensure second chances to pets at our sanctuary and lifesaving
            centers, even as we expand programs nationwide that keep animals out
            of shelters in the first place.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Seven;