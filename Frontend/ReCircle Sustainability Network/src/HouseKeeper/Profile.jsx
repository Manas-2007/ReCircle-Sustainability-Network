import React, { useState, useRef } from 'react';
import { Camera, Mail, Phone, MapPin, Shield, Leaf, Award, LogOut, Edit2, CheckCircle2, Bell, Lock,ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // Naya state image ke liye
  const fileInputRef = useRef(null); // Image input click trigger karne ke liye

  // USER DATA (Dynamic Badge Logic Based on Eco Points)
  const totalPoints = 1250; 
  const totalPickups = 24;
  const co2Offset = "185 kg";

  // Dynamic Badge Calculator
  const getBadgeInfo = (points) => {
    if (points >= 5000) return { icon: "👑", name: "Champion", bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" };
    if (points >= 2000) return { icon: "🌍", name: "Planet Protector", bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200" };
    if (points >= 1000) return { icon: "🌿", name: "Green Warrior", bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200" };
    if (points >= 500) return { icon: "♻️", name: "Green Contributor", bg: "bg-teal-100", text: "text-teal-700", border: "border-teal-200" };
    return { icon: "🌱", name: "Eco Beginner", bg: "bg-green-100", text: "text-green-700", border: "border-green-200" };
  };

  const userBadge = getBadgeInfo(totalPoints);

  // Image Upload Handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await fetch('http://localhost:2007/api/auth/logout', { method: 'POST' });
      navigate('/');
    } catch (err) {
      alert("Logout failed, try again!");
    }
  };

  return (
    // Single View Container
   <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 lg:h-[calc(100vh-110px)] font-sans pb-10 -mt-2 sm:-mt-0">
      
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 h-full">
        
        {/* LEFT COLUMN: FIXED PROFILE CARD */}
        <div className="w-full lg:w-[340px] xl:w-[360px] flex-shrink-0 flex flex-col bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden h-fit">
          
          {/* Cover Photo */}
          <div className="h-28 sm:h-32 w-full relative bg-emerald-900 shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" 
              alt="Cover" 
              className="w-full h-full object-cover opacity-70"
            />
          </div>

          {/* Profile Header Info */}
          <div className="px-5 pb-5 relative flex flex-col items-center sm:items-start text-center sm:text-left shrink-0 border-b border-gray-100">
            
            {/* Avatar overlapping cover */}
            <div className="relative -mt-12 sm:-mt-14 mb-3">
              <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-full border-[3px] border-white shadow-md overflow-hidden bg-gradient-to-br from-[#064e3b] to-emerald-600 flex items-center justify-center">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white text-3xl font-bold tracking-wider drop-shadow-sm">JD</span>
                )}
              </div>
              
              {/* Hidden File Input */}
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                className="hidden" 
              />
              
              {/* Trigger Button */}
              <button 
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-1 right-0 bg-white text-gray-700 p-1.5 rounded-full shadow-md border border-gray-200 hover:text-emerald-600 active:scale-95 transition-all cursor-pointer"
              >
                <Camera size={14} />
              </button>
            </div>
            
            {/* Name, Role & Dynamic Badge */}
            <h1 className="text-xl sm:text-[22px] font-bold text-gray-900 tracking-tight flex items-center gap-1.5 justify-center sm:justify-start w-full">
              John Doe <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
            </h1>
            
            <p className="text-gray-500 font-medium text-[13.5px] mt-0.5 tracking-wide">
              Housekeeper
            </p>
            
            <div className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${userBadge.bg} ${userBadge.text} ${userBadge.border} font-semibold text-[11px] uppercase tracking-wider shadow-sm`}>
              <span className="text-sm">{userBadge.icon}</span> {userBadge.name}
            </div>
          </div>

          {/* Impact Stats Grid */}
          <div className="p-4 sm:p-5 grid grid-cols-3 gap-2 border-b border-gray-100 bg-gray-50/50 shrink-0">
            <div className="flex flex-col items-center justify-center text-center p-1.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mb-2.5 border border-gray-200 shadow-sm bg-white p-0.5">
                <img src="/eco.jpg" alt="Eco Points" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="text-lg sm:text-[20px] font-bold text-gray-900 leading-none">{totalPoints}</div>
              <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1.5">Points</div>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-1.5 border-l border-gray-200/80">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden mb-2.5 border border-gray-200 shadow-sm bg-white p-0.5">
                <img src="/H1.jpg" alt="Total Pickups" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="text-lg sm:text-[20px] font-bold text-gray-900 leading-none">{totalPickups}</div>
              <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1.5">Pickups</div>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-1.5 border-l border-gray-200/80">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2.5 bg-sky-50 rounded-full border border-sky-100 shadow-sm">
                <Leaf size={24} className="text-sky-500" />
              </div>
              <div className="text-lg sm:text-[20px] font-bold text-gray-900 leading-none">{co2Offset}</div>
              <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1.5">Offset</div>
            </div>
          </div>

          {/* Action Buttons (Edit & Logout) - FIXED HEIGHT ISSUE */}
          <div className="p-4 sm:p-5 flex items-center gap-3 w-full shrink-0 bg-white">
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="flex-1 px-4 py-2.5 bg-[#16a34a] hover:bg-[#15803d] rounded-xl text-[13px] font-semibold text-white transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-sm"
            >
              <Edit2 size={15} />
              {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
            <button 
            onClick={handleLogout}
            className="px-4 py-2.5 bg-red-50 hover:bg-red-100 border border-red-100 rounded-xl text-[13px] font-semibold text-red-600 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
              <LogOut size={15} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT COLUMN: UNIFIED ON DESKTOP, ACCORDION ON MOBILE */}
        {/* ========================================== */}
        <div className="flex-1 flex flex-col bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden h-fit lg:h-full">
          
          {/* Header Row */}
          <div className="flex justify-between items-center px-5 sm:px-8 py-5 sm:py-6 border-b border-gray-100 bg-gray-50/30 shrink-0">
            <div>
              <h2 className="text-[18px] sm:text-[20px] font-bold text-gray-900 tracking-tight">Account Settings</h2>
              <p className="text-gray-500 text-[12px] sm:text-[13px] font-medium mt-0.5">Manage your personal information and preferences.</p>
            </div>
            {isEditing && (
              <span className="hidden sm:inline-flex bg-amber-50 border border-amber-200 text-amber-600 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span> Editing Mode
              </span>
            )}
          </div>

          {/* Form Scrollable Area (Tight spacing on mobile, wide on desktop) */}
          <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-3 lg:space-y-10 scrollbar-hide bg-gray-50/50 lg:bg-white">
            
            {/* SECTION 1: Personal Information */}
            <section className="animate-fadeIn bg-white lg:bg-transparent border border-gray-200 lg:border-none rounded-2xl lg:rounded-none overflow-hidden lg:overflow-visible shadow-sm lg:shadow-none">
              
              {/* Accordion Header (Clickable ONLY on mobile) */}
              <div
                onClick={() => setActiveTab(activeTab === 'personal' ? '' : 'personal')}
                className="flex items-center justify-between p-4 lg:p-0 cursor-pointer lg:cursor-default"
              >
                <h3 className="text-[14px] lg:text-[15px] font-bold text-gray-900 flex items-center gap-2">
                  <Mail size={18} className="text-emerald-600" /> Personal Details
                </h3>
                <ChevronDown size={18} className={`lg:hidden text-gray-400 transition-transform ${activeTab === 'personal' ? 'rotate-180' : ''}`} />
              </div>

              {/* Content (Hidden on mobile if not active, Always visible on desktop) */}
              <div className={`border-t border-gray-100 lg:border-none ${activeTab === 'personal' ? 'block' : 'hidden lg:block'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:bg-gray-50/50 p-4 lg:p-5 lg:rounded-2xl lg:border border-gray-100/80 lg:mt-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="John Doe"
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white lg:bg-white border border-gray-200 rounded-xl text-gray-900 font-semibold text-[13.5px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:opacity-60 disabled:bg-gray-50 transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        type="email" 
                        defaultValue="john.doe@example.com"
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 font-semibold text-[13.5px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:opacity-60 disabled:bg-gray-50 transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        type="tel" 
                        defaultValue="+91 98765 43210"
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 font-semibold text-[13.5px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:opacity-60 disabled:bg-gray-50 transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Saved Address</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-4 top-4 text-gray-400" />
                      <textarea 
                        defaultValue="12B, Green Park Avenue, Block C, Metro Station Road, New Delhi - 110016"
                        disabled={!isEditing}
                        rows="2"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 font-semibold text-[13.5px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:opacity-60 disabled:bg-gray-50 transition-all resize-none shadow-sm leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: Notification Preferences */}
            <section className="animate-fadeIn bg-white lg:bg-transparent border border-gray-200 lg:border-none rounded-2xl lg:rounded-none overflow-hidden lg:overflow-visible shadow-sm lg:shadow-none">
              
              <div
                onClick={() => setActiveTab(activeTab === 'preferences' ? '' : 'preferences')}
                className="flex items-center justify-between p-4 lg:p-0 cursor-pointer lg:cursor-default"
              >
                <h3 className="text-[14px] lg:text-[15px] font-bold text-gray-900 flex items-center gap-2">
                  <Bell size={18} className="text-emerald-600" /> Notifications & Alerts
                </h3>
                <ChevronDown size={18} className={`lg:hidden text-gray-400 transition-transform ${activeTab === 'preferences' ? 'rotate-180' : ''}`} />
              </div>

              <div className={`border-t border-gray-100 lg:border-none ${activeTab === 'preferences' ? 'block' : 'hidden lg:block'}`}>
                <div className="lg:bg-gray-50/50 p-4 lg:p-5 lg:rounded-2xl lg:border border-gray-100/80 space-y-3 lg:space-y-4 lg:mt-5">
                  {[
                    { title: "Pickup Reminders", desc: "Get notified when a collector is arriving.", defaultChecked: true },
                    { title: "Eco Points Updates", desc: "Weekly summary of your earned rewards.", defaultChecked: true },
                    { title: "Promotional Offers", desc: "Discounts and partner deals.", defaultChecked: false }
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 lg:bg-white rounded-xl border border-gray-100 lg:shadow-sm">
                      <div>
                        <p className="font-semibold text-[12.5px] sm:text-[13px] text-gray-900">{pref.title}</p>
                        <p className="text-[11px] text-gray-500 font-medium mt-0.5">{pref.desc}</p>
                      </div>
                      <label className={`relative inline-flex items-center ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}>
                        <input type="checkbox" className="sr-only peer" defaultChecked={pref.defaultChecked} disabled={!isEditing} />
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
                onClick={() => setActiveTab(activeTab === 'security' ? '' : 'security')}
                className="flex items-center justify-between p-4 lg:p-0 cursor-pointer lg:cursor-default"
              >
                <h3 className="text-[14px] lg:text-[15px] font-bold text-gray-900 flex items-center gap-2">
                  <Lock size={18} className="text-emerald-600" /> Account Security
                </h3>
                <ChevronDown size={18} className={`lg:hidden text-gray-400 transition-transform ${activeTab === 'security' ? 'rotate-180' : ''}`} />
              </div>

              <div className={`border-t border-gray-100 lg:border-none ${activeTab === 'security' ? 'block' : 'hidden lg:block'}`}>
                <div className="lg:bg-gray-50/50 p-4 lg:p-5 lg:rounded-2xl lg:border border-gray-100/80 flex flex-col sm:flex-row items-center justify-between gap-4 lg:mt-5">
                  <div className="w-full sm:w-auto text-left">
                    <p className="font-semibold text-[13px] text-gray-900">Password</p>
                    <p className="text-[11px] text-gray-500 font-medium mt-0.5">Last changed 3 months ago</p>
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