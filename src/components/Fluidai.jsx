import React, { useRef } from "react";
import scroll_img_one from "../assets/t1.png";
import scroll_img_two from "../assets/t2.png";
import logo from "../assets/logo.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import clock from "../assets/clock.png";
import flight from "../assets/flight.png";
import { motion, useInView } from "framer-motion";
import scroll_one from "../assets/svgs/gradient-bg.svg";

const Fluidai = () => {
  const scrollImageOneRef = useRef(null);
  const isInView = useInView(scrollImageOneRef, { once: false });

  return (
    <div className="relative mb-96 md:mb-48 overflow-x-clip">
      {/* Background Image */}
      <div>
        <img src={scroll_one} alt="background" className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <div className="absolute top-0 left-0 right-0 flex items-center">
        <div className="min-h-screen w-full pt-20 md:pt-64">
          <div className="relative w-full overflow-x-clip">
            {/* First Card */}
            <motion.div
              initial={{ translateX: "-100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="h-24 md:h-64 w-24 md:w-48 absolute left-4 md:left-32 top-5 rounded-lg bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${scroll_img_one})`,
                backgroundSize: "210%",
              }}
            >
              <div className="relative h-full w-full">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-20 p-2 flex flex-col justify-between">
                  <div className="flex space-x-2 justify-between items-center">
                    <div className="text-[12px] md:text-[14px] text-white bg-[#805937] rounded-xl px-2 py-1">
                      Restaurant
                    </div>
                    <div className="flex flex-col items-center space-y-1 pr-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-[2px] w-[2px] md:h-[3px] md:w-[3px] bg-white rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="text-white">
                    <div className="text-sm md:text-lg">Clap Dubai</div>
                    <div className="flex space-x-1 items-center text-xs md:text-sm">
                      <div>4.4</div>
                      <div className="h-[2px] w-[2px] md:h-[3px] md:w-[3px] bg-white rounded-full"></div>
                      <div>$$$$</div>
                      <div className="h-[2px] w-[2px] md:h-[3px] md:w-[3px] bg-white rounded-full"></div>
                      <div>Japanese</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              initial={{ translateX: "100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="h-32 md:h-64 w-32 md:w-56 absolute top-48 md:top-80 left-1/2 md:left-3/4 rounded-lg bg-no-repeat"
              style={{
                backgroundImage: `url(${scroll_img_two})`,
                backgroundSize: "360%",
                backgroundPosition: "20% center",
              }}
            >
              <div className="relative h-full w-full">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60 rounded-lg"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-20 p-2 flex flex-col justify-end">
                  <div className="text-gray-300">
                    <div className="text-xs md:text-sm">Reservations</div>
                    <div className="text-sm md:text-xl text-white">
                      Restaurant Le Bous
                    </div>
                    <div className="flex space-x-1 items-center text-xs md:text-sm">
                      <div>
                        <img
                          src={clock}
                          alt="clock"
                          className="font-semibold h-4 w-4 md:h-5 md:w-5 rounded-full"
                        />
                      </div>
                      <div>4 Oct 20:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Next To-Do Card */}
            <motion.div
              initial={{ translateX: "100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="absolute text-white top-5 left-1/2 md:left-3/4 bg-black bg-opacity-35 py-1 px-2 md:px-3 rounded-2xl text-xs md:text-sm"
            >
              <p className="text-gray-400">Next To-Do</p>
              <h1 className="font-semibold text-gray-100">Renew car insurance</h1>
            </motion.div>

            {/* Upcoming Events Card */}
            <motion.div
              initial={{ translateX: "100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="absolute text-white top-28 right-2 md:right-0 bg-black bg-opacity-35 py-1 px-2 md:px-3 pt-2 rounded-2xl mr-3 text-xs md:text-sm"
            >
              <div className="flex gap-0 pt-2 ml-20 md:ml-28 w-8 h-4 md:w-10 md:h-5 rounded-full">
                <img src={s1} alt="" className="rounded-full -mr-2 md:-mr-3" />
                <img src={s2} alt="" className="rounded-full -mr-1" />
                <img src={s3} alt="" className="rounded-full w-1/2" />
              </div>
              <div className="pt-2 md:pt-3">
                <p className="text-gray-400">Upcoming Events</p>
                <h1 className="font-semibold">Kite Beach</h1>
                <div className="flex gap-1 md:gap-2">
                  <img
                    src={clock}
                    alt="clock"
                    className="font-semibold h-4 w-4 md:h-5 md:w-5 rounded-full"
                  />
                  <span>10:00-14:00</span>
                </div>
              </div>
            </motion.div>

            {/* Center Content */}
            <div className="absolute left-0 md:left-1/4 md:mr-28 text-white flex flex-col items-center md:gap-8">
              <h1 className="flex gap-2 items-center">
                <img src={logo} alt="logo" className="w-4 h-4 md:w-6 md:h-6" />
                <span className="text-lg md:text-2xl">Fluid AI</span>
              </h1>
              <h1 className="text-sm md:text-5xl w-3/4 md:w-1/2 font-semibold text-center">
                Unlock Seamless Efficiency
              </h1>
              <button
                ref={scrollImageOneRef}
                className="px-3 py-1 md:py-2 md:px-8 bg-white text-black rounded-3xl outline-none font-bold text-xs md:text-sm"
              >
                Join Waitlist
              </button>
            </div>

            {/* Additional Cards */}
            <motion.div
              initial={{ translateX: "-100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="absolute text-white top-64 md:top-80 left-4 md:left-32 bg-gray-500 bg-opacity-20 py-1 px-2 md:px-3 rounded-2xl text-xs md:text-sm"
            >
              <div className="flex gap-0 pt-2 ml-20 md:ml-28 w-8 h-4 md:w-10 md:h-5 rounded-full">
                <img src={s1} alt="" className="rounded-full -mr-2 md:-mr-3" />
                <img src={s2} alt="" className="rounded-full -mr-1" />
                <img src={s3} alt="" className="rounded-full w-1/2" />
              </div>
              <div className="pt-2 md:pt-3">
                <p className="text-gray-400">Upcoming Events</p>
                <h1 className="font-semibold">Kite Beach</h1>
                <div className="flex gap-1 md:gap-2">
                  <img
                    src={clock}
                    alt="clock"
                    className="font-bold h-4 w-4 md:h-5 md:w-5 rounded-full"
                  />
                  <span>10:00-14:00</span>
                </div>
              </div>
            </motion.div>

            {/* Flight Icon */}
            <motion.div
              initial={{ translateX: "-100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
            >
              <img
                src={flight}
                alt="flight"
                className="absolute top-80 md:top-96 left-16 md:left-32 mt-10 md:mt-20 w-8 h-8 md:w-12 md:h-12"
              />
            </motion.div>

            {/* Additional Cards */}
            <motion.div
              initial={{ translateX: "-100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="py-1 px-2 md:py-2 md:px-4 bg-gray-500 bg-opacity-20 text-white rounded-2xl w-24 md:w-32 absolute top-96 left-16 md:left-60 text-xs md:text-sm"
            >
              Cafe nearby
            </motion.div>
            <motion.div
              initial={{ translateX: "-100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="py-1 px-2 md:py-2 md:px-4 bg-gray-500 bg-opacity-20 text-white rounded-2xl w-24 md:w-32 absolute top-52 -left-8 md:-left-16 pt-8 md:pt-10 text-xs md:text-sm"
            >
              Car insurance
            </motion.div>
            <motion.div
              initial={{ translateX: "100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="py-1 px-2 md:py-2 md:px-4 bg-gray-500 bg-opacity-20 text-white rounded-2xl w-24 md:w-32 absolute top-60 right-2 md:right-0 text-xs md:text-sm"
            >
              Book a flight
            </motion.div>
            <motion.div
              initial={{ translateX: "100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="py-1 px-1 md:py-1 md:px-1 bg-gray-500 bg-opacity-20 text-white rounded-2xl w-20 md:w-24 absolute top-72 right-4 md:right-10 text-xs md:text-sm"
            >
              Trip ideas
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fluidai;