import React, { useState } from 'react';
import { Truck, Award, Clock, MapPin, CheckCheck, Sparkles, Wallet, CalendarPlus, Bell } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'collector_accepted',
      title: 'Pickup accepted & on the way',
      message: 'Rajesh (Green Partner) has accepted your request for 12kg Recyclables. He will reach your location in approx 20 mins.',
      time: 'Just now',
      isUnread: true,
      image: 'H2.jpg',
      actionText: 'Track Collector',
      actionIcon: <MapPin size={14} />,
      status: 'In Transit'
    },
    {
      id: 2,
      type: 'points_earned',
      title: 'Eco Points Credited',
      message: 'Amazing! 150 Eco Points have been added to your balance for yesterday’s plastic waste contribution.',
      time: '2 hours ago',
      isUnread: true,
      image: 'eco.jpg',
      actionText: 'View Balance',
      actionIcon: <Wallet size={14} />,
      status: 'Completed'
    },
    {
      id: 3,
      type: 'system_alert',
      title: 'Weekly Eco Tip',
      message: 'Pro tip: Rinsing plastic containers before disposal can increase their recycling value by up to 2x!',
      time: 'Yesterday, 10:30 AM',
      isUnread: false,
      // Isme icon hi rakha hai kyunki ye system tip hai
      icon: <LeafIcon />,
      iconBg: 'bg-sky-50',
      actionText: null,
      actionIcon: null,
      status: null
    },
    {
      id: 4,
      type: 'welcome',
      title: 'Welcome to ReCircle!',
      message: 'Your eco journey begins here. Schedule your first pickup and start earning rewards.',
      time: '2 days ago',
      isUnread: false,
      // Isme icon hi rakha hai
      icon: <Sparkles size={18} className="text-violet-600" />,
      iconBg: 'bg-violet-50',
      actionText: 'Schedule Pickup',
      actionIcon: <CalendarPlus size={14} />,
      status: null
    }
  ]);

  const unreadCount = notifications.filter(n => n.isUnread).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, isUnread: false })));
  };

  const getButtonStyles = (type) => {
    switch (type) {
      case 'collector_accepted': return 'bg-emerald-600 hover:bg-emerald-700 text-white';
      case 'points_earned': return 'bg-amber-600 hover:bg-amber-700 text-white';
      case 'welcome': return 'bg-violet-600 hover:bg-violet-700 text-white';
      default: return 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50';
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 font-sans pb-10">
      
      {/* 1. HEADER */}
      <div className="flex items-center justify-between mb-8 pt-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="p-2 sm:p-2.5 bg-emerald-50 rounded-xl sm:rounded-2xl border border-emerald-100 shrink-0">
            <Bell size={20} className="text-emerald-600 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">Notifications</h1>
            <p className="text-gray-500 text-[11px] sm:text-sm font-medium mt-0.5">Stay on top of your eco-impact</p>
          </div>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllRead}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-xl text-[11px] sm:text-xs font-bold text-gray-600 hover:text-emerald-700 transition-all active:scale-95 shadow-sm"
          >
            <CheckCheck size={14} />
            <span className="hidden xs:inline">Mark all as read</span>
            <span className="xs:hidden">Mark Read</span>
          </button>
        )}
      </div>

      {/* 2. BALANCED CARDS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`
              relative flex flex-col bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 transition-all duration-300 border
              ${notif.isUnread 
                ? 'border-emerald-500/40 shadow-[0_4px_15px_rgba(16,185,129,0.08)]' 
                : 'border-gray-200 shadow-sm'
              }
            `}
          >
            {/* Unread Indicator */}
            {notif.isUnread && (
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            )}

            <div className="flex gap-4 sm:gap-5">
              
              {/* IMAGE OR ICON RENDERER (Naya Logic) */}
              {notif.image ? (
                <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm bg-white p-0.5">
                  <img src={notif.image} alt="notification" className="w-full h-full object-cover rounded-[10px]" />
                </div>
              ) : (
                <div className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl sm:rounded-2xl flex items-center justify-center ${notif.iconBg} border border-white/50 shadow-sm`}>
                  {notif.icon}
                </div>
              )}

              {/* Content Area */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 mb-2">
                  <h3 className={`font-bold text-sm sm:text-[15.5px] truncate leading-none ${notif.isUnread ? 'text-gray-900' : 'text-gray-700'}`}>
                    {notif.title}
                  </h3>

                  {notif.status && (
                    <span className={`self-start xs:self-center px-2 py-0.5 text-[9px] font-bold rounded-md uppercase tracking-wider shrink-0
                      ${notif.status === 'In Transit' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                        : 'bg-gray-100 text-gray-500 border border-gray-200'
                      }`}>
                      {notif.status}
                    </span>
                  )}
                </div>

                <p className="text-[12.5px] sm:text-[14px] font-medium leading-relaxed text-gray-500 line-clamp-2 sm:line-clamp-3">
                  {notif.message}
                </p>

                {/* Bottom - Actions & Time */}
                <div className="flex items-center justify-between mt-4 sm:mt-5 pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-400 font-semibold">
                    <Clock size={12} />
                    {notif.time}
                  </div>

                  {notif.actionText && (
                    <button
                      className={`
                        flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-[11.5px] font-bold transition-all active:scale-95 shadow-sm
                        ${getButtonStyles(notif.type)}
                      `}
                    >
                      {React.cloneElement(notif.actionIcon, { size: 12 })}
                      {notif.actionText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom Leaf Icon
const LeafIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600 sm:w-5 sm:h-5">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

export default Notifications;