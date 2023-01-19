import React from "react";
import Typed from "react-typed";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-emerald-400 to-emerald-900 w-full py-[50px]">
      <div className="max-w-[1240px] py-[70px] mx-auto text-center font-bold my-[150px]">
        <h2 className="text-white text-4xl md:text-[80px] p-[24px]">
          Lorem ipsum dolor sit
        </h2>
        <div className="md:text-[50px] md:p-[24px] text-white">
          Services we offer
          <Typed
            className="pl-3"
            strings={[" lorem ipsum", " ipsum huph", " ipsum u", " ips lorem"]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </div>
        <button className="bg-black text-white p-3 rounded">More Info</button>
      </div>
    </div>
  );
}
