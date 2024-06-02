import React, { useContext } from "react";
import logo from "../assets/lolo.png";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar fixed z-10 shadow-sm  bg-gray-500 bg-opacity-30 px-4 mx-auto">
      <div className="flex-1 ">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-24 h-16" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden lg:block">
            <Link to="/" className="text-lg font-samu text-white">Home</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/petlisting" className="text-lg font-samu text-white">Pet Listing</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/" className="text-lg font-samu text-white">Donation</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/" className="text-lg font-samu text-white">Campaigns</Link>
          </li>
          {user ? (
            ""
          ) : (
            <li className="">
              <Link className="text-lg font-samu" to="/login">Login</Link>
            </li>
          )}
          {user ? (
            ""
          ) : (
            <li className=" ">
            <Link className="text-lg font-samu" to="/register">Sign Up</Link>
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
              <div title={user?.displayName} className="w-12  rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1000] relative p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/">Pet Listing</Link>
              </li>
              <li className="">
                <Link to="/">Donation</Link>
              </li>
              <li className="">
                <Link to="/">Campaigns</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
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
