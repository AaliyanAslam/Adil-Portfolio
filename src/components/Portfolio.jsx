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

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Website preview image */}
              <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project title and description */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech stack badge */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
                    Website Coding
                  </span>
                  <span className="text-gray-400 text-xs">
                    ({project.tech.join(", ")})
                  </span>
                </div>
              </div>

              {/* Diagonal line effect (optional, for visual style) */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500 to-transparent opacity-30 transform rotate-45"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

