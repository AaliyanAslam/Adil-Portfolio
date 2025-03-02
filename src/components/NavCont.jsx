import React from "react";
import Image from '../assets/MyImage.png'


export const NavCont = () => {
  return (
    <div className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Background with subtle code-like text (simulated with Tailwind classes) */}
      <div className="absolute inset-0 bg-gray-900 opacity-90 flex items-center justify-center overflow-hidden">
        <div className="absolute text-gray-600 text-xs opacity-20">
          <span>console.log</span> <span></span> <span>npm install</span> 
          <span>class="container"</span> <span>Mobile First</span> <span>/</span>
        </div>
      </div>

      {/* Main content with flex layout for left and right sections */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-start max-w-6xl mx-auto mt-18 py-12 px-4">
        {/* Left section: Text and button */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <h1 className="text-7xl font- bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            BACKEND DEVELOPER
          </h1>
          <p className="text-lg mb-6 max-w-md mt-16">
            I am Aadil - a web developer with a passion for creating beautiful and responsive websites.
          </p>
          <a
            href="#portfolio"
            className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 shadow-lg shadow-pink-500/50"
          >
            VIEW MY WORK
          </a>
        </div>

      
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative  inset-0 rounded-full border-4 border-purple-500 opacity-70">
            <img
              src={Image} 
              alt="Aadil Aslam"
              className="w-100 h-100  object-contain"
            />
            {/* <div className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-30"> */}
                
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};