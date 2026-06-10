import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bell,
  MapPin,
  CalendarDays,
  Wallet,
  BarChart3,
  History,
  Users,
  Leaf,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  //Fetch data from the DB
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("http://localhost:2007/api/auth/me", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUserData();
  }, []);

  // To Generate initlals
  const getInitials = (firstName, lastName) => {
    return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
  };

  const tabs = [
    { path: "/dashboard", label: "My Circle", icon: <Users size={18} /> },
    {
      path: "/dashboard/nearby",
      label: "Requests",
      icon: <MapPin size={18} />,
    },
    {
      path: "/dashboard/earnings",
      label: "Earnings",
      icon: <Wallet size={18} />,
    },
    {
      path: "/dashboard/analytics",
      label: "Analytics",
      icon: <BarChart3 size={18} />,
    },
    {
      path: "/dashboard/history",
      label: "History",
      icon: <History size={18} />,
    },
  ];

  return (
    <>
      {/* 1.  HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-green-400 font-sans antialiased">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 lg:px-8 h-[76px] sm:h-[88px] flex items-center justify-between">
          {/* LEFT SIDE (LOGO) */}
          <div className="flex-1 flex items-center justify-start">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 sm:gap-3.5 cursor-pointer group"
            >
              <div
                className="
                  w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] rounded-xl overflow-hidden bg-gray-50
                  shadow-sm ring-1 ring-gray-200 shrink-0
                  group-hover:scale-105 group-hover:shadow-md transition-all duration-300
                "
              >
                <img
                  src="/main logo.jpg"
                  alt="ReCircle Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="text-[20px] sm:text-[26px] font-[700] tracking-tight text-gray-900 leading-none">
                  Re<span className="text-[#16a34a]">Circle</span>
                </h1>
                <p className="text-[7px] sm:text-[9.5px] text-gray-500 font-bold uppercase tracking-[0.15em] mt-1 sm:mt-1.5 whitespace-nowrap">
                  Sustainability Network
                </p>
              </div>
            </Link>
          </div>

          {/* CENTER NAVIGATION (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center shrink-0 items-center gap-1.5 xl:gap-3">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                end={tab.path === "/dashboard"}
                className={({ isActive }) => `
                  flex items-center gap-4 px-3 py-1.5 rounded-xl text-[13px] font-bold transition-all duration-300 ease-out border whitespace-nowrap
                  ${
                    isActive
                      ? "bg-green-50 border-green-300 text-[#166534] shadow-sm"
                      : "bg-transparent border-transparent text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`${isActive ? "text-[#16a34a]" : "text-gray-700 group-hover:text-gray-700"} transition-colors`}
                    >
                      {tab.icon}
                    </span>
                    {tab.label}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-7">
            <div className="hidden xl:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] shadow-sm cursor-default hover:shadow-md transition-all">
              <span className="text-[#166534] font-bold text-sm">₹</span>
              <span className="font-[650] text-[#166534] text-[13.5px] tracking-tight">
                {user?.walletBalance ? user.walletBalance.toFixed(2) : "0.00"}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-6">
              {/* NOTIFICATION */}
              <Link
                to="/dashboard/notifications"
                className="flex flex-col items-center justify-center gap-1 mt-1 cursor-pointer group"
              >
                <div
                  className="
                    relative w-[40px] h-[40px] rounded-xl
                    bg-gray-50 border border-gray-200
                    flex items-center justify-center
                    group-hover:bg-gray-100 group-hover:border-gray-400
                    transition-all duration-200 active:scale-95 shadow-sm
                  "
                >
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white" />
                  <Bell
                    size={18}
                    className="text-gray-600 group-hover:text-gray-900 transition-colors"
                  />
                </div>
                <span className="text-[12px] font-bold text-gray-700 group-hover:text-gray-800 transition-colors leading-none hidden sm:block">
                  Alerts
                </span>
              </Link>

              <div className="hidden sm:block w-px h-10 bg-gray-200 rounded-full"></div>

              {/* PROFILE */}
              <Link
                to="/dashboard/profile"
                className="flex flex-col items-center justify-center gap-1 mt-1 cursor-pointer group"
              >
                <div
                  className="
                    w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-xl overflow-hidden
                    border-2 border-gray-200 shadow-sm
                    bg-gradient-to-br from-green-500 to-[#166534]
                    flex items-center justify-center
                    group-hover:border-green-300 group-hover:shadow-md group-hover:scale-105
                    transition-all duration-300
                  "
                >
                  <span className="text-white font-extrabold text-[13px] sm:text-[15px] tracking-wide">
                    {getInitials(user?.firstName, user?.lastName)}
                  </span>
                </div>
                <span className="text-[12px] font-bold text-gray-700 group-hover:text-[#16a34a] transition-colors leading-none hidden sm:block">
                  {user?.firstName} {user?.lastName}
                </span>
              </Link>

              {/*1. MOBILE HAMBURGER BUTTON */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden ml-1 p-2 bg-[#f0fdf4] border border-[#bbf7d0] shadow-sm rounded-xl text-[#16a34a] focus:outline-none hover:bg-green-100 active:scale-95 transition-all"
              >
                <Menu size={17} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MOBILE OFF-CANVAS MENU */}
      <div
        className={`fixed top-0 left-0 w-full bg-gradient-to-b from-green-50 via-white to-white  transition-transform duration-500 ease-in-out z-[70] rounded-b-[2rem] border-b-4 border-[#4ade80] font-sans ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-1 bg-white rounded-full shadow-sm border border-gray-200 text-[#15803d] hover:bg-red-50 hover:text-red-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col pt-10 pb-8 px-6 -mt-5">
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/main logo.jpg"
              alt="ReCircle Logo"
              className="w-12 h-12 object-cover bg-white rounded-2xl shadow-sm border border-gray-200"
            />
            <div>
              <h2 className="text-2xl font-[800] text-gray-900 leading-none tracking-tight">
                Re<span className="text-[#16a34a]">Circle</span>
              </h2>
              <p className="text-[10px] font-bold text-[#15803d] tracking-widest mt-1 uppercase">
                Sustainability Network
              </p>
            </div>
          </div>

          <Link
            to="/dashboard/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 transition-all active:scale-[0.98] mx-2"
          >
            <div className="w-[48px] h-[48px] rounded-xl bg-gradient-to-br from-green-600 to-[#166534] flex items-center justify-center shadow-lg shadow-emerald-200/50">
              <span className="text-white font-extrabold text-[16px] tracking-wide">
                {getInitials(user?.firstName, user?.lastName)}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-[11px] font-bold text-emerald-700 mt-1 flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-lg w-fit border border-emerald-100/50">
                <Wallet size={12} />
                <span>
                  ₹
                  {user?.walletBalance ? user.walletBalance.toFixed(2) : "0.00"}{" "}
                  Earned
                </span>
              </p>
            </div>
          </Link>

          <ul className="flex flex-col gap-2 w-full">
            {tabs.map((tab) => (
              <li key={tab.path} className="w-full">
                <NavLink
                  to={tab.path}
                  end={tab.path === "/dashboard"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    w-full flex items-center gap-3 p-4 rounded-2xl text-[14px] font-bold transition-all duration-300
                    ${
                      isActive
                        ? "bg-green-100/80 text-[#166534] border-l-[5px] border-[#166534] shadow-sm"
                        : "bg-transparent text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent hover:border-gray-300"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={
                          isActive ? "text-[#16a34a]" : "text-gray-500"
                        }
                      >
                        {React.cloneElement(tab.icon, { size: 20 })}
                      </span>
                      {tab.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden transition-opacity"
        ></div>
      )}
    </>
  );
};

export default Navbar;
