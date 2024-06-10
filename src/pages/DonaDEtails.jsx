import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCampaigns from "../Hooks/useCampaigns";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

// TO DO ==>
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const DonationDetails = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const [donationId, setDonationId] = useState(null);
  const [donationamt, setDonationamt] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  console.log("in donation amount", donationAmount);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://server-twelve.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        const singleData = data.find((detail) => detail._id === id);
        setDonationId(id);
        setSingleData(singleData);
        setDonationamt(singleData?.donatedAmount);
      });
  }, [id]);

  const handleDonateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {singleData && (
        <div className="flex ">
          <div>
            <img
              className="w-[3200px] h-[1200px]"
              src={singleData.petPicture}
              alt=""
            />
          </div>
          <div className="kala px-3">
            <h1 className="text-9xl font-bold ">{singleData.campaignsName}</h1>
            <p className="text-4xl font-semibold mt-10">
              {singleData.shortDescription}
            </p>
            <p className="text-4xl font-semibold mt-10">
              {singleData.longDescription}
            </p>
            <div className="flex items-center justify-between">
              <div className=" ">
                <div className="flex  items-center ">
                  <img
                    className="w-[110px] rounded-full mt-10"
                    src={singleData?.userPhoto}
                    alt=""
                  />
                  <div className="mt-10">
                    <h2 className="text-4xl underline font-bold ml-3">
                      Who launched the campaign -
                    </h2>
                    <h2 className="text-3xl font-bold ml-3">
                      Email :{singleData?.email}
                    </h2>
                    <h2 className="text-3xl font-bold ml-3">
                      Name :{singleData?.userName}
                    </h2>
                  </div>
                </div>
                <div className="mt-20">
                  <h1 className="text-5xl font-bold">
                    Last Date OF Donation Amount :
                    {singleData?.lastDateOfDonation}
                  </h1>
                  <h1 className="text-5xl font-bold">
                    Max Donation Amount : {singleData?.maxDonationAmount}
                  </h1>
                  <h1 className="text-5xl font-bold">
                    Donated Amount : {singleData?.donatedAmount}
                  </h1>
                </div>
              </div>
              <div className="mr-20">
                {
                  singleData?.status==='paused'  ? <> 
                     <button
                  className="bg-red-500 px-16 text-white font-bold py-5 text-7xl rounded-md"
                  
                >
                  This Campaign Is Over
                </button>
                   </>  : <> <button
                  className="bg-orange-500 px-16 text-white font-bold py-5 text-7xl rounded-md"
                  onClick={handleDonateClick}
                >
                  Donate Please
                </button></>
                }
                
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <Elements stripe={stripePromise}>
          <DonationModal
            onClose={handleCloseModal}
            donationAmount={donationAmount}
            setDonationAmount={setDonationAmount}
            donationId={donationId}
            previousDonatedAmount={donationamt}
          />
        </Elements>
      )}
    </>
  );
};

// ---------------------------------------------------------------------------------------------------

const DonationModal = ({ onClose, donationAmount, setDonationAmount, donationId, previousDonatedAmount }) => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [campaigns] = useCampaigns();
  const { user } = useContext(AuthContext);
  console.log(user.email);
  console.log(user.displayName);

  const singleData = campaigns.find((detail) => detail._id === donationId);
  console.log(singleData);

  const previousDonatedAmounti = parseInt(singleData?.donatedAmount);
  console.log(previousDonatedAmounti);  

  useEffect(() => {
    if (donationAmount) {
      axiosSecure.post('/create-payment-intent', { donation: donationAmount })
        .then(res => {
          console.log('Client secret received:', res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch(err => console.error(err));
    }
  }, [axiosSecure, donationAmount]);

  // stripe hooks----------------------------
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: "Donor Name",
      },
    });

    if (error) {
      console.error("Payment error", error);
      setError(error.message);
    } else {
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });

      if (confirmError) {
        console.error("Confirm payment error", confirmError);
        setError(confirmError.message);
      } else {
        Swal.fire({
          title: "Good job!",
          text: "Payment Successfully Complete 👍",
          icon: "success"
        });
        console.log("Payment successful:", paymentIntent);
        if (paymentIntent) {
          console.log('transaction id', paymentIntent.id);
          setTransactionId(paymentIntent.id);

          // Calculate new donated amount
          const newDonatedAmount = previousDonatedAmounti + parseInt(donationAmount);
          console.log('new donated amount', newDonatedAmount);

          // Save the data to the database
          const donation = {
            email: user.email,
            name: user.displayName,
            transactionId: paymentIntent.id,
            donationPrice: donationAmount,
            date: new Date(),
            campaignId: singleData._id,
            campaignName: singleData.campaignsName,
            addemail: singleData.email,
            addName: singleData.userName,
            addphoto: singleData.userPhoto,
            needAmount: singleData.maxDonationAmount,
            status: 'pending',
            newDonatedAmount: newDonatedAmount
          };

          const res = await axiosSecure.post('/donations', donation);
          console.log('payment save', res);

          // Update the campaign with the new donated amount
          const updateRes = await axiosSecure.put(`/campaigns/${singleData._id}`, {
            donatedAmount: newDonatedAmount
          });
          console.log('campaign updated', updateRes);
        }
        setError('');
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white w-[700px] p-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Donate Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xl mb-2">Donation Amount</label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2">Credit Card</label>
            <CardElement className="p-4 border rounded-lg" />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              disabled={!stripe || !clientSecret}
            >
              Donate
            </button>
          </div>
          <p className="text-sm text-red-500">{error}</p>
          {transactionId && <p className="text-green-400">Your Transaction Id: {transactionId}</p>}
        </form>
      </div>
    </div>
  );
};

export default DonationDetails;
