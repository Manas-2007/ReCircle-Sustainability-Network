import React, { useState, useEffect } from "react";
import {
  MapPin,
  SlidersHorizontal,
  Bell,
  Calendar,
  Clock,
  X,
  Search,
  Filter,
} from "lucide-react";

const NearbyReq = () => {
  const [requests, setRequests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReq, setSelectedReq] = useState(null);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");

  // 1. Data fetch
  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const res = await fetch("http://localhost:2007/api/requests/pending", {
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) setRequests(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchPendingRequests();
  }, []);

  //  Filter and Search
  const filteredRequests = requests.filter((req) => {
    const matchesSearch =
      req.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.wasteType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "All" || req.wasteType === filterType;
    return matchesSearch && matchesFilter;
  });

  // 2. handleAccept to update the backend
  const handleAccept = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:2007/api/requests/accept/${id}`,
        {
          method: "PATCH",
          credentials: "include",
        },
      );

      if (res.ok) {
        setRequests((prev) =>
          prev.map((req) =>
            req._id === id ? { ...req, status: "Accepted" } : req,
          ),
        );
      }
    } catch (err) {
      console.error("Error accepting request:", err);
    }
  };

  // 3. Cancel the accepted requests
  const handleCancel = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:2007/api/requests/cancel/${id}`,
        {
          method: "PATCH",
          credentials: "include",
        },
      );

      if (res.ok) {
        setRequests((prev) =>
          prev.map((req) =>
            req._id === id ? { ...req, status: "Pending" } : req,
          ),
        );
      }
    } catch (err) {
      console.error("Error cancelling request:", err);
    }
  };

  const openScheduleModal = (req) => {
    setSelectedReq(req);
    setIsModalOpen(true);
  };

  //Pickup Schedule
  const confirmSchedule = async () => {
    if (!scheduleDate || !scheduleTime)
      return alert("Please select Date and Time!");

    try {
      const res = await fetch(
        `http://localhost:2007/api/requests/schedule/${selectedReq._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ date: scheduleDate, time: scheduleTime }),
        },
      );

      if (!res.ok) throw new Error("Failed to update status.");

      alert("Scheduled Successfully!");
      setIsModalOpen(false);

      // Update UI
      setRequests((prev) =>
        prev.map((r) =>
          r._id === selectedReq._id
            ? {
                ...r,
                status: "Scheduled",
                scheduledDate: scheduleDate,
                scheduledTime: scheduleTime,
              }
            : r,
        ),
      );
    } catch (err) {
      console.error("Scheduling error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 font-sans pb-10 -mt-2 sm:-mt-0">
      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between w-full mb-8 ">
        {/* 1. LEFT: LIVE FEED + TITLE */}
        <div className="flex flex-col gap-1 shrink-0 w-full lg:w-auto">
          <div className="flex items-center gap-1.5 text-emerald-600 font-[600] text-[10px] uppercase tracking-wider">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            LIVE FEED
          </div>
          <h1 className="text-[17px] sm:text-xl lg:text-[23px] font-[700] text-gray-900 leading-none flex items-center gap-2">
            <MapPin size={22} className="text-emerald-600 flex-shrink-0" />
            Nearby <span className="text-emerald-700">Requests</span>
          </h1>
        </div>

        {/* 2. RIGHT: SEARCH & FILTER GROUP */}
        <div className="flex flex-row w-full lg:w-auto gap-3 items-center">
          <div className="relative flex-1 lg:w-[300px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search location or waste..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-11 pr-4 rounded-2xl border border-gray-300 bg-white text-sm font-[600] outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all"
            />
          </div>

          {/* Filter Dropdown  */}
          <div className="relative h-10">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="h-full pl-4 pr-10 rounded-2xl bg-white border border-gray-200 text-emerald-700 font-[600] text-sm shadow-sm outline-none appearance-none focus:border-emerald-500 hover:border-emerald-400 cursor-pointer transition-all"
            >
              <option value="All">All Types</option>
              <option value="Plastic">Plastic</option>
              <option value="Paper">Paper</option>
              <option value="Metal">Metal</option>
              <option value="E-Waste">E-Waste</option>
            </select>
            <SlidersHorizontal
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-700 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((req) => (
            <div
              key={req._id || req.id}
              className="bg-green-100/50 border border-green-400 border-l-4 border-emerald-600 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              {/* TOP: Image & Title */}
              <div className="flex gap-3">
                <img
                  src={
                    req.image?.startsWith("http")
                      ? req.image
                      : `http://localhost:2007${req.image}`
                  }
                  alt={req.wasteType}
                  className="w-14 h-14 rounded-lg object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-[700] text-[17px] text-gray-950 truncate capitalize">
                    {req.wasteType}
                  </h3>

                  <p className="w-fit bg-emerald-100 text-emerald-700 font-[600] text-[12px] px-2.5 py-0.5 rounded-lg mt-1 border border-emerald-200">
                    {req.quantity} Kg
                  </p>
                </div>
              </div>

              {/* DETAILS */}
              <div className="mt-3 space-y-2 flex-1">
                <div className="flex items-start gap-2.5 text-[13px] font-[600] text-gray-800">
                  <MapPin
                    size={13}
                    className="text-emerald-600 shrink-0 mt-0.5"
                  />
                  <span className="leading-snug line-clamp-2">
                    {req.location}
                  </span>
                </div>

                {req.status === "Scheduled" && (
                  <div className="mt-2 p-2 bg-emerald-100 rounded-lg border border-emerald-200">
                    <p className="text-[10px] font-bold text-emerald-800 uppercase text-center">
                      📅 {req.scheduledDate} | ⏰ {req.scheduledTime}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-1.5 p-2 bg-white/60 rounded-md border border-emerald-100">
                  <div className="flex items-center gap-1.5 text-[12px] font-[700] text-gray-700">
                    <span>📮</span>
                    <span>{req.pincode}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[12px] font-[700] text-gray-700">
                    <Clock size={11} className="text-emerald-600 shrink-0" />
                    <span>{req.time || "Anytime"}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[12px] font-[700] text-gray-700">
                    <Calendar size={11} className="text-emerald-600 shrink-0" />
                    <span>
                      {req.date || new Date(req.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mt-3">
                {req.status?.toLowerCase() === "pending" ? (
                  <button
                    onClick={() => handleAccept(req._id)}
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 rounded-lg text-[13px] font-[700] transition-all"
                  >
                    Accept Request
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCancel(req._id)}
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
          ))
        ) : (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-500">
            <p className="font-semibold text-lg">No requests found</p>
            <p className="text-sm">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      {/* SCHEDULE MODAL */}
      {isModalOpen && selectedReq && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 md:p-7">
            <div className="flex justify-between items-start mb-7">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Schedule Pickup
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedReq.wasteType}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider ml-1">
                  Collection Date
                </label>
                <input
                  type="date"
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-300 text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider ml-1">
                  Collection Time
                </label>
                <input
                  type="time"
                  onChange={(e) => setScheduleTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-300 text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={confirmSchedule}
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
