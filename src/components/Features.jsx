import React from "react";

const Features = () => {
  return (
    <div className="w-full py-16">
      <div className="w-full px-16 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="cards w-full flex gap-10">
        <div className="card w-1/2 h-[60vh] bg-red-500"></div>
        <div className="card w-1/2 h-[60vh] bg-red-500"></div>
      </div>
    </div>
  );
};

export default Features;
