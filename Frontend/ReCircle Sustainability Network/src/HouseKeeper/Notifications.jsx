import React, { useState, useEffect } from 'react';
import { Truck, Award, Clock, MapPin, CheckCheck, Sparkles, Wallet, CalendarPlus, Bell } from 'lucide-react';

const Notifications = () => {
  // Static notifications ko alag rakha hai
  const staticNotifications = [
    {
      id: 'static-1',
      type: 'points_earned',
      title: 'Eco Points Credited',
      message: 'Amazing! 150 Eco Points have been added to your balance for yesterday’s plastic waste contribution.',
      time: '2 hours ago',
      isUnread: true,
      image: '/eco.jpg', // Make sure this image exists in public folder
      actionText: 'View Balance',
      actionIcon: <Wallet size={14} />,
      status: 'Completed'
    },
    {
      id: 'static-2',
      type: 'system_alert',
      title: 'Weekly Eco Tip',
      message: 'Pro tip: Rinsing plastic containers before disposal can increase their recycling value by up to 2x!',
      time: 'Yesterday',
      isUnread: false,
      icon: <LeafIcon />,
      iconBg: 'bg-sky-50',
      actionText: null,
      actionIcon: null,
      status: null
    },
    {
      id: 'static-3',
      type: 'welcome',
      title: 'Welcome to ReCircle!',
      message: 'Your eco journey begins here. Schedule your first pickup and start earning rewards.',
      time: '2 days ago',
      isUnread: false,
      icon: <Sparkles size={18} className="text-violet-600" />,
      iconBg: 'bg-violet-50',
      actionText: 'Schedule Pickup',
      actionIcon: <CalendarPlus size={14} />,
      status: null
    }
  ];

  const [notifications, setNotifications] = useState(staticNotifications);

  // FETCH REAL NOTIFICATIONS FROM DB
  useEffect(() => {
    const fetchRealNotifications = async () => {
      try {
        const res = await fetch('http://localhost:2007/api/requests/my-requests', { credentials: 'include' });
        const data = await res.json();
        
        if (res.ok) {
          // Filter only Accepted or Scheduled requests
          const realNotifs = data
            .filter(req => req.status === 'Accepted' || req.status === 'Scheduled')
            .map(req => ({
              id: req._id,
              type: 'collector_accepted',
              title: req.status === 'Accepted' ? 'Pickup Accepted!' : 'Pickup Scheduled!',
              message: req.status === 'Accepted' 
                ? `A collector has accepted your request for ${req.quantity}kg ${req.wasteType}.` 
                : `Your pickup is scheduled for ${req.scheduledDate} at ${req.scheduledTime}.`,
              time: 'Just updated',
              isUnread: true,
              image: req.image?.startsWith('http') ? req.image : `http://localhost:2007${req.image}`,
              actionText: 'View Collector',
              actionIcon: <MapPin size={14} />,
              status: req.status
            }));

          // Nayi (real) notifications upar, purani (static) neeche
          setNotifications([...realNotifs, ...staticNotifications]);
        }
      } catch (err) {
        console.error("Error fetching notifications:", err);
      }
    };

    fetchRealNotifications();
  }, []);

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
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 font-sans pb-10 -mt-2 sm:-mt-0">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6 sm:-mt-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100 shrink-0">
            <Bell size={18} className="text-emerald-600" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[17px] sm:text-xl font-bold text-gray-900 leading-none">Notifications</h1>
            <p className="text-gray-500 text-[10px] sm:text-[11px] font-medium ">Impact updates</p>
          </div>
        </div>

        {/* Mark All Read Button */}
        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllRead}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-lg text-[11px] sm:text-[12px] font-bold text-gray-700 hover:text-emerald-700 transition-all active:scale-95 shadow-sm shrink-0"
          >
            <CheckCheck size={13} />
            <span className="hidden sm:inline">Mark all as read</span>
          </button>
        )}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`
              relative flex flex-col h-full bg-white rounded-2xl p-3 sm:p-4 border transition-all duration-300 hover:shadow-md lg:hover:-translate-y-1
              ${notif.isUnread ? "border-emerald-400/40 shadow-sm" : "border-gray-200 shadow-sm"}
            `}
          >
            {notif.isUnread && (
              <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            )}

            {/* TOP SECTION */}
            <div className="flex gap-3 items-start">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center">
                {notif.image ? (
                  <img src={notif.image} alt="notif" className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${notif.iconBg}`}>
                    {notif.icon && React.cloneElement(notif.icon, { size: 20 })}
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                {notif.status && (
                  <span className="inline-flex items-center justify-center px-2 py-0.5 mb-1.5 text-[9px] font-bold rounded-md uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {notif.status}
                  </span>
                )}
                <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 leading-tight">
                  {notif.title}
                </h3>
                <p className="mt-1 text-[12px] text-gray-500 font-medium leading-relaxed line-clamp-2">
                  {notif.message}
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-semibold">
                <Clock size={11} />
                {notif.time}
              </div>

              {notif.actionText && (
                <button
                  className={`
                    flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all shadow-sm
                    ${getButtonStyles(notif.type)}
                  `}
                >
                  {notif.actionIcon && React.cloneElement(notif.actionIcon, { size: 12 })}
                  {notif.actionText}
                </button>
              )}
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
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 12 12" />
  </svg>
);

export default Notifications;