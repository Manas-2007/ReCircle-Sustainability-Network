import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import HomeDash from './homepage/homeDash'; 
import FinalUI from './HouseKeeper/FinalUI'; 
import CollectorUI from './Collector/FinalUI'; 

// ==========================================
// 1. COLLECTOR COMPONENTS (Normal imports)
// ==========================================
import HeroSection from './Collector/HeroSection';
import NearbyReq from './Collector/NearbyReq';
import Earnings from './Collector/Earnings';
import Analytics from './Collector/Analytics';
import History from './Collector/History';
import Profile from './Collector/Profile';
import Notifications from './Collector/Notifications';

// ==========================================
// 2. HOUSEKEEPER COMPONENTS (Aliased imports to avoid name clash)
// ==========================================
import HKHeroSection from './HouseKeeper/HeroSection';
import HKRequest from './HouseKeeper/Request';
import HKEco from './HouseKeeper/Eco';
import HKHistory from './HouseKeeper/History';
import HKLeaderBoard from './HouseKeeper/LeaderBoard';
import HKNotifications from './HouseKeeper/Notifications';
import HKProfile from './HouseKeeper/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* 1. HOME PAGE ROUTE (Landing Page) */}
        <Route path="/" element={<HomeWrapper />} />

        {/* ==========================================
            2. COLLECTOR DASHBOARD ROUTES
            ========================================== */}
        <Route path="/dashboard" element={<CollectorUI />}>
          <Route index element={<HeroSection />} />
          <Route path="nearby" element={<NearbyReq />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* ==========================================
            3. HOUSEKEEPER DASHBOARD ROUTES
            ========================================== */}
        <Route path="/housekeeper" element={<FinalUI />}>
          <Route index element={<HKHeroSection />} />
          <Route path="requests" element={<HKRequest />} />
          <Route path="eco" element={<HKEco />} />
          <Route path="history" element={<HKHistory />} />
          <Route path="leaderboard" element={<HKLeaderBoard />} />
          <Route path="profile" element={<HKProfile />} />
          <Route path="notifications" element={<HKNotifications />} />
        </Route>

        {/* 4. FALLBACK: Galat URL pe Home pe bhej do */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
};

// ==========================================
// ✨ DEV TOOLS & HOME WRAPPER
// ==========================================
const HomeWrapper = () => {
  const navigate = useNavigate(); 

  return (
    // ✨ FIX YAHAN HAI: Baahar wale div se saare h-screen aur overflow hata diye
    <div className="w-full">
      
      {/* 🛠️ DEV TOOLS - TEMPORARY BUTTONS */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col sm:flex-row gap-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-200">
        
        <button 
          onClick={() => navigate('/housekeeper')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
        >
          Go to Housekeeper
        </button>
        
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
        >
          Go to Collector
        </button>
        
      </div>

      <HomeDash onLogin={(user) => {
        if (user.role === 'collector') {
          navigate('/dashboard');
        } else {
          navigate('/housekeeper');
        }
      }} />
      
    </div>
  );
};

export default App;