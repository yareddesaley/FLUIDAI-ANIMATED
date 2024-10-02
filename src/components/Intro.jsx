import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.max(1 - scrollY / 700, 0);
  const translateY = scrollY * 1.3;

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="flex space-x-3"
        animate={{ scale, translateY }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        <div className="w-10 md:w-24">
          <img src={logo} alt="logo" className="font-extrabold" />
        </div>
        <h1 className="text-4xl md:text-8xl text-white font-semibold">
          Fluid AI
        </h1>
      </motion.div>
    </div>
  );
};

export default Intro;
