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

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Viedo1></Viedo1>

      <SectionTWo></SectionTWo>

      <Link className="flex items-center justify-center">
        {" "}
        <button className="bg-orange-600 flex items-center justify-center px-5 py-3 rounded-lg font-samu font-semibold">
          Our Adoption Process
        </button>
      </Link>

      <Cute></Cute>

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
          <h1 className="text-9xl font-bold lg:ml-96 font-samu text-gray-400">
            Save
          </h1>
          <h1 className="text-9xl font-bold lg:ml-96 font-samu text-gray-400">
            Them All
          </h1>
        </div>
        <div data-aos="fade-left">
          <img className="w-[1500px] rounded-full mr-24" src={AllDOg} alt="" />
          <p className="text-4xl font-bold ml-16 font-samu text-gray-500 container mx-auto">
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
