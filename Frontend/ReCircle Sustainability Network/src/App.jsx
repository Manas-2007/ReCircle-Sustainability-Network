import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import HomeDash from "./homepage/homeDash";
import FinalUI from "./HouseKeeper/FinalUI";
import CollectorUI from "./Collector/FinalUI";

// 1. COLLECTOR COMPONENTS 
import HeroSection from "./Collector/HeroSection";
import NearbyReq from "./Collector/NearbyReq";
import Earnings from "./Collector/Earnings";
import Analytics from "./Collector/Analytics";
import History from "./Collector/History";
import Profile from "./Collector/Profile";
import Notifications from "./Collector/Notifications";

// 2. HOUSEKEEPER COMPONENTS 
import HKHeroSection from "./HouseKeeper/HeroSection";
import HKRequest from "./HouseKeeper/Request";
import HKEco from "./HouseKeeper/Eco";
import HKHistory from "./HouseKeeper/History";
import HKLeaderBoard from "./HouseKeeper/LeaderBoard";
import HKNotifications from "./HouseKeeper/Notifications";
import HKProfile from "./HouseKeeper/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. HOME PAGE ROUTE */}
        <Route path="/" element={<HomeWrapper />} />

        {/* 2. COLLECTOR DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<CollectorUI />}>
          <Route index element={<HeroSection />} />
          <Route path="nearby" element={<NearbyReq />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* 3. HOUSEKEEPER DASHBOARD ROUTES */}
      <Route path="/housekeeper" element={<FinalUI />}>
          <Route index element={<HKHeroSection />} />
          <Route path="requests" element={<HKRequest />} />
          <Route path="eco" element={<HKEco />} />
          <Route path="history" element={<HKHistory />} />
          <Route path="leaderboard" element={<HKLeaderBoard />} />
          <Route path="profile" element={<HKProfile />} />
          <Route path="notifications" element={<HKNotifications />} />
        </Route>

        {/* 4. FALLBACK : WRONG URL POINT TO HOME */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
const HomeWrapper = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <HomeDash
        onLogin={(user) => {
          if (user.role === "collector") {
            navigate("/dashboard");
          } else {
            navigate("/housekeeper");
          }
        }}
      />
    </div>
  );
};

export default App;
