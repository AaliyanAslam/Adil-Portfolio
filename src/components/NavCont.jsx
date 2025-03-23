import React, { useState, useEffect } from "react";
import Image from "../assets/MyImage.png";

export const NavCont = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      <div className="relative w-full bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-90 flex items-center justify-center overflow-hidden">
          <div className="absolute text-gray-600 text-xs opacity-20">
            <span>console.log</span> <span>npm install</span>
            <span>class="container"</span> <span>Mobile First</span>
            <span>/</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto py-12 px-4">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-left">
            <h1 className="text-[44px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
              BACKEND DEVELOPER
            </h1>
            <p className="text-lg md:text-base mb-6 max-w-md mt-8 md:mt-16">
              I am Aadil - Full-stack web developer with a passion for software
              architecture and programming best practices...
            </p>
            <a
              href="#portfolio"
              className="custom-button mt-8 md:mt-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg md:text-base font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 shadow-lg shadow-pink-500/50"
            >
              VIEW MY WORK
            </a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            {showImage ? (
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-transparent animate-gradient-pulse overflow-hidden transition-opacity duration-500">
                <img
                  src={Image}
                  alt="Aadil Aslam"
                  className="w-80 object-contain"
                />
              </div>
            ) : (
              <div className="relative rounded-lg bg-slate-900 p-2 w-64 h-64 md:w-90 md:h-80 overflow-hidden animate-fadeIn">
              <div className="relative flex text-center">
                <div className="flex pl-3.5 pt-3">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20">
                    <circle r="12" cy="12" cx="12"></circle>
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20">
                    <circle r="12" cy="12" cx="12"></circle>
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20">
                    <circle r="12" cy="12" cx="12"></circle>
                  </svg>
                </div>
                
              </div>
              <div className="mt-5 space-y-1 px-3 pb-10 text-xs font-mono text-violet-400 animate-type">
                <p><span className="text-pink-400">namespace</span><span className="text-blue-400"> App\Http\Controllers;</span></p>
                <p><span className="text-pink-400">use</span><span className="text-blue-400"> App\Models\User;</span></p>
                <p><span className="text-pink-400">class</span><span className="text-blue-400"> UserController</span></p>
                <p className="ml-2">{`{`}</p>
                <p className="ml-4">
                  <span className="text-pink-400">public function</span>
                  <span className="text-blue-400"> getUsers</span>
                  <span className="text-slate-500">()</span>
                </p>
                <p className="ml-4">{`{`}</p>
                <p className="ml-6">
                  <span className="text-blue-400">$users</span>
                  <span className="text-slate-500"> = </span>
                  <span className="text-pink-400">User</span>
                  <span className="text-slate-500">::</span>
                  <span className="text-blue-400">where</span>
                  <span className="text-slate-500">(</span>
                  <span className="text-green-400">'active'</span>
                  <span className="text-slate-500">, </span>
                  <span className="text-green-400">true</span>
                  <span className="text-slate-500">)-&gt;</span>
                  <span className="text-blue-400">get</span>
                  <span className="text-slate-500">();</span>
                </p>
                <p className="ml-6">
                  <span className="text-pink-400">return</span>
                  <span className="text-blue-400"> response</span>
                  <span className="text-slate-500">()-&gt;</span>
                  <span className="text-blue-400">json</span>
                  <span className="text-slate-500">(</span>
                  <span className="text-blue-400">$users</span>
                  <span className="text-slate-500">);</span>
                </p>
                <p className="ml-4">{`}`}</p>
                <p className="ml-2">{`}`}</p>
              </div>
            </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes gradientPulse {
            0% { border-color: #ec4899; box-shadow: 0 0 10px rgba(236, 72, 153, 0.5); }
            50% { border-color: #8b5cf6; box-shadow: 0 0 20px rgba(139, 92, 246, 0.7); }
            100% { border-color: #ec4899; box-shadow: 0 0 10px rgba(236, 11, 153, 0.5); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes type {
            from { width: 0; }
            to { width: 100%; }
          }

          .animate-gradient-pulse {
            animation: gradientPulse 3s ease-in-out infinite;
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in forwards;
          }

          .animate-type {
            overflow: hidden;
            white-space: nowrap;
            animation: type 2s steps(40, end) forwards;
          }
        `}</style>
      </div>
    </>
  );
};