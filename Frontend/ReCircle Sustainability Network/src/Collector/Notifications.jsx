import React, { useState } from 'react';
import { Clock, CheckCheck, Wallet, Bell, ArrowRight } from 'lucide-react';

const Notifications = () => {
  // Collector specific notifications (Kamai aur successful collection)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Payment Credited! 💸',
      message: 'Successfully collected from John Doe. ₹450 has been added to your wallet.',
      time: 'Just now',
      isUnread: true,
      image: '/H2.jpg', // Mandatory vehicle image
      amount: '₹450'
    },
    {
      id: 2,
      title: 'Collection Done ✅',
      message: 'Successfully collected from Anita Sharma. ₹320 has been added to your wallet.',
      time: '2 hours ago',
      isUnread: true,
      image: '/H2.jpg',
      amount: '₹320'
    },
    {
      id: 3,
      title: 'Payment Credited! 💸',
      message: 'Successfully collected from Rahul Verma. ₹150 has been added to your wallet.',
      time: 'Yesterday, 2:30 PM',
      isUnread: false,
      image: '/H2.jpg',
      amount: '₹150'
    },
    {
      id: 4,
      title: 'Collection Done ✅',
      message: 'Successfully collected from Priya Singh. ₹500 has been added to your wallet.',
      time: '2 days ago',
      isUnread: false,
      image: '/H2.jpg',
      amount: '₹500'
    }
  ]);

  const unreadCount = notifications.filter(n => n.isUnread).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, isUnread: false })));
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-5 lg:px-8 font-sans pb-10 -mt-3">
      
      {/* 1. HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100 shrink-0">
            <Bell size={18} className="text-emerald-600" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[17px] sm:text-xl font-bold text-gray-900 leading-none">Notifications</h1>
            <p className="text-gray-500 text-[10px] sm:text-[11px] font-medium mt-0.5">Earnings & Updates</p>
          </div>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllRead}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-lg text-[11px] sm:text-[12px] font-bold text-gray-700 hover:text-emerald-700 transition-all active:scale-95 shadow-sm shrink-0"
          >
            <CheckCheck size={13} />
            <span className="hidden sm:inline">Mark all as read</span>
            <span className="sm:hidden">Mark read</span>
          </button>
        )}
      </div>

      {/* 2. BALANCED CARDS GRID (Mobile: 2 Columns, Desktop: 3 Columns) */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`relative flex flex-col bg-white rounded-2xl p-3 sm:p-4 transition-all duration-300 border h-full ${
              notif.isUnread 
                ? 'border-emerald-500/40 shadow-sm bg-emerald-50/10' 
                : 'border-gray-200 shadow-sm'
            }`}
          >
            {/* Unread Indicator */}
            {notif.isUnread && (
              <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            )}

            <div className="flex flex-col sm:flex-row gap-3 items-start mb-3 flex-1">
              {/* MANDATORY VEHICLE IMAGE */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                <img src={notif.image} alt="Vehicle" className="w-full h-full object-cover" />
              </div>

              {/* CONTENT */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[12px] sm:text-[14px] text-gray-900 leading-tight mb-1 pr-3 truncate">
                  {notif.title}
                </h3>
                
                {/* Amount Badge */}
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 mb-1.5 text-[10px] font-bold rounded-md bg-green-100 text-green-800 border border-green-200">
                  <Wallet size={10} /> +{notif.amount}
                </span>

                <p className="text-[10px] sm:text-[12px] text-gray-500 font-medium leading-snug line-clamp-3">
                  {notif.message}
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-gray-400 font-semibold">
                <Clock size={10} />
                {notif.time}
              </div>

              <button className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[9px] sm:text-[11px] font-bold transition-all shadow-sm">
                Wallet <ArrowRight size={10} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Notifications;