import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Dogs = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://server-twelve.vercel.app/pet")
      .then((res) => res.json())
      .then((data) => {
        const dogs = data.filter((pet) => pet.status === "Dog");
        setPets(dogs);
      });
  }, []);
  return (
    <div>
      {/* ------------------------------ */}
      <div className="dogsbanner hero bg-fixed   h-[650px]  mb-24">
        <div className="hero-overlay bg-black  bg-opacity-30"></div>
        <div className="hero-content text-center bg-black opacity-60 px-10 py-10 rounded-2xl text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-9xl w-full font-samu font-bold">Dogs</h1>
            <p className="mb-5">
              "Dogs have a way of finding the people who need them and filling
              an emptiness we didn't ever know we had." – Thom Jones
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------------ */}
      <div className="grid gap-5 px-4 mb-20 h-full   grid-cols-1 lg:grid-cols-3">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="card  lg:card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-[650px] h-[420px]"
                src={pet.image}
                alt="Album"
              />
            </figure>
            <div className="w-[550px] px-3 bg-[#dfe6e9] py-16">
              <h2 className="card-title text-md font-bold font-samu">
                Name : {pet.name}
              </h2>
              <h2 className=" text-md font-bold font-samu">Age : {pet.age}</h2>
              <h2 className=" text-md font-bold font-samu">
                Breed : {pet.breed}
              </h2>
              <h2 className=" text-md font-bold font-samu">
                Location : {pet.location}
              </h2>
              <h2 className=" text-md font-bold font-samu">
                Vaccine : {pet.vaccine}Vaccineted
              </h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
              <NavLink to={`/details/${pet._id}`}> <button className="btn btn-primary">View Details</button></NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ------------------------------ */}
    </div>
  );
};

export default Dogs;
