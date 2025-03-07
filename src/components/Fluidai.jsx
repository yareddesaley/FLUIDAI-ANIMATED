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
        <div className="min-h-screen w-full pt-32 md:pt-64">
          <div className="relative w-full overflow-x-clip">
            {/* First Card */}
            <motion.div
              initial={{ translateX: "-100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="h-32 md:h-64 w-32 md:w-48 absolute -left-10 md:left-32 top-5 rounded-lg bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${scroll_img_one})`,
                backgroundSize: "210%",
              }}
            >
              <div className="relative h-full w-full">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-20 p-2 flex flex-col justify-between">
                  <div className="flex space-x-2 justify-between items-center">
                    <div className="text-[14px] text-white bg-[#805937] rounded-xl px-3 py-1">
                      Restaurant
                    </div>
                    <div className="flex flex-col items-center space-y-1 pr-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-[3px] w-[3px] bg-white rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="text-white">
                    <div className="text-lg">Clap Dubai</div>
                    <div className="flex space-x-1 items-center text-sm">
                      <div>4.4</div>
                      <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
                      <div>$$$$</div>
                      <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
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
              className="h-64 w-56 absolute top-80 mb-20 left-3/4 rounded-lg bg-no-repeat"
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
                    <div className="text-sm">Reservations</div>
                    <div className="text-xl text-white">Restaurant Le Bous</div>
                    <div className="flex space-x-1 items-center text-sm">
                      <div>
                        <img
                          src={clock}
                          alt="clock"
                          className="font-semibold h-5 w-5 rounded-full"
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
              className="absolute text-white top-5 left-3/4 bg-black bg-opacity-35 py-1 px-3 rounded-2xl"
            >
              <p className="text-gray-400">Next To-Do</p>
              <h1 className="font-semibold text-gray-100 text-lg">
                Renew car insurance
              </h1>
            </motion.div>

            {/* Upcoming Events Card */}
            <motion.div
              initial={{ translateX: "100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="absolute text-white top-28 right-0 bg-black bg-opacity-35 py-1 px-3 pt-2 rounded-2xl mr-3"
            >
              <div className="flex gap-0 pt-2 ml-28 w-10 h-5 rounded-full">
                <img src={s1} alt="" className="rounded-full -mr-3" />
                <img src={s2} alt="" className="rounded-full -mr-1" />
                <img src={s3} alt="" className="rounded-full w-1/2" />
              </div>
              <div className="pt-3">
                <p className="text-gray-400">Upcoming Events</p>
                <h1 className="font-semibold text-lg">Kite Beach</h1>
                <div className="flex gap-2">
                  <img
                    src={clock}
                    alt="clock"
                    className="font-semibold h-5 w-5 rounded-full"
                  />
                  <span>10:00-14:00</span>
                </div>
              </div>
            </motion.div>

            {/* Center Content */}
            <div className="absolute left-0 md:left-1/4 md:mr-28 text-white flex flex-col items-center md:gap-8">
              <h1 className="flex gap-2 items-center">
                <img src={logo} alt="logo" className="w-6 h-6 font-extrabolds" />
                <span className="text-2xl">Fluid AI</span>
              </h1>
              <h1 className="text-lg md:text-5xl w-1/2 font-semibold ml-36 flex flex-col items-center justify-center">
                <span>Unlock Seamless Efficiency</span>
              </h1>
              <button
                ref={scrollImageOneRef}
                className="px-3 md:py-2 md:px-8 ml-36 bg-white text-black rounded-3xl outline-none font-bold mr-20"
              >
                Join Waitlist
              </button>
            </div>

            {/* Additional Cards */}
            <motion.div
              initial={{ translateX: "-100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="absolute text-white top-80 mb-10 bg-gray-500 bg-opacity-20 py-1 px-3 rounded-2xl"
            >
              <div className="flex gap-0 pt-2 ml-28 w-10 h-5 rounded-full">
                <img src={s1} alt="" className="rounded-full -mr-3" />
                <img src={s2} alt="" className="rounded-full -mr-1" />
                <img src={s3} alt="" className="rounded-full w-1/2" />
              </div>
              <div className="pt-3">
                <p className="text-gray-400">Upcoming Events</p>
                <h1 className="font-semibold text-lg">Kite Beach</h1>
                <div className="flex gap-2">
                  <img
                    src={clock}
                    alt="clock"
                    className="font-bold h-5 w-5 rounded-full"
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
                className="absolute top-96 left-32 mt-20"
              />
            </motion.div>

            {/* Additional Cards */}
            <motion.div
              initial={{ translateX: "-100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="py-2 px-4 bg-gray-500 bg-opacity-20 text-white rounded-2xl w-32 absolute top-96 left-60"
            >
              Cafe nearby
            </motion.div>
            <motion.div
              initial={{ translateX: "-100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="py-2 px-4 bg-gray-500 bg-opacity-20 text-white rounded-2xl w-32 absolute top-52 -left-16 pt-10"
            >
              Car insurance
            </motion.div>
            <motion.div
              initial={{ translateX: "100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="py-2 px-4 bg-gray-500 bg-opacity-20 text-white rounded-2xl w-32 absolute top-60 right-0"
            >
              Book a flight
            </motion.div>
            <motion.div
              initial={{ translateX: "100vw" }}
              animate={isInView ? { translateX: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
              className="py-1 px-1 bg-gray-500 bg-opacity-20 text-white rounded-2xl w-24 absolute top-72 right-10"
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