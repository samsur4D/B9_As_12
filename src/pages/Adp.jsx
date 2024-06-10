import React from 'react';
import Marquee from 'react-fast-marquee';
import step from '../assets/Steps-to-the-Adoption-Process-scaled-e1682972962371-1024x404.jpg'
import step2 from '../assets/Types-of-Pets-Infographic-1024x1024.png'
import step3 from '../assets/Preparing-Your-Home-for-a-Pet-Visual-1024x768.png'
import lolo from '../assets/1_QCAzLV78jkqOXwDH3-4JJA.webp'
import lolo1 from '../assets/1_s2zc6qexL-F7G-TSYWBrbg.webp'
import lolo4 from '../assets/1579118541-dog-adoption-process.png'
import { NavLink } from 'react-router-dom';
import Viedo121 from '../Design/Viedo121';

const Adp = () => {
    return (
      <div>
          <div className='flex items-center justify-center'>
            {/* --------------------------------------------- */}
        <div className='flex-col items-center justify-center'>
        <img src={step} alt="" />
        <img src={step2} alt="" />
        <img className='' src={step3} alt="" />
        </div>
       

        
            {/* --------------------------------------------- */}

            {/* --------------------------------------------- */}
        </div>
        <div className='flex items-center justify-center'>
            <img src={lolo} alt="" />
            <img src={lolo1} alt="" />
          
        </div>
        <Viedo121></Viedo121>
        <div className='flex items-center justify-center mt-5 mb-10'>
     <NavLink to='/petListing'>   <button className='bg-blue-500 font-bold text-white px-5 py-3 rounded-lg'>seacrh your loving pet and adopt</button></NavLink>
        {/* <button className='bg-blue-500 font-bold text-white px-5 py-3 ml-5 rounded-lg'>Back to Home</button> */}
        </div>
        <div className='flex items-center justify-center mt-5 mb-10'>
        <NavLink to='/'><button className='bg-blue-900 font-bold text-white px-5 py-3 rounded-lg'>Back To Home</button></NavLink>
        {/* <button className='bg-blue-500 font-bold text-white px-5 py-3 ml-5 rounded-lg'>Back to Home</button> */}
        </div>
      </div>
    );
};

export default Adp;