import React, { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";

const AllPets = () => {
  const navigate = useNavigate();
  const [petsi, setPetsi] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 8;

  const { data: pets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/pet");
      return res.data;
    },
  });
  // --------------------------
  const handleDelete = (id) => {
    console.log(id);
    
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/pet/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            // Filter out the deleted item from the state
            const updatedpets = pets.filter(item => item._id !== id);
           console.log(updatedpets);
             // Update the state
             refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Spot has been deleted.",
              icon: "success"
            });
            setPetsi(updatedpets);
          }
        })
        .catch(error => {
          console.error("Error deleting spot:", error);
          // Handle error if deletion fails
        });
    }
  });
  };
  // --------------------------

  // Pagination logic
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#1e272e] min-h-screen">
      <div className="flex items-center justify-center py-3 flex-col">
        <h1 className="text-white font-bold text-3xl">All Pets In PawPixie</h1>
        <h1 className="text-white font-bold text-3xl">
          Total Pets: {pets.length}
        </h1>
      </div>
      <div className="overflow-x-auto px-2">
        <table className="table">
          <thead>
            <tr>
              <th className="text-white text-xl">Pet Index</th>
              <th className="text-white text-xl">Pet Name</th>
              <th className="text-white text-xl">Pet Breed</th>
              <th className="text-white text-xl">Pet Age</th>
              <th className="text-white text-xl">Status</th>
              <th className="text-white text-xl">Edit</th>
              <th className="text-white text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentPets.map((pet, index) => (
              <tr key={pet._id}>
                <th className="text-white">
                  <p className="bg-black bg-opacity-35 rounded-full py-3 text-center">
                    {indexOfFirstPet + index + 1}
                  </p>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={pet.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">{pet.name}</div>
                      <div className="text-sm text-white opacity-50">
                        Owner Email: {pet.addemail}
                      </div>
                      <div className="text-sm text-white opacity-50">
                        Adding Date: {pet.adddate}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-white">
                  {pet.breed}
                  <br />
                  <span className="badge text-black badge-ghost badge-sm">
                    Pet Location: {pet.location}
                  </span>
                </td>
                <td className="text-white">Pet Age: {pet.age}</td>
                <td className="text-white">
                  <button
                    className={`btn btn-primary ${
                      pet.adopted ? "bg-yellow-700" : "bg-green-700"
                    }`}
                  >
                    {pet.adopted ? "Not Available" : "Available"}
                  </button>
                </td>
                <td className="text-white">
            <NavLink to={`/dashboard/update/${pet._id}`}>
            <button    onClick={() => navigate(`/update-pet/${pet._id}`)}>  <BiEditAlt className="text-2xl text-blue-500" /></button>
            </NavLink>
                </td>
                <td className="text-white">
               <button  onClick={() => handleDelete(pet._id)}>   <MdDeleteOutline className="text-2xl text-red-500" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pets.length > petsPerPage && (
        <div className="flex justify-center text-xl text-white gap-5  mt-4">
          <nav>
            <ul className="pagination gap-5 flex">
              {Array.from(
                { length: Math.ceil(pets.length / petsPerPage) },
                (_, i) => (
                  <li key={i} className="page-item">
                    <button
                      onClick={() => paginate(i + 1)}
                      className={`page-link ${
                        currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default AllPets;
