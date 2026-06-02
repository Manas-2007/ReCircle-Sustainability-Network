import React from "react";
import { Download, MapPin, Calendar, History as HistoryIcon } from "lucide-react";

const History = () => {
  const historyData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558640479-8246d8d3f4b4?w=400",
      wasteType: "Plastic Bottles",
      quantity: 15,
      amount: 120,
      address: "Green Park Avenue",
      pincode: "462001",
      date: "01 Jun 2026",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      wasteType: "Paper Waste",
      quantity: 22,
      amount: 180,
      address: "Model Town",
      pincode: "462010",
      date: "30 May 2026",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      wasteType: "Metal Scrap",
      quantity: 12,
      amount: 250,
      address: "Sector 4",
      pincode: "462022",
      date: "28 May 2026",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=400",
      wasteType: "E-Waste",
      quantity: 8,
      amount: 320,
      address: "Lake View Colony",
      pincode: "462016",
      date: "25 May 2026",
    },
  ];

  const totalKg = historyData.reduce((sum, item) => sum + item.quantity, 0);
  const totalEarnings = historyData.reduce((sum, item) => sum + item.amount, 0);

  const downloadHistory = () => {
    window.print();
  };

  const stats = [
    {
      title: "Pickups",
      value: historyData.length,
      subtitle: "Completed",
      image: "/finaltruck.jpg", // Using your custom images
      bg: "bg-emerald-500",
    },
    {
      title: "Waste",
      value: `${totalKg} KG`,
      subtitle: "Collected",
      image: "/garbage.jpg",
      bg: "bg-sky-500",
    },
    {
      title: "Earnings",
      value: `₹${totalEarnings}`,
      subtitle: "Revenue",
      image: "/earning.jpg",
      bg: "bg-amber-500",
    },
    {
      title: "Categories",
      value: "4",
      subtitle: "Waste Types",
      image: "/category.jpg",
      bg: "bg-purple-500",
    },
  ];

  return (
    <div className="w-full mb-8 md:px-6">
      {/* HEADER SECTION (Responsive) */}
      <div className="flex flex-row items-center justify-between mb-8 w-full px-3 ">
        
        <div className="flex items-center gap-3">
          
          {/* YE NAYA ICON BOX HAI (Responsive padding ke sath) */}
          <div className="p-2 md:p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 shrink-0">
            {/* ❌ TUMHARA: <History size={20} ... /> (Isse crash ho raha tha) */}
            {/* ✅ SAHI TARIQA: <HistoryIcon /> likhna hai */}
            <HistoryIcon size={20} className="text-emerald-600" />
          </div>

          {/* YE TERA CODE HAI - BINA KISI CHANGE KE */}
          <div className="flex flex-col gap-1">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              Pickup <span className="text-emerald-700">History</span>
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Completed collection records
            </p>
          </div>
        </div>

        {/* YE TERA BUTTON WALA CODE HAI - BINA KISI CHANGE KE */}
        <button
          onClick={downloadHistory}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm shrink-0"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Download</span> PDF
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8 w-full">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`
              ${stat.bg} rounded-3xl p-4 md:p-5 shadow-sm overflow-hidden relative 
              min-h-[120px] md:min-h-[140px] flex flex-col justify-between transition-transform hover:-translate-y-1
            `}
          >
            {/* Text Content - Decreased Boldness */}
            <div className="relative z-20 text-white w-2/3">
              <p className="text-[11px] md:text-xs uppercase tracking-wider opacity-90 font-semibold mb-1">
                {stat.title}
              </p>
              <h2 className="text-xl md:text-2xl font-bold">
                {stat.value}
              </h2>
              <p className="text-[11px] md:text-sm opacity-90 mt-1 font-medium">
                {stat.subtitle}
              </p>
            </div>

            {/* Image Fix - Removed opacity/blend, properly scaled */}
            <div className="absolute right-0 bottom-0 z-10 w-20 h-20 md:w-28 md:h-28 flex items-end justify-end pr-2 pb-2 md:pr-3 md:pb-3">
              <img
                src={stat.image}
                alt={stat.title}
                className="w-full h-full object-contain drop-shadow-md" 
              />
            </div>

            {/* Decorative Overlay */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full z-0 pointer-events-none" />
            <div className="absolute -right-2 -top-6 w-16 h-16 bg-white/5 rounded-full z-0 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* TABLE VIEW (Responsive with Horizontal Scroll for Mobile) */}
<div className="bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-sm mb-8">
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left min-w-[850px]">
      <thead className="bg-emerald-100 text-emerald-800 uppercase font-bold text-[12px] tracking-wider">
        <tr>
          {/* S.No Column Added */}
          <th className="px-6 py-5 rounded-tl-3xl w-16">S.No</th>
          <th className="px-6 py-5">Waste Info</th>
          <th className="px-6 py-5">Quantity</th>
          <th className="px-6 py-5">Location</th>
          <th className="px-6 py-5">Date</th>
          <th className="px-6 py-5 rounded-tr-3xl text-right">Earnings</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {historyData.map((item, index) => (
          <tr key={item.id} className="hover:bg-emerald-100/40 transition-colors group">
            
            {/* S.No Data */}
            <td className="px-6 py-4 font-semibold text-gray-700">
              #{index + 1 < 10 ? `0${index + 1}` : index + 1}
            </td>

            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <img 
                  src={item.image} 
                  alt={item.wasteType} 
                  className="w-10 h-10 rounded-lg object-cover border border-gray-100 shadow-sm" 
                />
                <span className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {item.wasteType}
                </span>
              </div>
            </td>

            <td className="px-6 py-4">
              <span className="font-semibold text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-xs">
                {item.quantity} KG
              </span>
            </td>

            <td className="px-6 py-4">
              <p className="font-semibold text-gray-800">{item.address}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Pin: {item.pincode}</p>
            </td>

            <td className="px-6 py-4 font-medium text-gray-600">
              {item.date}
            </td>

            <td className="px-6 py-4 text-right">
              <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-xl font-bold inline-block">
                ₹{item.amount}
              </span>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </div>
  );
};

export default History;