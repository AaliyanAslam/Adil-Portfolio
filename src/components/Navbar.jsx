import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "SERVICES" },
    { href: "/contact", label: "TECHNOLOGIES" },
    { href: "#portfolio", label: "PORTFOLIO" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white border border-gray-500 rounded-2xl mt-4">
        {/* Logo */}
        <div className="text-lg font-bold">AADIL ASLAM</div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white custom-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 relative z-10" />
          ) : (
            <Bars3Icon className="w-6 h-6 relative z-10" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
        
          {navItems.map((item) => (
            // <a
            //   key={item.label}
            //   href={item.href}
            //   className="text-sm hover:text-purple-400 transition-colors duration-300"
            // >
            //   {item.label}
            // </a>
            <Link to={item.href}>{item.label}</Link>
          ))}
          <button className=" custom-button bg-transparent border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 ml-6">
            ENG <span className="text-purple-400">▼</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-500 transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-16">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-sm hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className=" custom-button bg-transparent border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 w-full text-left">
            ENG <span className="text-purple-400">▼</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};