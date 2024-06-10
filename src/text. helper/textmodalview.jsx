import React, { useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';

const ModalView = ({ donators, closeModal }) => {
  const [donation , setDonation]  = useState([])
  const { user } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic();
  const [camp , setCamp ] = useState([]);
  const  [newRes , setNewres] = useState([]);
  const userEmail = user.email;
  console.log(userEmail);


 useEffect(()=>{
   fetch('https://server-twelve.vercel.app/campaigns')
   .then(res => res.json())
   .then(data =>{
      console.log(data);
      setCamp(data)
   })
 },[])

  const { data: donations = [], refetch } = useQuery({
    queryKey: ["donations"],
    queryFn: async () => {
      const res = await axiosPublic.get("/donations");
      console.log(res.data);
      // const newRes = res.data.filter(item => item.campaignId  === )
      //  console.log(newRes);
       setNewres(newRes)
      return res.data;
    },
  });

  


  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="bg-black rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-black p-4">
            <h2 className="text-2xl text-white">Donators</h2>
          </div>
          {/* <div className="bg-gray-100 p-4">
            {donators.length > 0 ? (
              <ul>
                {donators.map((donator) => (
                  <li key={donator._id} className="py-2 border-b border-gray-300">
                    {donator.name}: ${donator.amount}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No donators yet.</p>
            )}
          </div> */}
           <div className="bg-gray-600 p-4">
            {newRes.length > 0 ? (
              <ul>
                {newRes.map((donator) => (
                  <div className='flex justify-between'>
                  <li key={donator._id} className="py-2 border-b border-black">
                  {donator.name}
                  </li>
                  <li key={donator._id} className="py-2 border-b border-black">
                 {donator.email} 
                  </li>
                  <li key={donator._id} className="py-2 border-b border-black">Taka : 
                 {donator.donationPrice} 
                  </li>
                  </div>
                ))}
              </ul>
            ) : (
              <p>No donators yet.</p>
            )}
          </div>
          <div className="bg-gray-200 p-4">
            <button
              onClick={closeModal}
              className="bg-red-500 text-white py-1 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
