import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyDonations = () => {
  // Mock data for demonstration
  const [donations, setDonations] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user.email);

  useEffect(() => {
    fetch("https://server-twelve.vercel.app/donations")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);    
        const newData = data.filter((item) => item.email === user.email);
        console.log(newData);
        setDonations(newData);
      });
  }, []);

  // Function to handle refund
  const handleRefund = (id) => {
    // Here you would implement the logic to remove the donation
    // For demonstration, we will just remove it from the mock data
    setDonations(donations.filter((donation) => donation.id !== id));
  };

  return (
    <div className="bg-[#1e272e] min-h-screen text-white">
      <div className="flex items-center justify-center py-3 flex-col">
        <h1 className="text-white font-bold text-4xl">My Donation History</h1>
      </div>
      <div className="container mx-auto py-6">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Index
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Campaign Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Donated Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Donated Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#1e272e] divide-y divide-gray-800">
            {donations.map((donation, index) => (
              <tr key={donation.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">
                    {donation.campaignName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">
                    {donation.donationPrice}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleRefund(donation.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Ask for Refund
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonations;
