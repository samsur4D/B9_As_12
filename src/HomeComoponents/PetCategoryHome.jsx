import React from 'react';
import { Link } from 'react-router-dom';

const PetCategoryHome = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2  mt-20'>
           <Link to="/cats">
           <div className='relative'>
                <img src="https://i.ibb.co/dK38y8p/jack-dong-y-Joz-LVBx-NA0-unsplash.jpg" alt="" />
                <div className='absolute inset-0 flex justify-center items-center'>
                    <p className='text-white text-7xl lg:text-9xl font-samu font-bold'>Cats</p>
                </div>
            </div>
           </Link>
           <Link to="/dogs"> <div className='relative'>
                <img src="https://i.ibb.co/qxRzwVN/karsten-winegeart-BJaq-Pa-H6-AGQ-unsplash.jpg" alt="" />
                <div className=' absolute inset-0 flex justify-center items-center'>
                    <p className='text-white text-7xl lg:text-9xl font-samu font-bold'>Dogs</p>
                </div>
            </div></Link>
        </div>
    );
};

export default PetCategoryHome;
