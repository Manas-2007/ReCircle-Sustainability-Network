import React from 'react';
// Saare zaroori icons import kar liye hain (Navigation ki jagah Compass hai)
import { Package, Truck,Clock,TrendingUp ,FileText,Leaf, CheckCircle, Trophy, MapPin, Mail, Compass, ArrowRight, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="p-3 md:p-4 space-y-5 bg-gray-50 min-h-screen -mt-6">
      
     {/* =========================================
    1. HERO & STATS SECTION (Top Row - 60/40 Split)
============================================= */}
<div className="flex flex-col xl:flex-row gap-4 w-full items-stretch">
  
  {/* LEFT SIDE: 60% Profile Banner */}
<div className="relative w-full xl:w-[60%] bg-white rounded-3xl p-5 md:p-6 border border-gray-300 shadow-sm overflow-hidden flex flex-col justify-center min-h-[220px]">
    
    {/* BACKGROUND IMAGE LAYER */}
    <div 
      className="absolute right-0 bottom-0 top-0 w-full sm:w-1/2 md:w-[45%] z-0"
      style={{
        backgroundImage: `url('/CollectorBanner.jpg')`, 
        backgroundSize: 'cover', // Desktop ke liye cover hi rakha hai
        backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* MOBILE SPECIFIC OVERRIDE: Image ko mobile par 'contain' kiya aur position adjust ki */}
      <style>{`
        @media (max-width: 640px) {
          .mobile-img-adjust {
            background-size: contain !important;
            background-position: 80% bottom !important;
          }
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 sm:via-white/20 to-transparent w-full h-full mobile-img-adjust"></div>
    </div>

    {/* CONTENT AREA */}
    <div className="relative z-10 w-full sm:w-[65%] pr-2 sm:pr-0">
      <h1 className="text-xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
        Welcome Back <br />
        <span className="text-green-700 inline-flex items-center gap-1.5 mt-1">
          Ramesh Verma
        </span>
      </h1>
      
      {/* Profile Fields */}
      <div className="mt-4 space-y-1.5 text-xs md:text-sm font-semibold">
        
        {/* Email Field */}
        <div className="flex items-center gap-2 py-0.5 max-w-fit">
          <div className="bg-white/80 sm:bg-gray-100 p-1.5 rounded-lg border border-gray-200 sm:border-gray-300 text-gray-700 shrink-0 shadow-sm sm:shadow-none">
            <Mail size={14} className="md:w-4 md:h-4" />
          </div>
          <span className="text-gray-900 md:text-gray-700 truncate max-w-[180px] sm:max-w-none px-1 py-0.5 rounded-md bg-white/50 backdrop-blur-[2px] sm:bg-transparent sm:backdrop-blur-none">
            ramesh.collector@ecoloop.com
          </span>
        </div>
        
        {/* Location Field */}
        <div className="flex items-center gap-2 py-0.5 max-w-fit">
          <div className="bg-white/80 sm:bg-gray-100 p-1.5 rounded-lg border border-gray-200 sm:border-gray-300 text-gray-700 shrink-0 shadow-sm sm:shadow-none">
            <MapPin size={14} className="md:w-4 md:h-4" />
          </div>
          <span className="text-gray-900 md:text-gray-700 px-1 py-0.5 rounded-md bg-white/50 backdrop-blur-[2px] sm:bg-transparent sm:backdrop-blur-none">
            78 MG Road, Indore, MP
          </span>
        </div>
        
        {/* Pincode Field */}
        <div className="flex items-center gap-2 py-0.5 max-w-fit">
          <div className="bg-white/80 sm:bg-gray-100 p-1.5 rounded-lg border border-gray-200 sm:border-gray-300 text-gray-700 shrink-0 shadow-sm sm:shadow-none">
            <Compass size={14} className="md:w-4 md:h-4" /> 
          </div>
          <span className="text-gray-900 md:text-gray-700 px-1 py-0.5 rounded-md bg-white/50 backdrop-blur-[2px] sm:bg-transparent sm:backdrop-blur-none">
            Pincode: 452001
          </span>
        </div>

      </div>
    </div>
</div>

  {/* RIGHT SIDE: 40% Collector Performance Banner (Enhanced & Filled) */}
<div className="relative w-full xl:w-[40%] bg-white rounded-3xl p-5 md:p-6 border border-gray-300 shadow-sm flex flex-col min-h-[180px] md:min-h-[220px] overflow-hidden">
  
  {/* Subtle Background Glow to remove 'empty' feeling */}
  <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-10 -translate-y-10 z-0"></div>

  {/* Header Section */}
  <div className="relative z-10 flex justify-between items-center mb-2 md:mb-0">
    <h2 className="font-bold text-base md:text-lg xl:text-base text-gray-900 truncate pr-2">Collector Performance</h2>
    <span className="text-[9px] md:text-[10px] font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-300 uppercase tracking-wide shrink-0">
      This Week
    </span>
  </div>

  {/* Chart & Stats Content */}
  <div className="relative z-10 flex flex-row justify-start items-center gap-4 md:gap-5 xl:gap-4 w-full my-auto">
    
    {/* Left: Progress Circle & Trend Badge */}
    <div className="flex flex-col items-center justify-center shrink-0">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-24 xl:h-24">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-gray-100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <path
            className="text-emerald-500 animate-[spin_1.5s_ease-out_forwards]"
            strokeDasharray="85, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-bold text-lg sm:text-xl md:text-2xl xl:text-xl text-gray-900 leading-none">85%</span>
        </div>
      </div>
      {/* New Trend Badge to fill vertical space */}
      <span className="mt-2 text-[8px] md:text-[9px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md flex items-center gap-1">
        ↑ 5% vs Last Wk
      </span>
    </div>

    {/* Right: Performance Details & 3-Column Stats */}
    <div className="flex-1 min-w-0 flex flex-col justify-center">
      
      {/* Motivational Text */}
      <p className="text-xs md:text-sm xl:text-xs text-gray-500 leading-snug font-semibold mb-3 md:mb-4 xl:mb-3">
  {/* Desktop and Tablet View (Long 3-sentence text) */}
  <span className="hidden sm:inline">
    Excellent work! You are in the top 10% of collectors locally. Your efficiency is increasing rapidly and you are making a great impact on the environment this week! 
  </span>
  
  {/* Mobile View (Compact but enhanced text) */}
  <span className="sm:hidden">
    Trending up this week! You are in the top 10% collectors.
  </span>
</p>
      
      {/* Stats Grid - Upgraded to 3 columns with dividers to fill horizontal space beautifully */}
      <div className="grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-100 pt-3 md:pt-4 xl:pt-3">
        
        {/* Stat 1 */}
        <div className="pl-0 pr-2 xl:pr-1">
          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Waste Saved</p>
          <p className="font-bold text-sm sm:text-base md:text-lg xl:text-base text-gray-900 truncate">
            68.5 <span className="text-[8px] md:text-[9px] text-gray-500 font-semibold">kg</span>
          </p>
        </div>

        {/* Stat 2 (New) */}
        <div className="px-2 xl:px-2">
          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Pickups</p>
          <p className="font-bold text-sm sm:text-base md:text-lg xl:text-base text-gray-900 truncate">
            24
          </p>
        </div>

        {/* Stat 3 */}
        <div className="pl-2 xl:pl-2">
          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Earnings</p>
          <p className="font-bold text-sm sm:text-base md:text-lg xl:text-base text-emerald-600 truncate">
            ₹2,450
          </p>
        </div>

      </div>
    </div>
    
  </div>
</div>
  
</div>
      

      {/* =========================================
    2. STATS ROW (Sleek, Light & Responsive)
============================================= */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full py-4">
  
  {/* Card 1: Requests Nearby */}
  <div className="bg-emerald-600 text-white p-3.5 md:p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:bg-emerald-700 transition-colors">
    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
      <Package size={25} strokeWidth={2} />
    </div>
    <div>
      <h3 className="text-lg md:text-2xl font-bold leading-none">12</h3>
      <p className="text-emerald-50 text-[9px] md:text-[12px] font-semibold mt-1 uppercase tracking-wider">Requests Nearby</p>
      <p className="text-emerald-100/80 text-[9px] mt-0.5 cursor-pointer hover:text-white transition-colors">View all →</p>
    </div>
  </div>

  {/* Card 2: Accepted Pickups */}
  <div className="bg-blue-600 text-white p-3.5 md:p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:bg-blue-700 transition-colors">
    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
      <Truck size={25} strokeWidth={2} />
    </div>
    <div>
      <h3 className="text-lg md:text-2xl font-bold leading-none">8</h3>
      <p className="text-blue-50 text-[9px] md:text-[12px] font-semibold mt-1 uppercase tracking-wider">Accepted Pickups</p>
      <p className="text-blue-100/80 text-[9px] mt-0.5">In Progress</p>
    </div>
  </div>

  {/* Card 3: Completed Today */}
  <div className="bg-violet-600 text-white p-3.5 md:p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:bg-violet-700 transition-colors">
    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
      <CheckCircle size={25} strokeWidth={2} />
    </div>
    <div>
      <h3 className="text-lg md:text-xl font-bold leading-none">7</h3>
      <p className="text-violet-50 text-[9px] md:text-[12px] font-medium mt-1 uppercase tracking-wider">Completed Today</p>
      <p className="text-violet-200/80 text-[9px] mt-0.5">+2 from yesterday</p>
    </div>
  </div>

  {/* Card 4: Earnings Today */}
  <div className="bg-amber-500 text-white p-3.5 md:p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:bg-amber-600 transition-colors">
    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
      <Trophy size={25} strokeWidth={2} />
    </div>
    <div>
      <h3 className="text-lg md:text-xl font-bold leading-none">₹560</h3>
      <p className="text-amber-50 text-[9px] md:text-[12px] font-semibold mt-1 uppercase tracking-wider">Earnings Today</p>
      <p className="text-amber-100/80 text-[9px] mt-0.5">+₹120 from yesterday</p>
    </div>
  </div>

</div>

{/* =========================================
    3. MAIN CONTENT: REQUESTS & SCHEDULE
============================================= */}
<div className="flex flex-col lg:flex-row gap-5 md:gap-6 w-full">
  
  {/* LEFT SIDE: 50% Nearby Pickup Requests (Compact & Row-locked for Mobile) */}
  <div className="w-full lg:w-1/2 bg-white rounded-3xl p-4 md:p-5 border border-gray-100 shadow-sm flex flex-col">
    
    {/* Header */}
    <div className="flex justify-between items-center mb-3 md:mb-4">
      <h2 className="font-bold text-base md:text-lg text-gray-900">Nearby Pickup Requests</h2>
      <button className="text-[10px] md:text-xs font-bold text-emerald-700 bg-white border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors shadow-sm">
        View All
      </button>
    </div>

    {/* Requests List */}
    <div className="flex flex-col">
      
      {/* Item 1 */}
      {/* Changed to permanent flex-row. No more stacking on mobile! */}
      <div className="flex flex-row gap-3 md:gap-4 py-3 md:py-3.5 border-b border-gray-100 first:pt-0">
        
        {/* Fixed Thumbnail Image Box */}
        <div className="w-20 h-20 md:w-24 md:h-20 shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <img src="/H1.jpg" alt="Mixed Recyclables" className="w-full h-full object-cover" />
        </div>
        
        {/* Content Wrapper */}
        <div className="flex-1 flex flex-row justify-between gap-2 min-w-0">
          
          {/* Details Area (min-w-0 prevents text overflow issues on small screens) */}
          <div className="flex flex-col justify-center gap-1 md:gap-1.5 min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-gray-900 text-xs md:text-sm truncate">Mixed Recyclables</h3>
              {/* Badge hidden on very small phones to save space */}
              <span className="hidden sm:inline-block bg-emerald-50 text-emerald-700 text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wide shrink-0">New</span>
            </div>
            
            <div className="flex flex-col xl:flex-row xl:items-center gap-0.5 xl:gap-3 text-[10px] md:text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1"><Package size={12} className="shrink-0" /> 2.5 kg</span>
              <span className="flex items-center gap-1"><Calendar size={12} className="shrink-0" /> May 21, 10:30 AM</span>
            </div>
            
            <div className="flex items-center gap-1 text-[10px] md:text-xs text-gray-500 font-medium truncate mt-0.5">
              <MapPin size={12} className="shrink-0" /> <span className="truncate">221B Green Street, Indore</span>
            </div>
          </div>

          {/* Price & Action Button (Right aligned vertically) */}
          <div className="flex flex-col justify-center items-end shrink-0 gap-1.5 md:gap-2">
            <span className="text-base md:text-lg font-bold text-emerald-600 leading-none">₹40</span>
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 rounded-lg transition-colors shadow-sm whitespace-nowrap">
              Accept
            </button>
          </div>

        </div>
      </div>

      {/* Item 2 */}
      <div className="flex flex-row gap-3 md:gap-4 py-3 md:py-3.5 border-b border-gray-100">
        <div className="w-20 h-20 md:w-24 md:h-20 shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <img src="/H2.jpg" alt="Plastic Bottles" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-row justify-between gap-2 min-w-0">
          <div className="flex flex-col justify-center gap-1 md:gap-1.5 min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-gray-900 text-xs md:text-sm truncate">Plastic Bottles</h3>
              <span className="hidden sm:inline-block bg-emerald-50 text-emerald-700 text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wide shrink-0">New</span>
            </div>
            <div className="flex flex-col xl:flex-row xl:items-center gap-0.5 xl:gap-3 text-[10px] md:text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1"><Package size={12} className="shrink-0" /> 1.8 kg</span>
              <span className="flex items-center gap-1"><Calendar size={12} className="shrink-0" /> May 21, 11:15 AM</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] md:text-xs text-gray-500 font-medium truncate mt-0.5">
              <MapPin size={12} className="shrink-0" /> <span className="truncate">78 MG Road, Indore</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end shrink-0 gap-1.5 md:gap-2">
            <span className="text-base md:text-lg font-bold text-emerald-600 leading-none">₹30</span>
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 rounded-lg transition-colors shadow-sm whitespace-nowrap">
              Accept
            </button>
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex flex-row gap-3 md:gap-4 py-3 md:py-3.5 border-b border-gray-100">
        <div className="w-20 h-20 md:w-24 md:h-20 shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <img src="/H3.jpg" alt="Paper Waste" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-row justify-between gap-2 min-w-0">
          <div className="flex flex-col justify-center gap-1 md:gap-1.5 min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-gray-900 text-xs md:text-sm truncate">Paper Waste</h3>
            </div>
            <div className="flex flex-col xl:flex-row xl:items-center gap-0.5 xl:gap-3 text-[10px] md:text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1"><Package size={12} className="shrink-0" /> 3.2 kg</span>
              <span className="flex items-center gap-1"><Calendar size={12} className="shrink-0" /> May 21, 12:00 PM</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] md:text-xs text-gray-500 font-medium truncate mt-0.5">
              <MapPin size={12} className="shrink-0" /> <span className="truncate">36 Scheme No. 54, Indore</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end shrink-0 gap-1.5 md:gap-2">
            <span className="text-base md:text-lg font-bold text-emerald-600 leading-none">₹35</span>
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 rounded-lg transition-colors shadow-sm whitespace-nowrap">
              Accept
            </button>
          </div>
        </div>
      </div>

    </div>

    {/* Footer Full Width Button */}
    <button className="w-full mt-3 bg-emerald-200 hover:bg-emerald-100 text-emerald-800 font-bold text-xs md:text-sm py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
      View All Requests <ArrowRight size={14} />
    </button>
    
  </div>

 {/* RIGHT SIDE: 50% Earnings Summary (Polished, Balanced & Fully Responsive) */}
<div className="w-full lg:w-1/2 bg-white rounded-3xl p-4 md:p-6 border border-gray-300 shadow-sm flex flex-col h-full">
  
  {/* Header */}
  <div className="flex justify-between items-center mb-4 md:mb-6">
    <h2 className="font-bold text-base md:text-lg text-gray-900">Earnings Summary</h2>
    <button className="text-[10px] sm:text-xs font-bold border border-green-400 text-emerald-700 bg-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-emerald-100 transition-colors whitespace-nowrap">
      Go to Earnings
    </button>
  </div>

  {/* Main Stats Card - Enhanced visual depth */}
  <div className="bg-emerald-700 rounded-2xl md:rounded-3xl p-5 md:p-7 text-white shadow-xl relative overflow-hidden mb-5 md:mb-6">
    {/* Decorative abstract circle */}
    <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-emerald-600 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 opacity-60"></div>
    
    <div className="relative z-10">
      <p className="text-emerald-100 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1.5 md:mb-2">Total Earnings (This Week)</p>
      <div className="flex items-baseline gap-2 md:gap-3">
        <h2 className="text-3xl md:text-4xl font-bold">₹12,450</h2>
        <span className="flex items-center text-emerald-100 text-[10px] md:text-xs font-bold bg-emerald-800/50 px-2 md:px-2.5 py-0.5 md:py-1 rounded-full whitespace-nowrap">
          +12% ↑
        </span>
      </div>
      
      {/* Target Progress Bar */}
      <div className="mt-5 md:mt-7">
        <div className="flex justify-between text-[10px] md:text-xs font-semibold mb-1.5 md:mb-2 text-emerald-100">
          <span>Target Progress</span>
          <span>75%</span>
        </div>
        <div className="w-full bg-emerald-900/40 h-2.5 md:h-3 rounded-full overflow-hidden shadow-inner">
          <div className="bg-white h-full w-[75%] rounded-full shadow-md"></div>
        </div>
      </div>
    </div>
  </div>

  {/* 3-Column Grid (Responsive padding and gaps to prevent squashing on mobile) */}
  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-auto">
    
    {/* Stat Card 1 */}
    <div className="bg-gray-50 hover:bg-gray-100 transition-colors p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-300 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="text-emerald-600 mb-2 md:mb-3 bg-emerald-100 rounded-full flex items-center justify-center">
        <Clock size={22} />
      </div>
      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5 md:mb-1 truncate w-full">Pending</p>
      <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">₹2.8k</p>
    </div>

    {/* Stat Card 2 */}
    <div className="bg-gray-50 hover:bg-gray-100 transition-colors p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-300 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="text-blue-600 mb-2 md:mb-3 bg-blue-100 rounded-full flex items-center justify-center">
        <CheckCircle size={22} />
      </div>
      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5 md:mb-1 truncate w-full">Jobs</p>
      <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">42</p>
    </div>

    {/* Stat Card 3 */}
    <div className="bg-gray-50 hover:bg-gray-100 transition-colors p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-300 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="text-amber-600 mb-2 md:mb-3 bg-amber-100 rounded-full flex items-center justify-center">
        <TrendingUp size={22} />
      </div>
      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5 md:mb-1 truncate w-full">Avg/Job</p>
      <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">₹296</p>
    </div>
    
  </div>

</div>

</div>

{/* =========================================
    4. BOTTOM SECTION: HISTORY & NATURE MESSAGE
============================================= */}
<div className="flex flex-col xl:flex-row gap-6 w-full mt-6">
  
  {/* LEFT SIDE: 60% - Action History (Tabular View with Images) */}
<div className="w-full xl:w-[60%] bg-white rounded-3xl p-5 md:p-6 border border-gray-300 shadow-sm flex flex-col">
  
  <div className="flex justify-between items-center mb-6">
    <h2 className="font-bold text-lg text-gray-900">Recent Activity</h2>
    <button className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">View All</button>
  </div>

  {/* Table container with horizontal scroll for mobile */}
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse min-w-[600px]">
      <thead>
        <tr className="text-gray-600 text-[10px] uppercase font-bold border-b border-gray-100">
          <th className="pb-3 pl-2">S.No</th>
          <th className="pb-3">Waste Info</th>
          <th className="pb-3">Quantity</th>
          <th className="pb-3">Date</th>
          <th className="pb-3 text-right pr-2">Status</th>
        </tr>
      </thead>
      <tbody className="text-sm font-semibold text-gray-700">
        
        {/* Row 1 */}
        <tr className="border-b border-gray-50">
          <td className="py-4 pl-2 text-gray-900">#01</td>
          <td className="py-4 flex items-center gap-3">
            <img src="/H1.jpg" alt="Plastic" className="w-10 h-10 rounded-lg object-cover border border-gray-100 shadow-sm" />
            Plastic Waste
          </td>
          <td className="py-4">4.2 kg</td>
          <td className="py-4 text-[11px] text-gray-600">Today, 08:30 AM</td>
          <td className="py-4 text-right pr-2"><span className="text-[11px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md">Completed</span></td>
        </tr>

        {/* Row 2 */}
        <tr className="border-b border-gray-50">
          <td className="py-4 pl-2 text-gray-900">#02</td>
          <td className="py-4 flex items-center gap-3">
            <img src="/H2.jpg" alt="Paper" className="w-10 h-10 rounded-lg object-cover border border-gray-100 shadow-sm" />
            Paper Collection
          </td>
          <td className="py-4">1.5 kg</td>
          <td className="py-4 text-[11px] text-gray-600">Yesterday, 02:00 PM</td>
          <td className="py-4 text-right pr-2"><span className="text-[11px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md">Completed</span></td>
        </tr>

        {/* Row 3 */}
        <tr className="border-b-0">
          <td className="py-4 pl-2 text-gray-900">#03</td>
          <td className="py-4 flex items-center gap-3">
            <img src="/H3.jpg" alt="Glass" className="w-10 h-10 rounded-lg object-cover border border-gray-100 shadow-sm" />
            Glass Bottles
          </td>
          <td className="py-4">2.0 kg</td>
          <td className="py-4 text-[11px] text-gray-600">May 20, 11:00 AM</td>
          <td className="py-4 text-right pr-2"><span className="text-[11px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md">Completed</span></td>
        </tr>

        {/* Row 4*/}
        <tr className="border-b border-gray-50">
          <td className="py-4 pl-2 text-gray-900">#04</td>
          <td className="py-4 flex items-center gap-3">
            <img src="/H4.jpg" alt="E-Waste" className="w-10 h-10 rounded-lg object-cover border border-gray-100 shadow-sm" />
            E-Waste
          </td>
          <td className="py-4">0.8 kg</td>
          <td className="py-4 text-[11px] text-gray-400">May 18, 09:15 AM</td>
          <td className="py-4 text-right pr-2"><span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md">Completed</span></td>
        </tr>

      </tbody>
    </table>
  </div>
</div>

  {/* RIGHT SIDE: 40% - Nature Message (Optimized & Premium) */}
<div className="w-full xl:w-[40%] bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden min-h-[300px] group">
  
  {/* Decorative Background Elements (Subtle patterns) */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute -top-16 -left-16 w-48 h-48 bg-white rounded-full animate-pulse blur-xl"></div>
    <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-emerald-300 rounded-full blur-2xl"></div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 w-full max-w-sm flex flex-col items-center animate-in fade-in duration-700">
    
    {/* Icon Wrapper */}
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl mb-6 shadow-inner border border-white/20 animate-[bounce_3s_infinite]">
      <Leaf className="text-white w-8 h-8 md:w-10 md:h-10" />
    </div>
    
    {/* Headline */}
    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
      Keep The Earth Breathing
    </h3>
    
    {/* Message */}
    <p className="text-emerald-50 text-xs md:text-sm font-medium mb-6 leading-relaxed opacity-90">
      Every kilogram of waste you collect is a significant step towards a greener tomorrow. You're not just working; you're healing the planet.
    </p>

    {/* Impact Stat (Added to reduce 'empty' feel) */}
    <div className="flex gap-6 mb-8 bg-black/10 px-5 py-3 rounded-2xl border border-white/10 w-full justify-center">
      <div>
        <p className="text-[10px] text-emerald-100 uppercase tracking-widest font-bold">Trees Saved</p>
        <p className="text-lg font-bold text-white">12+</p>
      </div>
      <div className="w-px bg-white/20 h-full"></div>
      <div>
        <p className="text-[10px] text-emerald-100 uppercase tracking-widest font-bold">CO2 Reduced</p>
        <p className="text-lg font-bold text-white">45kg</p>
      </div>
    </div>
    
    {/* Action Button */}
    <button className="w-full bg-white text-emerald-700 font-bold text-xs md:text-sm px-6 py-3.5 rounded-2xl hover:bg-emerald-50 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2">
      View Environmental Impact
    </button>
  </div>
</div>

</div>

    </div>
  );
};

export default HeroSection;