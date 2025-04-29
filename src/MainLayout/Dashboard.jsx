import React from "react";
import { CiShop } from "react-icons/ci";
import { FaBook, FaCrown, FaHistory, FaHome, FaTable } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="min-h-screen flex gap-6">
      <div className="w-64 bg-[#D99904] min-h-screen p-4">
        {/* Logo Section */}
        <div className="text-center py-6">
          <h2 className="text-3xl font-extrabold uppercase text-black">
            Bistro Boss
          </h2>
          <span className="text-xl font-light uppercase text-black">
            Restaurant
          </span>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col gap-6 mt-10">
          {/* Admin / User Conditional Links */}
          {isAdmin ? (
            <>
              <NavLink
                to="/dashboard/admin-home"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaHome /> Admin Home
              </NavLink>

              <NavLink
                to="/dashboard/add-items"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaTable /> Add Items
              </NavLink>

              <NavLink
                to="/dashboard/manage-items"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaHistory /> Manage Items
              </NavLink>

              <NavLink
                to="/dashboard/manage-bookings"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaCartFlatbed /> Manage Bookings
              </NavLink>

              <NavLink
                to="/dashboard/all-users"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaCrown /> All Users
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaHome /> User Home
              </NavLink>

              <NavLink
                to="/reservation"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaTable /> Reservation
              </NavLink>

              <NavLink
                to="/payment"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaHistory /> Payment History
              </NavLink>

              <NavLink
                to="/dashboard/cart"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaCartFlatbed /> My Cart ({cart.length})
              </NavLink>

              <NavLink
                to="/review"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaCrown /> Add Review
              </NavLink>

              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-md uppercase font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`
                }
              >
                <FaBook /> My Booking
              </NavLink>
            </>
          )}

          {/* Divider */}
          <hr className="border-white my-6" />

          {/* Bottom Nav */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 text-md uppercase font-semibold ${
                isActive ? "text-white" : "text-black"
              }`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex items-center gap-3 text-md uppercase font-semibold ${
                isActive ? "text-white" : "text-black"
              }`
            }
          >
            <IoMdMenu /> Menu
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `flex items-center gap-3 text-md uppercase font-semibold ${
                isActive ? "text-white" : "text-black"
              }`
            }
          >
            <CiShop /> Shop
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-3 text-md uppercase font-semibold ${
                isActive ? "text-white" : "text-black"
              }`
            }
          >
            <MdEmail /> Contact
          </NavLink>
        </div>
      </div>

      {/* Outlet for Nested Routes */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
