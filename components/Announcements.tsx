"use client"
import React from "react";
import Marquee from "react-fast-marquee";
const Announcements = () => {
  return (
    <Marquee gradient={false} className="">
      <div className="  flex justify-between items-center py-[0.5rem] px-0 text-[15px]">
        <div className="flex  items-center mr-[2rem] ">
          <span className="mr-[2rem]">ORDER NOW !!</span>
          <span className="mr-[2rem]">FREE DELIVERY</span>
          <span className="mr-[2rem]">ORDER NOW !!</span>
          <span className="mr-[2rem]">GET UPTO 80% OFF ON FIRST ORDER</span>
        </div>
        <div className=" flex justify-between items-center py-[0.5rem] px-0 text-[15px]">
          <div className="flex  items-center mr-[2rem] ">
            <span className="mr-[2rem]">ORDER NOW!!</span>
            <span className="mr-[2rem]">DEALS WEEK</span>
            <span className="mr-[2rem]">ORDER NOW!!</span>
            <span className="mr-[2rem]">GET UPTO 80% OFF ON FIRST ORDER</span>
          </div>
          <div className="flex items-center mr-[2rem] ">
            <span className="mr-[2rem]">ORDER NOW!!</span>
            <span className="mr-[2rem]">BUY 2 GET 1 FREE</span>
            <span className="mr-[2rem]">ORDER NOW!!</span>
            <span>BUY 2 GET 1 FREE</span>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default Announcements;
