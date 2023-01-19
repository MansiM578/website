/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Single from "../assets/single.jpg";
import Double from "../assets/double.jpg";
import Triple from "../assets/triple.jpg";

const Hero = () => {
  return (
    <>
      <div className=" mx-auto md:grid grid-cols-3 gap-6 items-center">
        <div className="px-6 grid-col-1 bg-[#93cb52] leading-6 text-white">
          <div className="my-3 text-4xl decoration-4 font-bold">Contact Us</div>
          <div className="text-[20px] px-1 ">
            Please use the form below to contact us
          </div>
          <form className="rounded pt-3 pb-8 mb-4 text-white">
            <div className="mb-4">
              <label className="block mb-2" for="username">
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-4">
              <label className="block  mb-2" for="username">
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-4">
              <label className="block  mb-2" for="username">
                Phone Number
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="mb-6">
              <label className="block  mb-2" for="password">
                Message
              </label>
              <input
                className="sappearance-none border  rounded w-full py-2 px-3  mb-3 leading-tight "
                id="message"
                type="message"
                placeholder="Enter Message"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-black hover:bg-[#444]0 text-white font-bold py-2 px-4 w-full rounded "
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="grid-col-2 bg-[#d5d0d0]"></div>
      </div>
    </>
  );
};

export default Hero;
