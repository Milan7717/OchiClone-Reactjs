import React from "react";

const Endcard = () => {
  return (
    <div className=" w-full h-screen flex items-center gap-5 px-32 bg-zinc-900">
      <div className="cardcontainer  h-[50vh] w-1/2 ">
        <div className="card relative rounded-xl w-full flex items-center justify-center h-full bg-[#004D43]">
          <img
            className="w-32 rounded-xl "
            src="https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg"
            alt=""
            srcset=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2024
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2 ">
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#192826]">
          <img
            className="w-32 rounded-xl"
            src="https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg"
            alt=""
            srcset=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2024
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#192826]">
          <img
            className="w-32 rounded-xl "
            src="https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg"
            alt=""
            srcset=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2024
          </button>
        </div>
      </div>
    </div>
  );
};

export default Endcard;
