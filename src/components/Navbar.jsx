import React from 'react';
export const Navbar = () => {
  return (
    <div className="container flex justify-between border border-gray-500 m-4 w-full h-16 items-center px-6 py-2 rounded-2xl text-white">
      
    
      <div className='dev-name'>AADIL ASLAM</div>

      <div className="flex space-x-6">
  <a href="" className="text-xs links pr-4">
    <span className="nav-link">SERVICES</span>
  </a>
  <a href="" className="text-xs links pr-4">
    <span className="nav-link">TECHNOLOGIES</span>
  </a>
  <a href="" className="text-xs links pr-4">
    <span className="nav-link">PORTFOLIO</span>
  </a>
  <a href="" className="text-xs links">
    <span className="nav-link">CONTACT</span>
  </a>
</div>
 
    
      <div className='languages'> 

<button>LANGUAGES</button>

        
      </div>

    </div>
  );
};
