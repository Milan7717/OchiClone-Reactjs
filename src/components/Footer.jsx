import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex gap-5 h-screen p-16 bg-zinc-900  font-['Founders_Grotesk_X-Condensed'] ">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="uppercase text-[7vw] font-semibold leading-none -mb-5 ">
            Eye
          </h1>
          <h1 className="uppercase text-[7vw] font-semibold leading-none -mb-5   ">
            Opening
          </h1>
        </div>
        <h3>Ochi</h3>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="uppercase text-[5vw] font-semibold leading-none -mb-5 ">
            Presentations
            <div className="dets font-['Neue_Montreal'] mt-10">
              <Link to={"facebook"} className="block text-xl font-light m-2">
                Facebook
              </Link>
              <Link to={"linkedin"} className="block text-xl font-light m-2">
                LinkedIn
              </Link>
              <Link to={"Github"} className="block text-xl font-light m-2">
                GitHub
              </Link>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
