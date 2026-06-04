import React from 'react';
import Navbar from './Navbar'; 
import { Outlet } from 'react-router-dom'; 

const FinalUI = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 font-sans overflow-hidden">
      
      {/* Navbar Fixed Wrapper */}
      <div className="flex-shrink-0 z-50 border-b border-gray-200">
        <Navbar />
      </div>
      
      {/* Main Scrollable Content */}
      <div className="flex-1 custom-scroll relative">
        <main className="max-w-screen-2xl mx-auto px-4 sm:px-5 lg:px-8 py-8">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default FinalUI;