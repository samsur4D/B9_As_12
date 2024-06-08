import React, { useEffect } from 'react';

import slideone from '../assets/slide1.webp'
import slidetwo from '../assets/silde2.webp'
import slidethree from '../assets/slide3.webp'
import slidefour from '../assets/slide4.webp'

const SlideNew = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        fetch('http://localhost:5000/pet')
            .then(res => res.json())
            .then(data => {
                const cats = data.filter(pet => pet.status === 'Cat');
                setPets(cats);
            });
    }, []);

    return (
        <header>
        <header className=" contain   relative rounded-md">
        <div className="carousel h-[650px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={slideone} className="w-full rounded-lg object-cover" />
              <div className='bg-black'>
             <h1 className='text-9xl font-bold text-white'>Love Heals</h1>
             <p className='text-white mt-10'>Physical Health Benefits
Improved Cardiovascular Health:

Pet ownership, particularly dog ownership, has been linked to lower blood pressure, cholesterol levels, and triglyceride levels, which can contribute to better heart health.
Regular walks with dogs encourage physical activity, which is beneficial for overall health.
Stress Reduction:

Interacting with pets can reduce stress levels by lowering cortisol (the stress hormone) and increasing oxytocin (the bonding hormone), promoting a sense of calm and relaxation.
Pain Management:

Pet therapy, or animal-assisted therapy, has been used to help manage pain in patients by providing comfort and distraction from pain.</p>
<p className='text-white mt-10'>Emotional and Mental Health Benefits
Reduction in Anxiety and Depression:

Pets provide unconditional love and companionship, which can help reduce feelings of loneliness, anxiety, and depression.
The routine and responsibility of caring for a pet can provide a sense of purpose and structure, which can be particularly beneficial for those struggling with mental health issues.
Increased Social Interaction:

Pets, especially dogs, can facilitate social interactions and help their owners meet new people, reducing feelings of isolation.</p>
             
          </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item flex relative w-full">
              <img src={slidetwo} className="w-full rounded-lg object-cover" />
          <div className='bg-black'>
             <h1 className='text-9xl font-bold text-white'>Low Cost</h1>
             <p className='text-white mt-10'>Enthusiastically productivate distributed manufactured products without extensible opportunities.  Uniquely coordinate go forward interfaces without quality infrastructures. Rapidiously. Intrinsicly streamline strategic infomediaries after client-centric communities. Assertively evisculate superior best practices rather than goal-oriented collaboration and.</p>

          </div>
              <div>
              
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
              <img src={slidethree} className="w-full rounded-lg object-cover" />
              <div className='bg-black'>
             <h1 className='text-9xl font-bold text-white'>Need Home</h1>
             <p className='text-white mt-10'>Adoption: Encouraging adoption from shelters and rescue organizations rather than purchasing from breeders or pet stores can help reduce the number of homeless pets. <br />

Spaying and Neutering: Promoting and providing affordable spay/neuter services can help control the pet population and prevent unwanted litters. <br />

Fostering: Fostering pets can provide temporary homes for animals until they find permanent families, alleviating the burden on shelters.

</p>
             
          </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full rounded-lg">
              <img src={slidefour} className="w-full object-cover" />
              <div className='bg-black'>
             <h1 className='text-9xl font-bold text-white'>Pet Food Donations:</h1>
             <p className='text-white mt-10'>Donate to Shelters: Many animal shelters and rescue organizations rely on donations to feed the pets in their care. Donating pet food or funds to these organizations can make a big difference. <br />
Food Drives: Organize or participate in pet food drives to collect food for pets in need. These drives can be held in communities, schools, or workplaces. <br />
Many pet food manufacturers and retailers have programs or partnerships with shelters and rescue organizations to provide food for pets. Purchasing from these brands or supporting their initiatives can help.
</p>
             
          </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div> 
        </header> 
        
         
     </header>
   
    );
};

export default SlideNew;
