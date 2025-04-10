import React from "react";
import serviceLogo from "../assets/home/chef-service.jpg";
const Service = () => {
  return (
    <>
      <div className="relative w-full h-[400px] ">
        <img className="w-full h-full object-cover" src={serviceLogo} alt="" />
        <div className="absolute items-center justify-center flex inset-0">
          <div className="bg-white text-black  px-12 py-8 shadow-2xl w-4/5">
            <h2 className="uppercase text-center py-4 text-xl">bistro boss</h2>
            <p className="opacity-60">
              It is a long-established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Bistro Boss Restaurent is that it has a
              more-or-less normal distribution of letters, as opposed to using
              look like readable English
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
