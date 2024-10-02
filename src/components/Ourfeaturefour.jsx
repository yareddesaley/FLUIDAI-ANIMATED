import React, { useRef } from "react";
import phone4 from "../assets/Phone4.png";
import { useInView, motion } from "framer-motion";
const Ourfeaturefour = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: false });

  return (
    <div>
      <div className=" mt-20">
        <div
          ref={scrollRef}
          className=" ml-0 md:ml-20  flex flex-col-reverse md:flex-row justify-center gap-10 items-center overflow-x-clip"
        >
          <motion.div
            initial={{ translateX: "-200px" }}
            animate={isInView ? { translateX: 0 } : {}}
            transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
            className="w-full md:w-1/4  mr-0"
          >
            <div className="font-semibold text-2xl text-center md:text-left">
              Fluid AI: Simplify, Organize, and Achieve More
            </div>
            <br />
            <div className="text-gray-400 px-4 md:px-0 text-center md:text-left">
              In a world where daily tasks, communication, and goals often
              become overwhelming, Fluid AI offers an innovative solution.
              Combining advanced AI technology with a user-friendly interface,
              it brings together to-do lists, chats, saved items, and bucket
              lists into one seamless platform.
            </div>
          </motion.div>
          <motion.div
            initial={{ translateX: "200px" }}
            animate={isInView ? { translateX: 0 } : {}}
            transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          >
            <img src={phone4} alt="Phone" className="w-64" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Ourfeaturefour;
