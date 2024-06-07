import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateDonationCampa = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = new FormData();
    imageFile.append("image", data.petPicture[0]);

    try {
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const campaigns = {
          lastDateOfDonation: data.lastDateOfDonation,
          longDescription: data.longDescription,
          maxDonationAmount: data.maxDonationAmount,
          shortDescription: data.shortDescription,
          donatedAmount: data.donatedAmount,
          campaignsName: data.campaignsName,
          petPicture: res.data.data.display_url,
          userName: user.displayName,
          userPhoto: user.photoURL,  // add username
          email: user.email,        // add email
        };

        const campaignsRes = await axiosPublic.post("/campaigns", campaigns);
        console.log(campaignsRes.data);

        if (campaignsRes.data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      console.log(res.data);
    } catch (error) {
      console.error("Error uploading image or saving campaign:", error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="bg-[#1e272e] min-h-screen">
      <div className="flex items-center justify-center py-3 flex-col">
        <h1 className="text-white font-bold text-7xl">
          Create Donation Campaign
        </h1>
      </div>
      <div className="bg-[#1e272e] min-h-screen">
        <div className="flex items-center justify-center py-3 flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg mt-5"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="petPicture"
              >
                Pet Picture
              </label>
              <input
                {...register("petPicture", { required: true })}
                type="file"
                name="petPicture"
                className="w-full text-white bg-[#1e272e] border border-white rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="campaignsName"
              >
                Campaign Name
              </label>
              <input
                {...register("campaignsName", { required: true })}
                type="text"
                name="campaignsName"
                className="w-full text-white bg-[#1e272e] border border-white rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="maxDonationAmount"
              >
                Maximum Donation Amount
              </label>
              <input
                {...register("maxDonationAmount", { required: true })}
                type="number"
                name="maxDonationAmount"
                className="w-full text-white bg-[#1e272e] border border-white rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="donatedAmount"
              >
                Donated Amount
              </label>
              <input
                {...register("donatedAmount", { required: true })}
                type="number"
                name="donatedAmount"
                className="w-full text-white bg-[#1e272e] border border-white rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="lastDateOfDonation"
              >
                Last Date of Donation
              </label>
              <input
                {...register("lastDateOfDonation", { required: true })}
                type="date"
                name="lastDateOfDonation"
                className="w-full text-white bg-[#1e272e] border border-white rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="shortDescription"
              >
                Short Description
              </label>
              <textarea
                {...register("shortDescription", { required: true })}
                name="shortDescription"
                className="w-full text-white bg-[#1e272e] border border-white rounded py-2 px-3"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="longDescription"
              >
                Long Description
              </label>
              <textarea
                {...register("longDescription", { required: true })}
                name="longDescription"
                className="w-full text-white bg-[#1e272e] border border-white rounded py-2 px-3"
                rows="5"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#0984e3] text-white font-bold py-2 px-4 rounded hover:bg-[#74b9ff]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDonationCampa;
