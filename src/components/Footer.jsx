import React from "react";
import Box from "../assets/svg/Britlex.svg";
const Footer = () => {
  return (
    <footer className="w-full max-w-[1338px] mx-auto px-4 mt-10">
      <div className="w-full h-[1px] bg-gray-200 mb-10"></div>

      <div className="flex flex-col md:flex-row justify-between items-center pb-12 gap-6">
        <div className="text-2xl font-bold text-gray-800">
          <img src={Box} alt="" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-500 font-medium">
          <a href="#" className="hover:text-gray-800 transition-colors">
            Terms and Conditions
          </a>
          <span className="hidden md:inline text-gray-300">•</span>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
          <span className="hidden md:inline text-gray-300">•</span>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
