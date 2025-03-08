import React from "react";


export const Portfolio = ({ projects }) => {
  return (
    <div className="relative w-full bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 opacity-95"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title with gradient text */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-12 text-center">
          PORTFOLIO
        </h1>

     
      </div>
    </div>
  );
};

