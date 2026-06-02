import React, { useState } from 'react';
import { Wallet, ArrowUpRight,Recycle, ArrowDownLeft, Download, CreditCard, TrendingUp, Clock } from 'lucide-react';

const Earnings = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
const [amount, setAmount] = useState("");

  const transactions = [
    { id: 1, type: "Payout", amount: 1200, status: "Success", date: "01 Jun 2026", method: "UPI" },
    { id: 2, type: "Credit", amount: 180, status: "Completed", date: "30 May 2026", method: "Plastic" },
    { id: 3, type: "Credit", amount: 250, status: "Completed", date: "28 May 2026", method: "Metal" },
  ];

  return (
    <div className="space-y-6 px-1 md:mx-4 -mt-3">
      
      {/* 1. HERO SECTION: Balance & Withdraw */}
      <div className="bg-emerald-900 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-emerald-200 text-sm font-medium uppercase tracking-wider">Total Available Balance</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">₹2,850.00</h1>
          <p className="text-emerald-300 text-xs mt-2 flex items-center gap-1">
            <Clock size={12} /> Last payout: 25 May 2026
          </p>
        </div>
        <button 
        onClick={() => setIsModalOpen(true)} // Modal trigger
        className="bg-white text-emerald-900 px-6 py-3 rounded-2xl font-semibold hover:bg-emerald-50 transition-all shadow-lg shadow-emerald-900/20"
      >
        Withdraw Funds
      </button>
      </div>

      {/* withdraw model */}
      {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
    <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl">
      <h3 className="text-xl font-bold mb-4">Request Withdrawal</h3>
      <div className="space-y-4">
        <input 
          type="number" 
          placeholder="Enter Amount (e.g. 500)" 
          className="w-full p-3 bg-gray-50 rounded-xl border border-gray-400 outline-none focus:ring-2 focus:ring-emerald-500"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select className="w-full p-3 bg-gray-50 rounded-xl border border-gray-400">
          <option>UPI (9876543210@ybl)</option>
          <option>Bank Transfer (****1234)</option>
        </select>
        <button 
          onClick={() => { alert(`Withdrawal request of ₹${amount} submitted!`); setIsModalOpen(false); }}
          className="w-full bg-emerald-600 text-white py-3 rounded-xl font-[600] hover:bg-emerald-700"
        >
          Confirm Request
        </button>
        <button 
          onClick={() => setIsModalOpen(false)}
          className="w-full text-gray-900 font-[600] text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "This Month", value: "₹1,240", icon: <TrendingUp size={20} />, color: "text-emerald-600" },
          { title: "Pending Payout", value: "₹450", icon: <Clock size={20} />, color: "text-amber-600" },
          { title: "Total Lifetime", value: "₹8,420", icon: <Wallet size={20} />, color: "text-blue-600" },
          { title: "Avg. Pickup", value: "₹185", icon: <CreditCard size={20} />, color: "text-purple-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-green-500 shadow-sm">
            <div className={`mb-3 ${stat.color}`}>{stat.icon}</div>
            <p className="text-gray-700 text-[11px] font-semibold uppercase">{stat.title}</p>
            <h3 className="text-xl font-bold text-gray-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* 3. IMPACT & CATEGORY BREAKDOWN */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  
  {/* Left: Sustainability Impact */}
  <div className="bg-white border border-gray-300 rounded-3xl p-6 shadow-sm">
    <h3 className="font-bold text-gray-900 text-lg mb-6">Sustainability Impact</h3>
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-green-100 rounded-2xl text-green-600"><Recycle size={24} /></div>
        <div>
          <p className="text-gray-900 font-[600]">50 Kg Waste Diverted</p>
          <p className="text-xs text-gray-500">From landfills to recycling units</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-100 rounded-2xl text-blue-600"><TrendingUp size={24} /></div>
        <div>
          <p className="text-gray-900 font-[600]">12 Kg CO<sub>2</sub> Saved</p>
          <p className="text-xs text-gray-500">Equivalent to planting 2 trees</p>
        </div>
      </div>
    </div>
  </div>

  {/* Right: Earnings by Category */}
  <div className="bg-white border border-gray-300 rounded-3xl p-6 shadow-sm">
    <h3 className="font-bold text-gray-900 text-lg mb-6">Earnings by Category</h3>
    <div className="space-y-4">
      {[
        { name: "Metal Scrap", val: "₹1,200", percent: "60%" },
        { name: "Plastic Bottles", val: "₹500", percent: "25%" },
        { name: "Paper Waste", val: "₹300", percent: "15%" }
      ].map((cat, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-gray-700">{cat.name}</span>
            <span className="font-bold text-gray-900">{cat.val}</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-emerald-600 h-2 rounded-full" style={{ width: cat.percent }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
  );
};

export default Earnings;