import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";
import { HiUserGroup } from "react-icons/hi";
import { useState } from "react";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handelMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${user.name} is Admin Now 💙`,
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  };

  const handelDeleteUser = (user) => {
    console.log("dlete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#1e272e] min-h-screen">
      <div className="flex items-center justify-center py-3 flex-col">
        <h1 className="text-white font-bold text-3xl">Manage All Users</h1>
        <h1 className="text-white font-bold text-3xl">
          Total Users : {users.length}{" "}
        </h1>
      </div>
      <div className="overflow-x-auto px-5 py-5">
        <table className="table ">
          <thead>
            <tr>
              <th className="text-black text-xl bg-green-200">Index</th>
              <th className="text-black text-xl bg-green-200">User Name</th>
              <th className="text-black text-xl bg-green-200">User Email</th>
              <th className="text-black text-xl bg-green-200">Role</th>
              <th className="text-black text-xl bg-green-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user._id}>
                <th className="text-white text-xl">{indexOfFirstUser + index + 1}</th>
                <td className="text-white text-xl">{user.name}</td>
                <td className="text-white text-xl">{user.email}</td>
                <td className="text-white text-xl">
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handelMakeAdmin(user)}
                      className="bg-yellow-200 p-3 flex items-center text-black font-bold rounded-full hover:bg-yellow-400"
                    >
                      <GrUserAdmin className="text-blue-500 text-3xl" />
                      Admin
                    </button>
                  ) : (
                    <button
                      className="bg-green-400 p-3 rounded-full hover:bg-yellow-600 flex items-center text-black font-bold"
                      onClick={() => handelMakeAdmin(user)}
                    >
                      <HiUserGroup className="text-blue-700 text-3xl" />
                      User__
                    </button>
                  )}
                </td>

                <td className="text-white text-xl">
                  <button
                    className="bg-blue-200 p-3 rounded-full hover:bg-blue-400"
                    onClick={() => handelDeleteUser(user)}
                  >
                    <RiDeleteBinLine className="text-red-500 text-3xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length > usersPerPage && (
          <div className="flex justify-center mt-4">
            <nav>
              <ul className="flex list-none">
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index} className="mx-1">
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 rounded-full ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
