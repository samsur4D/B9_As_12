import React, { useContext, useState } from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';

const MySentReq = () => {

    
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [request , setRequest] = useState([])
  //   console.log(user.photoURL);
    const userEmail = user.email;
    //    console.log(userEmail);
  
    const { data: carts = [] , refetch} = useQuery({
      queryKey: ["carts"],
      queryFn: async () => {
        const res = await axiosPublic.get("/carts");
        //   console.log(res.data);
        const newRes = res.data.filter((res) => res.email === userEmail);
           console.log(newRes);
           setRequest(newRes)
        return newRes;
        
      },
     
    });
    // ---------------------------------
    return (
        <div className="bg-[#1e272e] min-h-screen">
        <div className="flex items-center justify-center py-3 flex-col">
          <h1 className="text-white font-bold text-3xl">
            My Sent  Request
          </h1>
        </div>
        {/* --------------------------- */}
        <div className="overflow-x-auto bg-black bg-opacity-30 px-20">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
        
          <th className="text-2xl  text-white">Index</th>
          <th className="text-2xl  text-white">Pet Info</th>
          <th className="text-2xl  text-white">Pet Owner Info</th>
          <th className="text-2xl  text-white">Status</th>
        
       
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
          {/* <td>
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
          </td> */}
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold text-white">{item.name}</div>
                <div className="font-bold text-white">Pet Age: {item.age}</div>
              </div>
            </div>
          </td>
          <td>
          <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.addphoto} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold text-white">{item.addname}</div>
                <div className="text-sm opacity-50 text-white">{item.addemail}</div>
              </div>
            </div>
          </td>
          {/* <th>
            <h1 className="text-white">{item.address}</h1>
          </th> */}
          <td className="flex gap-3">
            {
                item.adopted ?   <button  className="btn btn-outline btn-success">Accepted</button> 
                :
                <button   className="btn btn-outline btn-warning">In Progress</button>
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

export default MySentReq;