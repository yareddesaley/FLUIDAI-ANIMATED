import React from "react";
import Nav_bar from "../assets/Nav_.png";
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 overflow-x-clip w-full">
      <div>
        <div className="md:hidden">
          <img src={Nav_bar} alt="" className="h-6 mt-8" />
        </div>
        <div className="hidden md:flex justify-between ml-10 mr-16 py-5 text-white text-sm">
          <div className="flex gap-14">
            <button>Our Features</button>
            <button>Areas</button>
          </div>
          <div className="flex gap-14">
            <button>FAQs</button>
            <button>The Waitlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
