import React from "react";
import { Link } from "react-router-dom";

const Four = () => {
  return (
    <div className="mt-60">
      <div className="container mx-auto mb-16 ">
        <h1 className="text-5xl lg:text-7xl font-bold mb-10  font-samu">Act for Animals</h1>
        <p className="text-3xl mt-4 mb-4 font-bold text-gray-500">
          We’re saving more animals now than at any point in our history, but
          our work isn’t done until every dog and cat gets the chance to know
          care and companionship … in a safe and loving home.You can use
          PawBoost to alert people in your area, click the link to visit
          PawBoost. Also use For The Love Of Louie located on Facebook, which is
          an awesome resource if you found a lost pet or if you are looking for
          your beloved pet.
        </p>
      </div>
      {/* ------------------------- */}
      <div className="lg:flex gap-24 lg:gap-10 container mx-auto">
        <div>
          <img
            className="relative w-[850px]  h-[900px]"
            // src="https://i.ibb.co/Qd2zxPk/brooke-cagle-Ntm4-C2l-CWx-Q-unsplash.jpg"
            src="https://i.ibb.co/y46df85/act-dashboard2.webp"
            alt=""
          />
          <div className="absolute -mt-80 space-y-6 lg:-mt-16 lg:space-y-6  px-5 py-5 bg-white ml-24  lg:w-[600px] rounded-2xl ">
            <h2 className="text-2xl font-semibold font-samu">Is your community no-kill?</h2>
            <p>
            Adoption campaigns often highlight the benefits of adopting rather than buying pets, emphasizing that adoption saves lives.
            </p>
            <Link><p className="text-blue-700 font-semibold text-md underline mt-3">How's Our Community ? >>> </p></Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
         <div>
         <img
            className="relative mr-20 w-[380px] h-[400px] rounded-xl"
            src="https://i.ibb.co/0sSsHH6/kittens.webp"
            alt=""
          />
            <div className="absolute -mt-16 space-y-6 px-5 py-5 bg-white ml-24  w-[250px] rounded-2xl ">
            <h2 className="text-sm font-semibold font-samu">Join The 2025 Action Team !!</h2>
            <p>
            Many campaigns focus on spaying and neutering pets to prevent overpopulation
            
            </p>
          </div>
         </div>
         <div>
         <img
            className="relative mr-20 w-[380px] h-[400px] rounded-xl"
            src="https://i.ibb.co/tMNnsw3/Sampson-Jessica-Jess9655-square.webp"
            alt=""
          />
            <div className="absolute -mt-16 space-y-6 px-5 py-5 bg-white ml-24  w-[250px] rounded-2xl ">
            <h2 className="text-sm font-semibold font-samu">Join The 2025 Action Team !!</h2>
            <p>
            Many campaigns focus on spaying and neutering pets to prevent overpopulation
            
            </p>
          </div>
         </div>
         <div>
         <img
            className="relative mr-20 w-[380px] h-[400px] rounded-xl"
            src="https://i.ibb.co/LZjZPRm/Animal-Art-Socks3147sak-TN.webp"
            alt=""
          />
            <div className="absolute -mt-16 space-y-6 px-5 py-5 bg-white ml-24  w-[250px] rounded-2xl ">
            <h2 className="text-sm font-semibold font-samu">Join The 2025 Action Team !!</h2>
            <p>
            Many campaigns focus on spaying and neutering pets to prevent overpopulation
            
            </p>
          </div>
         </div>
         <div>
         <img
            className="relative mr-20 w-[380px] h-[400px] rounded-xl"
          
  src="https://i.ibb.co/525DYJ4/Olympus-Shangri-La0628-MW-0-1.webp"
            alt=""
          />
            <div className="absolute -mt-16 space-y-6 px-5 py-5 bg-white ml-24  w-[250px] rounded-2xl ">
            <h2 className="text-sm font-semibold font-samu">Join The 2025 Action Team !!</h2>
            <p>
            Many campaigns focus on spaying and neutering pets to prevent overpopulation
            
            </p>
          </div>
         </div>
        
        </div>
      </div>
      {/* ------------------------- */}
    </div>
  );
};

export default Four;
