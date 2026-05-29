import React from 'react';

const ImpactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-6 transition-all duration-300">
      
      {/* Modal Container - Clean White Look (Matching Previous Tabs) */}
      <div className="bg-white w-full max-w-[800px] rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] relative flex flex-col max-h-[90vh] md:max-h-[85vh] border border-gray-100/50">
        
        {/* Header - Ultra Compact for Mobile */}
        <div className="px-4 py-3 md:px-8 md:py-4 flex justify-between items-center z-10 gap-2 md:gap-4 border-b border-gray-100/60 shrink-0">
          <div className="flex-1">
            <h2 className="text-gray-900 text-lg sm:text-xl md:text-[28px] font-[600] tracking-tight leading-tight flex items-center gap-1.5 md:gap-2">
              Our <span className="text-[#16a34a]">Impact</span>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#16a34a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </h2>
          </div>
          
          <button 
            onClick={onClose}
            className="w-8 h-8 md:w-10 md:h-10 bg-gray-50 hover:bg-red-50 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors duration-200 flex-shrink-0"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body - Overflow Hidden for Exact Single View Fit */}
        <div className="px-5 py-4 md:px-8 md:py-5 overflow-hidden flex flex-col justify-center">
          
          {/* Informative Intro Banner */}
         <div className="bg-gradient-to-r from-green-50 to-[#f0f9f3] rounded-[1.2rem] p-4 mb-4 border border-green-100/60 shadow-sm relative overflow-hidden shrink-0">
            <div className="absolute right-0 top-0 w-32 h-32 bg-green-200/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="inline-flex items-center gap-1.5 bg-white text-green-700 text-[9px] md:text-[10px] font-[600] px-2.5 py-1 rounded-full uppercase tracking-widest mb-2 border border-green-100 shadow-sm relative z-10">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Live Global Metrics
            </div>
            <h3 className="text-gray-900 text-[15px] md:text-[18px] font-[600] leading-snug mb-1 relative z-10 tracking-tight">
              Every pickup creates a ripple effect.
            </h3>
            <p className="text-gray-600 text-[12px] md:text-[13px] font-[600] leading-relaxed max-w-xl relative z-10">
              By connecting households with collectors, we are not just managing waste; we are actively reducing carbon footprints and building a circular economy.
            </p>
          </div>

          {/* 4 Core Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 shrink-0">
            {/* Metric 1 */}
            <div className="bg-white border border-gray-100/80 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-green-200 transition-colors">
              <div className="text-gray-400 mb-1.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="text-2xl md:text-[28px] font-[600] text-gray-900 tracking-tight leading-none mb-1">
                45.2 <span className="text-[12px] md:text-[14px] text-gray-500">Tons</span>
              </div>
              <div className="text-gray-500 text-[10px] md:text-[11px] font-[600] uppercase tracking-wide">Waste Recycled</div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white border border-gray-100/80 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-green-200 transition-colors">
              <div className="text-[#16a34a] mb-1.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div className="text-2xl md:text-[28px] font-[600] text-gray-900 tracking-tight leading-none mb-1">
                120 <span className="text-[12px] md:text-[14px] text-gray-500">Kg</span>
              </div>
              <div className="text-gray-500 text-[10px] md:text-[11px] font-[600] uppercase tracking-wide">CO2 Prevented</div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white border border-gray-100/80 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-green-200 transition-colors">
              <div className="text-blue-500 mb-1.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-2xl md:text-[28px] font-[600] text-gray-900 tracking-tight leading-none mb-1">
                8.5<span className="text-[12px] md:text-[14px] text-gray-500">k</span>
              </div>
              <div className="text-gray-500 text-[10px] md:text-[11px] font-[600] uppercase tracking-wide">Eco-Warriors</div>
            </div>

            {/* Metric 4 */}
            <div className="bg-white border border-gray-100/80 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-green-200 transition-colors">
              <div className="text-yellow-500 mb-1.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl md:text-[28px] font-[600] text-gray-900 tracking-tight leading-none mb-1">
                2.1<span className="text-[12px] md:text-[14px] text-gray-500">m</span>
              </div>
              <div className="text-gray-500 text-[10px] md:text-[11px] font-[600] uppercase tracking-wide">Rewards Earned</div>
            </div>
          </div>

          {/* Environmental Equivalents (The Informative Part) */}
          <div className="px-1 md:px-2">
            <h3 className="text-[10px] md:text-[11px] font-[600] text-gray-400 uppercase tracking-widest mb-2 md:mb-3">
              What this equals to in the real world
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-between">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <span className="text-lg">🌳</span>
                </div>
                <div>
                  <div className="text-gray-900 text-[13px] md:text-[15px] font-[600]">1,200+ Trees</div>
                  <div className="text-gray-500 text-[11px] md:text-[12px] font-[600]">Effectively planted</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-lg">💧</span>
                </div>
                <div>
                  <div className="text-gray-900 text-[13px] md:text-[15px] font-[600]">50k Liters</div>
                  <div className="text-gray-500 text-[11px] md:text-[12px] font-[600]">Clean water saved</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <div className="text-gray-900 text-[13px] md:text-[15px] font-[600]">30,000 kWh</div>
                  <div className="text-gray-500 text-[11px] md:text-[12px] font-[600]">Energy conserved</div>
                </div>
              </div>

            </div>
          </div>

        </div>
        
        {/* ACTION FOOTER */}
        <div className="px-4 py-3 md:px-8 md:py-4 border-t border-gray-100 bg-white md:bg-gray-50/50 rounded-b-[1.5rem] md:rounded-b-[2rem] shrink-0 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 bg-[#16a34a] hover:bg-[#15803d] text-white text-[13px] md:text-[14px] font-[600] py-2.5 md:py-3 rounded-xl transition-all duration-300 shadow-sm active:scale-[0.98]"
          >
            Start making an impact
          </button>
        </div>

      </div>
    </div>
  );
};

export default ImpactModal;