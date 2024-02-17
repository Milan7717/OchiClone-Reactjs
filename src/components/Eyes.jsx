import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle -180);
    });
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className=' relative w-full  h-full bg-cover bg-center bg-[url("https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=")]'>
        <div className="absolute flex  gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
              <div style={{transform:`translate(0%,0%) rotate(${rotate}deg)`}} className="line w-full h-10">
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
              <div style={{transform:`translate(0%,0%) rotate(${rotate}deg)`}} className="line w-full h-10">
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Eyes;
