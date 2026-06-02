import React, { useState } from "react";
import {
  MapPin,SlidersHorizontal ,Bell,
  Calendar,
  Clock,
  X,
  Search,
  Filter,
} from "lucide-react";

const NearbyReq = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      wasteType: "Plastic Bottles",
      quantity: 15,
      image:
        "https://images.unsplash.com/photo-1558640479-8246d8d3f4b4?w=400",
      location: "Green Park Avenue",
      pincode: "462001",
      date: "01 Jun 2026",
      time: "10:30 AM",
      status: "pending",
    },
    {
      id: 2,
      wasteType: "Paper Waste",
      quantity: 22,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      location: "Model Town",
      pincode: "462010",
      date: "01 Jun 2026",
      time: "09:15 AM",
      status: "pending",
    },
    {
      id: 3,
      wasteType: "Metal Scrap",
      quantity: 12,
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      location: "Sector 4",
      pincode: "462022",
      date: "31 May 2026",
      time: "07:45 PM",
      status: "accepted",
    },
    {
      id: 4,
      wasteType: "E-Waste",
      quantity: 8,
      image:
        "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=400",
      location: "Lake View Colony",
      pincode: "462016",
      date: "31 May 2026",
      time: "05:20 PM",
      status: "pending",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReq, setSelectedReq] = useState(null);

  const handleAccept = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "accepted" } : req
      )
    );
  };

  const handleCancel = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "pending" } : req
      )
    );
  };

  const openScheduleModal = (req) => {
    setSelectedReq(req);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-4 -mt-3">

     {/* HEADER SECTION */}
<div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between w-full mb-8 ">
  
  {/* 1. LEFT: LIVE FEED + TITLE */}
  <div className="flex flex-col gap-1 shrink-0 w-full lg:w-auto">
    <div className="flex items-center gap-1.5 text-emerald-600 font-[600] text-[10px] uppercase tracking-wider">
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      LIVE FEED
    </div>
    <h1 className="text-[17px] sm:text-xl font-bold text-gray-900 leading-none flex items-center gap-2">
      <MapPin size={22} className="text-emerald-600 flex-shrink-0" />
      Nearby <span className="text-emerald-700">Requests</span>
    </h1>
  </div>

  {/* 2. RIGHT: SEARCH & FILTER GROUP */}
  <div className="flex flex-row w-full lg:w-auto gap-3 items-center">
    
    {/* Search Bar */}
    <div className="relative flex-1 lg:w-[300px]">
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input 
        type="text" 
        placeholder="Search location..." 
        className="
          w-full h-10 pl-11 pr-4 rounded-2xl border border-gray-300 bg-white 
          text-sm font-[600] outline-none focus:ring-2 focus:ring-emerald-500/20 
          focus:border-emerald-500 shadow-sm transition-all
        "
      />
    </div>

    {/* Filter Button */}
    <button 
      onClick={() => setShowFilter(!showFilter)}
      className="
        h-10 px-4 md:px-5 rounded-2xl bg-white border border-gray-200 text-emerald-700 
        flex items-center gap-2 font-[600] text-sm shadow-sm hover:border-emerald-500 
        hover:text-emerald-700 transition-all shrink-0
      "
    >
      <SlidersHorizontal size={18} />
      <span className="hidden sm:block">Filter</span>
    </button>
  </div>
</div>

    {/* GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {requests.map((req) => (
    <div
      key={req.id}
      className="bg-green-100/50 border border-green-400 border-l-4 border-emerald-600 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      {/* TOP: Image & Title */}
      <div className="flex gap-3">
        <img
          src={req.image}
          alt={req.wasteType}
          className="w-14 h-14 rounded-lg object-cover shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-800 text-[15px] leading-tight truncate">
            {req.wasteType}
          </h3>

          <p className="text-emerald-600 font-semibold text-[13px] mt-1">
            {req.quantity} Kg
          </p>
        </div>
      </div>

      {/* DETAILS */}
      <div className="mt-3 space-y-2 flex-1">
        {/* Location */}
        <div className="flex items-start gap-2 text-[11px] text-gray-700">
          <MapPin
            size={13}
            className="text-emerald-600 shrink-0 mt-0.5"
          />
          <span className="leading-snug line-clamp-2">
            {req.location}
          </span>
        </div>

        {/* Meta Data */}
        <div className="grid grid-cols-2 gap-1.5 p-2 bg-white/60 rounded-md border border-emerald-100">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
            <span>📮</span>
            <span>{req.pincode}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
            <Clock
              size={11}
              className="text-emerald-600 shrink-0"
            />
            <span>{req.time}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-gray-600 col-span-2">
            <Calendar
              size={11}
              className="text-emerald-600 shrink-0"
            />
            <span>{req.date}</span>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="mt-3">
        {req.status === "pending" ? (
          <button
            onClick={() => handleAccept(req.id)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-[11px] font-semibold transition-all"
          >
            Accept Request
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => handleCancel(req.id)}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-[11px] font-semibold transition-all"
            >
              Cancel
            </button>

            <button
              onClick={() => openScheduleModal(req)}
              className="flex-1 bg-gray-900 hover:bg-black text-white py-2 rounded-lg text-[11px] font-semibold transition-all"
            >
              Schedule
            </button>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

     {isModalOpen && selectedReq && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 md:p-7">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-7">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Schedule Pickup</h2>
          <p className="text-sm text-gray-500 mt-1">{selectedReq.wasteType}</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(false)} 
          className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Date Field */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider ml-1">
            Collection Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-300 text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>

        {/* Time Field */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider ml-1">
            Collection Time
          </label>
          <input
            type="time"
            className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-300 text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      {/* Confirm Button */}
      <button
        className="w-full mt-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20"
      >
        Confirm Schedule
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default NearbyReq;