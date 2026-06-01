import React, { useState, useRef } from 'react';
import { 
  MapPin, 
  Recycle, 
  Scale, 
  User, 
  Hash, 
  Upload, 
  CheckCircle2, 
  ChevronRight, 
  Award,
  CalendarClock,
  Plus, // New Icon for Create Button
  X // New Icon for Modal Close
} from 'lucide-react';

const Request = () => {
  // Points logic per KG
  const pointsMultiplier = {
    plastic: 15,
    ewaste: 50,
    paper: 10,
    metal: 25
  };

  const wasteNames = {
    plastic: 'Plastics',
    ewaste: 'E-Waste',
    paper: 'Paper & Cardboard',
    metal: 'Metals'
  };

  const fileInputRef = useRef(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State (Empty by default)
  const [formData, setFormData] = useState({
    name: '',
    wasteType: 'plastic',
    quantity: '',
    location: '',
    pincode: '',
    image: null
  });

  // Submitted Requests State (Pre-filled with 1 dummy request for UI)
  const [requests, setRequests] = useState([
    {
      id: "RC-8842",
      name: "John Doe",
      wasteType: "ewaste",
      quantity: 12,
      points: 600,
      location: "12B, Green Park Avenue, Block C",
      pincode: "110016",
      status: "Scheduled",
      date: "Tomorrow, 10:30 AM",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&auto=format&fit=crop"
    }
  ]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, image: imageUrl }));
    }
  };

  // Auto-calculated Points
  const calculatedPoints = (Number(formData.quantity) || 0) * pointsMultiplier[formData.wasteType];

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: `RC-${Math.floor(1000 + Math.random() * 9000)}`,
      ...formData,
      points: calculatedPoints,
      status: "Pending",
      date: "Scheduling...",
    };
    
    // Add to top of the list
    setRequests([newRequest, ...requests]);
    
    // Reset form
    setFormData({
      name: '',
      wasteType: 'plastic',
      quantity: '',
      location: '',
      pincode: '',
      image: null
    });
    
    // Close the Modal after submission
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-2 lg:px-4  font-sans">
      
      {/* ========================================== */}
      {/* HEADER (With Create Request Button) */}
      {/* ========================================== */}
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-300 pb-5">
        <div className="text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-[650] text-gray-900 tracking-tight">
            Schedule a Pickup
          </h1>
          <p className="text-gray-500 text-[13px] sm:text-[12px] font-[600] mt-1 sm:mt-1.5">
            Book a collector, earn eco-points, and save the planet.
          </p>
        </div>

        {/* Create Request Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-xl font-[650] text-[14px] tracking-wide transition-all duration-200 shadow-md shadow-emerald-900/20 active:scale-[0.97] flex items-center justify-center gap-2 shrink-0"
        >
          <Plus size={18} />
          Create Request
        </button>
      </div>

      {/* CREATE REQUEST MODAL (Ultra-Compact & Centered) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          {/* Decreased width for desktop to max-w-[480px] */}
          <div className="relative w-full max-w-[480px] my-auto animate-in fade-in zoom-in-95 duration-200">
            
            <form 
              onSubmit={handleSubmit} 
              // Removed scroller (overflow-y-auto), made it cleanly hidden
              className="bg-gradient-to-br from-emerald-50 to-emerald-100/40 rounded-[24px] border-2 border-emerald-300 shadow-2xl p-4 sm:p-5 relative flex flex-col overflow-hidden"
            >
              {/* Close Button */}
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 bg-white rounded-full shadow-sm border border-emerald-200 text-gray-500 hover:text-emerald-700 hover:bg-emerald-50 z-20 transition-colors"
              >
                <X size={16} />
              </button>

              {/* Background Accent Glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-200 rounded-full blur-[60px] -z-10 opacity-50"></div>
              
              {/* Centered Title */}
              <h3 className="text-lg font-[650] text-emerald-950 mb-4 flex items-center justify-center gap-2 border-b border-emerald-900/10 pb-3 shrink-0">
                Pickup Details
              </h3>

              {/* Grid: Forced 2 columns on ALL screens so small fields don't drop to a new row */}
              <div className="grid grid-cols-2 gap-3 flex-1">
                
                {/* Name */}
                <div className="space-y-1 col-span-2">
                  <label className="text-[10px] font-[650] text-emerald-800 uppercase tracking-wider pl-1">Requester Name</label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600/70" />
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder="John Doe"
                      className="w-full pl-8 pr-3 py-2 bg-white border border-emerald-200 rounded-lg text-[12px] font-[600] text-gray-900 placeholder-gray-400 focus:bg-emerald-50 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-all outline-none shadow-sm hover:border-emerald-300"
                    />
                  </div>
                </div>

               {/* Waste Type Dropdown (Side-by-Side) */}
                <div className="space-y-1 col-span-1">
                  <label className="text-[10px] font-[650] text-emerald-800 uppercase tracking-wider pl-1">Waste Type</label>
                  <div className="relative">
                    <Recycle size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-emerald-600" />
                    <select 
                      name="wasteType" value={formData.wasteType} onChange={handleChange}
                      // NEW: Added h-[34px], adjusted pl-7, and reduced font size for mobile
                      className="w-full h-[34px] pl-7 pr-2 py-0 bg-white border border-emerald-200 rounded-lg text-[11px] sm:text-[12px] font-[600] text-gray-900 focus:bg-emerald-50 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-all outline-none shadow-sm appearance-none cursor-pointer hover:border-emerald-300"
                    >
                      <option value="plastic">Plastics</option>
                      <option value="ewaste">E-Waste</option>
                      <option value="paper">Paper</option>
                      <option value="metal">Metals</option>
                    </select>
                    {/* Custom small arrow to make it look like a dropdown even on mobile */}
                    <ChevronRight size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-emerald-600/70 rotate-90 pointer-events-none" />
                  </div>
                </div>

                {/* Quantity (Side-by-Side) */}
                <div className="space-y-1 col-span-1">
                  <label className="text-[10px] font-[650] text-emerald-800 uppercase tracking-wider pl-1">Qty (kg)</label>
                  <div className="relative">
                    <Scale size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600/70" />
                    <input 
                      type="number" name="quantity" min="1" value={formData.quantity} onChange={handleChange} required
                      placeholder="e.g. 5"
                      className="w-full pl-8 pr-3 py-2 bg-white border border-emerald-200 rounded-lg text-[12px] font-[600] text-gray-900 placeholder-gray-400 focus:bg-emerald-50 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-all outline-none shadow-sm hover:border-emerald-300"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-1 col-span-2">
                  <label className="text-[10px] font-[650] text-emerald-800 uppercase tracking-wider pl-1">Pickup Address</label>
                  <div className="relative">
                    <MapPin size={14} className="absolute left-3 top-2.5 text-emerald-600/70" />
                    <textarea 
                      name="location" rows="2" value={formData.location} onChange={handleChange} required
                      placeholder="12B, Green Park Ave"
                      className="w-full pl-8 pr-3 py-2 bg-white border border-emerald-200 rounded-lg text-[12px] font-[600] text-gray-900 placeholder-gray-400 focus:bg-emerald-50 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-all outline-none shadow-sm resize-none hover:border-emerald-300"
                    />
                  </div>
                </div>

                {/* Pin Code (Side-by-Side) */}
                <div className="space-y-1 col-span-1">
                  <label className="text-[10px] font-[650] text-emerald-800 uppercase tracking-wider pl-1">Pin Code</label>
                  <div className="relative">
                    <Hash size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600/70" />
                    <input 
                      type="text" name="pincode" maxLength="6" value={formData.pincode} onChange={handleChange} required
                      placeholder="110016"
                      className="w-full pl-8 pr-3 py-2 bg-white border border-emerald-200 rounded-lg text-[12px] font-[600] text-gray-900 placeholder-gray-400 focus:bg-emerald-50 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-all outline-none shadow-sm hover:border-emerald-300"
                    />
                  </div>
                </div>

                {/* Upload Image (Side-by-Side) */}
                <div className="space-y-1 col-span-1">
                  <label className="text-[10px] font-[650] text-emerald-800 uppercase tracking-wider pl-1">Waste Image</label>
                  <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
                  <div 
                    onClick={() => fileInputRef.current.click()}
                    className="w-full h-[34px] bg-white border-2 border-dashed border-emerald-300 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer hover:bg-emerald-50 hover:border-emerald-600 transition-all shadow-sm group"
                  >
                    {formData.image ? (
                      <span className="text-[11px] font-[600] text-emerald-700 flex items-center gap-1"><CheckCircle2 size={12}/> Attached</span>
                    ) : (
                      <span className="text-[11px] font-[600] text-emerald-700/70 group-hover:text-emerald-700 flex items-center gap-1"><Upload size={12}/> Upload Photo</span>
                    )}
                  </div>
                </div>

                {/* Amber/Gold Eco Points Banner */}
                <div className="col-span-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-2.5 flex items-center justify-between shadow-sm border border-amber-600 mt-1 shrink-0">
                  <div className="flex items-center gap-2.5 text-white">
                    <div className="bg-white/20 p-1 rounded-md backdrop-blur-sm border border-white/20"><Award size={16} className="text-white" /></div>
                    <div>
                      <p className="text-[9px] font-[650] text-amber-100 uppercase tracking-widest">Estimated Reward</p>
                      <p className="text-[12px] font-[650] text-white leading-none mt-0.5">Eco Points Earned</p>
                    </div>
                  </div>
                  <div className="text-xl font-[650] text-white drop-shadow-sm">
                    +{calculatedPoints || 0}
                  </div>
                </div>

                {/* Submit Button (Dark Green) */}
                <div className="col-span-2 mt-auto pt-1 shrink-0">
                  <button 
                    type="submit"
                    disabled={calculatedPoints === 0 || !formData.quantity}
                    className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg font-[600] text-[13px] tracking-wide transition-all duration-200 shadow-md shadow-emerald-900/20 active:scale-[0.97] active:shadow-inner flex items-center justify-center gap-2 disabled:opacity-50 disabled:active:scale-100"
                  >
                    Confirm & Schedule Pickup
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      )}

      {/* BOTTOM SECTION: COMPACT SQUARE-IMAGE CARDS */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-[650] text-gray-800">Your Requested Pickups</h2>
          <span className="bg-emerald-200 text-emerald-800 font-[650] px-3 py-1 rounded-lg text-[12px] shadow-sm border border-emerald-800/60">
            {requests.length} Total
          </span>
        </div>

        {/* 1 on Mobile, 2 on Tablet, 3 or 4 on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {requests.map((req, index) => {
            const isPending = req.status.toLowerCase() === 'pending';

            return (
              <div 
                key={index} 
                // Mobile: p-3, gap-3 | Desktop: p-4, gap-3.5 (Prevents vertical stretch on mobile)
                className="bg-white border border-[darkgreen] border-l-[5px] border-l-emerald-700 rounded-[20px] p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-l-emerald-500 transition-all duration-300 group flex flex-col gap-3 sm:gap-3.5 relative overflow-hidden"
              >
                
                {/* Subtle gradient background for the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none -z-10"></div>

                {/* Top Row: Square Image + Title & Status */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  {/* Square Image Box - Fixed to w-20 h-20 for BOTH mobile and desktop so it's perfectly visible */}
                  <div className="w-16 h-16 shrink-0 rounded-[12px] overflow-hidden bg-white relative border-2 border-emerald-50 shadow-sm">
                    {req.image ? (
                      <img src={req.image} alt="Waste" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-emerald-400">
                        <Recycle size={28} />
                      </div>
                    )}
                  </div>

                  {/* Header Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
                    <div className="flex justify-between items-start gap-1.5 sm:gap-2 mb-1">
                      {/* Mobile font slightly adjusted to prevent weird wrapping */}
                      <h3 className="font-[650] text-gray-900 text-[14px] sm:text-[15px] truncate">
                        {wasteNames[req.wasteType] || req.wasteType}
                      </h3>
                      <span className="font-[650] text-emerald-900 bg-emerald-100/80 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] border border-emerald-500 shrink-0">
                        {req.quantity} kg
                      </span>
                    </div>
                    
                    <span className="text-[10px] font-[600] text-gray-600 block mb-1.5 sm:mb-2">{req.id}</span>
                    
                    <div>
                      <span className={`px-2 py-0.5 rounded-md shadow-sm font-[600] text-[8.5px] sm:text-[9px] uppercase tracking-widest inline-block
                        ${isPending ? 'bg-amber-600 text-white animate-pulse' : 'bg-emerald-600 text-white'}
                      `}>
                        {req.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details Section - Tighter padding and text sizes for mobile */}
                <div className="space-y-1 bg-gray-50/80 rounded-lg p-2 border border-gray-100 shadow-sm mt-0.5">
                  <p className="text-[10.5px] sm:text-[11.5px] font-semibold text-gray-700 flex items-center gap-2">
                    <User size={13} className="text-gray-700 shrink-0" /> 
                    <span className="truncate">{req.name}</span>
                  </p>
                  <p className="text-[10.5px] sm:text-[11.5px] font-semibold text-gray-700 flex items-start gap-2">
                    <MapPin size={13} className="mt-0.5 text-gray-700 shrink-0" /> 
                    <span className="line-clamp-1">{req.location} - {req.pincode}</span>
                  </p>
                  <p className="text-[10.5px] sm:text-[11.5px] font-bold text-emerald-700 flex items-center gap-2">
                    <CalendarClock size={13} className="text-emerald-700 shrink-0" /> 
                    <span>{req.date}</span>
                  </p>
                </div>

                {/* Card Footer (Points) - Mobile specific typography to fit everything inline */}
                <div className="flex items-center justify-between pt-2 sm:pt-1.5 mt-auto border-t border-gray-100">
                  <span className="text-[9px] sm:text-[10px] font-[650] text-gray-700 uppercase tracking-widest">Reward</span>
                  <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 sm:px-2.5 py-1 rounded-lg border border-amber-500 font-black text-[11px] sm:text-[12px] shadow-sm">
                    <Award size={14} /> +{req.points} Pts
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Request;