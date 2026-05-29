import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ImpactStats from './ImpactStats'; 
import Footer from './Footer';

const HomeDash = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar /> 
      
      <main>
        <HeroSection />
        <ImpactStats />
        
      </main>
      
      <Footer />
    </div>
  );
};

export default HomeDash;