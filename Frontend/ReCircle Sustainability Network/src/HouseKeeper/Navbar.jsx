import React, { useState } from "react";
import {
  Bell,
  Search,
  Trophy,
  History,
  ClipboardList,
  Users,
  Leaf,
  Menu, // Hamburger icon (3 lines)
  X,    // Close icon
} from "lucide-react";

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State

  const tabs = [
    { id: "HeroSection", label: "My Circle", icon: <Users size={18} /> },
    { id: "Request", label: "Requests", icon: <ClipboardList size={18} /> },
    { id: "Eco", label: "Eco Points", icon: <Leaf size={18} /> },
    { id: "History", label: "History", icon: <History size={18} /> },
    { id: "LeaderBoard", label: "Leaderboard", icon: <Trophy size={18} /> },
  ];

  return (
    <>
      {/* 1. FULL WIDTH, FLUSH TO TOP HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-green-400 font-sans antialiased">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-5 lg:px-8 h-[76px] sm:h-[88px] flex items-center justify-between">
          
          {/* LEFT SIDE (LOGO + NAME ALONE ON MOBILE) */}
          <div className="flex-1 flex items-center justify-start">
            <div
              onClick={() => setActiveTab("HeroSection")}
              className="flex items-center gap-2 sm:gap-3.5 cursor-pointer group"
            >
              {/* Logo Image */}
              <div
                className="
                  w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] rounded-xl overflow-hidden bg-gray-50
                  shadow-sm ring-1 ring-gray-200 shrink-0
                  group-hover:scale-105 group-hover:shadow-md transition-all duration-300
                "
              >
                <img 
                  src="/main logo.jpg" 
                  alt="ReCircle Logo" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text is now flex by default (visible on mobile) */}
              <div className="flex flex-col justify-center">
                <h1 className="text-[20px] sm:text-[26px] font-[700] tracking-tight text-gray-900 leading-none">
                  Re<span className="text-[#16a34a]">Circle</span>
                </h1>
                <p className="text-[7px] sm:text-[9.5px] text-gray-500 font-bold uppercase tracking-[0.15em] mt-1 sm:mt-1.5 whitespace-nowrap">
                  Sustainability Network
                </p>
              </div>
            </div>
          </div>

          {/* CENTER NAVIGATION (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center shrink-0 items-center gap-1.5 xl:gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[13.5px] font-bold transition-all duration-300 ease-out border
                    ${isActive
                        ? "bg-green-50 border-green-200 text-[#166534] shadow-sm"
                        : "bg-transparent border-transparent text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  <span className={`${isActive ? "text-[#16a34a]" : "text-gray-700 group-hover:text-gray-700"} transition-colors`}>
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE (ACTIONS & GREEN HAMBURGER) */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-7">
            
            {/* ECO SCORE PILL (Hidden on mobile) */}
            <div
              className="
                hidden xl:flex items-center gap-2 px-4 py-2 rounded-xl
                bg-[#f0fdf4] border border-[#bbf7d0] shadow-sm
                cursor-default hover:shadow-md transition-all
              "
            >
              <Leaf size={16} className="text-[#16a34a]" />
              <span className="font-[650] text-[#166534] text-[13.5px] tracking-tight">
                850 Points
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-6">
              
              {/* NOTIFICATION */}
            <div 
              onClick={() => setActiveTab('Notifications')} 
              className="flex flex-col items-center justify-center gap-1 mt-1 cursor-pointer group"
            >
              <button
                className="
                  relative w-[40px] h-[40px] rounded-xl
                  bg-gray-50 border border-gray-200
                  flex items-center justify-center
                  group-hover:bg-gray-100 group-hover:border-gray-300
                  transition-all duration-200 active:scale-95 shadow-sm
                "
              >
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white" />
                <Bell size={18} className="text-gray-600 group-hover:text-gray-900 transition-colors" />
              </button>
              <span className="text-[12px] font-bold text-gray-700 group-hover:text-gray-800 transition-colors leading-none hidden sm:block">
                Alerts
              </span>
            </div>

              {/* SEPARATOR */}
              <div className="hidden sm:block w-px h-10 bg-gray-200 rounded-full"></div>

              {/* PROFILE (Initials) */}
              <div 
                onClick={() => setActiveTab('Profile')} 
                className="flex flex-col items-center justify-center gap-1 mt-1 cursor-pointer group"
              >
                <div
                  className="
                    w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-xl overflow-hidden
                    border-2 border-gray-200 shadow-sm
                    bg-gradient-to-br from-green-500 to-[#166534]
                    flex items-center justify-center
                    group-hover:border-green-300 group-hover:shadow-md group-hover:scale-105
                    transition-all duration-300
                  "
                >
                  <span className="text-white font-extrabold text-[13px] sm:text-[15px] tracking-wide">
                    JD
                  </span>
                </div>
                {/* Label hidden on mobile to save space */}
                <span className="text-[12px] font-bold text-gray-700 group-hover:text-[#16a34a] transition-colors leading-none hidden sm:block">
                  John Doe
                </span>
              </div>

              {/* MOBILE HAMBURGER MENU BUTTON - NOW PROMINENT & GREEN */}
              <button 
                onClick={() => setIsOpen(true)} 
                className="lg:hidden ml-1 p-2 bg-[#f0fdf4] border border-[#bbf7d0] shadow-sm rounded-xl text-[#16a34a] focus:outline-none hover:bg-green-100 active:scale-95 transition-all"
              >
                <Menu size={22} strokeWidth={2.5} />
              </button>
              
            </div>
          </div>
        </div>
      </header>

      {/* 2. MOBILE OFF-CANVAS MENU (TOP-DOWN SLIDE) */}
      <div className={`fixed top-0 left-0 w-full bg-gradient-to-b from-green-50 via-white to-white  transition-transform duration-500 ease-in-out z-[70] rounded-b-[2rem] border-b-4 border-[#4ade80] font-sans ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-sm border border-gray-100 text-[#15803d] hover:bg-red-50 hover:text-red-500 transition-colors"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Mobile Menu Content */}
        <div className="flex flex-col pt-10 pb-8 px-6">
          
          {/* Mobile Logo in Offcanvas */}
          <div className="flex items-center gap-3 mb-8">
            <img 
              src="/main logo.jpg" 
              alt="ReCircle Logo" 
              className="w-14 h-14 object-cover bg-white rounded-2xl shadow-sm border border-gray-200"
            />
            <div>
              <h2 className="text-2xl font-[800] text-gray-900 leading-none tracking-tight">Re<span className='text-[#16a34a]'>Circle</span></h2>
              <p className="text-[10px] font-bold text-[#15803d] tracking-widest mt-1 uppercase">Sustainability Network</p>
            </div>
          </div>

          {/* Mobile Profile & Eco Summary */}
         <div 
            onClick={() => {
              setActiveTab('Profile');
              setIsOpen(false);
            }}
            className="flex items-center gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="w-[46px] h-[46px] rounded-xl bg-gradient-to-br from-green-500 to-[#166534] flex items-center justify-center shadow-inner">
              <span className="text-white font-extrabold text-[16px] tracking-wide">JD</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">John Doe</p>
              <p className="text-xs font-semibold text-[#16a34a] mt-0.5 flex items-center gap-1">
                <Leaf size={12} /> 850 Eco Points
              </p>
            </div>
          </div>

          {/* Mobile Navigation Tabs */}
          <ul className="flex flex-col gap-2 w-full">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li key={tab.id} className="w-full">
                  <button
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsOpen(false); 
                    }}
                    className={`
                      w-full flex items-center gap-3 p-4 rounded-2xl text-[15px] font-bold transition-all duration-300
                      ${isActive 
                        ? 'bg-green-100/80 text-[#166534] border-l-[5px] border-[#166534] shadow-sm' 
                        : 'bg-transparent text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent hover:border-gray-300'
                      }
                    `}
                  >
                    <span className={isActive ? "text-[#16a34a]" : "text-gray-400"}>
                      {React.cloneElement(tab.icon, { size: 20 })} 
                    </span>
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
          
        </div>
      </div>

      {/* 3. OVERLAY (Dims background when menu is open) */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden transition-opacity"
        ></div>
      )}
    </>
  );
};

export default Navbar;