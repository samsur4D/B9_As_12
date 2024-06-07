import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =  `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const DashUpdate = () => {
  const { register, handleSubmit, control, reset , setValue, formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useAuth();
  const { petId } = useParams();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);


  useEffect(() => {
    const fetchPetData = async () => {

      try {
        const petRes = await axiosPublic.get(`/pet/${id}`);
        const petData = petRes.data;
        console.log(petData);

        // Set the form values
        setValue("name", petData.name);
        setValue("age", petData.age);
        setValue("location", petData.location);
        setValue("details", petData.details);
        setValue("longDescription", petData.longDescription);
        setValue("petCategory", { value: petData.status, label: petData.status });
        setValue("breed", { value: petData.breed, label: petData.breed });
        setImageUrl(petData.image);

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch pet data", error);
        setLoading(false);
      }
    };

    fetchPetData();
  }, [petId, setValue, axiosPublic]);

  const onSubmit = async (data) => {
    try {
      let imageUrlToSave = imageUrl;

      if (data.image && data.image[0]) {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const res = await axios.post(image_hosting_api, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });

        if (res.data && res.data.data && res.data.data.url) {
          imageUrlToSave = res.data.data.url;
        } else {
          console.error("Error uploading image: No URL returned");
        }
      }

      data.image = imageUrlToSave;

      const isoDate = new Date().toISOString();
      data.date = isoDate.substring(0, 10);
      data.addEmail = user.email;

      const updatedPet = {
        name: data.name,
        status: data.petCategory.value,
        age: parseFloat(data.age),
        breed: data.breed.value,
        location: data.location,
        details: data.details,
        longDescription: data.longDescription,
        adopted: false,
        addemail: data.addEmail,
        adddate: data.date,
        image: data.image
      };

      const petRes = await axiosPublic.put(`/pet/${id}`, updatedPet);

      if (petRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          icon: "success",
          title: `Your Pet => ${data.name} Has Been Updated in PawPixi's Collection`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const petCategories = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
  ];
  const breed = [
    { value: "Golden Retriever", label: "Golden Retriever" },
    { value: "German Shepherd Mix", label: "German Shepherd Mix" },
    { value: "Labrador Retriever", label: "Labrador Retriever" },
    { value: "Australian Shepherd Mix", label: "Australian Shepherd Mix" },
    { value: "Beagle", label: "Beagle" },
    { value: "Cocker Spaniel", label: "Cocker Spaniel" },
    { value: "Border Collie", label: "Border Collie" },
    { value: "Shih Tzu", label: "Shih Tzu" },
    { value: "Boxer", label: "Boxer" },
    { value: "Rottweiler", label: "Rottweiler" },
    { value: "Australian Shepherd", label: "Australian Shepherd" },
    { value: "Domestic Shorthair", label: "Domestic Shorthair" },
    { value: "Siamese", label: "Siamese" },
    { value: "Maine Coon", label: "Maine Coon" },
    { value: "Persian", label: "Persian" },
    { value: "Ragdoll", label: "Ragdoll" },
    { value: "Siberian", label: "Siberian" },
    { value: "Bengal", label: "Bengal" },
    { value: "Tabby", label: "Tabby" },
    { value: "Persian Mix", label: "Persian Mix" },
    { value: "Pure Persian", label: "Pure Persian" },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#1e272e] min-h-screen">
      <div className="flex items-center justify-center py-3 flex-col">
        <h1 className="text-white font-bold text-3xl">Update A Pet</h1>
        <h1 className="text-white font-bold text-3xl">
          Update your pet in our territory and provide proper information
        </h1>
      </div>
      <div className="form flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-200">Pet Image</label>
            <input
              type="file"
              name="image"
              {...register("image")}
              className="mt-1 block w-full"
            />
          </div>

          <div className="flex gap-3">
            <div className="mb-4">
              <label className="block text-gray-200">Pet Name</label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                className="mt-1 border border-black block w-full"
              />
              {errors.name && <p className="text-red-500">Pet name is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-200">Pet Age</label>
              <input
                type="number"
                name="age"
                {...register("age", { required: true })}
                className="mt-1 border border-black block w-full"
              />
              {errors.age && <p className="text-red-500">Pet age is required</p>}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="mb-4 w-full">
              <label className="block text-gray-200">Pet Category</label>
              <Controller
                name="petCategory"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={petCategories}
                    className="mt-1"
                  />
                )}
                rules={{ required: true }}
              />
              {errors.petCategory && <p className="text-red-500">Pet category is required</p>}
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-200">Breed</label>
              <Controller
                name="breed"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={breed}
                    className="mt-1"
                  />
                )}
                rules={{ required: true }}
              />
              {errors.breed && <p className="text-red-500">Breed is required</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-200">Pet Location</label>
            <input
              type="text"
              name="location"
              {...register("location", { required: true })}
              className="mt-1 border border-black block w-full"
            />
            {errors.location && <p className="text-red-500">Pet location is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-200">Short Description</label>
            <input
              type="text"
              name="details"
              {...register("details", { required: true })}
              className="mt-1 border border-black block w-full"
            />
            {errors.details && <p className="text-red-500">Short description is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-200">Long Description</label>
            <textarea
              name="longDescription"
              {...register("longDescription", { required: true })}
              className="mt-1 border border-black block w-full"
            ></textarea>
            {errors.longDescription && <p className="text-red-500">Long description is required</p>}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashUpdate;

