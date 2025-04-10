import React from "react";
import featuedImg from "../assets/home/featured.jpg";
import SheardTitle from "../Sheared/SheardTitle";
const Featured = () => {
  return (
    <div>
      <div className="relative w-full h-[500px] ">
        <img
          className="w-full h-full object-cover opacity-30 "
          src={featuedImg}
          alt=""
        />
        <div className="absolute flex inset-0 items-center justify-center ">
          <div className="w-full h-full ">
            <SheardTitle
              subHeading={"---Check it out---"}
              heading={"form our menu"}
            />
            <div className="flex w-2/4 mx-auto justify-between gap-6 ">
              <img className="w-1/2 h-[200px]" src={featuedImg} alt="" />
              <div className="w-1/2 ">
                <h2 className="text-xl font-thin uppercase ">
                  March 20, 2023, where can i get some?
                </h2>
                <p className="opacity-80 my-2">
                  A restaurant (sometimes known as a diner) is a place where
                  cooked food is sold to the public, and where people sit down
                  to eat it.
                </p>
                <button className="btn btn-outline opacity-70 mt-4 border-0 border-b-2 border-white uppercase">
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
