import React from 'react';

const JoinSection = () => {
  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 -mt-6 -mb-8 relative z-20">
      <div className="flex flex-col xl:flex-row gap-5 xl:items-stretch">
        
        {/* Left Side: Join CTA */}
        <div className="w-full xl:w-[60%] relative bg-[#0a3817] rounded-[1.5rem] overflow-hidden flex items-center p-8 md:p-10 shadow-sm min-h-[220px]">
          
          <div 
            className="absolute inset-0 bg-cover bg-right" 
            style={{ backgroundImage: "url('H17.jpg')" }} 
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b19] via-[#0b3b19]/90 to-transparent w-[75%]" />
          
          <div className="relative z-10 max-w-[420px]">
            <h2 className="text-white text-2xl md:text-[28px] font-[600] mb-3 tracking-tight leading-tight">
              Be a Part of the Change
            </h2>
            
            <p className="text-white/90 text-[13px] md:text-[14px] leading-relaxed mb-6 font-light">
              Join thousands of responsible people making our planet cleaner and greener.
            </p>
            
            <button className="bg-[#ffcc00] hover:bg-[#e6b800] text-[#4d2c0b] font-[700] text-[14px] px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors duration-300">
              Join ReCircle Today
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side: Newsletter Subscription */}
        <div className="w-full xl:w-[40%] bg-[#eef4eb] rounded-[1.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-center shadow-sm min-h-[220px]">
          
          <div className="relative z-10 max-w-[280px]">
            <h2 className="text-gray-900 text-xl md:text-[22px] font-[600] mb-2 tracking-tight">
              Stay Updated
            </h2>
            
            <p className="text-gray-600 text-[13px] font-medium mb-5">
              Get the latest updates, tips and rewards!
            </p>
            
            <div className="bg-white rounded-full p-1.5 flex items-center shadow-sm border border-gray-100/60 w-full max-w-[320px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent px-4 py-1 text-[13px] text-gray-700 outline-none placeholder-gray-400 font-medium" 
              />
              <button className="bg-[#4db848] hover:bg-[#43a03e] text-white font-[600] text-[13px] px-5 py-2 rounded-full transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="absolute right-[-4%] bottom-0 h-[100%] w-[40%] flex justify-end items-end z-0">
            <img 
              src="letterbox.jpg" 
              alt="Newsletter Subscription" 
              className="object-contain h-[90%] drop-shadow-md" 
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default JoinSection;