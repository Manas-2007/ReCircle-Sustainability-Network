import React from 'react';
import { Leaf, Recycle, Truck, CheckCircle2,UploadCloud,MapPin,UserPlus, ChevronRight, ArrowRight, Phone,ChevronDown,Check,Calendar,Package,Star,Clock,Search,Scale,Globe, Sparkles } from 'lucide-react';

const HeroSection = () => {

  const user = {
  name: "Priya",
  email: "priya@gmail.com",
  location: "Bhopal, MP",
  pincode: "462001",
};

  return (
    <div className="p-2 sm:p-0 bg-gray-50 min-h-screen">

    {/* HERO SECTION  */}
    <div className="relative w-full overflow-hidden rounded-3xl mb-6 bg-[#f2fdf5] shadow-sm border border-emerald-100 font-sans">
      
      {/* Background Image - Fixed for Desktop (md:object-right) so dustbin is fully visible */}
      <img
        src="/DashBanner.jpg" 
        alt="Dashboard Banner"
        className="absolute inset-0 w-full h-full object-cover object-[85%_center] md:object-[right_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent sm:hidden"></div>

      {/* Content Layer */}
      <div className="relative z-10 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8 w-full flex flex-col justify-center">
        
        {/* Heading Section */}
        <div className="max-w-xl">
          <h2 className="text-[11px] sm:text-[10px] font-bold text-emerald-800 tracking-widest uppercase mb-1.5">
            Welcome Back, {user?.name || "Priya"}! 
          </h2>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#064e3b] mb-2 tracking-tight leading-none">
            Good Morning
          </h1>

          <p className="text-[#064e3b]/90 font-medium text-sm sm:text-[14px] max-w-[280px] sm:max-w-sm mb-6 sm:mb-8 leading-relaxed">
            Let's make today another green step towards a better planet.
          </p>
        </div>

        {/* USER INFO - Flex Layout */}
        <div className="flex flex-wrap items-start gap-x-8 gap-y-4 w-full max-w-3xl">
          
          {/* Email */}
          <div className="flex flex-col min-w-[140px]">
            <p className="text-[10px] text-emerald-800/80 uppercase tracking-widest font-bold mb-1">
              Email
            </p>
            <p className="text-sm sm:text-[15px] font-bold text-[#064e3b] truncate">
              {user?.email || "priya@gmail.com"}
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <p className="text-[10px] text-emerald-800/80 uppercase tracking-widest font-bold mb-1">
              Location
            </p>
            <p className="text-sm sm:text-[15px] font-bold text-[#064e3b] [text-shadow:_0_1px_5px_rgb(255_255_255_/_80%),_0_1px_1px_rgb(255_255_255_/_100%)]">
              {user?.location || "Bhopal, MP"}
            </p>
          </div>

          {/* Pincode */}
          <div className="flex flex-col">
            <p className="text-[10px] text-emerald-800/80 uppercase tracking-widest font-bold mb-1">
              Pincode
            </p>
            <p className="text-sm sm:text-[15px] font-bold text-[#064e3b] [text-shadow:_0_1px_5px_rgb(255_255_255_/_80%),_0_1px_1px_rgb(255_255_255_/_100%)]">
              {user?.pincode || "462001"}
            </p>
          </div>

        </div>
      </div>
    </div>

      {/* Grid Setup: 1 column mobile, 3 columns desktop */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
       {/* LEFT SIDE*/}
      <div className="xl:col-span-3 space-y-6 font-sans">
        
        {/* STATS BAR */}
        <div className="bg-white rounded-3xl border border-gray-300 p-4 sm:p-6 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-2">
          {[
            { label: 'Eco Points', val: '2,450', sub: '+150 this month', icon: <Leaf size={20} className="text-emerald-600" />, trend: true },
            { label: 'Waste Recycled', val: '45.6 kg', sub: '+12.5 kg this month', icon: <Recycle size={20} className="text-emerald-600" />, trend: true },
            { label: 'Pickups ', val: '18', sub: '+4 this month', icon: <Truck size={20} className="text-emerald-600" />, trend: false },
            { label: 'CO2 Saved', val: '32.8 kg', sub: 'Great job!', icon: <Leaf size={20} className="text-emerald-600" />, trend: false },
          ].map((stat, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-3 sm:gap-4 px-2 sm:px-2 w-full ${
                i !== 3 ? 'lg:border-r border-gray-300' : ''
              }`}
            >
              {/* Soft Circular Icon Wrapper */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>

              {/* Text Items Stack */}
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-wide">
                  {stat.label}
                </span>
                <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                  {stat.val}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 flex items-center gap-0.5 mt-0.5 whitespace-nowrap">
                  {stat.sub}
                  {stat.trend && <span className="text-emerald-500 font-bold ml-0.5 text-xs">▲</span>}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIVE PICKUP REQUEST */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm w-full font-sans">
        
        {/* Header with View Details Button (From Image) */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg text-gray-900">Active Pickup Request</h3>
          <button className="text-xs font-bold text-emerald-700 bg-white border border-emerald-100 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition shadow-sm">
            View Details
          </button>
        </div>
        
        {/* STEPPER LINE (Mobile Scroll Fixed) */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
          
          <div className="relative min-w-[550px] sm:min-w-full mx-auto mt-4 z-0 px-2 sm:px-0">
            
            {/* Background Track Line (Gray) */}
            <div className="absolute top-[22px] left-[10%] right-[10%] h-[3px] bg-gray-200 z-0"></div>
            
            {/* ACTIVE GREEN LINE - 60% width connects exactly from 1st to 4th step */}
            <div className="absolute top-[22px] left-[10%] h-[3px] w-[60%] bg-[#418c50] z-0"></div>

            <div className="relative z-10 flex justify-between items-start w-full">
              
              {/* Step 1: Request Placed */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-[#418c50] text-white flex items-center justify-center mb-3">
                  <Check size={22} strokeWidth={2.5} />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800 text-center">Request Placed</span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 mt-1 text-center whitespace-nowrap">May 20, 10:30 AM</span>
              </div>

              {/* Step 2: Accepted */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-[#418c50] text-white flex items-center justify-center mb-3">
                  <Check size={22} strokeWidth={2.5} />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800 text-center">Accepted</span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 mt-1 text-center whitespace-nowrap">May 20, 11:45 AM</span>
              </div>

              {/* Step 3: Scheduled */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-[#418c50] text-white flex items-center justify-center mb-3">
                  <Calendar size={20} strokeWidth={2} />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800 text-center">Scheduled</span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 mt-1 text-center whitespace-nowrap">May 21, 09:00 AM</span>
              </div>

              {/* Step 4: In Progress (Active Blue State) */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-white text-blue-600 border-[3px] border-blue-50 ring-4 ring-cyan-50 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-center mb-3">
                  <Truck size={22} strokeWidth={2} />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800 text-center">In Progress</span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 mt-1 text-center whitespace-nowrap">Collector is on the way</span>
              </div>

              {/* Step 5: Completed (Pending State) */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-white text-gray-300 border border-gray-200 flex items-center justify-center mb-3">
                  <Package size={22} strokeWidth={1.5} />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800 text-center">Completed</span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 mt-1 text-center whitespace-nowrap opacity-0">Hidden</span>
              </div>

            </div>
          </div>
        </div>

        {/* 1. FIRST REQUEST CARD (Premium & Mobile Optimized) */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 sm:p-5 bg-white rounded-3xl border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 gap-4 sm:gap-6 mb-4 mt-3 group">
            
            {/* Left: Image & Details (Forced Row on Mobile for compact UI) */}
            <div className="flex flex-row w-full lg:w-auto gap-3 sm:gap-5">
              
              {/* Waste Image - Adjusted to w-24 h-24 on mobile so it fits side-by-side perfectly */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-gray-300 shadow-inner">
                <img src="/DashBanner.jpg" alt="Waste" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-1.5 left-1.5 bg-gray-900/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-lg">
                  5 Items
                </div>
              </div>

              {/* Info Details */}
              <div className="flex flex-col justify-center flex-1 min-w-0 py-1">
                
                {/* Title & Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                  <h4 className="font-bold text-gray-900 text-[13px] sm:text-[15px] leading-tight truncate pr-2">
                    Mixed Recyclables
                  </h4>
                  <span className="bg-emerald-50 border border-emerald-400 text-emerald-700 text-[8px] sm:text-[9px] px-2 py-0.5 rounded-md font-[600] uppercase tracking-widest shrink-0">
                    In Progress
                  </span>
                </div>
                
                {/* List Details with proper alignment */}
                <div className="space-y-1 sm:space-y-1.5">
                  <p className="text-[11px] sm:text-[13px] text-gray-600 font-medium flex items-center gap-1.5">
                    <span className="w-4 flex justify-center text-gray-400">⚖️</span>
                    <span className="font-bold text-gray-600">2.5 kg</span>
                  </p>
                  <p className="text-[11px] sm:text-[13px] text-gray-500 font-medium truncate flex items-center gap-1.5">
                    <span className="w-4 flex justify-center text-gray-400">📍</span>
                    <span className="truncate">221B Green Street, Indore, MP</span>
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium flex items-center gap-1.5">
                    <span className="w-4 flex justify-center text-gray-300">🕒</span>
                    Requested on May 20, 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Collector Details Box (Compact Premium Gradient Box) */}
            <div className="w-full lg:w-auto shrink-0 flex items-center justify-between lg:justify-start gap-3 sm:gap-5 bg-gradient-to-r from-emerald-50/80 to-[#f2fdf5] border border-emerald-300/80 p-2.5 sm:p-3.5 rounded-xl lg:rounded-2xl mt-1 lg:mt-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                
                {/* Avatar with White Border Ring (Shrinked) */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-[600] text-xs sm:text-sm shadow-sm ring-[3px] ring-white">
                  RV
                </div>
                
                <div>
                  <p className="text-[8px] sm:text-[9px] text-emerald-700 font-[600] uppercase tracking-widest mb-0.5">
                    Collector
                  </p>
                  <p className="font-bold text-gray-900 text-[13px] sm:text-[14px] leading-tight">
                    Ramesh Verma
                  </p>
                  {/* Rating inside a small white badge */}
                  <p className="text-[9px] sm:text-[10px] font-bold text-amber-500 mt-1 flex items-center gap-1 bg-white w-fit px-1.5 py-0.5 rounded border border-amber-200 shadow-sm leading-none">
                    ⭐ 4.8
                  </p>
                </div>
              </div>
              
              {/* Call Button (Shrinked) */}
              <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full border border-emerald-200 shadow-sm flex items-center justify-center text-emerald-600 hover:bg-emerald-50 hover:scale-105 hover:shadow-md transition-all duration-200">
                <Phone size={14} className="sm:w-4 sm:h-4" />
              </button>
            </div>

          </div>

        {/* 2. SECOND REQUEST CARD (COLLECTOR NOT FOUND - SEARCHING) */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 sm:p-5 bg-white rounded-3xl border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 gap-4 sm:gap-6 mb-4 group opacity-85 hover:opacity-100">
            
            {/* Left: Image & Details (Forced Row on Mobile) */}
            <div className="flex flex-row w-full lg:w-auto gap-3 sm:gap-5">
              
              {/* Waste Image Placeholder */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200 shadow-inner flex items-center justify-center">
                <span className="text-gray-400 text-xs font-medium">No Image</span>
                <div className="absolute bottom-1.5 left-1.5 bg-gray-900/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-lg">
                  12 Items
                </div>
              </div>

              {/* Info Details */}
              <div className="flex flex-col justify-center flex-1 min-w-0 py-1">
                
                {/* Title & Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                  <h4 className="font-bold text-gray-900 text-[13px] sm:text-[15px] leading-tight truncate pr-2">
                    Plastic Bottles
                  </h4>
                  <span className="bg-amber-50 border border-amber-200 text-amber-700 text-[8px] sm:text-[9px] px-2 py-0.5 rounded-md font-[600] uppercase tracking-widest shrink-0">
                    Pending
                  </span>
                </div>
                
                {/* List Details with proper alignment */}
                <div className="space-y-1 sm:space-y-1.5">
                  <p className="text-[11px] sm:text-[13px] text-gray-600 font-medium flex items-center gap-1.5">
                    <span className="w-4 flex justify-center text-gray-400">⚖️</span>
                    <span className="font-bold text-gray-600">1.2 kg</span>
                  </p>
                  <p className="text-[11px] sm:text-[13px] text-gray-500 font-medium truncate flex items-center gap-1.5">
                    <span className="w-4 flex justify-center text-gray-400">📍</span>
                    <span className="truncate">221B Green Street, Indore, MP</span>
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium flex items-center gap-1.5">
                    <span className="w-4 flex justify-center text-gray-300">🕒</span>
                    Requested on Jun 01, 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Searching Animation Box (Compact layout matched with Collector Box) */}
          <div className="w-full lg:w-auto shrink-0 flex items-center gap-2.5 sm:gap-3 bg-gray-50/80 border border-dashed border-gray-300 p-2.5 sm:p-3.5 rounded-xl lg:rounded-2xl relative overflow-hidden mt-1 lg:mt-0">
            <div className="absolute inset-0 bg-emerald-50/20 animate-pulse"></div>
            
            {/* Search Icon Ring (Shrinked) */}
            <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-emerald-500">
              <Search size={14} className="animate-[spin_3s_linear_infinite] sm:w-4 sm:h-4" />
            </div>
            
            <div className="relative z-10">
              <p className="font-bold text-gray-800 text-[13px] sm:text-[14px] leading-tight mb-0.5">
                Assigning Collector
              </p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium flex items-center gap-1">
                Searching nearby <span className="animate-bounce text-emerald-500">...</span>
              </p>
            </div>
          </div>
          </div>

        {/* 3. THIRD REQUEST CARD (COLLECTOR NOT FOUND - SEARCHING) */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 sm:p-5 bg-white rounded-3xl border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 gap-4 sm:gap-6 opacity-85 hover:opacity-100">
            
            {/* Left: Image & Details (Forced Row on Mobile) */}
            <div className="flex flex-row w-full lg:w-auto gap-3 sm:gap-5">
              
              {/* Waste Image Placeholder */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200 shadow-inner flex items-center justify-center">
                <span className="text-gray-400 text-xs font-medium">No Image</span>
                <div className="absolute bottom-1.5 left-1.5 bg-gray-900/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-lg">
                  2 Items
                </div>
              </div>

              {/* Info Details */}
              <div className="flex flex-col justify-center flex-1 min-w-0 py-1">
                
                {/* Title & Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                  <h4 className="font-bold text-gray-900 text-[13px] sm:text-[15px] leading-tight truncate pr-2">
                    Paper Waste
                  </h4>
                  <span className="bg-amber-50 border border-amber-200 text-amber-700 text-[8px] sm:text-[9px] px-2 py-0.5 rounded-md font-[600] uppercase tracking-widest shrink-0">
                    Pending
                  </span>
                </div>
                
                {/* List Details with proper alignment */}
                <div className="space-y-1 sm:space-y-1.5">
                  <p className="text-[11px] sm:text-[13px] text-gray-600 font-medium flex items-center gap-1.5">
                    <span className="w-4 flex justify-center text-gray-400">⚖️</span>
                    <span className="font-bold text-gray-600">3.0 kg</span>
                  </p>
                  <p className="text-[11px] sm:text-[13px] text-gray-500 font-medium truncate flex items-center gap-1.5">
                    <span className="w-4 flex justify-center text-gray-400">📍</span>
                    <span className="truncate">221B Green Street, Indore, MP</span>
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium flex items-center gap-1.5">
                    <span className="w-4 flex justify-center text-gray-300">🕒</span>
                    Requested on Jun 01, 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Searching Animation Box (Compact layout matched with Collector Box) */}
          <div className="w-full lg:w-auto shrink-0 flex items-center gap-2.5 sm:gap-3 bg-gray-50/80 border border-dashed border-gray-300 p-2.5 sm:p-3.5 rounded-xl lg:rounded-2xl relative overflow-hidden mt-1 lg:mt-0">
            <div className="absolute inset-0 bg-emerald-50/20 animate-pulse"></div>
            
            {/* Search Icon Ring (Shrinked) */}
            <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-emerald-500">
              <Search size={14} className="animate-[spin_3s_linear_infinite] sm:w-4 sm:h-4" />
            </div>
            
            <div className="relative z-10">
              <p className="font-bold text-gray-800 text-[13px] sm:text-[14px] leading-tight mb-0.5">
                Assigning Collector
              </p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium flex items-center gap-1">
                Searching nearby <span className="animate-bounce text-emerald-500">...</span>
              </p>
            </div>
          </div>
          </div>

      </div>

       {/* HISTORY SECTION (Replaced Recent Requests) */}
<div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-sm w-full font-sans mt-6">
  
  {/* Header Section */}
  <div className="flex justify-between items-center mb-4 sm:mb-6">
    <h3 className="font-bold text-gray-900 text-lg tracking-wide">
      Pickup History
    </h3>
    <button className="text-[11px] sm:text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors">
      View All
    </button>
  </div>

  {/* Scrollable Container for Mobile */}
  <div className="w-full overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-500/50 hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500 transition-all">
    
    <table className="w-full min-w-[600px] text-left border-collapse">
      {/* Table Head */}
      <thead>
        <tr className="border-b border-gray-100">
          <th className="pb-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider w-12 pl-2">S.No</th>
          <th className="pb-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Waste Type</th>
          <th className="pb-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Quantity</th>
          <th className="pb-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Reward</th>
          <th className="pb-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right pr-2">Status</th>
        </tr>
      </thead>
      
      {/* Table Body - Max 3 Items */}
      <tbody>
        {[
          { name: 'Mixed Recyclables', qty: '12.5 kg', points: '+150', img: '/DashBanner.jpg' },
          { name: 'Plastic Bottles', qty: '5.2 kg', points: '+85', img: '/DashBanner.jpg' },
          { name: 'Paper & Cardboard', qty: '8.0 kg', points: '+120', img: '/DashBanner.jpg' }
        ].map((item, i) => (
          <tr 
            key={i} 
            className="border-b border-gray-50 last:border-0 hover:bg-emerald-50/40 transition-colors group cursor-pointer"
          >
            {/* S.No */}
            <td className="py-3 pl-2 text-xs font-bold text-gray-400">
              #0{i + 1}
            </td>
            
            {/* Waste Type (Image + Name) */}
            <td className="py-3 pr-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200 group-hover:border-emerald-200 transition-colors">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-gray-800 text-[13px] group-hover:text-emerald-700 transition-colors">
                  {item.name}
                </span>
              </div>
            </td>
            
            {/* Quantity */}
            <td className="py-3 pr-4 text-[13px] font-medium text-gray-600">
              {item.qty}
            </td>
            
            {/* Reward (Points + Leaf Icon) */}
            <td className="py-3 pr-4">
              <div className="flex items-center gap-1.5 font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md">
                <Leaf size={14} className="text-emerald-500 fill-emerald-500/20" />
                <span className="text-xs sm:text-[13px]">{item.points}</span>
              </div>
            </td>
            
            {/* Status */}
            <td className="py-3 pr-2 text-right">
              <span className="inline-flex items-center gap-1 bg-gray-900 text-white text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest shadow-sm group-hover:bg-emerald-600 transition-colors">
                Completed
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      </div>

        {/* --- RIGHT SIDEBAR (1 Column) --- */}
    <div className="space-y-6">

      {/* 1. Eco Impact Card - Animated & Themed */}
      <div className="bg-gradient-to-br from-[#f2fdf5] to-white p-5 sm:p-6 rounded-3xl border border-emerald-300/80 shadow-sm font-sans w-full hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out group">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-emerald-900 text-[15px] sm:text-base tracking-wide group-hover:text-emerald-700 transition-colors">
            Your Eco Impact
          </h3>
          
          {/* Dropdown Button */}
          <button className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-700 px-3 py-1.5 border border-emerald-200/60 bg-white/60 rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-sm">
            This Month <ChevronDown size={14} className="text-emerald-600" />
          </button>
        </div>

        {/* Content Section (Circle + Text) */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Circular Progress Ring (SVG) */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
            <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 100 100">
              {/* Background Light Track */}
              <circle 
                cx="50" cy="50" r="42" 
                stroke="#d1fae5" /* emerald-100 */
                strokeWidth="8" 
                fill="none" 
              />
              {/* Dark Green Progress Track (78%) - Added inline transition for animation */}
              <circle 
                cx="50" cy="50" r="42" 
                stroke="#10b981" /* emerald-500 */
                strokeWidth="8" 
                fill="none" 
                strokeDasharray="263.89"
                strokeDashoffset="58.05"
                strokeLinecap="round" 
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            
            {/* Centered Text inside Circle */}
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-1 group-hover:scale-105 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight leading-none">
                78%
              </span>
              <Leaf size={14} className="text-emerald-500 mt-1 drop-shadow-sm animate-pulse" />
            </div>
          </div>

          {/* Description Text */}
          <p className="text-xs sm:text-[13px] text-gray-600 font-medium leading-relaxed max-w-[150px] sm:max-w-[180px]">
            You've recycled more than <strong className="text-emerald-800 font-bold">78%</strong> of users in your area. Amazing! <span className="inline-block hover:scale-125 hover:rotate-12 transition-transform duration-200 translate-y-[2px] cursor-default">🌱</span>
          </p>
          
        </div>
      </div>

      {/* 2. Eco Rewards Card - Hover Scaling */}
      <div className="relative w-full rounded-3xl overflow-hidden font-sans min-h-[300px] p-7 sm:p-5 flex flex-col justify-between shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group cursor-pointer">

        <img
          src="/DashTrophy.jpg" 
          alt="Trophy Background"
          className="absolute inset-0 w-full h-full object-cover object-right sm:object-[100%_center] group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          
          {/* Top Header: Title & View All Button */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-[#dcedc1] tracking-wide text-sm sm:text-base">
              Eco Rewards
            </h3>
            <button className="text-[10px] sm:text-xs font-semibold text-white/90 border border-white/20 bg-white/10 rounded-lg px-3 py-1.5 hover:bg-white/20 transition-all backdrop-blur-sm">
              View All
            </button>
          </div>

          {/* Middle Points Section */}
          <div className="mb-2 transform group-hover:translate-x-1 transition-transform duration-300">
            <h2 className="text-4xl sm:text-4xl font-[600] text-white mb-1 tracking-tight">
              2,450
            </h2>
            <p className="text-sm font-medium text-[#dcedc1] mb-4">
              Eco Points
            </p>
          </div>

          {/* Description Text */}
          <p className="text-xs sm:text-[12px] text-white/80 font-medium leading-relaxed max-w-[55%] sm:max-w-[60%] mb-6">
            Redeem your points for exciting rewards and discounts.
          </p>

          {/* CTA Button */}
          <div>
            <button className="inline-flex items-center justify-center gap-2 bg-[#438a4f] text-white py-2.5 px-4 sm:px-5 rounded-xl text-xs sm:text-sm font-[600] border border-[#52a65f] shadow-lg hover:bg-[#387642] hover:shadow-xl hover:gap-3 transition-all duration-300">
              Explore Rewards <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>

      {/* 3. Quick Actions - Themed & Animated */}
      <div className="bg-gradient-to-br from-[#f2fdf5] to-white p-5 sm:p-6 rounded-3xl border border-emerald-300/80 shadow-sm font-sans w-full hover:-translate-y-1 hover:shadow-md transition-all duration-300">
        <h3 className="font-bold text-emerald-900 mb-5 text-[15px] sm:text-base tracking-wide">
          Quick Actions
        </h3>
        
        <div className="space-y-3 sm:space-y-4">
          {[
            {
              title: 'Upload Waste',
              desc: 'Upload recyclable items',
              icon: <UploadCloud size={18} />
            },
            {
              title: 'Track Your Request',
              desc: 'Track status of your pickup',
              icon: <MapPin size={18} />
            },
            {
              title: 'Invite & Earn',
              desc: 'Invite friends and earn points',
              icon: <UserPlus size={18} />
            }
          ].map((action, i) => (
            <div 
              key={i} 
              className="group flex justify-between items-center p-2.5 -mx-2.5 rounded-2xl cursor-pointer hover:bg-white hover:shadow-[0_4px_12px_rgba(16,185,129,0.08)] border border-transparent hover:border-emerald-100 transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                
                {/* Icon Container */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-100/50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                  {action.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition-colors truncate">
                    {action.title}
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 truncate group-hover:text-emerald-600/70 transition-colors">
                    {action.desc}
                  </span>
                </div>
              </div>

              {/* Chevron Icon - Animated */}
              <div className="p-1">
                <ChevronRight 
                  size={18} 
                  className="text-emerald-200 group-hover:text-emerald-500 group-hover:translate-x-1.5 transition-all duration-300" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Global Impact / Revolving Earth Card */}
      <div className="bg-gradient-to-br from-emerald-900 to-[#064e3b] p-6 sm:p-7 rounded-3xl border border-emerald-800 shadow-xl font-sans w-full relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
        
        {/* Large Background Revolving Earth (Decorative) */}
        <div className="absolute -right-12 -top-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
          <Globe size={180} className="text-emerald-100 animate-[spin_20s_linear_infinite]" strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Small Glowing Revolving Earth */}
          <div className="relative mb-5">
            <div className="absolute inset-0 bg-emerald-400 blur-md opacity-30 rounded-full animate-pulse"></div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Globe size={28} className="text-emerald-100 animate-[spin_8s_linear_infinite] sm:w-8 sm:h-8" />
            </div>
            <Sparkles size={16} className="absolute -top-1 -right-2 text-emerald-300 animate-bounce" />
          </div>

          {/* Message Content */}
          <h3 className="text-white font-bold text-base sm:text-lg tracking-wide mb-2">
            Our Planet Thanks You! 🌍
          </h3>
          
          <p className="text-emerald-100/80 text-xs sm:text-[13px] leading-relaxed font-medium mb-6 max-w-[220px]">
            Every item you recycle is a step towards a greener, cleaner Earth. You're part of a global movement today.
          </p>

          {/* Action Button */}
          <button className="w-full text-[11px] sm:text-xs font-bold text-emerald-950 bg-emerald-100 px-4 py-2.5 rounded-xl hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300">
            See Global Impact
          </button>
          
        </div>
      </div>

    </div>

      </div>

      
    </div>
  );
};

export default HeroSection;