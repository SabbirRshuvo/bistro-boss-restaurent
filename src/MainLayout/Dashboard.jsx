import React from "react";
import { CiShop } from "react-icons/ci";
import { FaBook, FaCrown, FaHistory, FaHome, FaTable } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-64  bg-orange-300 min-h-screen ">
        <div className="text-center items-center py-4">
          <h2 className="text-3xl text-black font-bold uppercase block w-full">
            bistro boss{" "}
          </h2>
          <span className="text-2xl font-thin uppercase text-black block w-full">
            restaurant
          </span>
        </div>
        <div className="w-2/3 mx-auto">
          <ul className=" flex flex-col  my-4 space-y-2 ">
            <li>
              <NavLink
                className="flex items-center gap-2 font-semibold uppercase btn btn-outline "
                to="/dashboar/cart"
              >
                <FaHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2 font-semibold uppercase btn btn-outline">
                {" "}
                <FaTable /> reservation
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-2 font-semibold uppercase btn btn-outline">
                {" "}
                <FaHistory /> payment history
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/cart"
                className="flex items-center gap-2 font-semibold uppercase btn btn-outline"
              >
                {" "}
                <FaCartFlatbed /> my cart
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 font-semibold uppercase btn btn-outline"
                to="/cart"
              >
                {" "}
                <FaCrown /> add review
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 font-semibold uppercase btn btn-outline"
                to="/cart"
              >
                {" "}
                <FaBook /> my booking
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink
                className="flex items-center gap-2 font-semibold uppercase btn btn-outline"
                to="/cart"
              >
                {" "}
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 font-semibold uppercase btn btn-outline"
                to="/cart"
              >
                {" "}
                <IoMdMenu /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 font-semibold uppercase btn btn-outline"
                to="/cart"
              >
                {" "}
                <CiShop />
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 font-semibold uppercase btn btn-outline"
                to="/cart"
              >
                {" "}
                <MdEmail /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
