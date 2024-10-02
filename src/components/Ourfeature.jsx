import React, { useRef } from "react";
import phone1 from "../assets/Phone1.png";

import { motion, useInView } from "framer-motion";

const Ourfeature = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: false });

  return (
    <div>
      <div className="mt-96 md:mt-0 w-full ml-auto flex flex-col justify-center items-center gap-10">
        <h3 className="text-gray-400"> Our Feature</h3>
        <h1 className="font-semibold text-xl md:text-5xl w-1/2 mb-20 ml-0 md:ml-48 text-center md:text-left">
          Fluid AI was born out of a desire to simplify and streamline modern
          life
        </h1>
      </div>

      <div
        ref={scrollRef}
        className="flex flex-col-reverse md:flex md:flex-row md:justify-center  gap-10  items-center overflow-x-clip"
      >
        <motion.div
          initial={{ translateX: "-200px" }}
          animate={isInView ? { translateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          className="w-full md:w-1/4 md:-ml-72"
        >
          <div className="font-semibold text-2xl w-full md:w-3/4 text-center md:text-left">
            Fluid AI: Simplify, Organize, and Achieve More
          </div>
          <br />
          <div className="text-gray-40 text-center px-4 md:px-0 md:text-left">
            In a world where daily tasks, communication, and goals often become
            overwhelming, Fluid AI offers an innovative solution. Combining
            advanced AI technology with a user-friendly interface, it brings
            together to-do lists, chats, saved items, and bucket lists into one
            seamless platform.
          </div>
        </motion.div>
        <motion.div
          initial={{ translateX: "200px" }}
          animate={isInView ? { translateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
        >
          <img src={phone1} alt="Phone" className="w-64" />
        </motion.div>
      </div>
    </div>
  );
};

export default Ourfeature;
