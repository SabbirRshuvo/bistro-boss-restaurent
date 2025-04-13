import React from "react";
import Navbar from "../Sheared/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Sheared/Footer";

const Main = () => {
  const location = useLocation();
  const hiddenNavFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  return (
    <div className="flex flex-col min-h-screen">
      {!hiddenNavFooter && <Navbar />}
      <div className="flex-1">
        <Outlet />
      </div>
      {!hiddenNavFooter && <Footer />}
    </div>
  );
};

export default Main;
