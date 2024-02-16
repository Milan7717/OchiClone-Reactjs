import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
        blanditiis, provident nostrum, modi similique dolorum vitae adipisci
        asperiores quam dolore enim? Magnam id vero eius blanditiis nihil
        consequuntur soluta natus dicta repellendus, perspiciatis quisquam!
        Laborum eos amet nobis illum suscipit quidem, odit numquam unde facere.
        Laborum vel sapiente nostrum animi!
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-10 border-[#b3ce58]">
        <div className="w-1/2 ">
          <h1 className=" text-6xl">Our approach: </h1>
          <button className="uppercase flex gap-5 items-center px-4 py-4 bg-zinc-900 rounded-full text-white">
            Read More <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-2xl bg-[#a1b653] "></div>
      </div>
    </div>
  );
};

export default About;
