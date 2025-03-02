import React from "react";

export const Navbar = () => {
  return (
    
    <>

    <div className="container items-center justify-center mx-auto flex ">

    <nav className="container flex justify-between items-center px-6 py-4 bg-gray-900 text-white border border-gray-500 rounded-2xl mt-4  w-250 h-16">
      <div className="dev-name text-lg font-bold">AADIL ASLAM</div>

      <div className="flex space-x-6">
        <a href="#services" className="text-sm hover:text-purple-400 nav-link">
          SERVICES
        </a>
        <a href="#technologies" className="text-sm hover:text-purple-400 nav-link">
          TECHNOLOGIES
        </a>
        <a href="#portfolio" className="text-sm hover:text-purple-400 nav-link">
          PORTFOLIO
        </a>
        <a href="#contact" className="text-sm hover:text-purple-400 nav-link">
          CONTACT
        </a>
      </div>

      <div className="languages">
        <button className="bg-transparent border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300">
          ENG <span className="text-purple-400">▼</span>
        </button>
      </div>
    </nav>
    </div>
    
    
    </>
   
  );
};