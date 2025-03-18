import React from "react";

export const Portfolio = ({ projects = [] }) => {
  return (
    <div className="relative w-full bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" id="portfolio">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 opacity-95"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title with gradient text */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-12 text-center">
          PORTFOLIO
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-pink-400">{project.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-pink-500 hover:text-pink-400"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
