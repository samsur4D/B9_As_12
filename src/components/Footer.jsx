import React from "react";
import logo from "../assets/paw-pixie-high-resolution-logo.png";
import viedoBg from "../assets/mixkit-female-runner-walks-her-dog-3123-hd-ready.mp4";
import local1 from "../assets/book.svg";
import local5 from "../assets/local5.svg";
import local4 from "../assets/local4.svg";
import local3 from "../assets/local3.svg";
import local2 from "../assets/logo-sticky.svg";
import donate from "../assets/donateeee.png";

const Footer = () => {
  return (
    <footer className="py-6 relative dark:bg-gray-100 dark:text-gray-900">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={viedoBg}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="container relative bg-black bg-opacity-50  py-32 px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
        <div className="grid lg:grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 md:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                </svg>
              </div>

              <div className="flex-col">
                <img
                  className="ml-10 lg:ml-0 w-72 rounded-3xl"
                  src={logo}
                  alt=""
                />
                <img
                  src={donate}
                  className="ml-8 lg:ml-0 rounded-2xl w-[300px]  mt-3"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-3xl text-orange-500 lg:text-white font-bold mb-3">
              About Dogs & Cats
            </p>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl  font-bold"
                >
                  All About Dogs & Puppies
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl  font-bold"
                >
                  All About Cats & Kittens
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl  font-bold"
                >
                  Dog Adoption
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl  font-bold"
                >
                  Cat Adoption
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl  font-bold"
                >
                  Dog Breeds
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl  font-bold"
                >
                  Cat Breeds
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-3xl text-orange-500 lg:text-white font-bold mb-3">
              Contact Us
            </p>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl mb-5 font-bold"
                >
                  123/A Uttara ,{" "}
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl mb-5 font-bold"
                >
                  Dhaka , Bangladesh
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl mb-5 font-bold"
                >
                  Email: pawpixi@gmail.com
                </a>
              </li>
              <li className="">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-white text-2xl mb-5  font-bold"
                >
                  +880136736545
                </a>
              </li>
              <li>
                <a className="flex gap-5 ml-24 lg:ml-0 mt-5">
                  <img className="w-10 " src={local1} alt="" />
                  <img className="w-10 " src={local5} alt="" />
                  <img className="w-10 " src={local4} alt="" />
                  <img className="w-10 " src={local3} alt="" />
                  <img className="w-12 " src={local2} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col  self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span className="text-white text-2xl  font-bold">
              ©2024 All rights reserved
            </span>
            <a rel="noopener noreferrer" href="#">
              <span className="text-white text-2xl  font-bold">
                Privacy policy
              </span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span className="text-white text-2xl  font-bold">
                Terms of service
              </span>
            </a>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
