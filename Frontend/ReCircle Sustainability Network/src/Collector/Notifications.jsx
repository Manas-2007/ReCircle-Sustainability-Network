import React, { useState, useEffect } from "react";
import {API_BASE_URL} from "../config";
import {
  Clock,
  CheckCheck,
  Wallet,
  Bell,
  ArrowRight,
  XCircle,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // FETCH REAL NOTIFICATIONS FOR COLLECTOR 
  useEffect(() => {
    const fetchRealNotifications = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/api/requests/collector-updates`,
          { credentials: "include" },
        );
        const data = await res.json();

        if (res.ok && Array.isArray(data)) {
          const realNotifs = data.map((req) => {
            const imageUrl = req.image
              ? `${API_BASE_URL}${req.image}`
              : "/default-icon.png";
            if (req.status === "Delivered") {
              return {
                id: req._id,
                type: "delivered",
                title: "Payment Credited! 💸",
                message: `Delivery Successful! ₹${req.points || req.quantity * 10} has been added to your wallet for collecting ${req.quantity}kg of ${req.wasteType}.`,
                time: "Just now",
                isUnread: true,
                image: imageUrl,
                amount: `₹${req.points || req.quantity * 10}`,
                status: "Completed",
              };
            }

            return {
              id: req._id,
              type: "pending",
              title: "Pickup Update",
              message: `Pickup for ${req.quantity}kg ${req.wasteType} is ${req.status}.`,
              time: "Just updated",
              isUnread: true,
              image: imageUrl,
            };
          });

          setNotifications(realNotifs);
        }
      } catch (err) {
        console.error("Error fetching collector notifications:", err);
      }
    };

    fetchRealNotifications();
  }, []);

  //Delete Notification
  const deleteNotification = async (id) => {
    try {
      // Backend ka endpoint call karo
      const res = await fetch(
        `${API_BASE_URL}/api/requests/notification/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      if (res.ok) {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      } else {
        alert("Delete nahi ho paaya, backend check karo.");
      }
    } catch (err) {
      console.error("Error deleting notification:", err);
    }
  };

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  const handleMarkAllRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isUnread: false })),
    );
  };

  // DYNAMIC STYLING FUNCTION 
  const getStyles = (type, isUnread) => {
    if (type === "cancelled") {
      return {
        card: isUnread
          ? "border-red-400/50 shadow-sm bg-red-50/20"
          : "border-gray-200 shadow-sm",
        badge: "bg-red-100 text-red-800 border-red-200",
        dot: "bg-red-500",
        button: "bg-red-600 hover:bg-red-700",
      };
    }
    // Default / Delivered
    return {
      card: isUnread
        ? "border-emerald-500/40 shadow-sm bg-emerald-50/10"
        : "border-gray-200 shadow-sm",
      badge: "bg-green-100 text-green-800 border-green-200",
      dot: "bg-emerald-500",
      button: "bg-emerald-600 hover:bg-emerald-700",
    };
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 font-sans pb-10 -mt-2 sm:-mt-0">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100 shrink-0">
            <Bell size={18} className="text-emerald-600" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[17px] sm:text-xl font-bold text-gray-900 leading-none">
              Notifications
            </h1>
            <p className="text-gray-500 text-[10px] sm:text-[11px] font-medium mt-0.5">
              Earnings & Updates
            </p>
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

      {/* BALANCED CARDS GRID */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
        {notifications.map((notif) => {
          const styles = getStyles(notif.type, notif.isUnread);

          return (
            <div
              key={notif.id}
              className={`relative flex flex-col bg-white rounded-2xl p-3 sm:p-4 transition-all duration-300 border h-full ${styles.card}`}
            >
              {notif.isUnread && (
                <div
                  className={`absolute top-3 right-3 w-2 h-2 rounded-full animate-pulse ${styles.dot}`}
                />
              )}

              {/* Delete Button */}
              <button
                onClick={() => deleteNotification(notif.id)}
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-red-500 transition-colors bg-white/50 hover:bg-white rounded-full"
              >
                <Trash2 size={14} />
              </button>

              <div className="flex flex-col sm:flex-row gap-3 items-start mb-3 flex-1">
                {/* VEHICLE REQUEST IMAGE */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 flex items-center justify-center">
                  {notif.image ? (
                    <img
                      src={notif.image}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Bell size={20} className="text-gray-400" />
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[12px] sm:text-[14px] text-gray-900 leading-tight mb-1 pr-3 truncate">
                    {notif.title}
                  </h3>

                  {/* Amount/Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1 px-1.5 py-0.5 mb-1.5 text-[10px] font-bold rounded-md border ${styles.badge}`}
                  >
                    {notif.type === "cancelled" ? (
                      <XCircle size={10} />
                    ) : (
                      <Wallet size={10} />
                    )}
                    {notif.type === "cancelled"
                      ? "Cancelled"
                      : `+${notif.amount}`}
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

                {notif.type === "delivered" && (
                  <Link
                    to="/dashboard/earnings"
                    className={`flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 text-white rounded-lg text-[9px] sm:text-[11px] font-bold transition-all shadow-sm ${styles.button}`}
                  >
                    Wallet <ArrowRight size={10} />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
