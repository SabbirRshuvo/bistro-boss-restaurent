import React from "react";
import { Link } from "react-router";
import cart from "../assets/icon/cart.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="contact-us">Contact us</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/our_shop">Our Shop</Link>
      </li>
      <li>
        <Link>
          <img className="h-8 rounded-full" src={cart} alt="" />
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed  z-10 bg-black/50  text-white  shadow-md uppercase max-w-7xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow items-center bg-white text-black "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost block">
          <h2>bitro boss</h2>
          <h3>restaurent</h3>
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
