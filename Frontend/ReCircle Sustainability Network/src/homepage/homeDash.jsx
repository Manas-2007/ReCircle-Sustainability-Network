import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ImpactStats from "./ImpactStats";
import Footer from "./Footer";
import Process from "./Process";
import AuthModal from "./modals/AuthModal";

const HomeDash = ({ onLogin }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="fixed inset-0 bg-white overflow-hidden">
      <div className="h-full w-full overflow-y-auto custom-scroll relative">
        <Navbar onOpenAuth={() => setIsAuthOpen(true)} />

        <main>
          <HeroSection onOpenAuth={() => setIsAuthOpen(true)} />
          <AuthModal
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
            onLoginSuccess={onLogin}
          />
          <ImpactStats />
          <Process />
        </main>

        {/* 5. Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeDash;
