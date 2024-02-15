import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 ">
      <div className="textstructure mt-32 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((items, index) => {
          return (
            <div key={index} className="masker">
              <h1 className="uppercase text-7xl leading-[4.5vw] tracking-tighter font-['Fponders_Grotesk']  font-semibold">
                {items}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {items}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2  text-md uppercase font-light  border-[1px] border-zinc-500 rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center  border-[1px] border-zinc-500  rounded-full">
          <span className="rotate-[45deg]" ><FaArrowUpLong /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
