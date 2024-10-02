import React, { useRef } from "react";
import phone2 from "../assets/Phone2.png";
import { useInView, motion } from "framer-motion";
const Ourfeaturetwo = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: false });

  return (
    <div className=" mt-20 flex justify-end">
      <div
        ref={scrollRef}
        className="flex flex-col-reverse md:flex md:flex-row-reverse justify-center gap-10 items-center overflow-x-clip md:ml-20"
      >
        <motion.div
          initial={{ translateX: "200px" }}
          animate={isInView ? { translateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          className="w-full md:w-1/4 md:-mr-96 "
        >
          <div className="font-semibold text-2xl text-center md:text-left">
            Fluid AI: Simplify, Organize, and Achieve More
          </div>
          <br />
          <div className="text-gray-400 px-4 md:px-0 text-center md:text-left">
            In a world where daily tasks, communication, and goals often become
            overwhelming, Fluid AI offers an innovative solution. Combining
            advanced AI technology with a user-friendly interface, it brings
            together to-do lists, chats, saved items, and bucket lists into one
            seamless platform.
          </div>
        </motion.div>
        <motion.div
          initial={{ translateX: "-200px" }}
          animate={isInView ? { translateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
        >
          <img src={phone2} alt="Phone" className="w-64 " />
        </motion.div>
      </div>
    </div>
  );
};

export default Ourfeaturetwo;
