/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[rgb(51,51,51)] p-3 fixed top-0 left-0 right-0">
      <div className=" py-[8px] items-center mx-auto flex justify-between px-2">
        <div className="text-3xl font-bold text-white">
          <Link to="/">
            <span className="text-[#93cb52]">Icon Copier</span> Care
          </Link>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-white gap-5 text-[18px]">
          <li className="hover:bg-[#93cb52]">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        {/* Responsive Menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
            ${toggle ? "left-[0]" : "left-[-100%]"}
            `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Services</li>
          <li className="p-5">About Us</li>
          <li className="p-5">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default header;
