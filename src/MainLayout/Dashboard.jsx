import React from "react";
import { CiShop } from "react-icons/ci";
import { FaBook, FaCrown, FaHistory, FaHome, FaTable } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
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
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
              >
                <FaHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
              >
                <FaTable /> reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payment"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
              >
                <FaHistory /> payment history
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/cart"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
              >
                <FaCartFlatbed /> my cart ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
              >
                {" "}
                <FaCrown /> add review
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
              >
                {" "}
                <FaBook /> my booking
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
              >
                {" "}
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
              >
                {" "}
                <IoMdMenu /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
              >
                {" "}
                <CiShop />
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold uppercase btn btn-outline ${
                    isActive ? "bg-blue-600 text-white" : ""
                  }`
                }
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
