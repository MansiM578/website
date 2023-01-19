import React from "react";
import printer from "../assets/printer.jpg";
import { Link } from "react-router-dom";
import { FaBook, FaBookReader, FaPencilAlt } from "react-icons/fa";
export default function Experts() {
  return (
    <div className="py-[70px] px-2 bg-[#f4f4f4]">
      {/* <div className="max-w-[1240px] font-semibold hover:font-bold mx-auto grid text-center text-4xl pb-2">
        Services We Offer
      </div> */}
      <div className=" font-bold mx-auto grid text-center text-5xl pb-2">
        <Link to="/">
          <span className="text-[#93cb52]">Services</span> We Offer
        </Link>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6 items-center">
        <div className="items-center flex pt-2">
          <FaBook className="bg-[#93cb52] rounded-full mb-4" size={60} />
          <div className="p-5">
            <h3 className="text-2xl font-bold mb-1">Heading1</h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, voluptatum!
            </p>
          </div>
        </div>
        <div className="pt-2 items-center flex">
          <FaBookReader className="bg-[#93cb52] rounded-full mb-4 " size={60} />
          <div className="p-5">
            <h3 className="text-2xl font-bold mb-1">Heading2</h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, voluptatum!
            </p>
          </div>
        </div>
        <div className="pt-2 items-center flex">
          <FaPencilAlt className="bg-[#93cb52] rounded-full mb-4" size={60} />
          <div className="p-5">
            <h3 className="text-2xl font-bold mb-1">Heading3</h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, voluptatum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
