import React from "react";

const Features = () => {
  return (
    <div className="w-full py-16">
      <div className="w-full px-16 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[60vh]">
          <h1 className="absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 uppercase z-[9] text-6xl leading-none font-['Founders_Grotesk_X-Condensed']">
              {"FYDE".split("").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className=" card scale-50 rounded-xl bg-zinc-300 overflow-hidden w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw"
                className="w-full h-full bg-cover object-center"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[60vh]">
            <h1 className="absolute right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 uppercase z-[9] text-6xl leading-none font-['Founders_Grotesk_X-Condensed']">
              {"VISE".split("").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className=" card scale-50 rounded-xl bg-zinc-300 overflow-hidden w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw"
                className="w-full h-full bg-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
