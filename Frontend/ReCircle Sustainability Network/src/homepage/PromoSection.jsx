import React from 'react';

const PromoSection = () => {
  const stats = [
    { count: "10K+", label: "Active Housekeepers" },
    { count: "3K+", label: "Active Collectors" },
    { count: "50K+", label: "Pickups Completed" },
    { count: "100+", label: "Cities Connected" }
  ];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 -mt-8 md:-mt-16 relative z-20">
      <div className="flex flex-col xl:flex-row gap-6">

        {/* Web Platform Promo Section */}
      <div className="w-full xl:w-[55%] bg-[#0a3817] rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden flex items-center shadow-[0_12px_40px_rgba(0,0,0,0.08)] min-h-[300px] md:min-h-[350px]">
        
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-right"
          style={{ backgroundImage: "url('Hmobile.jpg')" }} 
        />

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a3817] via-[#0a3817]/90 to-[#0a3817]/40 md:to-transparent w-full md:w-[85%]" />

        <div className="relative z-10 w-full md:w-[75%]">
          
          <h2 className="text-white text-[22px] sm:text-[24px] md:text-[28px] font-[600] mb-1.5 md:mb-2 tracking-tight leading-tight">
            ReCircle Web Platform
          </h2>
          
          <h3 className="text-green-400 text-[13px] sm:text-[14px] md:text-[16px] font-[600] mb-3 md:mb-4">
            Empowering Sustainability Online.
          </h3>
          
          <p className="text-white/90 text-[12px] sm:text-[13px] md:text-[14px] mb-6 md:mb-8 max-w-full md:max-w-[90%] leading-relaxed font-light">
            Manage your recycling journey directly from your browser. Schedule pickups, track your carbon footprint, and build a greener future with our seamless web platform.
          </p>
          
          <div className="flex items-center gap-4 md:gap-5">
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-1.5 md:mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                <img src="chrome.jpg" alt="Google Chrome" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
              </div>
              <span className="text-white/80 text-[9px] md:text-[10px] font-[600] tracking-wide uppercase">Chrome</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-1.5 md:mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                <img src="safari.jpg" alt="Apple Safari" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
              </div>
              <span className="text-white/80 text-[9px] md:text-[10px] font-[600] tracking-wide uppercase">Safari</span>
            </div>

          </div>
        </div>
      </div>

        {/* Right Side  */}
       <div className="w-full xl:w-[45%] bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between">
          
          <div className="flex items-center gap-2 mb-5">
            <h3 className="text-gray-900 font-[600] text-[18px] md:text-[20px] tracking-tight">
              Our Community in Action
            </h3>
            
            <svg 
              className="w-6 h-6 text-[#16a34a]" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4-10a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm6.5 2.5L12 12l2.5-2.5V14.5z" opacity="0.4"/>
              <path d="M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8">
            {["H10.jpg", "H11.jpg", "H12.jpg", "H13.jpg"].map((imgSrc, index) => (
              <div 
                key={index} 
                className="w-full h-[85px] md:h-[105px] rounded-xl overflow-hidden shadow-sm bg-gray-50 border border-gray-100/50"
              >
                <img 
                  src={imgSrc} 
                  alt={`Community Action ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" 
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center flex-1 ${
                  index !== stats.length - 1 ? 'border-r-[1.5px] border-gray-200' : ''
                }`}
              >
                <h4 className="text-[#16a34a] font-bold text-[20px] md:text-[24px] mb-1">
                  {stat.count}
                </h4>
                <p className="text-gray-800 font-[500] text-[11px] md:text-[12px] text-center px-1 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default PromoSection;