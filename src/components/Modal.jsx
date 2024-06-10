import React, { useContext, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import { AuthContext } from "../provider/AuthProvider";

const Modal = ({ isOpen, onClose, singleData }) => {
  const { name, image, age, breed, date, _id, addemail, adddate, adopted , addname , addphoto } =
    singleData || {};
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  // State for form fields
  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddToCart = () => {
    if (adopted) {
      Swal.fire({
        icon: "warning",
        title: "This pet is already adopted.",
        showConfirmButton: true,
      });
      return;
    }

    if (user && user.email) {
      if (user.email === addemail) {
        Swal.fire({
          icon: "warning",
          title: "You cannot adopt your own pet.",
          showConfirmButton: true,
        });
        return;
      }

      const currentDate = new Date().toISOString().split("T")[0];

      const cartItem = {
        adoptId: _id,
        email: user.email,
        username: user.displayName,
        userphoto: user.photoURL,
        addname,
        addphoto,
        addemail,
        adddate,
        adopted,
        name,
        image,
        date,
        age,
        phone: formData.phone,
        address: formData.address,
        message: formData.message,
        currentDate,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added to The Cart",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please Login To Add to the Cart",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md max-w-4xl max-h-min w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-5xl underline mb-3 font-bold">
            Adopt {singleData.name}
          </h2>
          <button onClick={onClose} className="text-xl">
            &times;
          </button>
        </div>
        <div className="flex items-center  gap-16">
          {/* -------------- */}
          <div className="flex items-center mb-5 gap-16">
            <img className="w-28 rounded-2xl" src={singleData.image} alt="" />
            <div className="bg-black bg-opacity-20 px-5 py-4 rounded-2xl">
              <h1 className="text-md font-semibold">
                Pet Id : {singleData._id}
              </h1>
              <h1 className="text-md font-semibold">
                Pet Name : {singleData.name}
              </h1>
              <h1 className="text-md font-semibold">
                Pet Location : {singleData.location}
              </h1>
              <h1 className="text-md font-semibold">
                Pet Breed : {singleData.breed}
              </h1>
              <h1 className="text-md font-semibold">
                Pet Vaccine : {adopted} Vaccinated
              </h1>
            </div>
          </div>
          {/* -------------- */}
        {
            singleData.adopted ?   <div className="animate-bounce">
            <h2 className="text-red-600  text-xl">
              You Can't Adopt This Pet Beacuse <br />{" "}
              <span className="bg-black font-bold px-4 py-1 rounded-md ">This Pet Is Already Adopted</span>
            </h2>
          </div> :  ""
        }
        </div>
        <form>
          <div className="flex gap-5">
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="border border-gray-300 p-2 w-full"
                type="text"
                defaultValue={user?.displayName}
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                className="border border-gray-300 p-2 w-full"
                type="email"
                defaultValue={user?.email}
                id="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                Your Phone No.
              </label>
              <input
                className="border border-gray-300 p-2 w-full"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="address"
              >
                Your Address
              </label>
              <input
                className="border border-gray-300 p-2 w-full"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="border border-gray-300 p-2 w-full"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 mr-2 rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className={`px-4 py-2 ${
                adopted ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500"
              } text-white rounded`}
              disabled={adopted}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
