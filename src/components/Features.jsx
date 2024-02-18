import { motion, useAnimation } from "framer-motion";
import React from "react";
import { Power4 } from "gsap/all";

const Features = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div data-scroll data-scroll-section className="w-full py-16">
      <div className="w-full px-16 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[60vh]"
          >
            <h1 className="absolute flex left-full overflow-hidden text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 uppercase z-[9] text-6xl leading-none font-['Founders_Grotesk_X-Condensed']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: Power4.easeIn, delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card scale-50 rounded-xl bg-zinc-300 overflow-hidden w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw"
                className="w-full h-full bg-cover object-center"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[60vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 uppercase z-[9] text-6xl leading-none font-['Founders_Grotesk_X-Condensed']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" card scale-50 rounded-xl bg-zinc-300 overflow-hidden w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw"
                className="w-full h-full bg-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
