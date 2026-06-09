import React, { useState, useEffect } from 'react';
import { Leaf, Recycle, Truck,User, CheckCircle2,UploadCloud,Info,MapPin,UserPlus, ChevronRight, ArrowRight, Phone,ChevronDown,Check,Calendar,Package,Star,Clock,Search,Scale,Globe, Sparkles,Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [user, setUser] = useState(null);
  const [requests, setRequests] = useState([]);
  const [showCo2Modal, setShowCo2Modal] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      fetch('http://localhost:2007/api/requests/my-requests', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })
      .then(res => res.json())
      .then(data => {
      const formattedRequests = data.map(req => ({
        ...req,
        image: req.image ? (req.image.startsWith('http') ? req.image : `http://localhost:2007${req.image}`) : null
      }));
      setRequests(formattedRequests);
    })
      .catch(err => console.error("Error:", err));
    };
    fetchAllData();
  }, []);

//Fetch info from the DB
useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch('http://localhost:2007/api/auth/me', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
        }
      } catch (err) {
        console.error("Error fetching hero data:", err);
      }
    };
    fetchUserData();
  }, []);


  //Day wishing logic
  const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  if (hour >= 17 && hour < 21) return "Good Evening";
  return "Good Night";
};

// DASHBOARD LOGIC
const deliveredRequests = requests.filter(r => r.status === 'Delivered');
const totalWaste = deliveredRequests.reduce((acc, curr) => acc + (curr.quantity || 0), 0);
const totalPickups = deliveredRequests.length;
const co2Saved = (totalWaste * 4).toFixed(1);

// Stats for the Stats Bar
const stats = [
  { label: "Eco Points", val: user?.points || 0, sub: "Total balance", icon: <Leaf size={18} className="text-emerald-600 sm:w-5 sm:h-5" />, trend: true },
  { label: "Waste Recycled", val: `${totalWaste} kg`, sub: "Total delivered", icon: <Recycle size={18} className="text-emerald-600 sm:w-5 sm:h-5" />, trend: true },
  { label: "Pickups", val: totalPickups, sub: "Completed orders", icon: <Truck size={18} className="text-emerald-600 sm:w-5 sm:h-5" />, trend: false },
  { label: "CO₂ Saved", val: `${co2Saved} kg`, sub: "Global impact", icon: <Leaf size={18} className="text-emerald-600 sm:w-5 sm:h-5" />, trend: false },
];

