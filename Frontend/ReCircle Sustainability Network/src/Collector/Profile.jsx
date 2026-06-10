import React, { useState, useRef, useEffect } from "react";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  LogOut,
  Edit2,
  CheckCircle2,
  Bell,
  Lock,
  ChevronDown,
  Wallet,
  Truck,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [collectorData, setCollectorData] = useState(null);
  const [loading, setLoading] = useState(true);

  // COLLECTOR DOMAIN DATA
  const totalEarnings = 14250; 
  const totalCollections = 148; 
  const totalWeightCollected = "1.2 Ton";

  const getCollectorBadge = (collections) => {
    if (collections >= 500)
      return {
        icon: "💎",
        name: "Apex Logistics Partner",
        bg: "bg-amber-100",
        text: "text-amber-700",
        border: "border-amber-200",
      };
    if (collections >= 200)
      return {
        icon: "👑",
        name: "Master Collector",
        bg: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-200",
      };
    if (collections >= 100)
      return {
        icon: "⚡",
        name: "Pro Fleet Partner",
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        border: "border-emerald-200",
      };
    if (collections >= 50)
      return {
        icon: "🟢",
        name: "Reliable Collector",
        bg: "bg-teal-100",
        text: "text-teal-700",
        border: "border-teal-200",
      };
    return {
      icon: "🚛",
      name: "Eco Carrier",
      bg: "bg-green-100",
      text: "text-green-700",
      border: "border-green-200",
    };
  };

  const collectorBadge = getCollectorBadge(totalCollections);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  //Profile fetching from DB
  useEffect(() => {
    const fetchCollectorData = async () => {
      try {
        const res = await fetch("http://localhost:2007/api/auth/me", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          setCollectorData(data.user);
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCollectorData();
  }, []);

  // Logout Function
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:2007/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
      });

      if (res.ok) {
        navigate("/");
      } else {
        console.error("Logout failed on server");
      }
    } catch (err) {
      console.error("Network error during logout:", err);
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 lg:h-[calc(100vh-110px)] font-sans pb-10 -mt-2 sm:-mt-0">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 h-full">
        {/* LEFT COLUMN: COLLECTOR PROFILE CARD */}
        <div className="w-full lg:w-[340px] xl:w-[360px] flex-shrink-0 flex flex-col bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden h-fit">
          {/* Cover Photo  */}
          <div className="h-28 sm:h-32 w-full relative bg-[#064e3b] shrink-0">
            <img
              src="https://images.unsplash.com/photo-1766849306046-5e750cc0d51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVuaWNpcGFsJTIwc3VzdGFpbmFibGUlMjB2ZWhpY2xlfGVufDB8fDB8fHww"
              alt="Collector Fleet Cover"
              className="w-full h-full object-cover opacity-75 mix-blend-overlay"
            />
          </div>

          {/* Profile Header Info */}
          <div className="px-5 pb-5 relative flex flex-col items-center sm:items-start text-center sm:text-left shrink-0 border-b border-gray-100">
            <div className="relative -mt-12 sm:-mt-14 mb-3">
              <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-full border-[3px] border-white shadow-md overflow-hidden bg-gradient-to-br from-[#064e3b] to-emerald-600 flex items-center justify-center">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-3xl font-bold tracking-wider drop-shadow-sm">
                    RV
                  </span>
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-1 right-0 bg-white text-gray-700 p-1.5 rounded-full shadow-md border border-gray-200 hover:text-emerald-600 active:scale-95 transition-all cursor-pointer"
              >
                <Camera size={14} />
              </button>
            </div>

            {/* Name, Role & Dynamic Badge */}
            <h1 className="text-xl sm:text-[22px] font-bold text-gray-900 tracking-tight flex items-center gap-1.5 justify-center sm:justify-start w-full">
              {loading
                ? "Loading..."
                : `${collectorData?.firstName} ${collectorData?.lastName}`}{" "}
              <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
            </h1>

            <p className="text-gray-500 font-medium text-[13.5px] mt-0.5 tracking-wide">
              Official Collector Partner
            </p>

            <div
              className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${collectorBadge.bg} ${collectorBadge.text} ${collectorBadge.border} font-semibold text-[11px] uppercase tracking-wider shadow-sm`}
            >
              <span className="text-sm">{collectorBadge.icon}</span>{" "}
              {collectorBadge.name}
            </div>
          </div>

          {/* Impact Stats Grid  */}
          <div className="p-4 sm:p-5 grid grid-cols-3 gap-2 border-b border-gray-100 bg-gray-50/50 shrink-0">
            {/* Earnings */}
            <div className="flex flex-col items-center justify-center text-center p-1.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-2.5 bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                <Wallet size={20} />
              </div>
              <div className="text-base sm:text-[17px] font-bold text-gray-900 leading-none">
                ₹{collectorData?.earnings || 0}
              </div>
              <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1.5">
                Earnings
              </div>
            </div>

            {/* Total Pickups */}
            <div className="flex flex-col items-center justify-center text-center p-1.5 border-l border-gray-200/80">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-2.5 bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shadow-sm">
                <Truck size={20} />
              </div>
              <div className="text-lg sm:text-[20px] font-bold text-gray-900 leading-none">
                {collectorData?.totalCollections || 0}
              </div>
              <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1.5">
                Pickups
              </div>
            </div>

            {/* Waste Volume Collected */}
            <div className="flex flex-col items-center justify-center text-center p-1.5 border-l border-gray-200/80">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2.5 bg-sky-50 rounded-full border border-sky-100 text-sky-600 shadow-sm">
                <BarChart3 size={20} />
              </div>
              <div className="text-base sm:text-[17px] font-bold text-gray-900 leading-none">
                {collectorData?.totalWeightCollected || "0 Ton"}
              </div>
              <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1.5">
                Processed
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 sm:p-5 flex items-center gap-3 w-full shrink-0 bg-white">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex-1 px-4 py-2.5 bg-[#16a34a] hover:bg-[#15803d] rounded-xl text-[13px] font-semibold text-white transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-sm"
            >
              <Edit2 size={15} />
              {isEditing ? "Save Profile" : "Edit Profile"}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 bg-red-50 hover:bg-red-100 border border-red-100 rounded-xl text-[13px] font-semibold text-red-600 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <LogOut size={15} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: ACCOUNT & CONFIGURATION SETTINGS */}
        <div className="flex-1 flex flex-col bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden h-fit lg:h-full">
          <div className="flex justify-between items-center px-5 sm:px-8 py-5 sm:py-6 border-b border-gray-100 bg-gray-50/30 shrink-0">
            <div>
              <h2 className="text-[18px] sm:text-[20px] font-bold text-gray-900 tracking-tight">
                Account Settings
              </h2>
              <p className="text-gray-500 text-[12px] sm:text-[13px] font-medium mt-0.5">
                Manage your service info, location, and alerts.
              </p>
            </div>
            {isEditing && (
              <span className="hidden sm:inline-flex bg-amber-50 border border-amber-200 text-amber-600 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>{" "}
                Editing Mode
              </span>
            )}
          </div>

          {/* Form Content Area */}
          <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-3 lg:space-y-10 scrollbar-hide bg-gray-50/50 lg:bg-white">
            {/* SECTION 1: Personal & Business Details */}
            <section className="animate-fadeIn bg-white lg:bg-transparent border border-gray-200 lg:border-none rounded-2xl lg:rounded-none overflow-hidden lg:overflow-visible shadow-sm lg:shadow-none">
              <div
                onClick={() =>
                  setActiveTab(activeTab === "personal" ? "" : "personal")
                }
                className="flex items-center justify-between p-4 lg:p-0 cursor-pointer lg:cursor-default"
              >
                <h3 className="text-[14px] lg:text-[15px] font-bold text-gray-900 flex items-center gap-2">
                  <Mail size={18} className="text-emerald-600" /> Personal &
                  Service Details
                </h3>
                <ChevronDown
                  size={18}
                  className={`lg:hidden text-gray-400 transition-transform ${activeTab === "personal" ? "rotate-180" : ""}`}
                />
              </div>

              <div
                className={`border-t border-gray-100 lg:border-none ${activeTab === "personal" ? "block" : "hidden lg:block"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:bg-gray-50/50 p-4 lg:p-5 lg:rounded-2xl lg:border border-gray-100/80 lg:mt-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={
                        collectorData
                          ? `${collectorData.firstName} ${collectorData.lastName}`
                          : "Loading..."
                      }
                      disabled
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 font-semibold text-[13.5px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:opacity-60 disabled:bg-gray-50 transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="email"
                        value={collectorData?.email || ""}
                        disabled
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 font-semibold text-[13.5px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:opacity-60 disabled:bg-gray-50 transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        value={collectorData?.phone || ""}
                        disabled
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 font-semibold text-[13.5px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:opacity-60 disabled:bg-gray-50 transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">
                      Assigned Zone / City
                    </label>
                    <div className="relative">
                      <MapPin
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        value={
                          collectorData
                            ? `${collectorData.address},  Pincode: ${collectorData.pincode}`
                            : "Loading..."
                        }
                        disabled
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 font-semibold text-[13.5px] cursor-not-allowed outline-none shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: Notification Preferences for Logistics */}
            <section className="animate-fadeIn bg-white lg:bg-transparent border border-gray-200 lg:border-none rounded-2xl lg:rounded-none overflow-hidden lg:overflow-visible shadow-sm lg:shadow-none">
              <div
                onClick={() =>
                  setActiveTab(activeTab === "preferences" ? "" : "preferences")
                }
                className="flex items-center justify-between p-4 lg:p-0 cursor-pointer lg:cursor-default"
              >
                <h3 className="text-[14px] lg:text-[15px] font-bold text-gray-900 flex items-center gap-2">
                  <Bell size={18} className="text-emerald-600" /> Operational
                  Alerts & Notifications
                </h3>
                <ChevronDown
                  size={18}
                  className={`lg:hidden text-gray-400 transition-transform ${activeTab === "preferences" ? "rotate-180" : ""}`}
                />
              </div>

              <div
                className={`border-t border-gray-100 lg:border-none ${activeTab === "preferences" ? "block" : "hidden lg:block"}`}
              >
                <div className="lg:bg-gray-50/50 p-4 lg:p-5 lg:rounded-2xl lg:border border-gray-100/80 space-y-3 lg:space-y-4 lg:mt-5">
                  {[
                    {
                      title: "New Pickup Requests",
                      desc: "Get instant alerts for pending waste requests in your area.",
                      defaultChecked: true,
                    },
                    {
                      title: "Payout & Earnings Alerts",
                      desc: "Get notified as soon as a collection weight is approved and wallet updates.",
                      defaultChecked: true,
                    },
                    {
                      title: "Schedule Reminders",
                      desc: "Alerts for pre-scheduled corporate or residential routine pickups.",
                      defaultChecked: false,
                    },
                  ].map((pref, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 lg:bg-white rounded-xl border border-gray-100 lg:shadow-sm"
                    >
                      <div>
                        <p className="font-semibold text-[12.5px] sm:text-[13px] text-gray-900">
                          {pref.title}
                        </p>
                        <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                          {pref.desc}
                        </p>
                      </div>
                      <label
                        className={`relative inline-flex items-center ${isEditing ? "cursor-pointer" : "cursor-not-allowed opacity-60"}`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={pref.defaultChecked}
                          disabled={!isEditing}
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 3: Security */}
            <section className="animate-fadeIn bg-white lg:bg-transparent border border-gray-200 lg:border-none rounded-2xl lg:rounded-none overflow-hidden lg:overflow-visible shadow-sm lg:shadow-none pb-0 lg:pb-6">
              <div
                onClick={() =>
                  setActiveTab(activeTab === "security" ? "" : "security")
                }
                className="flex items-center justify-between p-4 lg:p-0 cursor-pointer lg:cursor-default"
              >
                <h3 className="text-[14px] lg:text-[15px] font-bold text-gray-900 flex items-center gap-2">
                  <Lock size={18} className="text-emerald-600" /> Account
                  Security
                </h3>
                <ChevronDown
                  size={18}
                  className={`lg:hidden text-gray-400 transition-transform ${activeTab === "security" ? "rotate-180" : ""}`}
                />
              </div>

              <div
                className={`border-t border-gray-100 lg:border-none ${activeTab === "security" ? "block" : "hidden lg:block"}`}
              >
                <div className="lg:bg-gray-50/50 p-4 lg:p-5 lg:rounded-2xl lg:border border-gray-100/80 flex flex-col sm:flex-row items-center justify-between gap-4 lg:mt-5">
                  <div className="w-full sm:w-auto text-left">
                    <p className="font-semibold text-[13px] text-gray-900">
                      Password
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                      Last changed 3 months ago
                    </p>
                  </div>
                  <button
                    disabled={!isEditing}
                    className="w-full sm:w-auto px-4 py-2.5 bg-gray-50 lg:bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-100 rounded-xl text-[12px] font-bold text-gray-700 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
