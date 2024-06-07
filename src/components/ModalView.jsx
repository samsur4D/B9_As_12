import React from 'react';

const ModalView = ({ donators, closeModal }) => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-gray-800 p-4">
            <h2 className="text-2xl text-white">Donators</h2>
          </div>
          <div className="bg-gray-100 p-4">
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
