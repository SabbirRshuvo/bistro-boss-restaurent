import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="bg-slate-500 w-1/2 p-10 flex flex-col items-center justify-start ">
          <h2 className="text-xl uppercase my-4">Contact Us</h2>
          <span className="">123 ABS Street, Uni 32, Bangladesh</span>
          <p>+88 12319311</p>
          <p>Mon-Fri: 8:00 - 23:00</p>
          <p>Sat-Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-gray-600 flex flex-col w-1/2 p-10 items-center justify-center ">
          <h2>Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex gap-4">
            <img
              src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=48&id=32323&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=48&id=13963&format=png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-center ">
        {" "}
        &copy; 2025 Bistro-boss-restaurent All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
