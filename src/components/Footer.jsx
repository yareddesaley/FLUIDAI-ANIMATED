import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-black h-96 pt-10 pl-10 text-white flex flex-col md:flex-row justify-between ">
      <div>
        <h1 className="flex gap-2 items-center mb-6">
          <img src={logo} alt="logo" className="w-6 h-6 font-extrabolds" />
          <span className="text-2xl">Fluid AI</span>
        </h1>
        <span className="text-xs">2024 FLUID ID</span>
      </div>
      <div className="flex gap-48 mr-14 text-gray-400">
        <div>
          <h1>Our Feature</h1>
          <h1>Areas</h1>
          <h1>FAQs</h1>
          <h1>The Waitlist</h1>
          <h1>Contact Us</h1>
        </div>
        <div>
          <h1>Terms of Service</h1>
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
