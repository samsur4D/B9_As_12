import React from "react";
import Headroom from "react-headroom";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Viedo from "../HomeComoponents/Viedo";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  return (
    <div className="min-h-screen flex flex-col">
      <Headroom>{noHeaderFooter || <Nav></Nav>}</Headroom>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>

      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
