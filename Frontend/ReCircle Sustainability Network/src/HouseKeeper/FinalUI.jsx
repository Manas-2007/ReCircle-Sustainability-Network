import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'; // ✨ Magic wand of React Router

const FinalUI = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* Navbar Fixed Wrapper */}
      <div className="flex-shrink-0 z-50 border-b border-gray-200">
        {/* State props hat gaye, URL apna kaam khud karega */}
        <Navbar />
      </div>
      
      {/* Main Scrollable Content Area */}
      <div className="flex-1 custom-scroll relative">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* ✨ YAHAN AAYEGA TERA MAGIC! URL ke hisaab se pages yahan load honge */}
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default FinalUI;