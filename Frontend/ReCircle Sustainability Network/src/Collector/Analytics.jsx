import React from 'react';
import { Package, Truck, Target, Layers, Calendar, BarChart3, Activity } from 'lucide-react';

const Analytics = () => {
  // Mock data (Assuming this comes from your state)
  const historyData = [
    { quantity: 15, wasteType: "Plastic Bottles" },
    { quantity: 22, wasteType: "Paper Waste" },
    { quantity: 12, wasteType: "Metal Scrap" },
    { quantity: 8, wasteType: "E-Waste" },
  ];

  // Calculations
  const totalKg = historyData.reduce((sum, item) => sum + item.quantity, 0);
  const totalPickups = historyData.length;
  const avgEfficiency = (totalKg / totalPickups).toFixed(1);
  const uniqueCategories = [...new Set(historyData.map(item => item.wasteType))].length;

  return (
    <div className="w-full space-y-6 mb-8 px-3 md:px-0">
      
      {/* HEADER SECTION (Responsive & Consistent) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 -mt-4">
        
        {/* Icon & Title Wrapper */}
        <div className="flex items-center gap-3">
          <div className="p-2 md:p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 shrink-0">
            <Activity size={20} className="text-emerald-600" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              Performance <span className="text-emerald-700">Analytics</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              Operational data insights for your activity
            </p>
          </div>
        </div>

        {/* Date Filter */}
        <div className="flex items-center gap-2 bg-white border border-gray-400 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors w-fit shrink-0">
          <Calendar size={16} className="text-emerald-600" /> Last 30 Days
        </div>
      </div>

      {/* KPI CARDS - Real Calculated Data */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Collected", value: `${totalKg} Kg`, icon: <Package />, color: "bg-emerald-500" },
          { label: "Total Pickups", value: totalPickups, icon: <Truck />, color: "bg-blue-500" },
          { label: "Avg. Efficiency", value: `${avgEfficiency} Kg/Pickup`, icon: <Target />, color: "bg-amber-500" },
          { label: "Active Categories", value: uniqueCategories, icon: <Layers />, color: "bg-purple-500" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 md:p-6 rounded-3xl bg-green-50/50 border border-green-500 shadow-sm flex flex-col md:flex-row md:items-center gap-3 md:gap-4 transition-transform hover:-translate-y-1">
            <div className={`${item.color} p-3 rounded-2xl text-white w-fit shrink-0`}>
              {item.icon}
            </div>
            <div>
              <p className="text-gray-600 text-[9px] md:text-[11px] uppercase font-bold tracking-wider mb-0.5">{item.label}</p>
              <h3 className="text-[16px] md:text-xl font-bold text-gray-900">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* COLLECTION TRENDS - RESPONSIVE LAYOUT */}
        <div className="lg:col-span-2 bg-white p-5 md:p-6 rounded-3xl border border-gray-300 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-900">Collection Trends</h3>
              <p className="text-[9px] md:text-[10px] text-gray-500 uppercase font-semibold mt-0.5">Weight Collected (KG) per Day</p>
            </div>
            <div className="p-2 bg-emerald-50 rounded-lg">
              <BarChart3 size={18} className="text-emerald-600" />
            </div>
          </div>
          
          {/* Chart Container */}
          <div className="flex items-end h-56 md:h-64 mt-4">
            
            {/* Y-Axis Labels */}
            <div className="flex flex-col justify-between h-full text-[9px] md:text-[10px] text-gray-600 mr-3 md:mr-4 pb-6 font-medium">
              <span>100kg</span>
              <span>75kg</span>
              <span>50kg</span>
              <span>25kg</span>
              <span>0kg</span>
            </div>

            {/* Main Graph Area */}
            <div className="flex items-end justify-center md:justify-between gap-1.5 md:gap-0 w-full h-full border-b border-l border-gray-400 pb-2 px-2">
              {[
                { day: 'Day 1', val: 40 },
                { day: 'Day 2', val: 70 },
                { day: 'Day 3', val: 45 },
                { day: 'Day 4', val: 90 },
                { day: 'Day 5', val: 60 },
                { day: 'Day 6', val: 85 },
                { day: 'Day 7', val: 65 }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-end h-full group w-7 md:w-12">
                  {/* Peak Label */}
                  <span className="text-[9px] md:text-[11px] font-bold text-emerald-800 mb-1.5 md:mb-2">
                    {item.val}kg
                  </span>
                  
                  {/* The Bar */}
                  <div 
                    className="w-full bg-emerald-600 hover:bg-emerald-600 rounded-t-md md:rounded-t-lg transition-all duration-500" 
                    style={{ height: `${item.val}%` }} 
                  />
                  
                  {/* X-Axis Label */}
                  <span className="text-[8px] md:text-[10px] font-semibold text-gray-600 mt-2.5 md:mt-3">{item.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

       {/* WASTE CATEGORY DISTRIBUTION - Enhanced with Visualizer */}
<div className="bg-white p-5 md:p-6 rounded-3xl border border-gray-300 shadow-sm flex flex-col">
  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Waste Distribution</h3>
  
  {/* NEW: Visual Stacked Bar Graph */}
  <div className="flex w-full h-4 rounded-full overflow-hidden my-6 border border-gray-50">
    <div className="bg-emerald-600 h-full" style={{ width: '55%' }} title="Plastic: 55%"></div>
    <div className="bg-blue-600 h-full" style={{ width: '25%' }} title="Paper: 25%"></div>
    <div className="bg-amber-600 h-full" style={{ width: '20%' }} title="Metal: 20%"></div>
  </div>

  <div className="space-y-6 flex-1 flex flex-col justify-center">
    {[
      { name: "Plastic", val: 55, color: "bg-emerald-600" },
      { name: "Paper", val: 25, color: "bg-blue-600" },
      { name: "Metal", val: 20, color: "bg-amber-600" },
    ].map((cat, i) => (
      <div key={i} className="group">
        <div className="flex justify-between text-sm mb-2.5">
          <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">{cat.name}</span>
          <span className="font-bold text-gray-900">{cat.val}%</span>
        </div>
        <div className="w-full h-2.5 md:h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${cat.color} rounded-full transition-all duration-1000 ease-out`} 
            style={{ width: `${cat.val}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Analytics;