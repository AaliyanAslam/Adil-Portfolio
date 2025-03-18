import React from "react";

export const Services = () => {
  return (
    <div className="relative w-full bg-gray-900 text-white py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 opacity-95"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title with gradient text */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-20 text-center">
          MY SERVICES
        </h1>

        {/* Services flow layout */}
        <div className="flex flex-col items-center relative">
          {/* Connecting lines */}
          <div className="absolute w-full h-full pointer-events-none">
            <div className="hidden md:block border-l-2 border-blue-500/20 h-[calc(100%-4rem)] absolute left-1/2 -translate-x-1/2"></div>
            <div className="hidden md:block border-t-2 border-blue-500/20 w-32 absolute left-1/2 -translate-x-full top-24"></div>
            <div className="hidden md:block border-t-2 border-blue-500/20 w-32 absolute left-1/2 top-52"></div>
            <div className="hidden md:block border-t-2 border-blue-500/20 w-32 absolute left-1/2 -translate-x-full top-80"></div>
            <div className="hidden md:block border-t-2 border-blue-500/20 w-32 absolute left-1/2 top-[27rem]"></div>
            <div className="hidden md:block border-t-2 border-blue-500/20 w-32 absolute left-1/2 -translate-x-full top-[35rem]"></div>
          </div>

          {/* First service (left) */}
          <div className="flex w-full justify-start mb-12">
            <div className="w-full md:w-[45%] bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="text-blue-400 text-xl mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </span>
                <h2 className="text-lg font-semibold text-blue-400">Custom Web Application Development</h2>
              </div>
              <p className="text-gray-300 text-sm">Develop scalable and secure web applications using Laravel and modern JavaScript frameworks like React or Vue.</p>
            </div>
          </div>

          {/* Second service (right) */}
          <div className="flex w-full justify-end mb-12">
            <div className="w-full md:w-[45%] bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="text-blue-400 text-xl mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                </span>
                <h2 className="text-lg font-semibold text-blue-400">API Development & Integration</h2>
              </div>
              <p className="text-gray-300 text-sm">Design, develop, and integrate RESTful and GraphQL APIs to facilitate seamless communication between web applications and third-party services.</p>
            </div>
          </div>

          {/* Third service (left) */}
          <div className="flex w-full justify-start mb-12">
            <div className="w-full md:w-[45%] bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="text-blue-400 text-xl mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                </span>
                <h2 className="text-lg font-semibold text-blue-400">Code Refactoring & Performance Optimization</h2>
              </div>
              <p className="text-gray-300 text-sm">Refactor existing Laravel applications to improve code quality, performance, and security following best practices.</p>
            </div>
          </div>

          {/* Fourth service (right) - New */}
          <div className="flex w-full justify-end mb-12">
            <div className="w-full md:w-[45%] bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="text-blue-400 text-xl mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                </span>
                <h2 className="text-lg font-semibold text-blue-400">Stripe Payment Integration</h2>
              </div>
              <p className="text-gray-300 text-sm">Implement secure payment processing with Stripe, including subscriptions, one-time payments, and webhook handling.</p>
            </div>
          </div>

          {/* Fifth service (left) - New */}
          <div className="flex w-full justify-start mb-12">
            <div className="w-full md:w-[45%] bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="text-blue-400 text-xl mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </span>
                <h2 className="text-lg font-semibold text-blue-400">Database Design & Optimization</h2>
              </div>
              <p className="text-gray-300 text-sm">Design efficient database schemas and optimize queries for MySQL, PostgreSQL, or MongoDB to ensure high performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};