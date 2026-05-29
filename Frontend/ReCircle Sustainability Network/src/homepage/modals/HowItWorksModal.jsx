import React from 'react';

const HowItWorksModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalSteps = [
    {
      id: "01",
      title: "Request Online",
      desc: "Select waste types, estimate weight, and pick a convenient time.",
      highlight: "✓ 15+ categories",
      // Premium Phone/App SVG
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01M12 8v.01" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Smart Match",
      desc: "Algorithm routes your request to the nearest verified collector.",
      highlight: "✓ KYC Verified",
      // Premium AI/Routing/Network SVG
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Doorstep Pickup",
      desc: "Collector arrives, weighs waste digitally, and collects it.",
      highlight: "✓ Digital Weighing",
      // Premium Truck/Transport SVG
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12.5M8 7v8.5A2.5 2.5 0 015.5 18v0A2.5 2.5 0 013 15.5V7a2 2 0 012-2h3m0 2v11m11-9h-3m3 0v4.5A2.5 2.5 0 0116.5 18v0A2.5 2.5 0 0114 15.5M16.5 18a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5.5 18a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
        </svg>
      )
    },
    {
      id: "04",
      title: "Earn Rewards",
      desc: "Get paid instantly and track your CO2 savings on dashboard.",
      highlight: "✓ Instant Transfer",
      // Premium Reward/Eco SVG
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 md:p-6 transition-all duration-300">
      
      {/* Modal Container */}
      <div className="bg-[#f4f8f5] w-full max-w-[850px] rounded-[1.5rem] md:rounded-[2rem] shadow-2xl relative flex flex-col">
        
        {/* Header - Fixed Mobile Wrapping & Typography */}
        <div className="bg-white px-5 py-4 md:px-8 md:py-5 rounded-t-[1.5rem] md:rounded-t-[2rem] flex justify-between items-start md:items-center border-b border-gray-100 z-10 shadow-sm gap-2">
          <div className="flex-1">
            <h2 className="text-gray-900 text-[18px] sm:text-xl md:text-2xl font-[600] tracking-tight leading-snug md:leading-tight">
              Your Journey to a <br className="block sm:hidden" />
              <span className="text-[#16a34a] inline-flex items-center gap-1.5 mt-0.5 md:mt-0">
                Greener Planet
                {/* Premium Solid Leaf SVG */}
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#16a34a] drop-shadow-sm shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 2a9.5 9.5 0 0 0-9.5 9.5c0 1.5.4 2.9 1 4.1L3.3 21.3a1 1 0 1 0 1.4 1.4l5.7-5.7c1.2.6 2.6 1 4.1 1A9.5 9.5 0 0 0 24 8.5V2h-6.5zm4.5 6.5a7.5 7.5 0 0 1-7.5 7.5c-1.8 0-3.5-.7-4.8-1.9l6.5-6.5a1 1 0 0 0-1.4-1.4l-6.5 6.5C7.2 11.5 6.5 9.8 6.5 8 6.5 3.9 9.9 2 17.5 2H22v6.5z" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-sm font-medium mt-1 md:mt-1.5">
              4 simple steps. Zero hassle.
            </p>
          </div>
          
          <button 
            onClick={onClose}
            className="w-8 h-8 md:w-9 md:h-9 bg-gray-50 hover:bg-red-50 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors duration-300 flex-shrink-0 mt-0.5 md:mt-0"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body - Single View Grid */}
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            
            {modalSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-4 md:p-5 rounded-[1.2rem] border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(22,163,74,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Header of Card (Icon Box + Number) */}
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  {/* Scaled "Image-like" Icon Container for Mobile */}
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-[#f0f9f3] rounded-xl flex items-center justify-center group-hover:bg-[#16a34a] transition-colors duration-300 group-hover:[&>svg]:text-white border border-green-100/50 shadow-sm shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-gray-200 font-black text-xl md:text-2xl group-hover:text-green-200 transition-colors mt-0.5">
                    {step.id}
                  </span>
                </div>

                {/* Content with Scaled Typography for Mobile */}
                <h3 className="text-gray-900 font-bold text-[13px] sm:text-[14px] md:text-[16px] leading-tight mb-1.5 md:mb-2 group-hover:text-[#16a34a] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-[11px] md:text-[13px] leading-snug mb-4 md:mb-5">
                  {step.desc}
                </p>
                
                {/* Badge pushed to absolute bottom using mt-auto */}
                <div className="mt-auto">
                  <span className="inline-block bg-[#f0f9f3] text-green-700 text-[10px] md:text-[11px] font-[700] px-2.5 py-1.5 rounded-md border border-green-100/60 w-full text-center tracking-wide">
                    {step.highlight}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Action Footer */}
        <div className="px-5 py-4 md:px-8 bg-white rounded-b-[1.5rem] md:rounded-b-[2rem] border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-[12px] md:text-[13px] font-medium hidden sm:block">
            Ready to make an impact?
          </p>
          <button 
            onClick={onClose}
            className="w-full sm:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white text-[13px] md:text-[14px] font-[600] px-8 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex justify-center items-center gap-2"
          >
            Start Recycling Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default HowItWorksModal;