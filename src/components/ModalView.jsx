import React, { useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';

const ModalView = ({ donators, campaign, closeModal }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [newRes, setNewres] = useState([]);
  const userEmail = user.email;
  console.log(userEmail);

  useEffect(() => {
    const fetchDonations = async () => {
      const res = await axiosPublic.get("/donations");
      const newRes = res.data.filter(item => item.campaignId === campaign._id);
      setNewres(newRes);
    };

    fetchDonations();
  }, [axiosPublic, campaign._id]);

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="bg-black rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-black p-4">
            <h2 className="text-2xl text-white">Campaign Details</h2>
          </div>
          <div className="bg-gray-600 p-4">
            <h3 className="text-lg text-white mb-2"></h3>
            <p className="text-white">Campaign Name: {campaign.campaignsName}</p>
            <p className="text-white">Max Donation Amount: ${campaign.maxDonationAmount}</p>
            <p className="text-white">Donated Amount: ${campaign.donatedAmount}</p>
          </div>
          <div className="bg-gray-600 p-4">
            <h1 className='text-xl font-bold'>Donators Information</h1>
            {newRes.length > 0 ? (
              <ul>
                {newRes.map((donator) => (
                  <div className='flex justify-between' key={donator._id}>
                    <li className="py-2 border-b border-black">{donator.name}</li>
                    <li className="py-2 border-b border-black">{donator.email}</li>
                    <li className="py-2 border-b border-black">Taka: {donator.donationPrice}</li>
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
