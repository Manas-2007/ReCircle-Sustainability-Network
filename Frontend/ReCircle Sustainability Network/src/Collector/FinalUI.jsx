import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Profile from './Profile';
import Notifications from './Notifications';
import HeroSection from './HeroSection';
import NearbyReq from './NearbyReq';
import Earnings from './Earnings';
import Analytics from './Analytics';
import History from './History';

const FinalUI = () => {
  const [activeTab, setActiveTab] = useState('Notifications');

  const renderContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <Profile />;
      case 'Notifications':
        return <Notifications />;
      case 'HeroSection':
        return <HeroSection />;
      case 'NearbyReq':
        return <NearbyReq />;
      case 'Earnings':
        return <Earnings />;
      case 'Analytics':
        return <Analytics />;
      case 'History':
        return <History />;
      default:
        return (
          <div className="p-10 text-center bg-white rounded-3xl border border-gray-100 shadow-sm mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome to {activeTab} 🚀
            </h2>
            <p className="text-gray-500">
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-5 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default FinalUI;