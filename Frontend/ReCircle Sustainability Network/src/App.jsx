import React, { useState } from 'react';
import HomeDash from './homepage/HomeDash'; 
import FinalUI from './HouseKeeper/FinalUI';
import CollectorUI from './Collector/FinalUI';

const App = () => {
  // 'none' means login page. Baad mein isko 'housekeeper' ya 'collector' karenge.
  const [userRole, setUserRole] = useState('none');

  // Agar role housekeeper hai, toh tumhara purana UI dikhega
  if (userRole === 'housekeeper') {
    return <FinalUI />;
  }

  // Agar role collector hai, toh naya UI dikhega
  if (userRole === 'collector') {
    return (
      <div className="relative">
        <CollectorUI />
        
        {/* DEV TOOLS BUTTON TAAKI TUM WAPAS LOGIN YA HOUSEKEEPER PE JA SAKO */}
        <button 
          onClick={() => setUserRole('none')}
          className="fixed bottom-6 right-6 z-[9999] bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
        >
          Back to Login
        </button>
      </div>
    );
  }

  // Agar role 'none' hai, toh Login page (HomeDash) dikhega
  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      
      {/* 🛠️ DEV TOOLS - TEMPORARY BUTTONS (Testing ke liye - Moved to Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col sm:flex-row gap-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-200">
        <button 
          onClick={() => setUserRole('housekeeper')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
        >
          Login as Housekeeper
        </button>
        <button 
          onClick={() => setUserRole('collector')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
        >
          Login as Collector
        </button>
      </div>

      {/* Tumhara original HomeDash (Default login click par housekeeper pe bhejega) */}
      <HomeDash onLogin={() => setUserRole('housekeeper')} />
      
    </div>
  );
};

export default App;