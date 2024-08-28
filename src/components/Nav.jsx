import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/lolo.png";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme , setTheme] = useState('light');
  const [cart] = useCart();
  useEffect(()=>{
    localStorage.setItem('theme' , theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme' , localTheme)
  },[theme])

const handleTheme = (e)=>{
   if(e.target.checked){
    setTheme('night')
   }else{
    setTheme('light')
   }
}
console.log(theme);



  return (
    <div className="navbar  shadow-sm  bg-transparent   bg-opacity-30 px-4 mx-auto">
      <div className="flex-1 ">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-24 h-16" src={logo} alt="" />
        </Link>
      </div>
      {/* ---------------------------------------------------- */}
    
      {/* ---------------------------------------------------- */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden lg:block">
            <Link
              to="/"
              className="text-lg ml-5 bg-gray-600 font-samu text-white"
            >
              Home
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link
              to="/petlisting"
              className="text-lg ml-5 bg-gray-600 font-samu text-white"
            >
              Pet Listing
            </Link>
          </li>
          {/* <li className="hidden lg:block">
            <Link
              to="/"
              className="text-lg ml-5 font-samu bg-gray-600 text-white"
            >
              Donation
            </Link>
          </li> */}
          <li className="hidden lg:block">
            <Link
              to="/campaigns"
              className="text-lg ml-5 font-samu bg-gray-600 text-white"
            >
              Campaigns
            </Link>
          </li>
          {/* <li className="hidden lg:block">
            <Link
              to="/"
              className="text-lg ml-5 font-samu bg-gray-600 text-white"
            >
              My Campaigns
            </Link>
          </li> */}
          {/* ------------------------------- */}
          <label className="swap ml-5 swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
          {/* ------------------------------- */}
          <li className="hidden lg:block"></li>
          {user ? (
            ""
          ) : (
            <li className="">
              <Link className="text-lg font-samu" to="/login">
                Login
              </Link>
            </li>
          )}
          {user ? (
            ""
          ) : (
            <li className=" ">
              <Link className="text-lg font-samu" to="/register">
                Sign Up
              </Link>
            </li>
          )}

          {!user && (
            <li className="hidden">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="z-50 dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div  title={user?.displayName} className="w-20  rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1000] relative p-2 shadow bg-base-100 rounded-box w-80"
            >
              <li className="block lg:hidden">
                <Link to="/">Home</Link>
              </li>
              <li className="block lg:hidden">
                <Link  to="/petlisting">Pet Listing</Link>
              </li>
              <li className="block lg:hidden">
                <Link to="/">Donation</Link>
              </li>
              <li className="block lg:hidden">
                <Link   to="/campaigns">Campaigns</Link>
              </li>

              <li className="font-samu block text-center">
                <Link to="/dashboard/addapet">
                  Dahboard
                  <div className="badge">+{cart.length}</div>
                </Link> 
             
                 

{/* --------------------- */}
      

                {/* ------------------------ */}
              </li>
              <li className="mt-2 ">
                <button
                  onClick={logOut}
                  className="bg-gray-200 font-samu block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
