import React from 'react';
import bilai from '../assets/WERUVA-WEBSITE-CORE-VALUES-V1R2_1.webp'
import { motion } from 'framer-motion'
import { fadeIn } from '../HomeComoponents/variants'

const Cute = () => {
  return (
    <motion.div 
       
    variants={fadeIn("up" , 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false , amount:0.7}}
    
    className=' grid grid-cols-1 lg:grid-cols-3 mt-36 mb-32  gap-3 max-w-[1500px] mx-auto '>
       <div className='div1 h-96 w-full  '>
           <div className='div1inner h-full w-full bg-[#273c75] opacity-80'>
        <div className=''>
        <h1 className='text-white   text-3xl lg:text-4xl font-semibold font-samu flex items-center justify-center'>Cats and Dogs are carnivores  </h1>
          <h1 className='text-white text-3xl lg:text-4xl font-semibold font-samu flex items-center justify-center'>which means they need meat At  WERUVA , we use</h1>
          <h1 className='text-white text-3xl lg:text-4xl font-semibold font-samu flex items-center justify-center'>the highest quality boneless and skinless proteins</h1>
        </div>
           </div>
       </div>
       {/* ----------------------------------------------- */}
       <div className='div2 h-96 w-full  '>
           <div className='div2inner h-full w-full bg-[#ee5253] opacity-80'>
        <div className=''>
        <h1 className='text-white   text-3xl lg:text-4xl font-semibold font-samu flex items-center justify-center'>Cats and Dogs are carnivores  </h1>
          <h1 className='text-white text-3xl lg:text-4xl font-semibold font-samu flex items-center justify-center'>which means they need meat At  WERUVA , we use</h1>
          <h1 className='text-white text-3xl lg:text-4xl font-semibold font-samu flex items-center justify-center'>the highest quality boneless and skinless proteins</h1>
        </div>
           </div>
       </div>
       {/* ----------------------------------------------- */}
       <div className='div3 h-96 w-full  '>
           <div className='div3inner h-full w-full bg-[#ffa502] opacity-90'>
        <div className=''>
        <h1 className='text-white   text-3xl lg:text-4xl font-semibold font-samu flex items-center justify-center'>Cats and Dogs are carnivores  </h1>
          <h1 className='text-white text-3xl lg:text-4xl font-semibold font-samu flex items-center justify-center'>which means they need meat At  WERUVA , we use</h1>
          <h1 className='text-white text-3xl lg:text-4xl font-semibold font-samu flex items-center justify-center'>the highest quality boneless and skinless proteins</h1>
        </div>
           </div>
       </div>
    </motion.div>
  );
};

export default Cute;