import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DonaDEtails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const singleData = details.find((detail) => detail._id === id);
  console.log(singleData);
  // console.log(singleData.userPhoto);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://server-twelve.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  return (
    <>
      {singleData && (
        <div className="flex">
          <div>
            <img
              className="w-[3200px] h-[1000px]"
              src={singleData.petPicture}
              alt=""
            />
          </div>
          <div className="bg-blue-400">
            <h1 className="text-9xl font-bold ">{singleData.campaignsName}</h1>
            <p className="text-4xl font-semibold mt-10">
              {singleData.shortDescription}
            </p>

            <p className="text-4xl font-semibold mt-10">
              {singleData.longDescription}
            </p>

            {/* ------- */}
            <div className="flex items-center  justify-between">
              <div className="">
                <div className="flex items-center ">
                  <img
                    className="w-[110px] rounded-full mt-10"
                    src={singleData?.userPhoto}
                    alt=""
                  />
                  <div className="mt-10">
                    <h2 className="text-3xl font-bold ml-3">
                      Who launched the campaign -{" "}
                    </h2>
                    <h2 className="text-3xl font-bold ml-3">
                      Email :{singleData?.email}
                    </h2>
                    <h2 className="text-3xl font-bold ml-3">
                      {" "}
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
                <button className="bg-orange-500 px-16 text-white font-bold py-5 text-7xl rounded-md">
                  Donate Please
                </button>
              </div>
            </div>
            {/* ------- */}
          </div>
        </div>
      )}
    </>
  );
};

export default DonaDEtails;
