import React, { useContext } from "react";
import { Link } from "react-router";
import cart from "../assets/icon/cart.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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

  const handleLogOut = () => {
    logOut();
  };
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
      {/* <div className="navbar-end">
        {user ? (
          <div>
            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
            <img
              className={`h-10 w-10 rounded-full object-cover hovre:${user.displayName}`}
              src={user.photoURL}
              alt=""
            />
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div> */}
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="user" src={user.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <a className="justify-between">{user.displayName}</a>
            </li>
            <li>
              <a onClick={handleLogOut}>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/login" className="btn">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
