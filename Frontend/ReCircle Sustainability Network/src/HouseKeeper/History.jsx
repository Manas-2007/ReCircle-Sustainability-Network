import React, { useState, useEffect } from "react";
import {
  History as HistoryIcon,
  Download,
  Clock,
  MapPin,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [dynamicStats, setDynamicStats] = useState({
    totalPickups: 0,
    totalPoints: 0,
    totalWaste: 0,
  });

  // FETCH DATA FROM BACKEND
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(
          "http://localhost:2007/api/requests/my-requests",
          { credentials: "include" },
        );
        const data = await res.json();

        if (res.ok) {
          const completedRequests = data.filter(
            (req) => req.status === "Delivered",
          );

          const formattedData = completedRequests.map((req) => ({
            id: req._id,
            date: new Date(req.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            time:
              req.time ||
              new Date(req.createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
            location: req.location,
            type: req.wasteType,
            weight: `${req.quantity} kg`,
            points: req.points || req.quantity * 10,
            collector: "ReCircle Partner",
            status: "Completed",
            image: req.image?.startsWith("http")
              ? req.image
              : `http://localhost:2007${req.image}`,
          }));

          setHistoryData(formattedData);

          const pickups = completedRequests.length;
          const points = completedRequests.reduce(
            (sum, req) => sum + (req.points || req.quantity * 10),
            0,
          );
          const waste = completedRequests.reduce(
            (sum, req) => sum + req.quantity,
            0,
          );

          setDynamicStats({
            totalPickups: pickups,
            totalPoints: points,
            totalWaste: waste,
          });
        }
      } catch (err) {
        console.error("Failed to fetch history:", err);
      }
    };
    fetchHistory();
  }, []);

  // STATS DATA
  const stats = [
    {
      title: "Total Pickups",
      value: dynamicStats.totalPickups,
      message: "🔥 Keep it up!",
      bg: "bg-[#064e3b]",
      border: "border-emerald-500/40",
      titleColor: "text-emerald-200",
      valueColor: "text-white",
      badgeBg: "bg-emerald-500/20",
      badgeText: "text-emerald-300",
      badgeBorder: "border-emerald-500/30",
      image: "/H2.jpg",
    },
    {
      title: "Eco Points Earned",
      value: dynamicStats.totalPoints.toLocaleString(),
      message: "⭐ Elite Tier Unlocked!",
      bg: "bg-[#78350f]",
      border: "border-amber-500/40",
      titleColor: "text-amber-200",
      valueColor: "text-white",
      badgeBg: "bg-amber-500/20",
      badgeText: "text-amber-300",
      badgeBorder: "border-amber-500/30",
      image: "/eco.jpg",
    },
    {
      title: "Waste Recycled",
      value: `${dynamicStats.totalWaste} kg`,
      message: `🌍 Offset ${dynamicStats.totalWaste * 2.5}kg of CO₂`,
      bg: "bg-[#0c4a6e]",
      border: "border-sky-500/40",
      titleColor: "text-sky-200",
      valueColor: "text-white",
      badgeBg: "bg-sky-500/20",
      badgeText: "text-sky-300",
      badgeBorder: "border-sky-500/30",
      image: "/H5.jpg",
    },
  ];

  const downloadCSV = () => {
    const headers = [
      "ID",
      "Date",
      "Time",
      "Location",
      "Type",
      "Weight",
      "Points",
      "Collector",
      "Status",
    ];
    const rows = historyData.map((item) => [
      item.id,
      item.date,
      item.time,
      `"${item.location}"`,
      item.type,
      item.weight,
      item.points,
      item.collector,
      item.status,
    ]);
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `recycle_history_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 font-sans pb-10 -mt-2 sm:-mt-0">
      {/* HEADER */}
      <div className="flex flex-row items-center justify-between gap-3 mb-6 lg:hidden">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100 shrink-0">
            <HistoryIcon size={20} className="text-emerald-600" />
          </div>
          <div className="truncate">
            <h1 className="text-base font-bold sm:font-semibold text-gray-900 leading-tight truncate">
              Pickup History
            </h1>
            <p className="text-gray-500 text-[11px] font-normal truncate">
              Your journey of impact
            </p>
          </div>
        </div>
        <button
          onClick={downloadCSV}
          className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-xl text-[11px] font-medium text-gray-700 hover:text-emerald-700 transition-all active:scale-95 shadow-sm shrink-0"
        >
          <Download size={14} />
          <span className="hidden xs:inline">Report</span>
        </button>
      </div>

      {/* COMPACT COUNTERS */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mb-8 w-full">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row-reverse items-center justify-between p-2 sm:p-5 rounded-xl sm:rounded-2xl border ${stat.border} ${stat.bg} shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
          >
            <div className="w-10 h-10 sm:w-16 sm:h-16 lg:w-[92px] lg:h-[92px] rounded-[8px] sm:rounded-[10px] lg:rounded-[15px] overflow-hidden border-[2px] border-white/20 shadow-lg shrink-0 z-10 bg-white p-0.5 mb-2 sm:mb-0">
              <img
                src={stat.image}
                alt={stat.title}
                className="w-full h-full object-cover rounded-[6px] sm:rounded-[8px] lg:rounded-[14px]"
              />
            </div>
            <div className="flex flex-col z-10 relative items-center sm:items-start text-center sm:text-left w-full">
              <p
                className={`text-[8px] sm:text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase ${stat.titleColor} opacity-80 mb-0.5`}
              >
                {stat.title}
              </p>
              <h3
                className={`${stat.valueColor} text-[13px] sm:text-xl lg:text-3xl font-bold tracking-tight`}
              >
                {stat.value}
              </h3>
              <div
                className={`mt-1 inline-flex items-center px-1.5 py-0.5 rounded text-[7px] sm:text-[10px] font-semibold border ${stat.badgeBg} ${stat.badgeText} ${stat.badgeBorder}`}
              >
                {stat.message}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* HISTORY TABLE  */}
      <div className="divide-y divide-gray-100">
        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-300 bg-gray-50/50 text-[13px] font-bold text-gray-500 uppercase tracking-wider">
          <div className="col-span-1">S.No</div>
          <div className="col-span-4">Pickup Details</div>
          <div className="col-span-1">Qty</div>
          <div className="col-span-2">Collector</div>
          <div className="col-span-2">Reward</div>
          <div className="col-span-2 text-right">Status</div>
        </div>

        {historyData.length === 0 ? (
          <div className="text-center py-10 text-gray-500 font-semibold">
            No completed pickups yet.
          </div>
        ) : (
          historyData.map((item, index) => (
            <div key={item.id} className="group transition-all duration-300">
              {/* DESKTOP TABLE ROW */}
              <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-5 bg-white hover:bg-gray-50/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-[1px] transition-all duration-300 items-center border-b border-gray-100/80 group">
                <div className="col-span-1 text-[14px] font-bold text-gray-400 group-hover:text-emerald-500 transition-colors">
                  #{String(index + 1).padStart(2, "0")}
                </div>

                <div className="col-span-4 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-gray-200/80 shadow-sm shrink-0 bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.type}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900 text-base capitalize truncate tracking-tight">
                      {item.type}
                    </div>
                    <div className="text-[13px] text-gray-500 font-medium flex items-center gap-1.5 mt-1 truncate">
                      <MapPin size={14} className="text-emerald-500 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <span className="text-[14px] font-bold text-gray-800 bg-gray-100/80 px-3 py-1.5 rounded-lg border border-gray-200/50">
                    {item.weight}
                  </span>
                </div>

                <div className="col-span-2 text-[14px] font-bold text-gray-700 truncate pr-2">
                  {item.collector}
                </div>

                <div className="col-span-2">
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-50 to-orange-50/50 text-amber-700 px-3 py-1.5 rounded-xl text-[13px] font-bold border border-amber-200/80 shadow-[0_2px_10px_-3px_rgba(251,191,36,0.3)] hover:shadow-md transition-shadow">
                    <TrendingUp size={15} className="text-amber-500" /> +
                    {item.points} Pts
                  </div>
                </div>

                <div className="col-span-2 flex justify-end">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50/80 text-emerald-700 border border-emerald-200/80 rounded-full text-[13px] font-bold shadow-[0_2px_10px_-3px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    {item.status}
                  </div>
                </div>
              </div>

              {/* MOBILE  CARD LAYOUT */}
              <div className="lg:hidden my-3">
                <div className="relative overflow-hidden bg-white rounded-[20px] p-4 border border-gray-100 shadow-sm active:scale-[0.98] transition-all duration-200">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500" />

                  <div className="flex items-center justify-between mb-3.5 pl-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-emerald-50/80 text-emerald-700 border border-emerald-100 shadow-[0_2px_8px_-2px_rgba(16,185,129,0.15)]">
                      <CheckCircle2 size={12} className="text-emerald-500" />{" "}
                      {item.status}
                    </span>

                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-50 to-orange-50/50 text-amber-700 border border-amber-200/80 px-3 py-1 rounded-full text-[11px] font-bold shadow-[0_2px_8px_-2px_rgba(251,191,36,0.25)]">
                      <TrendingUp size={12} className="text-amber-500" /> +
                      {item.points} Pts
                    </div>
                  </div>

                  <div className="flex gap-3.5 pl-2">
                    {/* Image  */}
                    <div className="w-[84px] h-[84px] rounded-2xl overflow-hidden shrink-0 border border-gray-200/80 bg-gray-50 p-0.5 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.type}
                        className="w-full h-full object-cover rounded-[14px]"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 py-0.5">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-bold text-gray-900 text-base leading-tight truncate capitalize">
                          {item.type}
                        </h4>
                        <span className="shrink-0 text-[11px] font-bold text-gray-800 bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200/60">
                          {item.weight}
                        </span>
                      </div>

                      {/* Date & Location*/}
                      <div className="mt-2.5 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-[12px] text-gray-600 font-medium">
                          <Clock size={13} className="shrink-0 text-gray-400" />
                          <span className="truncate">
                            {item.date} • {item.time}
                          </span>
                        </div>
                        <div className="flex items-start gap-1.5 text-[12px] text-gray-600 font-medium">
                          <MapPin
                            size={13}
                            className="shrink-0 mt-[2px] text-emerald-500"
                          />
                          <span className="leading-snug overflow-hidden line-clamp-2">
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between pl-2">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-bold">
                      Collector
                    </span>
                    <span className="text-[13px] font-bold text-gray-900 truncate max-w-[150px]">
                      {item.collector}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
