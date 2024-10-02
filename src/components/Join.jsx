import React, { useRef, useState } from "react";
// import poland from "../assets/poland.jpg";
// import France from "../assets/France.jpg";
// import UAE from "../assets/UAE.jpg";
// import USA from "../assets/USA.jpg";

import ReactFlagsSelect from "react-flags-select";

import { useInView, motion } from "framer-motion";

const Join = () => {
  // const countries = [
  //   { name: "United Arab eEmirates", flag: UAE },
  //   { name: "USA", flag: USA },
  //   { name: "poland", flag: poland },
  //   { name: "france", flag: France },
  // ];

  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: false });

  const [country, setCountry] = useState("US");

  return (
    <div
      ref={scrollRef}
      className="mt-28 h-screen text-white pt-20 mx-3 md:mx-0 overflow-x-clip"
    >
      <motion.div
        initial={{ translateX: "-200px" }}
        animate={isInView ? { translateX: 0 } : {}}
        transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
        className="w-full md:w-1/3 md:ml-20 "
      >
        <h1 className="font-semibold text-5xl text-white md:ml-0">
          Join the Fluid AI Waitlist Today!
        </h1>
        <input
          type="text"
          placeholder="Name"
          className="border-b-2 border-gray-300 outline-none w-full md:w-4/5 mt-8 bg-transparent"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b-2 border-gray-300 outline-none w-full md:w-4/5 mt-8 bg-transparent"
        />
        {/* <select
          name=""
          id=""
          className="border-b-2 border-gray-300 outline-none w-4/5 mt-8 bg-transparent text-white"
        >
          {countries.map((country) => (
            <option value="" className="bg-gray-600 text-white">
              <img
                src={country.flag}
                alt="flag "
                className="w-12 h-12 rounded-full"
              />{" "}
              {country.name}
            </option>
          ))}
        </select> */}
        <div className=" border-b-2 border-gray-300 outline-none w-full md:w-4/5 mt-8">
          <ReactFlagsSelect
            selectButtonClassName="menu-flags-button"
            className="menu-flags"
            countries={["US", "FR", "DE", "GB"]}
            customLabels={{
              US: "US",
              FRANCE: "🇫🇷",
              Belgium: "🇩🇪",
              England: "🇬🇧",
            }}
            selected={country}
            onSelect={(code) => setCountry(code)}
            x
            placeholder="" // Remove the placeholder text
            styles={{
              border: "none", // Remove the border
              outline: "none", // Remove the outline
              boxShadow: "none", // Remove any shadow
            }}
          />
        </div>
        <br />
        <br />
        <button className="py-1 px-4 bg-white text-black shadow-2xl shadow-slate-200 rounded-2xl text-sm ">
          Join Waitlist
        </button>
        <br />
        <br />
      </motion.div>
    </div>
  );
};

export default Join;
