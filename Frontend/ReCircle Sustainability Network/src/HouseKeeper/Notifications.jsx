import React, { useState, useEffect } from 'react';
import { Truck, Award, Clock, MapPin, CheckCheck, Sparkles, Wallet, CalendarPlus, Bell, X, Phone, User } from 'lucide-react';

const Notifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collector, setCollector] = useState(null);
  const [selectedNotif, setSelectedNotif] = useState(null); 
  const [notifications, setNotifications] = useState([]);

  // --- FETCH REAL NOTIFICATIONS ---
  useEffect(() => {
    const fetchRealNotifications = async () => {
      try {
        const res = await fetch('http://localhost:2007/api/requests/my-requests', { credentials: 'include' });
        const data = await res.json();
        
        if (res.ok && Array.isArray(data)) {
          const realNotifs = data
            .filter(req => ['Pending', 'Accepted', 'Scheduled'].includes(req.status))
            .map(req => ({
              id: req._id,
              collectorId: req.collectorId,
              status: req.status,
              type: req.status === 'Pending' ? 'pending' : 'collector_accepted',
              title: req.status === 'Pending' ? 'Request Pending' : 
                     req.status === 'Accepted' ? 'Pickup Accepted!' : 'Pickup Scheduled!',
              message: req.status === 'Pending' ? `Your request for ${req.quantity}kg ${req.wasteType} is waiting for a collector.` :
                       req.status === 'Accepted' ? `A collector has accepted your request for ${req.quantity}kg ${req.wasteType}.` : 
                       `Your pickup is scheduled for ${req.scheduledDate} at ${req.scheduledTime}.`,
              time: 'Just updated',
              isUnread: true,
              image: req.image ? `http://localhost:2007${req.image}` : null,
              actionText: req.collectorId ? 'View Collector' : null,
              actionIcon: <MapPin size={14} />
            }));

          setNotifications(realNotifs);
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

  // --- MODAL FUNCTIONS ---
  const viewCollector = async (collectorId, notif) => {
    if (!collectorId) return alert("Collector details not available yet.");
    try {
      const res = await fetch(`http://localhost:2007/api/users/collector/${collectorId}`, { credentials: 'include' });
      const data = await res.json();
      if (res.ok) {
        setCollector(data);
        setSelectedNotif(notif);
        setIsModalOpen(true);
      }
    } catch (err) {
      console.error("Error fetching collector:", err);
    }
  };

  const updateRequestStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:2007/api/requests/update-status/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
        credentials: 'include'
      });
      
      if (res.ok) {
        alert(`Request successfully marked as ${status}!`);
        setIsModalOpen(false);
        // Remove the processed notification from UI
        setNotifications(prev => prev.filter(n => n.id !== id));
      }
    } catch (err) {
      alert("Failed to update status.");
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
            className={`relative flex flex-col h-full bg-white rounded-2xl p-3 sm:p-4 border transition-all duration-300 hover:shadow-md lg:hover:-translate-y-1 ${notif.isUnread ? "border-emerald-400/40 shadow-sm" : "border-gray-200 shadow-sm"}`}
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
                  onClick={() => {
                    if (notif.type === 'collector_accepted') {
                      viewCollector(notif.collectorId, notif);
                    }
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all shadow-sm ${getButtonStyles(notif.type)}`}
                >
                  {notif.actionIcon && React.cloneElement(notif.actionIcon, { size: 12 })}
                  {notif.actionText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

     {/* COLLECTOR DETAILS MODAL */}
{isModalOpen && collector && selectedNotif && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white w-full max-w-[90%] sm:max-w-sm rounded-3xl p-5 sm:p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
      
      <button 
        onClick={() => setIsModalOpen(false)} 
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
      >
        <X size={20} />
      </button>

      {/* Modal Header */}
      <div className="flex flex-col items-center mt-2 mb-6 text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
          <User size={24} className="text-emerald-600" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Collector Assigned</h2>
        <p className="text-[10px] sm:text-xs font-medium text-gray-500 mt-1 uppercase tracking-wide">
          {selectedNotif.title}
        </p>
      </div>

      {/* Collector Details Box */}
      <div className="bg-gray-50 rounded-2xl p-4 space-y-4 mb-6 border border-gray-100">
        <div className="flex items-center gap-3">
          <User size={18} className="text-emerald-600 shrink-0" />
          <div>
            <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Name</p>
            <p className="text-sm sm:text-base font-semibold text-gray-800">{collector.firstName} {collector.lastName}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={18} className="text-emerald-600 shrink-0" />
          <div>
            <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Contact</p>
            <p className="text-sm sm:text-base font-semibold text-gray-800">{collector.phone}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={() => updateRequestStatus(selectedNotif.id, 'Cancelled')}
          className="flex-1 py-3 sm:py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-sm font-bold transition-colors border border-red-200"
        >
          Cancel Pickup
        </button>
        <button 
          onClick={() => updateRequestStatus(selectedNotif.id, 'Delivered')}
          className="flex-1 py-3 sm:py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-200 transition-colors"
        >
          Mark Delivered
        </button>
      </div>
      
    </div>
  </div>
)}

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