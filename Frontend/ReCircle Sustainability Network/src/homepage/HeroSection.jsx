import React from 'react';
import { FaArrowRight } from 'react-icons/fa';


const HeroSection = ({onOpenAuth}) => {
  return (
    <section className="relative w-full min-h-screen flex items-start md:items-center overflow-hidden pt-28 pb-16 md:pt-0 md:pb-0">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="Hhero.jpg" 
          alt="Sustainable World" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
        
       {/* Left Column Text and Button */}
        <div className="w-full md:w-3/5 max-w-2xl md:ml-16 lg:ml-32 xl:ml-15 flex flex-col items-center md:items-start text-center md:text-left">
          
          <p className="text-green-700 font-medium text-xs md:text-sm tracking-wide  flex items-center justify-center md:justify-start gap-2">
            <span className="text-base">🍃</span> Let's build a sustainable world together
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-[640] text-gray-800 leading-[1.1] mb-4 tracking-normal">
            Recycle Today, <br className="block md:hidden lg:block" />
            For a <span className="text-[#16a34a] font-serif italic font-normal">Greener</span> <br className="block md:hidden lg:block" />
            Tomorrow
          </h1>
          
          <p className="text-gray-600 text-sm sm:text-base mb-8 md:mb-5 max-w-md leading-relaxed font-normal">
            ReCircle connects housekeepers with waste collectors to make recycling simple, convenient and impactful.
          </p>
          
          {/* Action Button */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <button onClick={() => {
    onOpenAuth();
}}
  className="flex items-center justify-center gap-3 px-6 py-2.5 bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group w-fit mx-auto md:mx-0">
              <span className="font-medium text-sm md:text-base tracking-wide">Get Started Now</span>
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column Epic Floating Earth */}
        <div className="flex w-full md:w-2/5 relative items-center justify-center md:justify-end pr-0 md:pr-4 lg:pr-12 mt-16 sm:mt-24 md:mt-0">
          
          <div className="relative inline-block w-[240px] sm:w-[320px] md:w-[450px] lg:w-[550px]">
            
            <div className="relative z-0 scale-[2] sm:scale-[2.5] md:scale-125 lg:scale-190 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              <img 
                src="Hearth.jpg" 
                alt="Sustainable Earth" 
                className="w-full h-auto object-contain cursor-pointer animate-float"
              />
              
            </div>
            
          </div>

        </div>

      </div>
    </section>
    
  );
};
export default HeroSection;
