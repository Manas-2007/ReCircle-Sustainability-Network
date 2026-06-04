import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ImpactStats from './ImpactStats'; 
import Footer from './Footer';
import Process from './Process';
import AuthModal from './modals/AuthModal';

const HomeDash = ({onLogin}) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  
  return (
    // 1. Poori screen lock, browser ka ganda scroll band
    <div className="fixed inset-0 bg-white overflow-hidden">
      
      {/* 2. Ye hai tera premium green scroller wala dabba */}
      <div className="h-full w-full overflow-y-auto custom-scroll relative">
        
        {/* 3. Navbar (Ye absolute hai, toh Hero ke upar baithega aur scroll hone pe gayab hoga) */}
        <Navbar onOpenAuth={() => setIsAuthOpen(true)} />
        
        {/* 4. Tera saara content */}
        <main>
          <HeroSection onOpenAuth={() => setIsAuthOpen(true)} />
          <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLoginSuccess={onLogin} />
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