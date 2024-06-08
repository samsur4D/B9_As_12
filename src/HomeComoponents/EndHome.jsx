import React from 'react';

import one from '../assets/0001.webp'
import two from '../assets/0002.webp'
import three from '../assets/0003.webp'
import four from '../assets/0004.webp'
import five from '../assets/0005.webp'
import six from '../assets/0006.webp'
import seven from '../assets/0008.webp'
import eight from '../assets/00008.webp'
import nine from '../assets/00009.webp'
import ten from '../assets/00010.webp'
import tenone from '../assets/000011.webp'
import tentwo from '../assets/000012.webp'
import tenthree from '../assets/000013.webp'





const EndHome = () => {
    return (
        <div className='flex-col items-center justify-center flex gap-3'>
            <div className='flex gap-3'>
            <img src={one}  />
            <img src={two}  />
            <img src={three}  />
            </div>
{/* ---------------------------------------------- */}
            <div className='flex gap-3'>
            <img src={four}  />
            <img src={five}  />
            <img src={six}  />
            </div>
{/* ---------------------------------------------- */}
            <div className='flex gap-3'>
            <img src={seven}  />
            <img src={eight}  />
            <img src={nine}  />
            </div>
{/* ---------------------------------------------- */}
            <div className='flex gap-3'>
            <img src={ten}  />
            <img src={tenone}  />
            </div>
{/* ---------------------------------------------- */}
            <div className='flex gap-3'>
            <img src={tentwo}  />
            <img src={tenthree}  />
            </div>
        </div>
    );
};

export default EndHome;