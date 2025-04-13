import React from "react";
import featuedImg from "../assets/home/featured.jpg";
import SheardTitle from "../Sheared/SheardTitle";
const Featured = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-[500px] overflow-hidden my-5 md:my-10  ">
          <img
            className="absolute inset-0  w-full h-full object-cover  blur-sm bg-black/40 "
            src={featuedImg}
            alt=""
          />
          <div className="relative text-center">
            <SheardTitle
              subHeading={"---check it out---"}
              heading={"from our menu"}
            />
          </div>
          <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center mx-auto  rounded-lg p-6 gap-6 ">
            <div className="w-1/2 h-1/2 flex items-center justify-center">
              <img
                src={featuedImg}
                alt="Center"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-2 mx-auto">
              <h1 className="text-xl  font-thin uppercase">march 20, 2025!</h1>
              <h2 className="text-xl font-thin uppercase">
                where can i get some?
              </h2>
              <p className="text-sm md:text-base opacity-90">
                This is a responsive hero section with a background image,
                centered content, and a featured image.
              </p>
              <button className="btn btn-outline  border-0 border-b-2 border-yellow-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
