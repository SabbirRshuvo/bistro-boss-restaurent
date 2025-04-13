import React from "react";
import SheardTitle from "../Sheared/SheardTitle";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdTimer } from "react-icons/md";

const ContactAdress = () => {
  return (
    <div>
      <SheardTitle subHeading={"---Visit Us---"} heading={"our location"} />

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-6 bg-white">
        <div className="w-72 bg-white border shadow-sm h-60">
          <div className="bg-yellow-600 flex justify-center items-center h-16">
            <FaPhone />
          </div>
          <div className="bg-gray-100 text-center p-6">
            <h2 className="uppercase font-semibold text-center p-6">
              location
            </h2>
            <p className="text-sm text-gray-700">+43 (432) 43 33 423</p>
          </div>
        </div>
        <div className="w-72 bg-white border shadow-sm h-60">
          <div className="bg-yellow-600 flex justify-center items-center h-16">
            <IoLocation />
          </div>
          <div className="bg-gray-100 text-center p-6">
            <h2 className="uppercase font-semibold text-center p-6">
              location
            </h2>
            <p className="text-sm text-gray-700">+43 (432) 43 33 423</p>
          </div>
        </div>
        <div className="w-72 bg-white border shadow-sm h-60">
          <div className="bg-yellow-600 flex justify-center items-center h-16">
            <MdTimer />
          </div>
          <div className="bg-gray-100 text-center p-6">
            <h2 className="uppercase font-semibold text-center p-6">
              working hours
            </h2>
            <p className="text-sm text-gray-700">Mon - Fri: 06:00 - 22:00</p>
            <p className="text-sm text-gray-700">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAdress;