// Stats for the Eco Impact Card
const impactPercent = Math.min((totalWaste / 50) * 100, 99); 
const dashOffset = 263.89 - (impactPercent / 100 * 263.89);


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
       {getGreeting()},
      </h1>

      <h2 className="mt-1 text-[18px] sm:text-xl font-bold text-emerald-700">
       {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
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
           {user?.email || "Loading..."}
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
            {user?.address || "Loading..."}
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
            {user?.pincode || "Loading..."}
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
  {stats.map((stat, i) => (
    <div key={i} className={`flex items-center gap-2.5 sm:gap-4 px-1 sm:px-2 min-w-0 w-full ${i !== 3 ? "lg:border-r border-gray-300" : ""}`}>
      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
        {stat.icon}
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide truncate">{stat.label}</span>
        <span className="text-[16px] sm:text-xl font-bold text-gray-900 leading-tight truncate">{stat.val}</span>
        <span className="text-[9px] sm:text-[11px] font-medium text-gray-400 mt-0.5 leading-tight">{stat.sub}</span>
      </div>
    </div>
  ))}
</div>

       {/* ACTIVE PICKUP REQUEST */}
<div className="bg-white p-3 sm:p-6 rounded-2xl border border-gray-300 shadow-sm w-full font-sans">
  
  {/* Header */}
  <div className="flex justify-between items-center mb-4 sm:mb-6">
    <h3 className="font-bold text-[15px] sm:text-lg text-gray-900">
      Active Pickup Request
    </h3>
    <button className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-white border border-emerald-100 px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition shadow-sm">
      View Details
    </button>
  </div>

  {/* STEPPER*/}
  <div className="w-full overflow-hidden">
    <div className="relative w-full mx-auto mt-2 sm:mt-4 z-0">
      <div className="absolute top-[18px] sm:top-[22px] left-[10%] right-[10%] h-[2px] sm:h-[3px] bg-gray-200 z-0"></div>
      <div className="absolute top-[18px] sm:top-[22px] left-[10%] h-[2px] sm:h-[3px] w-[60%] bg-[#418c50] z-0"></div>
      <div className="relative z-10 flex justify-between items-start">
        <div className="flex flex-col items-center flex-1">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#418c50] text-white flex items-center justify-center mb-2 sm:mb-3">
            <Check size={16} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.5} />
          </div>
          <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">Request</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#418c50] text-white flex items-center justify-center mb-2 sm:mb-3">
            <Check size={16} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.5} />
          </div>
          <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">Accepted</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#418c50] text-white flex items-center justify-center mb-2 sm:mb-3">
            <Calendar size={15} className="sm:w-5 sm:h-5" />
          </div>
          <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">Scheduled</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-blue-600 border-2 sm:border-[3px] border-blue-100 ring-2 sm:ring-4 ring-cyan-50 shadow-sm flex items-center justify-center mb-2 sm:mb-3">
            <Truck size={16} className="sm:w-[22px] sm:h-[22px]" />
          </div>
          <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">Progress</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-gray-300 border border-gray-200 flex items-center justify-center mb-2 sm:mb-3">
            <Package size={16} className="sm:w-[22px] sm:h-[22px]" />
          </div>
          <span className="text-[8px] sm:text-xs font-bold text-gray-800 text-center leading-tight">Complete</span>
        </div>
      </div>
    </div>
  </div>

  {/* DYNAMIC REQUEST CARDS */}
  <div className="mt-4">
    {requests.filter(r => r.status !== 'Delivered' && r.status !== 'Completed').slice(0, 3).map((req, i) => {
      const isAssigned = req.status !== 'Pending'; 
      const collectorName = typeof req.collector === 'string' ? req.collector : req.collector?.name || 'ReCircle Partner';

      return (
        <div key={req._id || i} className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-3 sm:p-5 bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 gap-3 sm:gap-6 mb-4 group">
          
          {/* LEFT: IMAGE & DETAILS */}
          <div className="flex w-full lg:w-auto gap-3">
            <div className="relative w-20 h-20 sm:w-32 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200 flex items-center justify-center">
              {req.image ? (
                <img src={req.image} alt={req.wasteType} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => e.target.style.display = 'none'} />
              ) : (
                <span className="text-[10px] text-gray-400 font-medium">No Image</span>
              )}
              <div className="absolute bottom-1 left-1 bg-black/75 text-white text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-md font-bold">
                {req.quantity} kg
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="font-bold text-[12px] sm:text-[15px] text-gray-900 truncate capitalize">
                  {req.wasteType}
                </h4>
                <span className={`px-1.5 py-0.5 rounded-md text-[7px] sm:text-[9px] font-bold uppercase shrink-0 border ${isAssigned ? 'bg-emerald-100 text-emerald-700 border-emerald-300' : 'bg-amber-100 text-amber-700 border-amber-300'}`}>
                  {req.status}
                </span>
              </div>

              <div className="flex items-center gap-1 text-[10px] sm:text-[13px] text-gray-700 font-semibold mb-1">
                ⚖️ {req.quantity} kg
              </div>

              <div className="flex items-center gap-1 text-[10px] sm:text-[13px] text-gray-500 mb-1">
                📌 <span className="truncate">{req.location || 'Location missing'}</span>
              </div>

              <div className="text-[9px] sm:text-xs text-gray-400 font-medium">
                Requested on {req.createdAt ? new Date(req.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'Recently'}
              </div>
            </div>
          </div>

          {/* RIGHT: COLLECTOR ASSIGNED OR SEARCHING */}
          {isAssigned ? (
            <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold text-xs uppercase">
                  {collectorName.charAt(0)}
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-wider text-emerald-700 font-bold">Collector</p>
                  <p className="text-[12px] sm:text-[14px] font-bold text-gray-900">{collectorName}</p>
                  <p className="text-[9px] text-amber-500 font-bold">⭐ {req.collector?.rating || '4.8'}</p>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition">
                <Phone size={13} />
              </button>
            </div>
          ) : (
            <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-2 relative overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-500 shadow-sm">
                  <Search size={13} className="animate-[spin_3s_linear_infinite]" />
                </div>
                <div>
                  <p className="font-bold text-[12px] sm:text-[14px] text-gray-800 leading-tight">Assigning Collector</p>
                  <p className="text-[9px] text-gray-500 font-medium">Searching nearby...</p>
                </div>
              </div>
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
            </div>
          )}

        </div>
      );
    })}

    {requests.filter(r => r.status !== 'Delivered' && r.status !== 'Completed').length === 0 && (
      <div className="text-center py-8 text-gray-500 font-semibold bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        You have no active pickup requests right now. 🌱
      </div>
    )}
  </div>

