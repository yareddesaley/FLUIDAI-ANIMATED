import React, { useEffect, useRef, useState } from "react";

import work_time from "../assets/work-time.jpg";
import family from "../assets/family.png";
import friends from "../assets/friends.jpeg";
import arrow_left from "../assets/arrow-l.png";
import arrow_right from "../assets/arrow-r.png";

const images = [work_time, family, friends];

import { useInView, motion } from "framer-motion";
import { form } from "framer-motion/client";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: false });

  useEffect(() => {
    if (isInView) nextImage();
  }, [isInView]);

  return (
    <div ref={scrollRef} className="flex justify-center">
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "90vw",
          height: "600px",
        }}
      >
        <motion.div
          key={currentIndex}
          initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }} // Different start positions
          animate={{ x: "0%", opacity: 1 }} // Animate to the center
          exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }} // Exit depending on direction
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth transition
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <button
          onClick={prevImage}
          className="bg-black bg-opacity-30 rounded py-1 px-2 left-2"
          style={buttonStyle}
        >
          <img src={arrow_left} alt="arrow" className=" h-5" />
        </button>
        <button
          onClick={nextImage}
          className="bg-black bg-opacity-30 rounded py-1 px-2"
          style={{ ...buttonStyle, right: "10px" }}
        >
          <img src={arrow_right} alt="arrow" className=" h-5" />
        </button>

        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center items-center">
            <div className="flex space-x-4 items-center bg-black bg-opacity-25 p-2 rounded-full">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={
                    "w-2 h-2 rounded-full " +
                    (currentIndex === index ? "bg-white" : "bg-gray-400")
                  }
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
};

const Modernlife = () => {
  return (
    <div className="mt-48">
      <div className="font-semibold text-4xl w-full px-4 md:px-0 md:w-1/2 ml-0 md:ml-20 ">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </div>
      <br />
      <div>
        {/* <img src={work_time} alt="work time" /> */}
        <Carousel />
      </div>
    </div>
  );
};

export default Modernlife;
