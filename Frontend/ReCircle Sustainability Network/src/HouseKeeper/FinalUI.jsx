import React, { useState } from 'react';
import Navbar from './Navbar';

// Tere 6 tabs import kar rahe hain
import HeroSection from './HeroSection';
import Request from './Request';
import Eco from './Eco';
import History from './History';
import LeaderBoard from './LeaderBoard';
import Notifications from './Notifications';
import Profile from './Profile';

const FinalUI = () => {
  // By default 'HeroSection' (My Circle) open rahega
  const [activeTab, setActiveTab] = useState('HeroSection');

  // Ye function decide karega ki kaunsa component dikhana hai
  const renderContent = () => {
    switch (activeTab) {
      case 'HeroSection': return <HeroSection />;
      case 'Request': return <Request />;
      case 'Eco': return <Eco />;
      case 'History': return <History />;
      case 'LeaderBoard': return <LeaderBoard />;
      case 'Notifications': return <Notifications />;
      case 'Profile': return <Profile />;
      default: return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Plus_Jakarta_Sans']">
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {renderContent()}
      </main>

    </div>
  );
};

export default FinalUI;