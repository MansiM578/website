import React from "react";
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
function Client() {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] font-semibold hover:font-bold mx-auto mb:grid text-center text-6xl pb-2">
        Our Clients
      </div>

      <div className="max-w-[1240px] mx-auto md:grid grid-cols-5 gap-6">
        <div>
          <img src={logo1} alt="" className="inline" />
        </div>
        <div>
          <img src={logo2} alt="" className="inline" />
        </div>
        <div>
          <img src={logo3} alt="" className="inline" />
        </div>
        <div>
          <img src={logo4} alt="" className="inline" />
        </div>
        <div>
          <img src={logo5} alt="" className="inline" />
        </div>
      </div>
    </div>
  );
}

export default Client;
