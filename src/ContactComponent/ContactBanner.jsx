import React from "react";
import banner from "../assets/contact/banner.jpg";
const ContactBanner = () => {
  return (
    <>
      <div className="relative justify-center items-center flex w-full h-[500px]">
        <img
          className="absolute w-full h-full  object-cover"
          src={banner}
          alt=""
        />
        <div className="relative text-white items-center text-center justify-center bg-black/40 w-4/5 h-1/3 flex flex-col space-y-2">
          <h2 className="text-2xl md:text-5xl uppercase">contact us</h2>
          <p className="uppercase text-md">would you like to try a dish?</p>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
