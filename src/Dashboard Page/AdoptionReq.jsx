import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AdoptionReq = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [request , setRequest] = useState([])
//   console.log(user.photoURL);
  const userEmail = user.email;
  //    console.log(userEmail);

  const { data: carts=[] , refetch} = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/carts");
      //   console.log(res.data);
      const newRes = res.data.filter((res) => res.addemail === userEmail);
         console.log(newRes);
         setRequest(newRes)
      return newRes;
      
    },
//    initialData: []
  });
//   ----------------------------------------------- true koraR JNNO
const toggleAdoptionStatus = ( id, id2 ) => {
    fetch(`https://server-twelve.vercel.app/carts/accept/${id}`, {
      method: 'PUT',
    })
    .then(res => res.json())
    .then(() => {
        refetch()
      setRequest(prevPets =>
        prevPets.map(pet =>
          pet._id === id ? { ...pet, adopted: !pet.adopted } : pet
        )
      );
    //   --------------------------------------------------
    });
    fetch(`https://server-twelve.vercel.app/pet/adoptw/${id2}`, {
      method: 'PUT',
    })
    .then(res => res.json())
    .then(() => {
         refetch()
      setRequest(prevPets =>
        prevPets.map(pet =>
          pet._id === id ? { ...pet, adopted: !pet.adopted } : pet
        )
      );
    });
  };
//   ------------------------------------------------
const toggleAdoptionStatusi = (id , id2 ) => {
    fetch(`https://server-twelve.vercel.app/carts/accepto/${id}`, {
      method: 'PUT',
    })
    .then(res => res.json())
    .then(() => {
     refetch()
      setRequest(prevPets =>
        prevPets.map(pet =>
          pet._id === id ? { ...pet, adopted: !pet.adopted  } : pet
        )
      );
    });
    fetch(`https://server-twelve.vercel.app/pet/adopty/${id2}`, {
        method: 'PUT',
      })
      .then(res => res.json())
      .then(() => {
      refetch()
        setRequest(prevPets =>
          prevPets.map(pet =>
            pet._id === id ? { ...pet, adopted: !pet.adopted } : pet
          )
        );
      });
  };
//   -----------------------------------------------
const handleDelete = id => {
   
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
        axiosPublic.delete(`/carts/${id}`).then((res) => {
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
//   -----------------------------------------------

  return (
    <div className="bg-[#1e272e] min-h-screen">
      <div className="flex items-center justify-center py-3 flex-col">
        <h1 className="text-white font-bold text-3xl">
          Your Pet's Adoption Request
        </h1>
      </div>
      {/* --------------------------- */}
      <div className="overflow-x-auto bg-black bg-opacity-30 px-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className="text-2xl  text-white">Pet Owner</th>
        <th className="text-2xl  text-white">Pet Info</th>
        <th className="text-2xl  text-white">Requested Person</th>
        <th className="text-2xl  text-white">Req. Address</th>
        <th className="text-2xl  text-white">Action </th>
     
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

     {
        request.map((item , index) => <tr key={item._id}>
        <th>
          <label className="text-white">
            {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-white">{user.displayName}</div>
              <div className="text-sm opacity-50 text-white">{item.addemail}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-white">{item.name}</div>
            </div>
          </div>
        </td>
        <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.userphoto} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-white">{item.username}</div>
              <div className="text-sm opacity-50 text-white">{item.email}</div>
            </div>
          </div>
        </td>
        <th>
          <h1 className="text-white">{item.address}</h1>
        </th>
        <td className="flex gap-3">
       {
        item.adopted ?
        <button    onClick={() => toggleAdoptionStatusi(item._id , item.adoptId)}  className="btn btn-secondary">-Request Accepted-</button>
      :
     <> <button    onClick={() => toggleAdoptionStatus(item._id , item.adoptId)}  className="btn btn-outline btn-success">Accept</button> 

     <button  onClick={() => handleDelete(item._id)} className="btn btn-outline btn-warning">Reject</button></>
       }
        </td>
     
      </tr> )
     }


     
     
    </tbody>
  
    
  </table>
</div>
      {/* --------------------------- */}
    </div>
  );
};

export default AdoptionReq;
