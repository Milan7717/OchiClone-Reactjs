import React from "react";

const Eyes = () => {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className=' relative w-full  h-full bg-cover bg-center bg-[url("https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=")]'>
        <div className="absolute flex  gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
                <div className="line w-full h-10 bg-red-500">

              <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
            </div>
          </div>
          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
              <div className="w-1/4 h-1/4 rounded-full bg-zinc-100"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Eyes;
