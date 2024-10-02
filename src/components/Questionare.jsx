import React, { useRef } from "react";

import { useInView, motion } from "framer-motion";

const Questionare = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: false });

  return (
    <div>
      <div
        ref={scrollRef}
        className="flex flex-col md:flex-row justify-between gap-20 mx-5 md:mx-10 mt-28 overflow-x-clip"
      >
        <motion.div
          initial={{ translateX: "-200px" }}
          animate={isInView ? { translateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          className="w-full md:w-1/4 text-gray-400 text-left "
        >
          <span className="font-semibold text-4xl text-white">
            What can curiosity, wonder, and awe do for you?
            <br />{" "}
          </span>{" "}
          <br />
          Research shows that experiencing curiosity and awe can immensely
          benefit our mental, physical, and professional health. Here’s a brief
          overview of what curiosity and awe can do for you.
        </motion.div>
        <motion.div
          initial={{ translateX: "200px" }}
          animate={isInView ? { translateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="flex justify-between">
            <div>Does Fluid AI increase wellbeing and meaning in life?</div>
            <div>+</div>
          </div>
          <hr className="w-full border-t-2 border-gray-500 mb-3 mt-1" />
          <div className="flex justify-between">
            <div>What can curiosity, wonder, and awe do for you?</div>
            <div>+</div>
          </div>
          <hr className="w-full border-t-2 border-gray-500 mb-3 mt-1" />
          <div className="flex justify-between">
            <div>Does Fluid AI increase wellbeing and meaning in life?</div>
            <div>+</div>
          </div>
          <hr className="w-full border-t-2 border-gray-500 mb-3 mt-1" />
          <div className="flex justify-between">
            <div>What can curiosity, wonder, and awe do for you?</div>
            <div>+</div>
          </div>
          <hr className="w-full border-t-2 border-gray-500 mb-3 mt-1" />
          <div className="flex justify-between">
            <div>Does Fluid AI increase wellbeing and meaning in life?</div>
            <div>+</div>
          </div>
          <hr className="w-full border-t-2 border-gray-500 mb-3 mt-1" />
          <div className="flex justify-between">
            <div>What can curiosity, wonder, and awe do for you?</div>
            <div>+</div>
          </div>
          <hr className="w-full border-t-2 border-gray-500 mb-3 mt-1" />
          <div className="flex justify-between">
            <div>Does Fluid AI increase wellbeing and meaning in life?</div>
            <div>+</div>
          </div>
          <hr className="w-full border-t-2 border-gray-500 mb-3 mt-1" />
          <div className="flex justify-between">
            <div>What can curiosity, wonder, and awe do for you?</div>
            <div>+</div>
          </div>
          <hr className="w-full border-t-2 border-gray-500 mb-3 mt-1" />
        </motion.div>
      </div>
    </div>
  );
};

export default Questionare;
