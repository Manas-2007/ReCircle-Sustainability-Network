import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ImpactStats from './ImpactStats'; 
import Footer from './Footer';
import Process from './Process';

const HomeDash = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar /> 
      
      <main>
        <HeroSection />
        <ImpactStats />
        <Process/>
        
        
      </main>
      
      <Footer />
    </div>
  );
};

export default HomeDash;