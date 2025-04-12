import React from "react";
import banner2 from "../assets/shop/banner2.jpg";
const ShopBanner = () => {
  return (
    <div className="relative w-full h-[500px]  justify-center items-center flex text-center overflow-hidden">
      <img
        src={banner2}
        className="absolute inset-0 w-full h-full object-cover  "
        alt=""
      />
      <div className="relative w-4/5 h-1/3 bg-black/40 items-center justify-center text-center flex flex-col ">
        <h2 className="md:text-5xl text-2xl uppercase mb-2">our shop</h2>
        <p className="text-md">would you like to tr y a dish?</p>
      </div>
    </div>
  );
};

export default ShopBanner;
