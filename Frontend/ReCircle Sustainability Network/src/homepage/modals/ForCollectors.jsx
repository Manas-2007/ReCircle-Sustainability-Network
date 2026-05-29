import React from 'react';

const ForCollectors = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-3 sm:p-4 md:p-6 transition-all duration-300">
      
      {/* Modal Container - Clean White Look */}
      <div className="bg-white w-full max-w-[800px] rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] relative flex flex-col h-auto max-h-[95vh] md:max-h-[85vh] border border-gray-100/50">
        
        {/* Header - Ultra Compact for Mobile */}
        <div className="px-4 py-3 md:px-8 md:py-4 flex justify-between items-center z-10 gap-2 md:gap-4 border-b border-gray-100/60 shrink-0">
          <div className="flex-1">
            <h2 className="text-gray-900 text-lg sm:text-xl md:text-[28px] font-[600] tracking-tight leading-tight flex items-center gap-1.5 md:gap-2">
              Our <span className="text-[#16a34a]">Collectors</span>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#16a34a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9-1a2 2 0 0 1 4 0v1h-4V6zm-5 3h14v9H5V9z" />
                <circle cx="12" cy="13" r="1.5" />
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

        {/* Body - Fixed Overflow for Desktop Header Cut Issue */}
        <div className="px-4 py-3 md:px-8 md:py-5 overflow-hidden md:overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#16a34a] [&::-webkit-scrollbar-thumb]:rounded-full flex flex-col">
          
          {/* Informative Intro Banner */}
          <div className="bg-gradient-to-r from-green-50 to-[#f0f9f3] rounded-[1rem] md:rounded-[1.2rem] p-3 md:p-4 mb-3 md:mb-5 border border-green-100/60 shadow-sm relative overflow-hidden shrink-0">
            <div className="absolute right-0 top-0 w-24 h-24 md:w-32 md:h-32 bg-green-200/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-1.5 bg-white text-green-700 text-[8px] md:text-[10px] font-[600] px-2 py-0.5 md:px-2.5 md:py-1 rounded-full uppercase tracking-widest mb-1.5 md:mb-2 border border-green-100 shadow-sm relative z-10">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              The Backbone of ReCircle
            </div>
            
            <h3 className="text-gray-900 text-[13px] md:text-[18px] font-[600] leading-tight md:leading-snug mb-1 relative z-10 tracking-tight">
              Verified partners bridging your home to recycling plants.
            </h3>
            
            <p className="text-gray-600 text-[11px] md:text-[13px] font-[600] leading-relaxed max-w-xl relative z-10 hidden sm:block">
              Our collectors are trained professionals equipped with digital tools to ensure your waste is collected safely, weighed fairly, and transported to the right facilities.
            </p>
          </div>

          {/* Interaction Flow (Housekeeper <-> Collector) */}
          <div className="mb-3 md:mb-5 shrink-0">
            <h3 className="text-[9px] md:text-[11px] font-[600] text-gray-400 uppercase tracking-widest mb-2 md:mb-3 text-center sm:text-left">
              How You Interact With Them
            </h3>
            
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-2 md:p-5 shadow-sm relative">
              {/* Connecting Dashed Line */}
              <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-green-200 -translate-y-1/2 z-0"></div>
              
              {/* Step 1: Housekeeper */}
              <div className="flex flex-col items-center relative z-10 bg-white px-1 md:px-3 text-center w-1/3">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 mb-1 md:mb-2">
                  <span className="text-blue-500 text-sm md:text-xl">🏠</span>
                </div>
                <h4 className="text-gray-900 text-[10px] md:text-[14px] font-[600] leading-tight">You Request</h4>
                <p className="text-gray-500 text-[8px] md:text-[11px] font-[600] leading-tight mt-0.5 hidden sm:block">Schedule a pickup via app</p>
              </div>

              {/* Step 2: Collector */}
              <div className="flex flex-col items-center relative z-10 bg-white px-1 md:px-3 text-center w-1/3">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#16a34a] rounded-full flex items-center justify-center shadow-md mb-1 md:mb-2">
                  <span className="text-white text-sm md:text-xl">🚚</span>
                </div>
                <h4 className="text-[#16a34a] text-[10px] md:text-[14px] font-[600] leading-tight">Collector Arrives</h4>
                <p className="text-gray-500 text-[8px] md:text-[11px] font-[600] leading-tight mt-0.5 hidden sm:block">Collects at your doorstep</p>
              </div>

              {/* Step 3: Transaction */}
              <div className="flex flex-col items-center relative z-10 bg-white px-1 md:px-3 text-center w-1/3">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-50 rounded-full flex items-center justify-center border border-yellow-100 mb-1 md:mb-2">
                  <span className="text-yellow-500 text-sm md:text-xl">💳</span>
                </div>
                <h4 className="text-gray-900 text-[10px] md:text-[14px] font-[600] leading-tight">Instant Exchange</h4>
                <p className="text-gray-500 text-[8px] md:text-[11px] font-[600] leading-tight mt-0.5 hidden sm:block">Waste weighed, cash sent</p>
              </div>
            </div>
          </div>

          {/* 4 Key Roles of Collector Grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 shrink-0 pb-2">
            {/* Role 1 */}
            <div className="bg-gray-50/50 border border-gray-100/80 rounded-lg md:rounded-xl p-2.5 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-gray-500 text-[12px] md:text-[16px]">
                🛡️
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] md:text-[14px] font-[600] mb-0.5">KYC Verified</h4>
                <p className="text-gray-500 text-[9px] md:text-[12px] font-[600] leading-tight">Trustworthy & identity checked for your safety.</p>
              </div>
            </div>

            {/* Role 2 */}
            <div className="bg-gray-50/50 border border-gray-100/80 rounded-lg md:rounded-xl p-2.5 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-gray-500 text-[12px] md:text-[16px]">
                ⚖️
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] md:text-[14px] font-[600] mb-0.5">Digital Scales</h4>
                <p className="text-gray-500 text-[9px] md:text-[12px] font-[600] leading-tight">Uses smart scales so you get paid exactly for what you give.</p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="bg-gray-50/50 border border-gray-100/80 rounded-lg md:rounded-xl p-2.5 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-gray-500 text-[12px] md:text-[16px]">
                ♻️
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] md:text-[14px] font-[600] mb-0.5">Eco-Sorting</h4>
                <p className="text-gray-500 text-[9px] md:text-[12px] font-[600] leading-tight">Expertly segregates materials to maximize recycling.</p>
              </div>
            </div>

            {/* Role 4 */}
            <div className="bg-gray-50/50 border border-gray-100/80 rounded-lg md:rounded-xl p-2.5 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-gray-500 text-[12px] md:text-[16px]">
                📍
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] md:text-[14px] font-[600] mb-0.5">Hyper-Local</h4>
                <p className="text-gray-500 text-[9px] md:text-[12px] font-[600] leading-tight">Assigned from your nearby areas for fast pickups.</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* ACTION FOOTER */}
        <div className="px-4 py-2.5 md:px-8 md:py-4 border-t border-gray-100 bg-white md:bg-gray-50/50 rounded-b-[1.5rem] md:rounded-b-[2rem] shrink-0 flex gap-3 mt-auto">
          <button 
            onClick={onClose}
            className="flex-1 bg-[#16a34a] hover:bg-[#15803d] text-white text-[12px] md:text-[14px] font-[600] py-2.5 md:py-3 rounded-lg md:rounded-xl transition-all duration-300 shadow-sm active:scale-[0.98]"
          >
            I understood the process
          </button>
        </div>

      </div>
    </div>
  );
};

export default ForCollectors;