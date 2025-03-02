import React from "react";
import Image from '../assets/MyImage.png';

export const NavCont = () => {
  return (
    <div className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Background with subtle code-like text */}
      <div className="absolute inset-0 bg-gray-900 opacity-90 flex items-center justify-center overflow-hidden">
        <div className="absolute text-gray-600 text-xs opacity-20">
          <span>console.log</span> <span></span> <span>npm install</span> 
          <span>class="container"</span> <span>Mobile First</span> <span>/</span>
        </div>
      </div>

      {/* Main content with flex layout for left and right sections */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto py-12 px-4">
        {/* Left section: Text and button */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-left">
          <h1 className="text-7xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            BACKEND DEVELOPER
          </h1>
          <p className="text-lg md:text-base mb-6 max-w-md mt-8 md:mt-16">
            I am Aadil - a web developer with a passion for creating beautiful and responsive websites.
          </p>
          <a
            href="#portfolio"
            className="custom-button mt-8 md:mt-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg md:text-base font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 shadow-lg shadow-pink-500/50"
          >
            VIEW MY WORK
          </a>
        </div>

        {/* Right section: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-500 opacity-70 overflow-hidden">
            <img
              src={Image}
              alt="Aadil Aslam"
              className="w-80  object-conatin "
            />
          </div>
        </div>
      </div>
    </div>
  );
};