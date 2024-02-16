import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-10 rounded-tl-4xl  bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[15vw] leading-none font-["Founders_Grotesk _X_Condensed"] font-semibold uppercase pt-10'
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[15vw] leading-none font-["Founders_Grotesk _X_Condensed"] font-semibold uppercase pt-10'
        >
          We are Ochi
        </motion.h1>
      
      </div>
    </div>
  );
};

export default Marquee;
