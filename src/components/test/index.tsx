import React, { useState } from 'react';

const MobileDrawer:React.FC<any> = ()=>{
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Mobile Drawer Button */}
      <button
        className="lg:hidden block px-4 py-2 text-gray-500 focus:outline-none focus:text-gray-800"
        onClick={toggleDrawer}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Mobile Drawer Content */}
      <div
        className={`${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
      >
        {/* Drawer Header */}
        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-semibold">Mobile Drawer</h2>
        </div>

        {/* Drawer Links/Content */}
        <nav className="p-4">
          <ul>
            <li>
              <a href="/">Link 1</a>
            </li>
            <li>
              <a href="/">Link 2</a>
            </li>
            {/* Add more links or content as needed */}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileDrawer;
