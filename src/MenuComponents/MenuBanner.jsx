import React from "react";
import bannerImage from "../assets/menu/banner3.jpg";
const MenuBanner = () => {
  return (
    <div className="relative w-full  h-[600px] flex  overflow-hidden justify-center items-center">
      <img
        src={bannerImage}
        className="w-full h-full absolute object-cover inset-0"
        alt=""
      />
      <div className="relative w-4/5 h-1/3 bg-black/40 items-center justify-center text-center flex flex-col">
        <h2 className="text-5xl font-semibold mb-4 uppercase">our menu</h2>
        <p className="uppercase text-md">would you like to try a dish?</p>
      </div>
    </div>
  );
};

export default MenuBanner;
