import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { IoLogoOctocat } from "react-icons/io";
import { PiDogBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const PetListing = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("http://localhost:5000/pet")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  console.log(pets);
  const filteredPets = pets.filter((pet) => {
    return (
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "" || pet.status.toLowerCase() === category.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen">
      <div className="petlistbanner hero bg-fixed h-[650px] ">
        <div className="hero-overlay bg-black bg-opacity-30"></div>
        <div className="hero-content text-center bg-black opacity-60 px-10 py-10 rounded-2xl text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl w-full font-samu font-bold">
              Pet Category
            </h1>
            <div className="flex justify-center space-x-4">
              <input
                type="search"
                placeholder="Search by dog ​​and cat breed names"
                className="input input-bordered input-info bg-black w-full max-w-3xl mt-5 mb-5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="select select-bordered select-info bg-black w-full max-w-xs mt-5 mb-5"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
            <p className="mb-5 text-2xl font-bold">
              Search by dog ​​and cat{" "}
              <span className="text-orange-500 text-5xl">Breed names</span>
              <p className="text-xl mt-3">
                If you want, you can see the names of dog and cat breeds from
                below
              </p>
            </p>
          </div>
        </div>
      </div>
      <Marquee speed={150} className="mb-24">
        <p className="font-bold flex font-samu bg-[#fab1a0] py-5 text-4xl">
          <PiDogBold className="text-7xl" />
          Dogs Breed: Golden Retriever, German Shepherd Mix, Labrador Retriever,
          Australian Shepherd Mix, Beagle, Cocker Spaniel, Border Collie, Shih
          Tzu, Boxer, Rottweiler, Australian Shepherd ____
          <IoLogoOctocat className="text-7xl" /> Cats Breed: Domestic Shorthair,
          Siamese, Maine Coon, Persian, Ragdoll, Siberian, Bengal, Tabby__
        </p>
      </Marquee>

      <div className="grid gap-5 px-4 mb-20 h-full grid-cols-1 lg:grid-cols-3">
        {filteredPets.map((pet) => (
          <div
            key={pet._id}
            className="card lg:card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-[650px] h-[420px]"
                src={pet.image}
                alt="Album"
              />
            </figure>
            <div className="w-[550px] h-[420px] flex flex-col  border border-[#2c2c54] px-3 bg-[#dfe6e9] py-16">
            <div className="flex-1">
            <h2 className="card-title mb-1 text-sm font-bold font-samu">
                Name: {pet.name}
              </h2>
              <h2 className="text-sm font-bold mb-3 font-samu">
                Age: {pet.age}
              </h2>
              <h2 className="text-sm font-bold mb-3 font-samu">
                Breed: {pet.breed}
              </h2>
              <h2 className="text-sm font-bold mb-3 font-samu">
                Location: {pet.location}
              </h2>
              <h2 className="text-sm font-bold mb-3 font-samu">
                Vaccine: {pet.vaccine}Vaccinated
              </h2>
              <h2 className="text-sm font-bold mb-3 font-samu">
                Date: {pet.adddate}
              </h2>
            </div>

              <div className="card-actions  flex justify-between">
                <button
                  className={`btn btn-primary ${
                    pet.adopted ? "bg-yellow-700" : "bg-green-700"
                  }`}
                >
                  {pet.adopted ? "Not AvailAble" : "Adopted"}
                </button>
                <NavLink to={`/details/${pet._id}`}>
                  {" "}
                  <button className="btn btn-primary">View Details</button>{" "}
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetListing;

{
  /* <button className="btn btn-primary bg-green-700">Adopted</button>
<button className="btn btn-primary bg-yellow-700">Available</button> */
}
