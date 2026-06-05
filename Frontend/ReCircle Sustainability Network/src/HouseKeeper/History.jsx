import React from 'react';
import { History as HistoryIcon, Download, Clock, MapPin, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';

const History = () => {
  // 1. STATS DATA (Deep Dark Premium Colors & Gamified Messages)
  const stats = [
    { 
      title: 'Total Pickups', 
      value: '24', 
      message: '🔥 4-Week Active Streak!', 
      bg: 'bg-[#064e3b]', // Deep Forest Green
      border: 'border-emerald-500/40',
      titleColor: 'text-emerald-200',
      valueColor: 'text-white',
      badgeBg: 'bg-emerald-500/20',
      badgeText: 'text-emerald-300',
      badgeBorder: 'border-emerald-500/30',
      image: '/H2.jpg'
    },
    { 
      title: 'Eco Points Earned', 
      value: '3,250', 
      message: '⭐ Elite Tier Unlocked!', 
      bg: 'bg-[#78350f]', // Deep Bronze/Amber
      border: 'border-amber-500/40',
      titleColor: 'text-amber-200',
      valueColor: 'text-white',
      badgeBg: 'bg-amber-500/20',
      badgeText: 'text-amber-300',
      badgeBorder: 'border-amber-500/30',
      image: '/eco.jpg'
    },
    { 
      title: 'Waste Recycled', 
      value: '185 kg', 
      message: '🌍 Offset 450kg of CO₂', 
      bg: 'bg-[#0c4a6e]', // Deep Ocean Blue
      border: 'border-sky-500/40',
      titleColor: 'text-sky-200',
      valueColor: 'text-white',
      badgeBg: 'bg-sky-500/20',
      badgeText: 'text-sky-300',
      badgeBorder: 'border-sky-500/30',
      image: '/H5.jpg'
    },
  ];

  // 2. HISTORY DATA
  const historyData = [
    {
      id: 'REC-1029',
      date: '28 May 2026',
      time: '02:30 PM',
      location: '12B, Green Park Avenue, Block C',
      type: 'Plastics & Paper',
      weight: '12 kg',
      points: '150',
      collector: 'Rajesh (Green Partner)',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 'REC-0984',
      date: '15 May 2026',
      time: '11:00 AM',
      location: 'Sunrise Apartments, Gate No. 2',
      type: 'E-Waste',
      weight: '5 kg',
      points: '300',
      collector: 'Amit Singh',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1550005973-58d31a5bf0e8?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 'REC-0855',
      date: '02 May 2026',
      time: '04:15 PM',
      location: '12B, Green Park Avenue, Block C',
      type: 'Mixed Recyclables',
      weight: '8 kg',
      points: '80',
      collector: 'Rajesh (Green Partner)',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 'REC-0712',
      date: '18 Apr 2026',
      time: '10:00 AM',
      location: 'Sector 44, Near Metro Station',
      type: 'Cardboard',
      weight: '15 kg',
      points: '120',
      collector: 'Suresh Kumar',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1530587191344-cb10d65a6e87?q=80&w=200&auto=format&fit=crop'
    }
  ];

  const downloadCSV = () => {
    const headers = ['ID', 'Date', 'Time', 'Location', 'Type', 'Weight', 'Points', 'Collector', 'Status'];
    const rows = historyData.map(item => [
      item.id, item.date, item.time, `"${item.location}"`, item.type, item.weight, item.points, item.collector, item.status
    ]);
    const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `recycle_history_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
   <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 font-sans pb-10 -mt-2 sm:-mt-0">
      
      {/* HEADER (Hidden on Desktop 'lg:hidden', Visible on Mobile) */}
    <div className="flex flex-row items-center justify-between gap-3 mb-6 lg:hidden">
      {/* Left Section: Icon + Title (min-w-0 ensures truncation works) */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100 shrink-0">
          <HistoryIcon size={20} className="text-emerald-600" />
        </div>
        <div className="truncate">
          <h1 className="text-base  font-bold sm:font-semibold text-gray-900 leading-tight truncate">Pickup History</h1>
          <p className="text-gray-500 text-[11px] font-normal truncate">Your journey of impact</p>
        </div>
      </div>

      {/* Button: shrink-0 keeps it in the same row */}
      <button 
        onClick={downloadCSV}
        className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-xl text-[11px] font-medium text-gray-700 hover:text-emerald-700 transition-all active:scale-95 shadow-sm shrink-0"
      >
        <Download size={14} />
        <span className="hidden xs:inline">Report</span>
      </button>
    </div>

      {/* COMPACT COUNTERS (Grid-3, Image Top on Mobile, Image Right on Desktop) */}
    <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mb-8 w-full">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`flex flex-col sm:flex-row-reverse items-center justify-between p-2 sm:p-5 rounded-xl sm:rounded-2xl border ${stat.border} ${stat.bg} shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
        >
          
          {/* Right Side: Image (Top on Mobile, Right on Desktop) */}
          <div className="w-10 h-10 sm:w-16 sm:h-16 lg:w-[92px] lg:h-[92px] rounded-[8px] sm:rounded-[10px] lg:rounded-[15px] overflow-hidden border-[2px] border-white/20 shadow-lg shrink-0 z-10 bg-white p-0.5 mb-2 sm:mb-0">
            <img 
              src={stat.image} 
              alt={stat.title} 
              className="w-full h-full object-cover rounded-[6px] sm:rounded-[8px] lg:rounded-[14px]" 
            />
          </div>

          {/* Left Side: Stats (Text centered on mobile, left-aligned on desktop) */}
          <div className="flex flex-col z-10 relative items-center sm:items-start text-center sm:text-left w-full">
            <p className={`text-[8px] sm:text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase ${stat.titleColor} opacity-80 mb-0.5`}>
              {stat.title}
            </p>
            <h3 className={`${stat.valueColor} text-[13px] sm:text-xl lg:text-3xl font-bold tracking-tight`}>
              {stat.value}
            </h3>
            
            {/* Badge - Tiny on mobile, normal on desktop */}
            <div className={`mt-1 inline-flex items-center px-1.5 py-0.5 rounded text-[7px] sm:text-[10px] font-semibold border ${stat.badgeBg} ${stat.badgeText} ${stat.badgeBorder}`}>
              {stat.message}
            </div>
          </div>
        </div>
      ))}
    </div>

      {/* HISTORY TABLE WITH S.NO AND QUANTITY COLUMNS */}
      <div className="divide-y divide-gray-100">

        {/* Desktop Header Labels */}
