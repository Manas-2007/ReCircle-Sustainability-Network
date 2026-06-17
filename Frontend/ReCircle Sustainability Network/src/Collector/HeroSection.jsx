import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../config";
import {
  Package,
  Truck,
  Clock,
  TrendingUp,
  FileText,
  Leaf,
  CheckCircle,
  Trophy,
  MapPin,
  Mail,
  Compass,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  // 1. ALL STATES
  const [user, setUser] = useState(null);
  const [historyData, setHistoryData] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [nearbyCount, setNearbyCount] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);

  // 2. API FETCHING
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) setUser(data.user);
      } catch (err) {
        console.error("Error fetching hero data:", err);
      }
    };
    fetchUserData();
  }, []);

  // Fetch Pending & Accepted Requests
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/requests/pending`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const onlyPending = data.filter(
            (req) => req.status?.toLowerCase() === "pending",
          );
          setNearbyCount(onlyPending.length);
          setPendingRequests(onlyPending);
          const onlyAccepted = data.filter(
            (req) => req.status?.toLowerCase() === "accepted",
          );
          setAcceptedCount(onlyAccepted.length);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Fetch History
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/requests/history`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setHistoryData(Array.isArray(data) ? data : []))
      .catch((err) => console.log(err));
  }, []);

  //  LOGIC & CALCULATIONS

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    if (hour >= 17 && hour < 21) return "Good Evening";
    return "Good Night";
  };

  const now = new Date();
  const startOfThisWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay(),
  );

  // Weekly Data
  const currentWeekData = historyData.filter(
    (h) => new Date(h.createdAt) >= startOfThisWeek,
  );
  const wasteSaved = currentWeekData.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0,
  );
  const pickupCount = currentWeekData.length;
  const performancePercentage =
    Math.min(Math.round((wasteSaved / 80) * 100), 100) || 0;

  // Overall Data (Total Completed & Earnings)
  const totalCompleted = historyData;
  const totalEarningsAllTime = totalCompleted.reduce((acc, item) => {
    return acc + (item.points || item.quantity * 10 || 0);
  }, 0);

  // Earnings Summary Metrics
  const avgPerJob =
    totalCompleted.length > 0
      ? Math.round(totalEarningsAllTime / totalCompleted.length)
      : 0;

  const weeklyEarnings = currentWeekData.reduce((acc, item) => {
    return (
      acc +
      (item.points || item.amount || item.price || item.quantity * 10 || 0)
    );
  }, 0);

  const weeklyGoal = 2000;
  const earningProgress =
    Math.min(Math.round((weeklyEarnings / weeklyGoal) * 100), 100) || 0;

  const startOfLastWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() - 7,
  );
  const lastWeekData = totalCompleted.filter((h) => {
    const d = new Date(h.updatedAt || h.createdAt);
    return d >= startOfLastWeek && d < startOfThisWeek;
  });
  const lastWeekEarnings = lastWeekData.reduce(
    (acc, item) =>
      acc +
      (item.points || item.amount || item.price || item.quantity * 10 || 0),
    0,
  );

  const earningTrend =
    lastWeekEarnings > 0
      ? Math.round(
          ((weeklyEarnings - lastWeekEarnings) / lastWeekEarnings) * 100,
        )
      : weeklyEarnings > 0
        ? 100
        : 0;

  // ACTION HANDLERS
  const handleAccept = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/requests/accept/${id}`, {
        method: "PATCH",
        credentials: "include",
      });

      if (res.ok) {
        alert("Accepted!");
        window.location.reload();
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 pb-10 -mt-2 sm:-mt-0 space-y-5">
      {/* Hero Section */}
      <div className="flex flex-col xl:flex-row gap-4 w-full items-stretch">
        {/* LEFT SIDE: 60% Profile Banner */}
        <div className="relative w-full xl:w-[60%] bg-white rounded-3xl p-4 md:p-6 border border-gray-300 shadow-sm overflow-hidden flex flex-col justify-center min-h-[200px] md:min-h-[220px]">
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute right-0 bottom-0 top-0 w-full sm:w-1/2 md:w-[45%] z-0"
            style={{
              backgroundImage: `url('/CollectorBanner.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <style>{`
      @media (max-width: 640px) {
        .mobile-img-adjust {
          background-size: contain !important;
          background-position: 90% bottom !important;
        }
      }
    `}</style>

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 sm:via-white/25 to-transparent mobile-img-adjust"></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 w-full sm:w-[65%] pr-1">
            {/* HEADING */}
            <h1 className="text-xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-[1.15]">
              {getGreeting()},
              <br />
              <span className="text-green-700 mt-1 inline-block">
                {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
              </span>
            </h1>

            {/* PROFILE DETAILS */}
            <div className="mt-3 space-y-2">
              {/* Email */}
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-1.5 rounded-lg border border-gray-200 text-gray-700 shrink-0">
                  <Mail size={14} />
                </div>

                <span className="text-[12px] md:text-sm font-medium text-gray-700 truncate bg-white/80 sm:bg-transparent px-2 py-1 rounded-md">
                  {user?.email || "Loading..."}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-1.5 rounded-lg border border-gray-200 text-gray-700 shrink-0">
                  <MapPin size={14} />
                </div>

                <span className="text-[12px] md:text-sm font-medium text-gray-700 bg-white/80 sm:bg-transparent px-2 py-1 rounded-md">
                  {user?.address || "Loading..."}
                </span>
              </div>

              {/* Pincode */}
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-1.5 rounded-lg border border-gray-200 text-gray-700 shrink-0">
                  <Compass size={14} />
                </div>

                <span className="text-[12px] md:text-sm font-medium text-gray-700 bg-white/80 sm:bg-transparent px-2 py-1 rounded-md">
                  Pincode: {user?.pincode || "..."}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: 40% Collector Performance Banner */}
        <div className="relative w-full xl:w-[40%] bg-white rounded-3xl p-5 md:p-6 border border-gray-300 shadow-sm flex flex-col min-h-[180px] md:min-h-[220px] overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-10 -translate-y-10 z-0"></div>

          {/* Header Section */}
          <div className="relative z-10 flex justify-between items-center mb-2 md:mb-0">
            <h2 className="font-bold text-base md:text-lg xl:text-base text-gray-900 truncate pr-2">
              Collector Performance
            </h2>
            <span className="text-[9px] md:text-[10px] font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-300 uppercase tracking-wide shrink-0">
              This Week
            </span>
          </div>

          {/* Chart & Stats Content */}
          <div className="relative z-10 flex flex-row justify-start items-center gap-4 md:gap-5 xl:gap-4 w-full my-auto">
            {/* Left: Progress Circle & Trend Badge */}
            <div className="flex flex-col items-center justify-center shrink-0">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-24 xl:h-24">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  />
                  <path
                    className="text-emerald-500 animate-[spin_1.5s_ease-out_forwards]"
                    strokeDasharray={`${performancePercentage}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-bold text-lg sm:text-xl md:text-2xl xl:text-xl text-gray-900 leading-none">
                    {performancePercentage}%
                  </span>
                </div>
              </div>
              <span className="mt-2 text-[8px] md:text-[9px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md flex items-center gap-1">
                ↑ 5% vs Last Wk
              </span>
            </div>

            {/* Right: Performance Details & 3-Column Stats */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <p className="text-xs md:text-sm xl:text-xs text-gray-500 leading-snug font-semibold mb-3 md:mb-4 xl:mb-3">
                <span className="hidden sm:inline">
                  Excellent work! You are in the top 10% of collectors locally.
                  Your efficiency is increasing rapidly and you are making a
                  great impact on the environment this week!
                </span>

                <span className="sm:hidden">
                  Trending up this week! You are in the top 10% collectors.
                </span>
              </p>

              <div className="grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-100 pt-3 md:pt-4 xl:pt-3">
                <div className="pl-0 pr-2 xl:pr-1">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    Waste Saved
                  </p>
                  <p className="font-bold text-sm sm:text-base md:text-lg xl:text-base text-gray-900 truncate">
                    {wasteSaved}{" "}
                    <span className="text-[8px] md:text-[9px] text-gray-500 font-semibold">
                      kg
                    </span>
                  </p>
                </div>

                <div className="px-2 xl:px-2">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    Pickups
                  </p>
                  <p className="font-bold text-sm sm:text-base md:text-lg xl:text-base text-gray-900 truncate">
                    {pickupCount}
                  </p>
                </div>

                <div className="pl-2 xl:pl-2">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    Earnings
                  </p>
                  <p className="font-bold text-sm sm:text-base md:text-lg xl:text-base text-emerald-600 truncate">
                    ₹{weeklyEarnings}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  2. STATS ROW (Overall / All Time */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full py-4">
        {/* Card 1: Requests Nearby */}
        <div className="bg-emerald-600 text-white p-3.5 md:p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:bg-emerald-700 transition-colors">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Package size={25} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-bold leading-none">
              {nearbyCount}
            </h3>
            <p className="text-emerald-50 text-[9px] md:text-[12px] font-semibold mt-1 uppercase tracking-wider">
              Requests Nearby
            </p>
            <p className="text-emerald-100/80 text-[9px] mt-0.5 cursor-pointer hover:text-white transition-colors">
              View all →
            </p>
          </div>
        </div>

        {/* Card 2: Accepted Pickups */}
        <div className="bg-blue-600 text-white p-3.5 md:p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:bg-blue-700 transition-colors">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Truck size={25} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-bold leading-none">
              {acceptedCount}
            </h3>
            <p className="text-blue-50 text-[9px] md:text-[12px] font-semibold mt-1 uppercase tracking-wider">
              Accepted Pickups
            </p>
            <p className="text-blue-100/80 text-[9px] mt-0.5">In Progress</p>
          </div>
        </div>

        {/* Card 3: Total Completed (All Time) */}
        <div className="bg-violet-600 text-white p-3.5 md:p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:bg-violet-700 transition-colors">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <CheckCircle size={25} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold leading-none">
              {totalCompleted.length}
            </h3>
            <p className="text-violet-50 text-[9px] md:text-[12px] font-medium mt-1 uppercase tracking-wider">
              Total Completed
            </p>
            <p className="text-violet-200/80 text-[9px] mt-0.5">All time</p>
          </div>
        </div>

        {/* Card 4: Total Earnings (All Time) */}
        <div className="bg-amber-500 text-white p-3.5 md:p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:bg-amber-600 transition-colors">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Trophy size={25} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold leading-none">
              ₹{totalEarningsAllTime}
            </h3>
            <p className="text-amber-50 text-[9px] md:text-[12px] font-semibold mt-1 uppercase tracking-wider">
              Total Earnings
            </p>
            <p className="text-amber-100/80 text-[9px] mt-0.5">All time</p>
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT: REQUESTS & SCHEDULE */}
      <div className="flex flex-col lg:flex-row gap-5 md:gap-6 w-full">
        <div className="w-full lg:w-1/2 bg-white rounded-3xl p-4 md:p-5 border border-gray-300 shadow-sm flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <h2 className="font-bold text-base md:text-lg text-gray-900">
              Nearby Pickup Requests
            </h2>
            <Link
              to="/dashboard/nearby"
              className="text-[10px] md:text-xs font-bold text-emerald-700 bg-white border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors shadow-sm"
            >
              View All
            </Link>
          </div>

          {/* Requests List */}
          <div className="flex flex-col">
            {pendingRequests.length === 0 ? (
              <p className="text-gray-500 text-sm p-4 text-center font-medium">
                No requests nearby.
              </p>
            ) : (
              pendingRequests.slice(0, 3).map((req) => (
                <div
                  key={req._id}
                  className="flex flex-row gap-3 md:gap-4 py-3 md:py-3.5 border-b border-gray-100 first:pt-0 last:border-b-0"
                >
                  <div className="w-20 h-20 md:w-24 md:h-20 shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={
                        req.image ? `${API_BASE_URL}${req.image}` : "/H1.jpg"
                      }
                      alt={req.wasteType || "Waste"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Wrapper */}
                  <div className="flex-1 flex flex-row justify-between gap-2 min-w-0">
                    <div className="flex flex-col justify-center gap-1 md:gap-1.5 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-gray-900 text-xs md:text-sm truncate capitalize">
                          {req.wasteType
                            .replace(/ewaste/i, "E-Waste")
                            .charAt(0)
                            .toUpperCase() +
                            req.wasteType.slice(1).replace("waste", "-Waste")}
                        </h3>
                        <span className="hidden sm:inline-block bg-emerald-50 text-emerald-700 text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wide shrink-0">
                          New
                        </span>
                      </div>

                      <div className="flex flex-col xl:flex-row xl:items-center gap-0.5 xl:gap-3 text-[10px] md:text-xs text-gray-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Package size={12} className="shrink-0" />{" "}
                          {req.quantity} kg
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="shrink-0" />
                          {new Date(req.createdAt).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-[10px] md:text-xs text-gray-500 font-medium truncate mt-0.5">
                        <MapPin size={12} className="shrink-0" />{" "}
                        <span className="truncate">{req.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-end shrink-0 gap-1.5 md:gap-2">
                      <span className="text-base md:text-lg font-bold text-emerald-600 leading-none">
                        ₹{req.points || req.quantity * 10}
                      </span>
                      <button
                        onClick={() => handleAccept(req._id)}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 rounded-lg transition-colors shadow-sm whitespace-nowrap"
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer  */}
          <Link
            to="/dashboard/nearby"
            className="w-full mt-3 bg-emerald-200 hover:bg-emerald-100 text-emerald-800 font-bold text-xs md:text-sm py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            View All Requests <ArrowRight size={14} />
          </Link>
        </div>

        <div className="w-full lg:w-1/2 bg-white rounded-3xl p-4 md:p-6 border border-gray-300 shadow-sm flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="font-bold text-base md:text-lg text-gray-900">
              Earnings Summary
            </h2>
            <Link
              to="/dashboard/earnings"
              className="text-[10px] sm:text-xs font-bold border border-green-400 text-emerald-700 bg-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-emerald-100 transition-colors whitespace-nowrap"
            >
              Go to Earnings
            </Link>
          </div>

          {/* Main Stats Card */}
          <div className="bg-emerald-700 rounded-2xl md:rounded-3xl p-5 md:p-7 text-white shadow-xl relative overflow-hidden mb-5 md:mb-6">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-emerald-600 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 opacity-60"></div>

            <div className="relative z-10">
              <p className="text-emerald-100 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1.5 md:mb-2">
                Total Earnings (This Week)
              </p>
              <div className="flex items-baseline gap-2 md:gap-3">
                <h2 className="text-3xl md:text-4xl font-bold">
                  ₹{weeklyEarnings}
                </h2>
                <span
                  className={`flex items-center text-[10px] md:text-xs font-bold px-2 md:px-2.5 py-0.5 md:py-1 rounded-full whitespace-nowrap ${earningTrend >= 0 ? "bg-emerald-800/50 text-emerald-100" : "bg-red-500/50 text-red-100"}`}
                >
                  {earningTrend >= 0 ? "+" : ""}
                  {earningTrend}% {earningTrend >= 0 ? "↑" : "↓"}
                </span>
              </div>

              {/* Target Progress Bar */}
              <div className="mt-5 md:mt-7">
                <div className="flex justify-between text-[10px] md:text-xs font-semibold mb-1.5 md:mb-2 text-emerald-100">
                  <span>Target Progress (₹{weeklyGoal})</span>
                  <span>{earningProgress}%</span>
                </div>
                <div className="w-full bg-emerald-900/40 h-2.5 md:h-3 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="bg-white h-full rounded-full shadow-md transition-all duration-1000 ease-out"
                    style={{ width: `${earningProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-auto">
            {/* Card 1: Jobs Done */}
            <div className="bg-gray-50 hover:bg-gray-100 transition-colors p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-300 flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="text-emerald-600 mb-2 md:mb-3 bg-emerald-100 rounded-full flex items-center justify-center p-2">
                <CheckCircle size={20} />
              </div>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5 md:mb-1 truncate w-full">
                Jobs Done
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                {totalCompleted.length}
              </p>
            </div>

            {/* Card 2: Average Per Job */}
            <div className="bg-gray-50 hover:bg-gray-100 transition-colors p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-300 flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="text-amber-600 mb-2 md:mb-3 bg-amber-100 rounded-full flex items-center justify-center p-2">
                <TrendingUp size={20} />
              </div>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5 md:mb-1 truncate w-full">
                Avg / Job
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                ₹{avgPerJob}
              </p>
            </div>

            {/* Card 3: In Progress */}
            <div className="bg-gray-50 hover:bg-gray-100 transition-colors p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-300 flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="text-blue-600 mb-2 md:mb-3 bg-blue-100 rounded-full flex items-center justify-center p-2">
                <Clock size={20} />
              </div>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5 md:mb-1 truncate w-full">
                In Progress
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                {acceptedCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM SECTION: HISTORY & NATURE MESSAGE */}
      <div className="flex flex-col xl:flex-row gap-6 w-full mt-6">
        <div className="w-full xl:w-[60%] bg-white rounded-3xl p-5 md:p-6 border border-gray-300 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg text-gray-900">Recent Activity</h2>
            <Link
              to="/dashboard/history"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              View All
            </Link>
          </div>

          {/* Table container with horizontal scroll for mobile */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="text-gray-600 text-[10px] uppercase font-bold border-b border-gray-100">
                  <th className="pb-3 pl-2">S.No</th>
                  <th className="pb-3">Waste Info</th>
                  <th className="pb-3">Quantity</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3 text-right pr-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm font-semibold text-gray-700">
                {historyData.slice(0, 4).map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b border-gray-50 last:border-b-0"
                  >
                    <td className="py-4 pl-2 text-gray-900">#{index + 1}</td>
                    <td className="py-4 flex items-center gap-3">
                      <img
                        src={
                          item.image
                            ? `${API_BASE_URL}${item.image}`
                            : "/H1.jpg"
                        }
                        alt={item.wasteType}
                        className="w-10 h-10 rounded-lg object-cover border border-gray-100 shadow-sm"
                      />
                      {item.wasteType.charAt(0).toUpperCase() +
                        item.wasteType.slice(1)}
                    </td>
                    <td className="py-4">{item.quantity} kg</td>
                    <td className="py-4 text-[11px] text-gray-600">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 text-right pr-2">
                      <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md">
                        {item.status === "Delivered"
                          ? "Completed"
                          : item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full xl:w-[40%] bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden min-h-[300px] group">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-white rounded-full animate-pulse blur-xl"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-emerald-300 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 w-full max-w-sm flex flex-col items-center animate-in fade-in duration-700">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl mb-6 shadow-inner border border-white/20 animate-[bounce_3s_infinite]">
              <Leaf className="text-white w-8 h-8 md:w-10 md:h-10" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
              Keep The Earth Breathing
            </h3>

            <p className="text-emerald-50 text-xs md:text-sm font-medium mb-6 leading-relaxed opacity-90">
              Every kilogram of waste you collect is a significant step towards
              a greener tomorrow. You're not just working; you're healing the
              planet.
            </p>

            {/* Impact Stat*/}
            <div className="flex gap-6 mb-8 bg-black/10 px-5 py-3 rounded-2xl border border-white/10 w-full justify-center">
              <div>
                <p className="text-[10px] text-emerald-100 uppercase tracking-widest font-bold">
                  Trees Saved
                </p>
                <p className="text-lg font-bold text-white">12+</p>
              </div>
              <div className="w-px bg-white/20 h-full"></div>
              <div>
                <p className="text-[10px] text-emerald-100 uppercase tracking-widest font-bold">
                  CO2 Reduced
                </p>
                <p className="text-lg font-bold text-white">45kg</p>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-white text-emerald-700 font-bold text-xs md:text-sm px-6 py-3.5 rounded-2xl hover:bg-emerald-50 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2">
              View Environmental Impact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
