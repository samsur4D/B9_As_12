import React from 'react';
import vdo from '../assets/mixkit-sleepy-kitten-watching-a-toy-behind-the-camera-45406-hd-ready.mp4'
import { Link } from 'react-router-dom';
import dualdog from '../assets/dualdog.jpg'

const Viedo1 = () => {
    return (
        <div>
              <div className="video-container">
        <video autoPlay loop muted>
          <source src={vdo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content  py-10 px-10  ">
            
            
     <div className='bg-black bg-opacity-30 rounded-xl '>
     <h1 className=' lg:text-5xl mt-96 font-samu  text-center'>Every Paw Deserves a Loving Home. Donate Today.</h1>
     <Link> <button className="bg-orange-600 mt-5 mb-5  px-10 py-8 rounded-lg font-samu font-semibold">---DONATE---</button></Link>
     </div>
        </div>
      </div>
        </div>
    );
};

export default Viedo1;