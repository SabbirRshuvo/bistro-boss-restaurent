import React from "react";
import SheardTitle from "../Sheared/SheardTitle";
import { MdSecurity } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
const ContactForm = () => {
  return (
    <div className="mb-20 md:mb-40">
      <SheardTitle
        subHeading={"---Send Us a Message---"}
        heading={"contact form"}
      />
      <div className="bg-gray-300 w-full h-[600px] mx-auto p-8">
        <div className="flex gap-6">
          <div className="w-1/2 flex flex-col ">
            <label className="font-semibold ">Name*</label>
            <input
              className="bg-white px-4 py-2 mt-2  outline-0 rounded-md"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-1/2 flex flex-col ">
            <label className="font-semibold ">Email*</label>
            <input
              className="bg-white px-4 py-2 mt-2  outline-0 rounded-md"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="w-full flex flex-col my-4 ">
          <label className="font-semibold ">Phone*</label>
          <input
            className="bg-white px-4 py-2 mt-2  outline-0 rounded-md"
            type="number"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="w-full ">
          <label className="font-semibold ">Message*</label>
          <textarea
            className="textarea bg-gray-100 w-full h-40 p-4 focus:outline-none focus:ring-0 border-none resize-none"
            placeholder="Write your message  here"
          />
        </div>
        {/*  */}

        <div className="flex items-center justify-between w-80 p-4 border rounded shadow-sm bg-white mt-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="text-sm">I'm not a robot</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 text-[10px]">
            <MdSecurity className="text-blue-600 text-xl" />
            <span>reCAPTCHA</span>
            <div className="flex items-center gap-1">
              <span>Privacy</span>
              <span>·</span>
              <span>Terms</span>
            </div>
          </div>
        </div>

        {/* message button */}
        <div className="text-center mt-8 items-center">
          <button className="btn btn-outline">
            Send Message
            <FaTelegram />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