<div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-100 bg-gray-50/50 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
  <div className="col-span-1">S.No</div>
  <div className="col-span-4">Pickup Details</div>
  <div className="col-span-1">Qty</div>
  <div className="col-span-2">Collector</div>
  <div className="col-span-2">Reward</div>
  <div className="col-span-2 text-right">Status</div>
</div>

  {historyData.map((item, index) => (
    <div key={item.id} className="group transition-all duration-300">
      
      {/* 1. DESKTOP TABLE ROW (Hidden on Mobile) */}
<div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50/80 items-center border-b border-gray-50">
  <div className="col-span-1 text-[13px] font-semibold text-gray-500">#{String(index + 1).padStart(2, '0')}</div>
  
  <div className="col-span-4 flex items-center gap-4">
    <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200">
      <img src={item.image} alt={item.type} className="w-full h-full object-cover" />
    </div>
    <div>
      <div className="font-semibold text-gray-800 text-[14px]">{item.type}</div>
      <div className="text-[12px] text-gray-500 flex items-center gap-1"><MapPin size={12} /> {item.location}</div>
    </div>
  </div>
  
  <div className="col-span-1 text-[13px] font-medium text-gray-700">{item.weight}</div>
  <div className="col-span-2 text-[13px] text-gray-700">{item.collector}</div>
  
  <div className="col-span-2">
     <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-md text-[12px] font-semibold border border-amber-200">
       <TrendingUp size={12} /> +{item.points}
     </div>
  </div>
  
  <div className="col-span-2 text-right text-[13px] text-emerald-600 font-medium flex items-center justify-end gap-1">
    <CheckCircle2 size={14} /> {item.status}
  </div>
</div>

     {/* 2. MOBILE PREMIUM CARD LAYOUT */}
<div className="lg:hidden my-2">
  <div className="relative overflow-hidden bg-white rounded-3xl p-3.5 border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">

    {/* Accent Bar */}
    <div
      className={`absolute left-0 top-0 bottom-0 w-1.5 ${
        item.status === "Completed"
          ? "bg-emerald-500"
          : "bg-amber-400"
      }`}
    />

    {/* Header */}
    <div className="flex items-center justify-between mb-3 pl-2">
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          item.status === "Completed"
            ? "bg-emerald-50 text-emerald-700"
            : "bg-amber-50 text-amber-700"
        }`}
      >
        <CheckCircle2 size={10} />
        {item.status}
      </span>

      <div className="flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
        <TrendingUp size={11} />
        +{item.points} Pts
      </div>
    </div>

    {/* Body */}
    <div className="flex gap-3 pl-2">
      {/* Image */}
      <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 border border-gray-100">
        <img
          src={item.image}
          alt={item.type}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-[15px] leading-tight truncate">
          {item.type}
        </h4>

        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
            <Clock size={12} className="shrink-0" />
            <span className="truncate">
              {item.date} • {item.time}
            </span>
          </div>

          <div className="flex items-start gap-1.5 text-[11px] text-gray-500">
            <MapPin
              size={12}
              className="shrink-0 mt-[2px]"
            />

            <span
              className="leading-snug overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.location}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between pl-2">
      <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
        Collector
      </span>

      <span className="text-[12px] font-semibold text-gray-800 truncate max-w-[140px]">
        {item.collector}
      </span>
    </div>
  </div>
</div>
    </div>
  ))}
</div>
    </div>
  );
};

export default History;