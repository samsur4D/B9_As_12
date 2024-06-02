import React from 'react';
import viedoBg from '../assets/mixkit-female-runner-walks-her-dog-3123-hd-ready.mp4'
const Viedo = () => {
    return (
        <div className="video-container">
        <video autoPlay loop muted>
          <source src={viedoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content  py-10 px-10  ">
     <div className='bg-black bg-opacity-30 rounded-xl '>
     <h1 className='text-5xl mt-96 font-samu  text-center'>The love of a pet is a blessing that enriches our lives in countless ways.</h1>
          <p className='text-3xl font-semibold mt-4'>— Anatole France</p>
     </div>
        </div>
      </div>
    );
};

export default Viedo;