</div>

       {/* HISTORY SECTION */}
<div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-300 shadow-sm w-full font-sans mt-6">

  {/* Header */}
  <div className="flex justify-between items-center mb-4 sm:mb-6">
    <h3 className="font-bold text-gray-900 text-[16px] sm:text-lg tracking-wide">
      Pickup History
    </h3>
    <Link to="/dashboard/history" className="text-[10px] sm:text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors">
      View All
    </Link>
  </div>

  {/* Table Wrapper */}
  <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
    <table className="w-full min-w-[500px] sm:min-w-[600px] text-left border-collapse">
      
      <thead>
        <tr className="border-b border-gray-300">
          <th className="pb-3 text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-2">S.No</th>
          <th className="pb-3 text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">Image</th> {/* Naya Column */}
          <th className="pb-3 text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">Waste Type</th>
          <th className="pb-3 text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">Qty</th>
          <th className="pb-3 text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">Reward</th>
          <th className="pb-3 text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right pr-2">Status</th>
        </tr>
      </thead>

      <tbody>
        {requests.slice(0, 4).map((item, i) => (
          <tr key={item._id} className="border-b border-gray-50 last:border-0 hover:bg-emerald-50/40 transition-colors group cursor-pointer">
            <td className="py-2.5 sm:py-3 pl-2 text-[10px] sm:text-xs font-bold text-gray-400">#0{i + 1}</td>
            
            {/* Image Thumbnail Column */}
            <td className="py-2.5 sm:py-3">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt="waste" 
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg object-cover border border-gray-300" 
                  onError={(e) => e.target.style.display = 'none'} 
                />
              ) : (
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                  <Trash2 size={16} className="text-gray-400" />
                </div>
              )}
            </td>

            <td className="py-2.5 sm:py-3 pr-3">
              <span className="font-semibold sm:font-bold text-gray-800 text-[11px] sm:text-[14px] capitalize">{item.wasteType}</span>
            </td>
            <td className="py-2.5 sm:py-3 pr-3 text-[11px] sm:text-[14px] font-medium text-gray-600">{item.quantity} kg</td>
            <td className="py-2.5 sm:py-3 pr-3">
              <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 w-fit px-1.5 sm:px-2 py-1 rounded-md">
                <Leaf size={11} className="text-emerald-500" />
                <span className="text-[10px] sm:text-[14px] font-bold">+{item.points || 0}</span>
              </div>
            </td>
            <td className="py-2.5 sm:py-3 pr-2 text-right">
              {/* YAHAN HAI FIX: Dynamic Status Colors */}
              <span className={`inline-flex items-center text-[8px] sm:text-[10px] px-2 sm:px-2.5 py-1 rounded-full font-bold uppercase ${
                item.status === 'Delivered' || item.status === 'Completed' ? 'bg-gray-900 text-white' : 
                item.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 
                'bg-blue-100 text-blue-700' // For Accepted, Scheduled, Progress
              }`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      </div>

        {/* RIGHT SIDEBAR  */}
    <div className="space-y-6">

      {/* 1. Eco Impact Card  */}
<div className="bg-gradient-to-br from-[#f2fdf5] to-white p-5 sm:p-6 rounded-3xl border border-emerald-300/80 shadow-sm w-full transition-all duration-300 ease-out">
  <div className="flex justify-between items-center mb-6">
    <h3 className="font-bold text-emerald-900 text-[15px] sm:text-base tracking-wide">
      Your Eco Impact
    </h3>

    {/* 'i' button */}
    <button 
      onClick={() => setShowCo2Modal(true)} 
      className="text-emerald-600 hover:text-emerald-800 transition-colors p-1.5 rounded-full hover:bg-emerald-50"
    >
      <Info size={18} />
    </button>
  </div>

  <div className="flex items-center gap-4 sm:gap-6">
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" stroke="#d1fae5" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="42" stroke="#10b981" strokeWidth="8" fill="none" strokeDasharray="263.89" strokeDashoffset={dashOffset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-slate-800">{Math.round(impactPercent)}%</span>
      </div>
    </div>
    <p className="text-xs sm:text-[13px] text-gray-600 font-medium leading-relaxed">
      You've recycled <strong className="text-emerald-800">{totalWaste} kg</strong> waste, saving <strong className="text-emerald-800">{co2Saved} kg</strong> of CO2 emissions! 🌿
    </p>
  </div>
</div>

{/* CO2 CALCULATION MODAL */}
{showCo2Modal && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
    <div className="relative w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300">

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 text-white shrink-0">
        <button
          onClick={() => setShowCo2Modal(false)}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
        >
          ✕
        </button>
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl">🌱</div>
          <div>
            <h3 className="text-xl font-bold tracking-tight">Eco Impact Report</h3>
            <p className="text-sm text-emerald-100 font-medium">Your global contribution</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Metric */}
        <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5 text-center">
          <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">Conversion Factor</p>
          <div className="text-2xl font-bold text-emerald-700">1 kg ♻️ = 4 kg CO₂ saved</div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-700 leading-relaxed">
            Every kilogram of waste you recycle helps reduce the carbon footprint significantly.
          </p>
          <div className="space-y-3">
            {[
              { icon: "🌍", text: "Preventing harmful methane release from landfills." },
              { icon: "⚡", text: "Saving energy needed for virgin material production." },
              { icon: "🏭", text: "Reducing industrial emission levels globally." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                <span className="text-lg">{item.icon}</span>
                <p className="text-xs font-semibold text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Bridge */}
<div className="rounded-2xl border border-emerald-100 p-4 bg-emerald-50/50">
  <p className="text-xs font-bold text-emerald-900 mb-3">Check your progress</p>
  <div className="grid grid-cols-2 gap-3">
    
    {/* Leaderboard Link */}
    <Link 
      to="/housekeeper/leaderboard" 
      onClick={() => setShowCo2Modal(false)}
      className="px-3 py-2 text-xs font-bold text-emerald-700 border border-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition text-center"
    >
      Leaderboard
    </Link>

    {/* My Circle Link */}
    <Link 
      to="/housekeeper" 
      onClick={() => setShowCo2Modal(false)}
      className="px-3 py-2 text-xs font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition text-center"
    >
      My Circle
    </Link>
    
  </div>
</div>
      </div>
    </div>
  </div>
)}

      {/* Eco Rewards Card */}
      <div className="relative w-full rounded-3xl overflow-hidden font-sans min-h-[300px] p-7 sm:p-5 flex flex-col justify-between shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group cursor-pointer">

        <img
          src="/DashTrophy.jpg" 
          alt="Trophy Background"
          className="absolute inset-0 w-full h-full object-cover object-right sm:object-[100%_center] group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          
          {/* Top Header */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-[#dcedc1] tracking-wide text-sm sm:text-base">
              Eco Rewards
            </h3>
            <Link to="/housekeeper/eco" className="text-[10px] sm:text-xs font-semibold text-white/90 border border-white/20 bg-white/10 rounded-lg px-3 py-1.5 hover:bg-white/20 transition-all backdrop-blur-sm">
              View All
            </Link>
          </div>

          {/* Points Section */}
          <div className="mb-2 transform group-hover:translate-x-1 transition-transform duration-300">
            <h2 className="text-4xl sm:text-4xl font-[600] text-white mb-1 tracking-tight">
             {user?.points || 0}
            </h2>
            <p className="text-sm font-medium text-[#dcedc1] mb-4">
              Eco Points
            </p>
          </div>

          <p className="text-xs sm:text-[12px] text-white/80 font-medium leading-relaxed max-w-[55%] sm:max-w-[60%] mb-6">
            Redeem your points for exciting rewards and discounts.
          </p>

          {/* CTA Button */}
          <div>
            <Link to="/housekeeper/eco" className="inline-flex items-center justify-center gap-2 bg-[#438a4f] text-white py-2.5 px-4 sm:px-5 rounded-xl text-xs sm:text-sm font-[600] border border-[#52a65f] shadow-lg hover:bg-[#387642] hover:shadow-xl hover:gap-3 transition-all duration-300">
              Explore Rewards <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>

      {/* 3. Quick Actions */}
    <div className="bg-gradient-to-br from-[#f2fdf5] to-white p-5 sm:p-6 rounded-3xl border border-emerald-300/80 shadow-sm w-full hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <h3 className="font-bold text-emerald-900 mb-5 text-[15px] sm:text-base tracking-wide">
        Quick Actions
      </h3>
      
      <div className="space-y-3 sm:space-y-4">
        {[
          { title: 'Upload Waste', desc: 'Upload recyclable items', icon: <UploadCloud size={18} />, path: '/housekeeper/requests' },
          { title: 'Track Your Position', desc: 'Track status of your pickup', icon: <MapPin size={18} />, path: '/housekeeper/leaderboard' },
          { title: 'View Profile', desc: 'Manage your account', icon: <User size={18} />, path: '/housekeeper/profile' }
        ].map((action, i) => (
          <Link 
            key={i} 
            to={action.path}
            className="group flex justify-between items-center p-2.5 -mx-2.5 rounded-2xl cursor-pointer hover:bg-white hover:shadow-[0_4px_12px_rgba(16,185,129,0.08)] border border-transparent hover:border-emerald-100 transition-all duration-300"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-100/50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                {action.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition-colors truncate">
                  {action.title}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 truncate group-hover:text-emerald-600/70 transition-colors">
                  {action.desc}
                </span>
              </div>
            </div>
            <div className="p-1">
              <ChevronRight size={18} className="text-emerald-200 group-hover:text-emerald-500 group-hover:translate-x-1.5 transition-all duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>

      {/* Global Impact */}
      <div className="bg-gradient-to-br from-emerald-900 to-[#064e3b] p-6 sm:p-7 rounded-3xl border border-emerald-800 shadow-xl font-sans w-full relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
        
        <div className="absolute -right-12 -top-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
          <Globe size={180} className="text-emerald-100 animate-[spin_20s_linear_infinite]" strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div className="absolute inset-0 bg-emerald-400 blur-md opacity-30 rounded-full animate-pulse"></div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Globe size={28} className="text-emerald-100 animate-[spin_8s_linear_infinite] sm:w-8 sm:h-8" />
            </div>
            <Sparkles size={16} className="absolute -top-1 -right-2 text-emerald-300 animate-bounce" />
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg tracking-wide mb-2">
            Our Planet Thanks You! 🌍
          </h3>
          
          <p className="text-emerald-100/80 text-xs sm:text-[13px] leading-relaxed font-medium mb-6 max-w-[220px]">
            Every item you recycle is a step towards a greener, cleaner Earth. You're part of a global movement today.
          </p>
          <button onClick={() => setShowCo2Modal(true)}  className="w-full text-[11px] sm:text-xs font-bold text-emerald-950 bg-emerald-100 px-4 py-2.5 rounded-xl hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300">
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