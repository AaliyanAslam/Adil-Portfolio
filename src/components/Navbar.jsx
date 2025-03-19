import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const navItems = [
    { href: "/", label: "ME" },
    { href: "/expertise", label: "MY SERVICES" },
    { href: "/Technology", label: "TECHNOLOGIES" },
    { href: "/contact", label: "CONTACT" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/adilCodeMaverick1" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/adilaslam123" },
  ];

  return (
    <div className="relative container mx-auto px-4">
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white border border-gray-500 rounded-2xl mt-4 relative z-50">
        {/* Logo */}
        <div className="text-lg font-bold">AADIL ASLAM</div>

        {/* Hamburger Button */}
        <button
          className="custom-button lg:hidden w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {navItems.map((item) => (
            <Link
              to={item.href}
              key={item.label}
              className="text-white hover:text-purple-400 transition duration-300"
            >
              {item.label}
            </Link>
          ))}
          <div className="relative ml-6">
            <button
              className="custom-button bg-transparent border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
              onClick={() => setIsSocialOpen(!isSocialOpen)}
            >
              Socials <span className="text-purple-400">▼</span>
            </button>
            {isSocialOpen && (
              <div className="absolute top-full mt-2 w-28 bg-gray-900 border border-gray-500 rounded-lg shadow-lg">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-purple-400 transition duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            )}
          </div>
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
            <Link
              to={item.href}
              key={item.label}
              className="text-white text-lg hover:text-purple-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative">
            <button
              className="custom-button bg-transparent border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 w-full text-left"
              onClick={() => setIsSocialOpen(!isSocialOpen)}
            >
              Socials <span className="text-purple-400">▼</span>
            </button>
            {isSocialOpen && (
              <div className="mt-2 w-full bg-gray-900 border border-gray-500 rounded-lg shadow-lg">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-purple-400 transition duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => {
            setIsOpen(false);
            setIsSocialOpen(false);
          }}
        />
      )}
    </div>
  );
};