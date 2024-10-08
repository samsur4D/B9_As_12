import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import ModalView from '../components/ModalView';
import { NavLink } from "react-router-dom";

const MyDonationCampa = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const [donators, setDonators] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const userEmail = user.email;
  console.log(userEmail);

  const fetchCampaigns = async () => {
    try {
      const res = await axiosPublic.get('/campaigns');
      console.log(res); // all data get
      const newRes = res.data.filter(res => res.email === userEmail)
      console.log(newRes); // users data get
      setCampaigns(newRes);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };
  
  useEffect(() => {
    
    fetchCampaigns();
  }, [axiosPublic, userEmail]);
  

  const handlePause = async (campaignId) => {
    try {
      await axiosPublic.patch(`/campaigns/pause/${campaignId}`);
      fetchCampaigns()
      Swal.fire("Paused!", "The campaign has been paused.", "success");
    } catch (error) {
      console.error("Error pausing campaign:", error);
      Swal.fire("Error!", "Failed to pause the campaign.", "error");
    }
  };

  const handleEdit = (campaignId) => {
    // Redirect to edit page
    window.location.href = `/edit-campaign/${campaignId}`;
  };

  const handleViewDonators = async (campaign) => {
    try {
      const res = await axiosPublic.get(`/donations?campaignId=${campaign._id}`);
      setDonators(res.data);
      setSelectedCampaign(campaign);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching donators:", error);
      Swal.fire("Error!", "Failed to fetch donators.", "error");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCampaign(null);
    setDonators([]);
  };

  return (
    <div className="bg-[#1e272e] min-h-screen text-white">
      <div className="flex items-center justify-center py-3 flex-col">
        <h1 className="text-white font-bold text-4xl">My Campaigns</h1>
      </div>
      <div className="flex items-center justify-center py-3 flex-col">
        <table className="w-full max-w-5xl mt-5 bg-gray-800 border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2">Pet Name</th>
              <th className="px-4 py-2">Max Donation Amount</th>
              <th className="px-4 py-2">Donation Progress</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id} className="border-b border-gray-700">
                <td className="px-4 py-2">{campaign.campaignsName}</td>
                <td className="px-4 py-2">${campaign.maxDonationAmount}</td>
                <td className="px-4 py-2">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200">
                      <div
                        style={{
                          width: `${(campaign.donatedAmount / campaign.maxDonationAmount) * 100}%`,
                        }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 flex space-x-2">
                  {
                    campaign?.status === 'paused' ?
                     <button
                    onClick={() => handlePause(campaign._id)}
                    className="bg-orange-500 text-white py-1 px-2 rounded"
                  >
                   Open
                  </button>  :

                   <button
                    onClick={() => handlePause(campaign._id)}
                    className="bg-red-900 text-white py-1 px-2 rounded"
                  >
                    Pause
                  </button> 
                  }
                  {/* <button
                    onClick={() => handlePause(campaign._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded"
                  >
                    Pause
                  </button> */}
                  <button
                    onClick={() => handleEdit(campaign._id)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleViewDonators(campaign)}
                    className="bg-green-500 text-white py-1 px-2 rounded"
                  >
                    View Donators
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <ModalView
          donators={donators}
          campaign={selectedCampaign}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default MyDonationCampa;
