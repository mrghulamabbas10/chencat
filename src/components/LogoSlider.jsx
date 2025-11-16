import React from "react";
import Marquee from "react-fast-marquee";

export default function LogoSlider() {
  return (
    <div className="border-y border-[#FFFFFF1A] py-5 mt-24 md:mt-32">
      <Marquee>
        <div className="flex items-center">
          <img src="/images/logo1.png" alt="" className="md:w-[11vw] w-[35vw] ml-20" />
          <img src="/images/logo2.png" alt="" className="md:w-[13vw] w-[35vw] ml-20" />
          <img src="/images/logo3.png" alt="" className="md:w-[13vw] w-[35vw] ml-20" />
          <img src="/images/logo4.png" alt="" className="md:w-[13vw] w-[35vw] ml-20" />
          <img src="/images/logo5.png" alt="" className="md:w-[11vw] w-[35vw] ml-20" />
          <img src="/images/logo6.png" alt="" className="md:w-[13vw] w-[35vw] ml-20" />  
        </div>
      </Marquee>
    </div>
  );
}
