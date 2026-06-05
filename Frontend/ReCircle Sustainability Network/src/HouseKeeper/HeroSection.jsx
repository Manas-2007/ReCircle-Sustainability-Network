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
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 font-sans pb-10 -mt-2 sm:-mt-0">

    {/* HERO SECTION */}
<div className="relative w-full overflow-hidden rounded-3xl mb-6 bg-[#f2fdf5] shadow-sm border border-emerald-100 font-sans">

  {/* Background Image */}
  <img
    src="/DashBanner.jpg"
    alt="Dashboard Banner"
    className="absolute inset-0 w-full h-full object-cover object-[85%_center] md:object-[right_center]"
  />

  {/* Better Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 to-transparent sm:hidden"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent hidden sm:block"></div>

  {/* Content */}
  <div className="relative z-10 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8 flex flex-col justify-center">

    {/* Welcome Badge */}
    <div className="inline-flex items-center gap-2 mb-2">
      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>

      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
        Welcome Back
      </span>
    </div>

    {/* Heading */}
    <div className="max-w-xl">

      <h1 className="text-[22px] sm:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-gray-900">
        Good Morning,
      </h1>

      <h2 className="mt-1 text-[18px] sm:text-xl font-bold text-emerald-700">
        {user?.name || "Priya"} 
      </h2>

      <p className="text-gray-700 font-medium text-[13px] sm:text-[14px] max-w-[280px] sm:max-w-sm mt-2 mb-5 sm:mb-7 leading-relaxed">
        Let's make today another green step towards a better planet.
      </p>
    </div>

    {/* USER INFO */}
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 max-w-3xl">

      {/* Email */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-white/80 border border-emerald-100 flex items-center justify-center">
          📧
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-widest font-bold text-emerald-700">
            Email
          </p>

          <p className="text-[13px] font-semibold text-gray-800 max-w-[150px] truncate">
            {user?.email || "priya@gmail.com"}
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-white/80 border border-emerald-100 flex items-center justify-center">
          🏙️
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-widest font-bold text-emerald-700">
            Location
          </p>

          <p className="text-[13px] font-semibold text-gray-800">
            {user?.location || "Bhopal, MP"}
          </p>
        </div>
      </div>

      {/* Pincode */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-white/80 border border-emerald-100 flex items-center justify-center">
          📮
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-widest font-bold text-emerald-700">
            Pincode
          </p>

          <p className="text-[13px] font-semibold text-gray-800">
            {user?.pincode || "462001"}
          </p>
        </div>
      </div>

    </div>

  </div>
</div>

      {/* Grid Setup: 1 column mobile, 3 columns desktop */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
       {/* LEFT SIDE*/}
      <div className="xl:col-span-3 space-y-6 font-sans">
        
        {/* STATS BAR */}
      <div className="bg-white rounded-3xl border border-gray-300 p-3 sm:p-6 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-y-4 sm:gap-y-6 gap-x-3">

        {[
          {
            label: "Eco Points",
            val: "2,450",
            sub: "+150 this month",
            icon: <Leaf size={18} className="text-emerald-600 sm:w-5 sm:h-5" />,
            trend: true,
          },
          {
            label: "Waste Recycled",
            val: "45.6 kg",
            sub: "+12.5 kg this month",
            icon: <Recycle size={18} className="text-emerald-600 sm:w-5 sm:h-5" />,
            trend: true,
          },
          {
            label: "Pickups",
            val: "18",
            sub: "+4 this month",
            icon: <Truck size={18} className="text-emerald-600 sm:w-5 sm:h-5" />,
            trend: false,
          },
          {
            label: "CO₂ Saved",
            val: "32.8 kg",
            sub: "Great job!",
            icon: <Leaf size={18} className="text-emerald-600 sm:w-5 sm:h-5" />,
            trend: false,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className={`
              flex items-center gap-2.5 sm:gap-4
              px-1 sm:px-2
              min-w-0
              w-full
              ${
                i !== 3
                  ? "lg:border-r border-gray-300"
                  : ""
              }
            `}
          >
            {/* ICON */}
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              {stat.icon}
            </div>

            {/* CONTENT */}
            <div className="flex flex-col min-w-0 flex-1">

              {/* Label */}
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide truncate">
                {stat.label}
              </span>

              {/* Value */}
              <span className="text-[16px] sm:text-xl font-bold text-gray-900 leading-tight truncate">
                {stat.val}
              </span>

              {/* Sub Text */}
              <span className="text-[9px] sm:text-[11px] font-medium text-gray-400 flex flex-wrap items-center gap-0.5 mt-0.5 leading-tight">
                {stat.sub}

                {stat.trend && (
                  <span className="text-emerald-500 font-bold text-[10px] sm:text-xs">
                    ▲
                  </span>
                )}
              </span>

            </div>
          </div>
        ))}
      </div>

        {/* ACTIVE PICKUP REQUEST */}
      <div className="bg-white p-3 sm:p-6 rounded-2xl border border-gray-100 shadow-sm w-full font-sans">
        
        {/* Header */}
<div className="flex justify-between items-center mb-4 sm:mb-6">
  <h3 className="font-bold text-[15px] sm:text-lg text-gray-900">
    Active Pickup Request
  </h3>

  <button className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-white border border-emerald-100 px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition shadow-sm">
    View Details
  </button>
</div>

{/* STEPPER */}
<div className="w-full overflow-hidden">

  <div className="relative w-full mx-auto mt-2 sm:mt-4 z-0">

    {/* Background Line */}
    <div className="absolute top-[18px] sm:top-[22px] left-[10%] right-[10%] h-[2px] sm:h-[3px] bg-gray-200 z-0"></div>

    {/* Active Line */}
    <div className="absolute top-[18px] sm:top-[22px] left-[10%] h-[2px] sm:h-[3px] w-[60%] bg-[#418c50] z-0"></div>

    <div className="relative z-10 flex justify-between items-start">

      {/* STEP 1 */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#418c50] text-white flex items-center justify-center mb-2 sm:mb-3">
          <Check size={16} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.5} />
        </div>

        <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">
          Request
        </span>

        <span className="text-[7px] sm:text-[11px] text-gray-500 mt-1 text-center leading-tight">
          May 20
        </span>
      </div>

      {/* STEP 2 */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#418c50] text-white flex items-center justify-center mb-2 sm:mb-3">
          <Check size={16} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.5} />
        </div>

        <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">
          Accepted
        </span>

        <span className="text-[7px] sm:text-[11px] text-gray-500 mt-1 text-center leading-tight">
          11:45 AM
        </span>
      </div>

      {/* STEP 3 */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#418c50] text-white flex items-center justify-center mb-2 sm:mb-3">
          <Calendar size={15} className="sm:w-5 sm:h-5" />
        </div>

        <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">
          Scheduled
        </span>

        <span className="text-[7px] sm:text-[11px] text-gray-500 mt-1 text-center leading-tight">
          May 21
        </span>
      </div>

      {/* STEP 4 */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-blue-600 border-2 sm:border-[3px] border-blue-100 ring-2 sm:ring-4 ring-cyan-50 shadow-sm flex items-center justify-center mb-2 sm:mb-3">
          <Truck size={16} className="sm:w-[22px] sm:h-[22px]" />
        </div>

        <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">
          Progress
        </span>

        <span className="text-[7px] sm:text-[11px] text-gray-500 mt-1 text-center leading-tight">
          On Way
        </span>
      </div>

      {/* STEP 5 */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-gray-300 border border-gray-200 flex items-center justify-center mb-2 sm:mb-3">
          <Package size={16} className="sm:w-[22px] sm:h-[22px]" />
        </div>

        <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">
          Complete
        </span>

        <span className="text-[7px] sm:text-[11px] opacity-0">
          Hidden
        </span>
      </div>

    </div>
  </div>
</div>

        {/* First Request */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-3 sm:p-5 bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 gap-3 sm:gap-6 mb-4 mt-3 group">

  {/* LEFT */}
  <div className="flex w-full lg:w-auto gap-3">

    {/* IMAGE */}
    <div className="relative w-20 h-20 sm:w-32 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
      <img
        src="/DashBanner.jpg"
        alt="Waste"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute bottom-1 left-1 bg-black/75 text-white text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-md font-bold">
        5 Items
      </div>
    </div>

    {/* DETAILS */}
    <div className="flex-1 min-w-0">

      {/* TITLE */}
      <div className="flex items-center justify-between gap-2 mb-1">
        <h4 className="font-bold text-[12px] sm:text-[15px] text-gray-900 truncate">
          Mixed Recyclables
        </h4>

        <span className="bg-emerald-100 text-emerald-700 border border-emerald-300 px-1.5 py-0.5 rounded-md text-[7px] sm:text-[9px] font-bold uppercase shrink-0">
          Active
        </span>
      </div>

      {/* WEIGHT */}
      <div className="flex items-center gap-1 text-[10px] sm:text-[13px] text-gray-700 font-semibold mb-1">
        ⚖️ 2.5 kg
      </div>

      {/* LOCATION */}
      <div className="flex items-center gap-1 text-[10px] sm:text-[13px] text-gray-500 mb-1">
        📌
        <span className="truncate">
          221B Green Street, Indore
        </span>
      </div>

      {/* DATE */}
      <div className="text-[9px] sm:text-xs text-gray-400 font-medium">
        Requested on May 20, 2026
      </div>
    </div>
  </div>

  {/* COLLECTOR BOX */}
  <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-2">

    <div className="flex items-center gap-2">

      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold text-xs">
        RV
      </div>

      <div>
        <p className="text-[8px] uppercase tracking-wider text-emerald-700 font-bold">
          Collector
        </p>

        <p className="text-[12px] sm:text-[14px] font-bold text-gray-900">
          Ramesh Verma
        </p>

        <p className="text-[9px] text-amber-500 font-bold">
          ⭐ 4.8
        </p>
      </div>
    </div>

    <button className="w-8 h-8 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition">
      <Phone size={13} />
    </button>
  </div>

        </div>

        {/* 2. SECOND REQUEST CARD (COLLECTOR NOT FOUND - SEARCHING) */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-3 sm:p-5 bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 gap-3 sm:gap-6 mb-4 group">

  {/* LEFT */}
  <div className="flex w-full lg:w-auto gap-3">

    {/* IMAGE */}
    <div className="relative w-20 h-20 sm:w-32 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200 flex items-center justify-center">

      <span className="text-[10px] text-gray-400 font-medium">
        No Image
      </span>

      <div className="absolute bottom-1 left-1 bg-black/75 text-white text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-md font-bold">
        12 Items
      </div>
    </div>

    {/* DETAILS */}
    <div className="flex-1 min-w-0">

      <div className="flex items-center justify-between gap-2 mb-1">
        <h4 className="font-bold text-[12px] sm:text-[15px] text-gray-900 truncate">
          Plastic Bottles
        </h4>

        <span className="bg-amber-100 text-amber-700 border border-amber-300 px-1.5 py-0.5 rounded-md text-[7px] sm:text-[9px] font-bold uppercase shrink-0">
          Pending
        </span>
      </div>

      <div className="flex items-center gap-1 text-[10px] sm:text-[13px] text-gray-700 font-semibold mb-1">
        ⚖️ 1.2 kg
      </div>

      <div className="flex items-center gap-1 text-[10px] sm:text-[13px] text-gray-500 mb-1">
        📌
        <span className="truncate">
          221B Green Street, Indore
        </span>
      </div>

      <div className="text-[9px] sm:text-xs text-gray-400 font-medium">
        Requested on Jun 01, 2026
      </div>
    </div>
  </div>

  {/* SEARCHING BOX */}
  <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-2 relative overflow-hidden">

    <div className="flex items-center gap-2">

      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-500 shadow-sm">
        <Search
          size={13}
          className="animate-[spin_3s_linear_infinite]"
        />
      </div>

      <div>
        <p className="font-bold text-[12px] sm:text-[14px] text-gray-800 leading-tight">
          Assigning Collector
        </p>

        <p className="text-[9px] text-gray-500 font-medium">
          Searching nearby...
        </p>
      </div>
    </div>

    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>

  </div>

        </div>

        {/* 3. THIRD REQUEST CARD (COLLECTOR NOT FOUND - SEARCHING) */}
          <div className="flex flex-col lg:flex-row justify-between gap-3 sm:gap-5 p-3 sm:p-5 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 opacity-90 hover:opacity-100">

  {/* LEFT SIDE */}
  <div className="flex gap-3 w-full min-w-0">

    {/* Image */}
    <div className="relative w-20 h-20 sm:w-32 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200 flex items-center justify-center">
      <span className="text-[10px] text-gray-400 font-medium">
        No Image
      </span>

      <div className="absolute bottom-1 left-1 bg-black/75 text-white text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-md font-semibold">
        2 Items
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0 flex flex-col justify-center">

      {/* Title */}
      <div className="flex flex-wrap items-center gap-1.5 mb-1">
        <h4 className="font-bold text-gray-900 text-[13px] sm:text-[15px] leading-tight truncate">
          Paper Waste
        </h4>

        <span className="bg-amber-50 border border-amber-200 text-amber-700 text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded-md font-semibold uppercase tracking-wider">
          Pending
        </span>
      </div>

      {/* Details */}
      <div className="space-y-1">

        <p className="flex items-center gap-1.5 text-[10px] sm:text-[13px] text-gray-600">
          <span>⚖️</span>
          <span className="font-semibold">3.0 kg</span>
        </p>

        <p className="flex items-center gap-1.5 text-[10px] sm:text-[13px] text-gray-500 truncate">
          <span>📌</span>
          <span className="truncate">
            221B Green Street, Indore, MP
          </span>
        </p>

        <p className="flex items-center gap-1.5 text-[9px] sm:text-xs text-gray-500">
          <span>🕒</span>
          <span>Requested on Jun 01, 2026</span>
        </p>

      </div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full lg:w-auto flex items-center gap-2 bg-gradient-to-r from-amber-50 to-white border border-dashed border-amber-300 rounded-xl px-3 py-2.5 shrink-0">

    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm">
      <Search
        size={14}
        className="animate-[spin_3s_linear_infinite]"
      />
    </div>

    <div className="min-w-0">
      <p className="font-bold text-gray-800 text-[11px] sm:text-[14px] leading-tight">
        Assigning Collector
      </p>

      <p className="text-[9px] sm:text-[10px] text-gray-500">
        Searching nearby...
      </p>
    </div>

  </div>

        </div>

      </div>

       {/* HISTORY SECTION */}
<div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-100 shadow-sm w-full font-sans mt-6">

  {/* Header */}
  <div className="flex justify-between items-center mb-4 sm:mb-6">
    <h3 className="font-bold text-gray-900 text-[16px] sm:text-lg tracking-wide">
      Pickup History
    </h3>

    <button className="text-[10px] sm:text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors">
      View All
    </button>
  </div>

  {/* Table Wrapper */}
  <div className="w-full overflow-x-auto pb-2 scrollbar-thin">

    <table className="w-full min-w-[500px] sm:min-w-[600px] text-left border-collapse">

      {/* HEAD */}
      <thead>
        <tr className="border-b border-gray-100">
          <th className="pb-3 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-2">
            S.No
          </th>

          <th className="pb-3 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Waste Type
          </th>

          <th className="pb-3 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Qty
          </th>

          <th className="pb-3 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Reward
          </th>

          <th className="pb-3 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right pr-2">
            Status
          </th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody>
        {[
          {
            name: "Mixed Recyclables",
            qty: "12.5 kg",
            points: "+150",
            img: "/DashBanner.jpg",
          },
          {
            name: "Plastic Bottles",
            qty: "5.2 kg",
            points: "+85",
            img: "/DashBanner.jpg",
          },
          {
            name: "Paper & Cardboard",
            qty: "8.0 kg",
            points: "+120",
            img: "/DashBanner.jpg",
          },
        ].map((item, i) => (
          <tr
            key={i}
            className="border-b border-gray-50 last:border-0 hover:bg-emerald-50/40 transition-colors group cursor-pointer"
          >

            {/* SNO */}
            <td className="py-2.5 sm:py-3 pl-2 text-[10px] sm:text-xs font-bold text-gray-400">
              #0{i + 1}
            </td>

            {/* TYPE */}
            <td className="py-2.5 sm:py-3 pr-3">
              <div className="flex items-center gap-2 sm:gap-3">

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="font-semibold sm:font-bold text-gray-800 text-[11px] sm:text-[13px] whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </td>

            {/* QTY */}
            <td className="py-2.5 sm:py-3 pr-3 text-[11px] sm:text-[13px] font-medium text-gray-600 whitespace-nowrap">
              {item.qty}
            </td>

            {/* REWARD */}
            <td className="py-2.5 sm:py-3 pr-3">
              <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 w-fit px-1.5 sm:px-2 py-1 rounded-md">

                <Leaf
                  size={11}
                  className="sm:w-[14px] sm:h-[14px] text-emerald-500"
                />

                <span className="text-[10px] sm:text-[13px] font-bold">
                  {item.points}
                </span>

              </div>
            </td>

            {/* STATUS */}
            <td className="py-2.5 sm:py-3 pr-2 text-right">
              <span className="inline-flex items-center bg-gray-900 text-white text-[8px] sm:text-[10px] px-2 sm:px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
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