import React, { useState, useEffect } from "react";
import {API_BASE_URL} from "../config";
import {
  Download,
  MapPin,
  Calendar,
  History as HistoryIcon,
} from "lucide-react";

const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/requests/history`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setHistoryData(data))
      .catch((err) => console.log("History fetch error", err));
  }, []);

  // Dynamic Calculations
  const totalKg = historyData.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0,
  );
  const totalEarnings = historyData.reduce(
    (sum, item) => sum + (item.points || item.quantity * 10),
    0,
  );

  const downloadHistory = () => {
    window.print();
  };

  const stats = [
    {
      title: "Pickups",
      value: historyData.length,
      subtitle: "Completed",
      image: "/finaltruck.jpg", 
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
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 font-sans pb-10 -mt-2 sm:-mt-0">
      {/* HEADER SECTION */}
      <div className="flex flex-row items-center justify-between mb-8 w-full px-3 ">
        <div className="flex items-center gap-3">
          <div className="p-2 md:p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 shrink-0">
            <HistoryIcon size={20} className="text-emerald-600" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[17px] sm:text-xl font-bold text-gray-900 leading-none flex items-center gap-2">
              Pickup <span className="text-emerald-700">History</span>
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Completed collection records
            </p>
          </div>
        </div>

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
            <div className="relative z-20 text-white w-2/3">
              <p className="text-[11px] md:text-xs uppercase tracking-wider opacity-90 font-semibold mb-1">
                {stat.title}
              </p>
              <h2 className="text-xl md:text-2xl font-bold">{stat.value}</h2>
              <p className="text-[11px] md:text-sm opacity-90 mt-1 font-medium">
                {stat.subtitle}
              </p>
            </div>

            <div className="absolute right-0 bottom-0 z-10 w-20 h-20 md:w-28 md:h-28 flex items-end justify-end pr-2 pb-2 md:pr-3 md:pb-3">
              <img
                src={stat.image}
                alt={stat.title}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full z-0 pointer-events-none" />
            <div className="absolute -right-2 -top-6 w-16 h-16 bg-white/5 rounded-full z-0 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* TABLE VIEW */}
      <div className="bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-sm mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left min-w-[850px]">
            <thead className="bg-emerald-100 text-emerald-800 uppercase font-bold text-[12px] tracking-wider">
              <tr>
                <th className="px-6 py-5 rounded-tl-3xl w-16">S.No</th>
                <th className="px-6 py-5">Waste Info</th>
                <th className="px-6 py-5">Quantity</th>
                <th className="px-6 py-5">Location</th>
                <th className="px-6 py-5">Date</th>
                <th className="px-6 py-5 rounded-tr-3xl text-right">
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {historyData.map((item, index) => (
                <tr
                  key={item._id}
                  className="hover:bg-emerald-100/40 transition-colors group"
                >
                  <td className="px-6 py-4 font-semibold text-gray-700">
                    #{index + 1}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          item.image
                            ? `${API_BASE_URL}${item.image}`
                            : "default.jpg"
                        }
                        alt="Waste"
                        className="w-10 h-10 rounded-lg object-cover border border-gray-100 shadow-sm"
                      />
                      <span className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {item.wasteType
                          ? item.wasteType.charAt(0).toUpperCase() +
                            item.wasteType.slice(1)
                          : ""}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-xs">
                      {item.quantity} KG
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-800">
                      {item.location}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Pin: {item.pincode}
                    </p>
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-600">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-xl font-bold inline-block">
                      ₹{item.points || item.quantity * 10}
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
