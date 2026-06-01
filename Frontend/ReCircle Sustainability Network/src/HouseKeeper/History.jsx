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
      image: 'H2.jpg'
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
      image: 'eco.jpg'
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
      image: 'H5.jpg'
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
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 font-sans pb-10 ">
      
      {/* HEADER (Hidden on Desktop 'lg:hidden', Visible on Mobile) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="p-2 sm:p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 shrink-0">
            <HistoryIcon size={22} className="text-emerald-600 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight leading-tight">Pickup History</h1>
            <p className="text-gray-500 mt-0.5 text-[12px] sm:text-[13.5px] font-normal">Your journey of positive impact</p>
          </div>
        </div>

        <button 
          onClick={downloadCSV}
          className="flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-xl text-[12px] sm:text-[13px] font-medium text-gray-700 hover:text-emerald-700 transition-all active:scale-95 shadow-sm sm:w-auto w-full"
        >
          <Download size={16} />
          <span className="hidden xs:inline">Download CSV Report</span>
          <span className="xs:hidden">Download CSV</span>
        </button>
      </div>

      {/* COMPACT COUNTERS WITH DARK PREMIUM THEME */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between p-4 lg:p-5 rounded-2xl border ${stat.border} ${stat.bg} shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden`}
          >
            {/* Left Side: Stats & Messages */}
            <div className="flex flex-col z-10 relative">
              <p className={`text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase ${stat.titleColor} opacity-90`}>
                {stat.title}
              </p>
              <h3 className={`${stat.valueColor} text-2xl lg:text-3xl font-bold tracking-tight mt-1`}>
                {stat.value}
              </h3>
              {/* Dynamic Dark Theme Badge */}
              <div className={`mt-2 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] lg:text-[11px] font-semibold w-fit border ${stat.badgeBg} ${stat.badgeText} ${stat.badgeBorder}`}>
                {stat.message}
              </div>
            </div>
            
            {/* Right Side: Resized Smaller Image with semi-transparent border */}
            <div className="w-20 h-20 lg:w-[92px] lg:h-[92px] rounded-[15px] overflow-hidden border-[3px] border-white/20 shadow-lg shrink-0 relative z-10 bg-white p-1">
              <img 
                src={stat.image} 
                alt={stat.title} 
                className="w-full h-full object-cover rounded-[14px] group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* HISTORY TABLE WITH S.NO AND QUANTITY COLUMNS */}
      <div className="bg-white border border-green-400 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Table Header (Updated Grid for S.No and Qty) */}
        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 border-b border-green-400 bg-gray-50/50 text-[12px] font-semibold text-black-500 uppercase tracking-wider">
          <div className="col-span-1">S.No</div>
          <div className="col-span-4">Pickup Details</div>
          <div className="col-span-1">Qty</div>
          <div className="col-span-2">Collector</div>
          <div className="col-span-2">Reward</div>
          <div className="col-span-2 text-right">Status</div>
        </div>

        <div className="divide-y divide-green-300">
          {/* Note: Added 'index' to the map function */}
          {historyData.map((item, index) => (
            <div 
              key={item.id} 
              className="group flex flex-col lg:grid lg:grid-cols-12 gap-4 px-5 sm:px-6 py-4 hover:bg-gray-200/50 transition-all duration-200"
            >
              {/* 0. S.No Column (NEW) */}
              <div className="col-span-1 hidden lg:flex items-center text-[13px] font-[600] text-gray-800">
                #{String(index + 1).padStart(2, '0')}
              </div>

              {/* 1. Image + Details */}
              <div className="col-span-4 flex items-start gap-3 lg:gap-4">
                <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-green-400 shadow-sm group-hover:shadow-md transition-all shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.type} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="font-semibold text-gray-800 text-[13.5px] sm:text-[15px] leading-tight truncate">
                    {item.type} 
                    {/* Mobile fallback for quantity */}
                    <span className="lg:hidden text-emerald-600 font-medium text-[12.5px] ml-1">({item.weight})</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] sm:text-[13px] text-gray-500 font-normal">
                    <Clock size={13} className="text-emerald-500" />
                    {item.date} • {item.time}
                  </div>
                  <div className="flex items-start gap-1.5 mt-0.5 text-[11px] sm:text-[13px] text-gray-500 font-normal">
                    <MapPin size={13} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>

              {/* 2. Quantity Column */}
              <div className="col-span-1 hidden lg:flex items-center">
                <span className="bg-gray-100 text-gray-800 border border-gray-200/80 px-2.5 py-1 rounded-md text-[12.5px] font-semibold whitespace-nowrap">
                  {item.weight}
                </span>
              </div>

              {/* 3. Collector */}
              <div className="col-span-2 hidden lg:flex items-center text-[13px] text-gray-800 font-medium">
                {item.collector}
              </div>

              {/* 4. Points */}
              <div className="col-span-2 flex items-center mt-2 lg:mt-0">
                <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-300 px-3 py-1.5 rounded-lg text-[12px] font-semibold shadow-sm">
                  <TrendingUp size={15} />
                  +{item.points} pts
                </div>
              </div>

              {/* 5. Status */}
              <div className="col-span-2 hidden lg:flex items-center justify-end gap-2">
                <div className="flex items-center gap-1.5 text-emerald-700 font-medium text-[13px]">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  {item.status}
                </div>
                <ChevronRight size={16} className="text-gray-800 group-hover:text-emerald-500 transition-colors" />
              </div>

              {/* Mobile Only Row */}
              <div className="lg:hidden flex justify-between pt-3 border-t border-gray-100 text-[12px] mt-1">
                <span className="text-gray-500 font-medium truncate pr-2">by {item.collector}</span>
                <span className="text-emerald-600 font-medium flex items-center gap-1 shrink-0">
                  <CheckCircle2 size={14} /> {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 text-center">
          <button className="text-[12px] sm:text-[13px] text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1.5 mx-auto transition-colors">
            Load More History <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;