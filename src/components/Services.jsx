import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const Services = () => {
  return (
    <div className="relative w-full bg-gray-900 text-white py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 opacity-95"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title with gradient text */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-16 text-center">
          MY SERVICES
        </h1>

        {/* Services flow layout */}
        <div className="flex flex-col items-center">
          {/* First service (left) */}
          <div className=" absolute left-230 top-49">
            <div className="w-0 border h-28.5 opacity-15"></div>
          </div>
          <div className=" absolute left-57.5 top-98">
            <div className=" hidden md:block w-0 border h-45 opacity-15"></div>
          </div>
          <div className="flex w-full justify-start mb-8">
            <div className="w-full md:w-1/2 lg:w-2/5 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition duration-300">
              <div className="flex items-center mb-4">
                <span className="text-blue-400 text-2xl mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </span>
                <h2 className="text-xl font-semibold text-blue-400">
                Custom Web Application Development
                </h2>
              </div>
              <p className="text-gray-300">
              Develop scalable and secure web applications using Laravel and modern JavaScript frameworks like React or Vue.
              </p>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block w-115 border h-0 opacity-15"></div>
            </div>
          </div>

          {/* Connector line 1 */}

          {/* Second service (right) */}

          <div className="flex w-full justify-end mb-8">
            <div className="flex items-center">
              <div className="hidden md:block w-115 border h-0 opacity-15"></div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition duration-300">
              <div className="flex items-center mb-4">
                <span className="text-blue-400 text-2xl mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </span>
                <h2 className="text-xl font-semibold text-blue-400">
                API Development & Integration
                </h2>
              </div>
              <p className="text-gray-300">
              Design, develop, and integrate RESTful and GraphQL APIs to facilitate seamless communication between web applications and third-party services.
              </p>
            </div>
          </div>

          {/* Connector line 2 */}
          <div className="w-2 h-16 bg-blue-500 md:ml-[20%]"></div>

          {/* Third service (left) */}
          <div className="flex w-full justify-start">
            <div className="w-full md:w-1/2 lg:w-2/5 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition duration-300">
              <div className="flex items-center mb-4">
                <span className="text-blue-400 text-2xl mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                    />
                  </svg>
                </span>
                <h2 className="text-xl font-semibold text-blue-400">
                Code Refactoring & Performance Optimization
                </h2>
              </div>
              <p className="text-gray-300">
              Refactor existing Laravel applications to improve code quality, performance, and security following best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
