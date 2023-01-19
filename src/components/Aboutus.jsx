import React from "react";
import people from "../assets/people.jpg";
function Aboutus() {
  return (
    <div className=" mx-auto   md:grid grid-cols-2">
      <div className="border-[blue]  col-span-1  text-center">
        <img src={people} alt="" className="inline" />
      </div>
      <div className="border-[blue] px-10 bg-[#333] text-white col-span-1 flex flex-col pt-5">
        <div className="text-[#93cb52] text-4xl font-bold my-2">About Us</div>
        <p className="my-2 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi vitae,
          repellat voluptatem magnam nulla praesentium repudiandae atque,
          pariatur, inventore laborum voluptatibus quisquam optio perspiciatis
          maiores. Sit et odit amet beatae?
        </p>
        <div className="text-3xl text-bold md-4">Our Team</div>
        <ul className="mt4">
          <li className="p-2">Mark Smith: CEO</li>
          <li className="p-2">Lorem, ipsum dolor.</li>
          <li className="p-2">Lorem ipsum dolor sit amet.</li>
          <li className="p-2">Lorem: ipsum dolor sit amet.</li>
          <li className="p-2">Lorem: ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
  );
}

export default Aboutus;
