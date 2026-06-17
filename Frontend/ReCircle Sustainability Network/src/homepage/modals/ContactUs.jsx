import React from "react";

const ContactUs = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-3 sm:p-4 md:p-6 transition-all duration-300">

      {/* Modal Container  */}
      <div className="bg-white w-full max-w-[800px] rounded-[1.5rem] md:rounded-[2rem] shadow-2xl relative flex flex-col h-auto max-h-[95vh] md:max-h-[85vh] border border-gray-100/50">
        {/* Header  */}
        <div className="px-4 py-3 md:px-8 md:py-4 flex justify-between items-center z-10 gap-3 border-b border-gray-100/60 shrink-0">
          <h2 className="text-gray-900 text-lg md:text-[28px] font-[600] tracking-tight leading-tight flex items-center gap-1.5 md:gap-2">
            Contact <span className="text-[#16a34a]">ReCircle</span>
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[#16a34a] -mt-0.5 md:-mt-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.5 2a9.5 9.5 0 0 0-9.5 9.5c0 1.5.4 2.9 1 4.1L3.3 21.3a1 1 0 1 0 1.4 1.4l5.7-5.7c1.2.6 2.6 1 4.1 1A9.5 9.5 0 0 0 24 8.5V2h-6.5zm4.5 6.5a7.5 7.5 0 0 1-7.5 7.5c-1.8 0-3.5-.7-4.8-1.9l6.5-6.5a1 1 0 0 0-1.4-1.4l-6.5 6.5C7.2 11.5 6.5 9.8 6.5 8 6.5 3.9 9.9 2 17.5 2H22v6.5z" />
            </svg>
          </h2>

          <button
            onClick={onClose}
            className="w-8 h-8 md:w-10 md:h-10 bg-gray-50 hover:bg-red-50 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors duration-200 shrink-0"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Body  */}
        <div className="px-4 py-4 md:px-8 md:py-6 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#16a34a] [&::-webkit-scrollbar-thumb]:rounded-full pr-1.5 md:pr-4">
          {/* Profile Card  */}
          <div className="mb-5 md:mb-8 relative mt-1">
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50/30 rounded-[1.2rem] md:rounded-[1.5rem] -z-10 transform -rotate-1"></div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5 p-4 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] bg-white border border-green-100/80 shadow-[0_4px_20px_rgb(22,163,74,0.04)]">
              <div className="relative shrink-0 group cursor-pointer">
                <div className="absolute inset-0 bg-[#16a34a] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm bg-white border-2 border-white ring-1 ring-gray-100 relative z-10">
                  <img
                    src="https://avatars.githubusercontent.com/u/9919?v=4"
                    alt="Manas Patidar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center sm:text-left flex-1">
                <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-[9px] md:text-[11px] font-[600] px-2.5 py-1 rounded-full uppercase tracking-widest mb-1.5 border border-green-100">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  AI-Assisted Full-Stack Developer
                </div>

                <h3 className="text-gray-900 text-lg sm:text-xl md:text-[24px] font-[600] tracking-tight mb-0.5">
                  Manas Patidar
                </h3>

                <p className="text-gray-500 text-[11px] md:text-[13px] font-[600] leading-snug mb-3 max-w-lg mx-auto sm:mx-0">
                  I specialize in building scalable web applications with a
                  focus on clean code. Passionate about using technology to
                  drive environmental impact.
                </p>

                {/* Buttons  */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <a
                    href="https://github.com/manas-2007"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 bg-[#24292e] hover:bg-black text-white text-[11px] md:text-[12px] font-[600] px-3.5 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-300 shadow-sm whitespace-nowrap"
                  >
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="http://www.linkedin.com/in/manas-kumar-patidar-73954a374"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 bg-[#0077b5] hover:bg-[#006396] text-white text-[11px] md:text-[12px] font-[600] px-3.5 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-300 shadow-sm whitespace-nowrap"
                  >
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-4 md:mb-6 px-1">
            <h3 className="text-[10px] md:text-[12px] font-[600] text-gray-400 uppercase tracking-widest mb-2 md:mb-3">
              Our Vision
            </h3>
            <p className="text-gray-800 text-[13px] md:text-[16px] leading-snug md:leading-relaxed font-[600] mb-2">
              Building a sustainable future shouldn't be complicated. That's why{" "}
              <span className="text-green-700 font-[600]">ReCircle</span>{" "}
              exists.
            </p>
            <p className="text-gray-500 text-[11px] md:text-[14px] leading-relaxed hidden sm:block font-[600]">
              We serve as a digital bridge connecting responsible households
              with verified waste collectors. By making the recycling process
              transparent and rewarding, we integrate sustainability into
              everyday life.
            </p>
          </div>

          {/* Stats - Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 pt-3 md:pt-5 border-t border-gray-100">
            <div className="text-center md:text-left bg-gray-50/50 md:bg-transparent rounded-lg p-2 md:p-0">
              <div className="text-lg md:text-2xl font-[600] text-gray-900 mb-0.5 tracking-tight">
                100%
              </div>
              <div className="text-gray-500 text-[9px] md:text-[11px] font-[600] uppercase tracking-wide">
                Digital Tracking
              </div>
            </div>
            <div className="text-center md:text-left bg-gray-50/50 md:bg-transparent rounded-lg p-2 md:p-0">
              <div className="text-lg md:text-2xl font-[600] text-gray-900 mb-0.5 tracking-tight">
                15+
              </div>
              <div className="text-gray-500 text-[9px] md:text-[11px] font-[600] uppercase tracking-wide">
                Categories
              </div>
            </div>
            <div className="text-center md:text-left bg-gray-50/50 md:bg-transparent rounded-lg p-2 md:p-0">
              <div className="text-lg md:text-2xl font-[600] text-gray-900 mb-0.5 tracking-tight">
                KYC
              </div>
              <div className="text-gray-500 text-[9px] md:text-[11px] font-[600] uppercase tracking-wide">
                Verified
              </div>
            </div>
            <div className="text-center md:text-left bg-green-50/30 md:bg-transparent rounded-lg p-2 md:p-0">
              <div className="text-lg md:text-2xl font-[600] text-[#16a34a] mb-0.5 tracking-tight">
                Eco
              </div>
              <div className="text-gray-500 text-[9px] md:text-[11px] font-[600] uppercase tracking-wide">
                Rewards
              </div>
            </div>
          </div>
        </div>

        {/* ACTION FOOTER */}
        <div className="px-4 py-3 md:px-8 md:py-4 border-t border-gray-100 bg-white md:bg-gray-50/50 rounded-b-[1.5rem] md:rounded-b-[2rem] shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white text-[13px] md:text-[14px] font-[600] py-2.5 md:py-3 rounded-xl transition-all duration-300 shadow-sm active:scale-[0.98]"
          >
            I understood
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
