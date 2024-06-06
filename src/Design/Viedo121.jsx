import React, { useState, useRef, useEffect } from "react";
import video from "../assets/PetSmartCharities_60_Anthem_16x9_US v2.mp4";
import { FaGooglePlay, FaPauseCircle } from "react-icons/fa";
import { BiSolidDownArrowSquare, BiSolidLeftArrowSquare } from "react-icons/bi";

const Viedo121 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center">
      {!isPlaying && (
        <div className="campa bg-red">
          <section className="mt-32 bg-black bg-opacity-30">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
              <h1 className="text-md text-white font-samu font-semibold leading-none">
                CELEBRATING A MILESTONE
              </h1>
              <p className="px-8 text-white mt-8 mb-12 text-5xl font-samu font-bold">
                10 Million Pets Adopted
              </p>
              <div className="flex-col text-white flex-wrap justify-center">
                <button className="px-8 py-3 m-2 text-xl font-bold rounded font-samu text-white">
                  Our Campaigns
                </button>
                <BiSolidDownArrowSquare className="ml-20 text-9xl animate-bounce" />
              </div>
            </div>
          </section>
        </div>
      )}
      <div className="video-container w-full h-full">
        <div>
         
        </div>
        <video className="w-full h-full" ref={videoRef} loop>
          <source className="w-full h-full" src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="content h-full py-10 px-10">
          <div className="bg-transparent rounded-xl">
            <button onClick={toggleVideo} className="play-button mt-80">
              {isPlaying ? (
                <FaPauseCircle className="text-7xl text-black text-opacity-60" />
              ) : (
                <FaGooglePlay className="text-7xl text-black text-opacity-60" />
              )}
            </button>
          </div>
        </div>
        {/* <div>
          <h1 className="mt-32 ml-20">Celebration</h1>
          <h1 className="mt-32 ml-20">Viedo</h1>
        </div> */}
      </div>
      {/* {!isPlaying && (
        <div className="rampa">
          <section className="mt-32 bg-black bg-opacity-30">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
              <h1 className="text-md text-white font-samu font-semibold leading-none">
                CELEBRATING A MILESTONE
              </h1>
              <p className="px-8 text-white mt-8 mb-12 text-5xl font-samu font-bold">
                Enjoy our Viedo
              </p>
              <div className="flex-col text-white flex-wrap justify-center">
                <button className="px-8 py-3 m-2 text-xl font-bold rounded font-samu text-white">
                  On click here
                </button>
                <BiSolidLeftArrowSquare className="ml-20 text-9xl animate-bounce" />
              </div>
            </div>
          </section>
        </div>
      )} */}
    </div>
  );
};

export default Viedo121;
