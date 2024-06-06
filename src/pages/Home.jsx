import React from "react";
import Slider from "../components/Slider";
import SectionTWo from "../HomeComoponents/SectionTWo";
import Three from "../HomeComoponents/Three";
import Four from "../HomeComoponents/Four";
import Five from "../HomeComoponents/Five";
import Six from "../HomeComoponents/Six";
import Seven from "../HomeComoponents/Seven";
import Eight from "../HomeComoponents/Eight";
import Dig from "../HomeComoponents/Dig";
import AllDOg from "../assets/Dog-pets-cover-864w.webp";
import Viedo from "../HomeComoponents/Viedo";
import Viedo1 from "../HomeComoponents/Viedo1";
import { Link } from "react-router-dom";
import Action from "../HomeComoponents/Action";
import Cute from "../HomeComoponents/Cute";
import donate from "../assets/donateeee.png";
import PetCategoryHome from "../HomeComoponents/PetCategoryHome";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Slider></Slider>
      <Viedo1></Viedo1>
      {/* ------------------------------------------------ */}
    
      {/* ------------------------------------------------ */}
      <Link className="flex justify-center">
        {" "}
        <button className="mt-5 px-6 py-3 font-samu bg-orange-500 text-white text-lg lg:text-2xl font-semibold rounded hover:bg-orange-700 transition duration-300">
          Donate Now
        </button>{" "}
      </Link>

      <SectionTWo></SectionTWo>

      <Link className="flex items-center justify-center">
        {" "}
        <button className="bg-orange-600 flex items-center justify-center px-5 py-3 rounded-lg font-samu font-semibold">
          Our Adoption Process
        </button>
      </Link>

      <Cute></Cute>
      <div>
        <h1 className="font-samu font-bold text-5xl text-center">
          Pet Category Section
        </h1>
        <p className="font-samu font-semibold text-gray-500 mt-5 text-xl text-center">
          Explore our furry of the companions in the pet category! From playful
          dogs to curious cats, our selection <br /> features the most adorable
          companions. Please note, at the moment, we exclusively offer{" "}
          <p data-aos="flip-up" className="mb-2">
            <span className="text-6xl text-orange-600">cats</span> and{" "}
            <span className="text-6xl text-[#009688]"> dogs</span>
          </p>{" "}
          for adoption. Find your new best friend today!"
        </p>
      </div>
      <PetCategoryHome></PetCategoryHome>
      <Action></Action>
      {/* <AllDOg></AllDOg> */}
      <Three></Three>
      <Four></Four>
      <Five></Five>
      <Six></Six>
      <Seven></Seven>
      <Eight></Eight>
      <div className="flex-col  items-center mt-24">
        <div data-aos="fade-right" className="flex-col container mx-auto">
          <h1 className="text-6xl lg:text-9xl font-bold lg:ml-96 font-samu text-gray-400">
            Save
          </h1>
          <h1 className="text-6xl lg:text-9xl font-bold lg:ml-96 font-samu text-gray-400">
            Them All
          </h1>
        </div>
        <div data-aos="fade-left">
          <img className="w-[1500px] rounded-full mr-24" src={AllDOg} alt="" />
          <p className="text-sm lg:text-4xl font-bold ml-5 lg:ml-16 font-samu text-gray-500 container mx-auto">
            {" "}
            "Dogs are not our whole life, but they make <br /> our lives whole."
            – Roger Caras{" "}
          </p>
        </div>
      </div>
      <Dig></Dig>
    </div>
  );
};

export default Home;
