import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Leaf, ArrowUp, ArrowDown, Minus, User, CalendarDays, Star, Sparkles, RefreshCw } from 'lucide-react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Fallback data in case backend fails or is empty initially
  const defaultLeaderboard = [
    { rank: 1, name: "Sarah Jenkins", points: 1540, weight: "45 kg", trend: "up" },
    { rank: 2, name: "Rahul Sharma", points: 1220, weight: "38 kg", trend: "up" },
    { rank: 3, name: "Priya Singh", points: 1080, weight: "31 kg", trend: "down" },
    { rank: 4, name: "Amit Kumar", points: 940, weight: "27 kg", trend: "same" },
    { rank: 5, name: "John Doe", points: 850, weight: "24 kg", trend: "up", isCurrentUser: true },
    { rank: 6, name: "Neha Gupta", points: 720, weight: "19 kg", trend: "down" },
  ];

 useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        // 1. Fetch Current Logged-in User
        const userRes = await fetch('http://localhost:2007/api/auth/me', { credentials: 'include' });
        let loggedInUser = null;
        if (userRes.ok) {
          const userData = await userRes.json();
          loggedInUser = userData.user;
          setCurrentUser(loggedInUser);
        }

        // 2. Fetch Leaderboard Data from Backend
        const boardRes = await fetch('http://localhost:2007/api/users/leaderboard', { credentials: 'include' });
        
        if (boardRes.ok) {
          const boardData = await boardRes.json();
          
          if (boardData.length > 0) {
            const formattedData = boardData.map((u, index) => {
            const calculatedWeight = u.points ? (u.points / 10).toFixed(1) : 0;
              
              return {
                id: u._id,
                rank: index + 1,
                name: `${u.firstName || ''} ${u.lastName || ''}`.trim(),
                points: u.points || 0,
                weight: `${calculatedWeight} kg`, 
                trend: "up", 
                isCurrentUser: loggedInUser && (u._id === loggedInUser._id || u._id === loggedInUser.id)
              };
            });
            setLeaderboardData(formattedData);
          } else {
            console.log("No data found in DB, using fallback");
            setLeaderboardData(defaultLeaderboard); 
          }
        } else {
          console.error("API Failed with status:", boardRes.status);
          setLeaderboardData(defaultLeaderboard); 
        }
      } catch (err) {
        console.error("Leaderboard Fetch Error:", err);
        setLeaderboardData(defaultLeaderboard);
      }
    };

    fetchLeaderboardData();
  }, []);

  // This prevents crashes if the database only has 1 or 2 users.
  const safeLeaderboard = [...(leaderboardData.length > 0 ? leaderboardData : defaultLeaderboard)];
  while (safeLeaderboard.length < 3) {
    safeLeaderboard.push({
      rank: safeLeaderboard.length + 1,
      name: "Awaiting User",
      points: 0,
      weight: "0 kg",
      trend: "same",
      isCurrentUser: false
    });
  }

  // Identify Current User's Rank
  const myData = safeLeaderboard.find(u => u.isCurrentUser);
  const myRank = myData ? myData.rank : '-';
  const totalUsers = Math.max(safeLeaderboard.length, 420); 

  // Helper function for Trend Icons
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <ArrowUp size={14} className="text-emerald-500" />;
    if (trend === 'down') return <ArrowDown size={14} className="text-red-500" />;
    return <Minus size={14} className="text-gray-400" />;
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 font-sans pb-10 -mt-2 sm:-mt-0">

      {/* Header */}
    <div className="-mt-2 sm:-mt-4 mb-6 flex flex-row items-center justify-between gap-x-3 border-b border-gray-300 pb-5 overflow-hidden whitespace-nowrap">
      
      {/* Left Section */}
      <div className="flex flex-col items-start justify-center flex-1 truncate">
        
        <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider border border-emerald-100 mb-1.5 shrink-0">
          <CalendarDays size={10} />
          <span>Weekly Report</span>
        </div>

        <h1 className="text-[15px] sm:text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2 truncate w-full">
          <Trophy className="text-amber-500 shrink-0" size={16} />
          <span className="truncate">Eco Champions</span>
        </h1>
        <p className="hidden sm:block text-gray-500 text-[12px] font-normal mt-0.5 truncate">
          Top contributors this week. Climb ranks to earn rewards!
        </p>
      </div>
      
      {/* Right Section */}
      <div className="bg-white border border-gray-100 px-3 py-2 sm:px-4 rounded-xl flex items-center gap-2.5 shadow-sm shrink-0">
        <div className="bg-emerald-50 p-1.5 rounded-lg text-emerald-600">
          <User size={16} />
        </div>
        <div>
          <p className="text-[9px] font-semibold text-gray-500 uppercase tracking-widest leading-none">Your Rank</p>
          <p className="text-sm font-bold text-gray-900 leading-none mt-1">
            #{myRank} <span className="text-gray-400 text-xs font-normal">/ {totalUsers}</span>
          </p>
        </div>
      </div>
    </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 justify-center items-center w-full max-w-[900px] mx-auto mb-10  pt-2 sm:pt-9 ">
        
        <div className="order-1 bg-gradient-to-b from-slate-700 to-slate-900 border border-slate-600 rounded-[12px] sm:rounded-[20px] p-2.5 sm:p-5 flex flex-col items-center text-center shadow-lg relative overflow-hidden group">
          
          <div className="absolute top-1.5 sm:top-3 left-1.5 sm:left-3 flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full border border-white/20 shadow-[0_0_10px_rgba(148,163,184,0.3)] animate-[pulse_3s_ease-in-out_infinite] z-20">
            <span className="text-slate-900 font-black text-[8px] sm:text-xs">#2</span>
          </div>

          {/* Profile Picture */}
          <div className="relative mb-1.5 sm:mb-2 mt-1 sm:mt-1 z-10">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-[1.5px] sm:border-[2px] border-slate-400 shadow-md bg-slate-800 flex items-center justify-center text-slate-300 font-bold text-lg">
              {safeLeaderboard[1].name.charAt(0)}
            </div>
          </div>

          <h3 className="text-[10px] sm:text-sm md:text-base font-[600] text-white truncate w-full">{safeLeaderboard[1].name}</h3>
          <p className="text-[8px] sm:text-[11px] font-medium text-slate-300 mb-3 sm:mb-5">
            {safeLeaderboard[1].weight} <span className="hidden sm:inline">Recycled</span>
          </p>
          
          {/* Points Pill  */}
          <div className="mt-auto bg-slate-950/50 text-slate-50 px-1 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-bold text-[9px] sm:text-xs border border-slate-300/50 flex items-center gap-1 sm:gap-1.5 justify-center backdrop-blur-sm shadow-inner transition-colors group-hover:bg-slate-800/60 w-full">
            <Leaf className="text-emerald-300 w-3 h-3 sm:w-3.5 sm:h-3.5" /> 
            <span>{safeLeaderboard[1].points} <span className="hidden sm:inline">Pts</span></span>
          </div>
        </div>

        {/* RANK 1 */}
        <div className="order-2 bg-gradient-to-b from-emerald-700 to-emerald-950 border border-emerald-600 rounded-[14px] sm:rounded-[24px] p-3 sm:p-6 flex flex-col items-center text-center shadow-2xl relative overflow-hidden transform -translate-y-4 sm:-translate-y-8 md:-translate-y-10 group z-10">
          
          <div className="absolute -top-10 -left-10 w-20 sm:w-28 h-20 sm:h-28 bg-emerald-500 rounded-full blur-[40px] sm:blur-[50px] opacity-20 pointer-events-none"></div>

          <div className="absolute top-2 sm:top-3.5 left-2 sm:left-3.5 flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full border border-white/30 shadow-[0_0_20px_rgba(251,191,36,0.4)] animate-[pulse_2s_ease-in-out_infinite] z-20">
            <span className="text-amber-950 font-black text-[9px] sm:text-sm">#1</span>
          </div>

          {/* Profile Picture */}
          <div className="relative mb-2.5 sm:mb-3 mt-1 z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[2px] sm:border-[3px] border-amber-400 shadow-lg bg-emerald-800 flex items-center justify-center text-amber-300 font-bold text-2xl">
              {safeLeaderboard[0].name.charAt(0)}
            </div>
            <div className="absolute -bottom-2 sm:-bottom-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 text-[6px] sm:text-[9px] font-[650] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-widest shadow-md border border-amber-200 whitespace-nowrap">
              <span className="hidden sm:inline">Champion</span>
              <span className="sm:hidden">Champ</span>
            </div>
          </div>

          <h3 className="text-[11px] sm:text-base md:text-lg font-[600] text-white truncate w-full">{safeLeaderboard[0].name}</h3>
          <p className="text-[8.5px] sm:text-xs font-[600] text-emerald-200/80 mb-3 sm:mb-4">
            {safeLeaderboard[0].weight} <span className="hidden sm:inline">Recycled</span>
          </p>
          
          {/* Points Pill */}
          <div className="mt-auto bg-emerald-950/40 text-white px-1 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-sm border border-emerald-500/40 flex items-center gap-1 sm:gap-1.5 justify-center backdrop-blur-sm shadow-inner transition-colors group-hover:bg-emerald-800/40 w-full">
            <Leaf className="text-emerald-400 w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
            <span>{safeLeaderboard[0].points} <span className="hidden sm:inline">Pts</span></span>
          </div>
        </div>

        {/* RANK 3*/}
        <div className="order-3 bg-gradient-to-b from-orange-800 to-orange-950 border border-orange-700/80 rounded-[12px] sm:rounded-[20px] p-2.5 sm:p-5 flex flex-col items-center text-center shadow-lg relative overflow-hidden group">
          
          <div className="absolute top-1.5 sm:top-3 left-1.5 sm:left-3 flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-300 to-rose-400 rounded-full border border-white/20 shadow-[0_0_10px_rgba(249,115,22,0.3)] animate-[pulse_3s_ease-in-out_infinite] z-20">
            <span className="text-white font-black text-[8px] sm:text-xs">#3</span>
          </div>

          {/* Profile Picture */}
          <div className="relative mb-1.5 sm:mb-2 mt-1 z-10">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-[1.5px] sm:border-[2px] border-orange-400 shadow-md bg-orange-900 flex items-center justify-center text-orange-200 font-bold text-lg">
              {safeLeaderboard[2].name.charAt(0)}
            </div>
          </div>

          <h3 className="text-[10px] sm:text-sm md:text-base font-[600] text-white truncate w-full">{safeLeaderboard[2].name}</h3>
          <p className="text-[8px] sm:text-[11px] font-medium text-orange-200/80 mb-3 sm:mb-5">
            {safeLeaderboard[2].weight} <span className="hidden sm:inline">Recycled</span>
          </p>
          
          {/* Points Pill */}
          <div className="mt-auto bg-orange-950/40 text-orange-50 px-1 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-bold text-[9px] sm:text-xs border border-orange-700/50 flex items-center gap-1 sm:gap-1.5 justify-center backdrop-blur-sm shadow-inner transition-colors group-hover:bg-orange-900/50 w-full">
            <Leaf className="text-emerald-400 w-3 h-3 sm:w-3.5 sm:h-3.5" /> 
            <span>{safeLeaderboard[2].points} <span className="hidden sm:inline">Pts</span></span>
          </div>
        </div>

      </div>

      {/* VERTICAL LADDER GRAPH  */}
      <div className="mt-6 sm:mt-12 relative px-1 sm:px-4 w-full">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 tracking-tight">
          <ArrowUp size={20} className="text-emerald-500" />
          Contenders Ladder
        </h3>

        <div className="relative pb-6">
          <div className="absolute left-[15px] sm:left-[23px] top-4 bottom-4 w-1 bg-gray-100 rounded-full shadow-inner"></div>
          <div className="absolute left-[15px] sm:left-[23px] top-4 h-[80%] w-1 bg-gradient-to-b from-emerald-400 via-amber-300 to-rose-300 rounded-full opacity-80"></div>

          <div className="flex flex-col gap-3 sm:gap-5">
            {safeLeaderboard.slice(3).map((user) => {
              const maxPoints = safeLeaderboard[0].points || 1; 
              const progressPercent = Math.max((user.points / maxPoints) * 100, 8); 
              const pointsAway = maxPoints - user.points;

              // Dynamic Colors based on Progress/Ranking
              let barGradient = "from-rose-400 to-pink-500 shadow-rose-500/30";
              let ringColor = "text-rose-500";
              let ringBorder = "border-rose-300/60 group-hover:border-rose-400";
              let textAccent = "text-rose-600";
              let bgAccent = "bg-rose-50 border-rose-200";
              let pointsBorder = "border-rose-300 text-rose-700 bg-rose-50/50";

              if (progressPercent >= 60) {
                barGradient = "from-emerald-400 to-teal-500 shadow-teal-500/30";
                ringColor = "text-teal-500";
                ringBorder = "border-teal-300/60 group-hover:border-teal-400";
                textAccent = "text-teal-600";
                bgAccent = "bg-teal-50 border-teal-200";
                pointsBorder = "border-teal-300 text-teal-700 bg-teal-50/50";
              } else if (progressPercent >= 35) {
                barGradient = "from-amber-400 to-orange-400 shadow-orange-500/30";
                ringColor = "text-orange-500";
                ringBorder = "border-orange-300/60 group-hover:border-orange-400";
                textAccent = "text-amber-600";
                bgAccent = "bg-amber-50 border-amber-200";
                pointsBorder = "border-amber-300 text-amber-700 bg-amber-50/50";
              }

              return (
                <div key={user.rank} className={`relative flex items-center gap-3 sm:gap-6 group ${user.isCurrentUser ? 'z-20' : 'z-10'}`}>
                  
                  {/* Ladder Node / Rank Circle */}
                  <div className={`relative z-10 w-8 h-8 sm:w-12 sm:h-12 shrink-0 rounded-full border-[2px] sm:border-[3px] shadow-sm flex items-center justify-center font-bold text-xs sm:text-sm transition-transform duration-300 group-hover:scale-110
                    ${user.isCurrentUser ? 'bg-emerald-600 text-white border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-white text-gray-700 border-gray-200'}
                  `}>
                    #{user.rank}
                  </div>

                  {/* Main User Card */}
                  <div className={`flex-1 bg-white border-[1.5px] rounded-[16px] sm:rounded-[20px] p-2 sm:p-4 transition-all duration-300 relative overflow-hidden flex items-center
                    ${user.isCurrentUser ? 'border-emerald-400 shadow-[0_4px_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20' : 'border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'}
                  `}>
                    
                    {user.isCurrentUser && <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/40 to-transparent pointer-events-none"></div>}

                    <div className="flex flex-row w-full items-center justify-between gap-1 sm:gap-4 relative z-10">

                      {/* User Info  */}
                      <div className="flex items-center gap-2 sm:gap-4 w-[45%] sm:w-[30%] shrink-0 overflow-hidden">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold shrink-0 shadow-inner border
                          ${user.isCurrentUser ? 'bg-emerald-600 text-white border-emerald-700' : bgAccent}
                        `}>
                          {user.name.charAt(0)}
                        </div>
                        <div className="flex flex-col truncate w-full">
                          <h4 className={`font-semibold text-xs sm:text-sm flex items-center gap-1.5 tracking-tight ${user.isCurrentUser ? 'text-emerald-900' : 'text-gray-900'}`}>
                            <span className="truncate">{user.name}</span>
                            {user.isCurrentUser && <span className="text-[8px] sm:text-[9px] bg-emerald-500 text-white px-1.5 py-0.5 rounded uppercase tracking-wider font-bold shadow-sm shrink-0">You</span>}
                          </h4>
                          <p className="text-[9px] sm:text-[11px] font-medium text-gray-500 mt-0.5 truncate">{user.weight} Recycled</p>
                        </div>
                      </div>

              
                      {/*  MOBILE ONLY: Circular Progress Ring  */}
              
                      <div className="flex sm:hidden w-[20%] flex-col items-center justify-center shrink-0">
                        <div className="relative flex items-center justify-center w-9 h-9">
                          <div className={`absolute inset-0 rounded-full border-[1.5px] border-dashed ${ringBorder} animate-[spin_6s_linear_infinite] transition-colors`}></div>
                          <svg className="w-[85%] h-[85%] transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="currentColor" strokeWidth="3" className="text-gray-100" />
                            <circle 
                              cx="18" cy="18" r="15.915" fill="transparent" stroke="currentColor" strokeWidth="3"
                              strokeDasharray="100" strokeDashoffset={100 - progressPercent} strokeLinecap="round"
                              className={`${ringColor} transition-all duration-1000 ease-out`} 
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-[8px] font-bold ${textAccent} tracking-tighter`}>
                              {Math.round(progressPercent)}%
                            </span>
                          </div>
                        </div>
                      </div>

              
                      {/*  DESKTOP ONLY: Linear Progress Bar */}
              
                      <div className="hidden sm:flex flex-1 flex-col justify-center gap-1.5 px-3">
                        <div className="flex justify-between items-end text-[10px] font-semibold uppercase tracking-wider">
                          <span className="text-gray-400">Target: Rank #1</span>
                          <span className={textAccent}>{pointsAway} pts away</span>
                        </div>
                        <div className="w-full h-4 lg:h-5 bg-gray-50 rounded-full overflow-hidden shadow-inner border border-gray-100 relative group-hover:bg-gray-100 transition-colors">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${barGradient} flex items-center justify-end px-2.5 relative overflow-hidden`}
                            style={{ width: `${progressPercent}%` }}
                          >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
                            <span className="text-[9px] sm:text-[10px] font-semibold text-white drop-shadow-sm z-10 whitespace-nowrap">
                              {Math.round(progressPercent)}%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 3. Right: Points */}
                      <div className="w-[30%] sm:w-[20%] flex justify-end shrink-0 relative z-10">
                        <div className={`flex items-center justify-center gap-1 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border-[1.5px] font-bold text-[9px] sm:text-[13px] shadow-sm transition-all
                          ${user.isCurrentUser ? 'bg-emerald-600 text-white border-emerald-400 shadow-emerald-500/30' : pointsBorder + ' hover:shadow-md'}
                        `}>
                          <Leaf size={14} className={user.isCurrentUser ? "text-emerald-200 shrink-0" : "shrink-0"} /> 
                          <span className="truncate">{user.points.toLocaleString()}</span> 
                          <span className="hidden lg:inline text-[9px] font-semibold uppercase tracking-wider ml-0.5 opacity-80">Pts</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 mb-6 max-w-[900px] mx-auto px-2 sm:px-4 w-full">
        <div className="relative overflow-hidden rounded-[16px] sm:rounded-[24px] bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 border-[1.5px] border-emerald-200/60 p-4 sm:p-6 shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-emerald-300 group">
          
          <div className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-emerald-300/30 rounded-full blur-[40px] animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-teal-300/20 rounded-full blur-[40px] animate-[pulse_5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
            
            {/* Animated Icon Wrapper */}
            <div className="shrink-0 relative flex items-center justify-center">
              <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[1.5px] border-dashed border-emerald-400 animate-[spin_8s_linear_infinite] opacity-70"></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-[bounce_3s_infinite]">
                <RefreshCw size={18} className="text-white animate-[spin_4s_linear_infinite] sm:w-[20px] sm:h-[20px]" />
              </div>
            </div>

            <div className="text-center sm:text-left flex-1">
              <h4 className="text-sm sm:text-base font-bold text-emerald-900 mb-1.5 flex items-center justify-center sm:justify-start gap-1.5">
                <Sparkles size={16} className="text-emerald-500 animate-pulse" />
                How the Leaderboard Works?
              </h4>
              <p className="text-[11px] sm:text-[13px] text-emerald-800/80 font-medium leading-relaxed sm:leading-relaxed">
                Earn <span className="font-bold text-emerald-600 bg-emerald-100/50 px-1.5 py-0.5 rounded">Eco Points</span> for every kilogram you recycle. Rankings update in real-time based on your contributions. The leaderboard 
                <span className="font-bold text-teal-700"> resets every Monday at 12:00 AM</span>. Finish in the Top 3 to unlock exclusive green rewards!
              </p>
            </div>

            <div className="shrink-0 mt-2 sm:mt-0">
              <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100/80 border border-emerald-200 text-emerald-700 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-inner group-hover:bg-emerald-100 transition-colors">
                Keep Recycling
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Leaderboard;