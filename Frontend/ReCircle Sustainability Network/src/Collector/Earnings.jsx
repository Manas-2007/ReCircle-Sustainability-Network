import React, { useState, useEffect } from "react";
import {
  Wallet,
  ArrowUpRight,
  Recycle,
  Target,
  ArrowDownLeft,
  CreditCard,
  TrendingUp,
  Clock,
  X,
  Info,
} from "lucide-react";

//1.Price Model
const PricingModal = ({ isOpen, onClose, pricingData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-[30px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.18)] animate-in fade-in zoom-in duration-300">
        {/* Background Glow */}
        <div className="absolute -top-20 right-0 h-44 w-44 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-200">
                ₹
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Pricing Guide
                </h2>

                <p className="text-sm text-gray-500">
                  Transparent rates per kilogram
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Info Banner */}
          <div className="mb-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-100 p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Rates may vary slightly depending on material quality and market
              conditions.
            </p>
          </div>

          {/* Pricing List */}
          <div className="space-y-3 mb-6 max-h-[45vh] overflow-y-auto pr-1">
            {pricingData.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 shadow-sm transition-all hover:border-emerald-100 hover:shadow-md"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100">
                    <Info size={16} className="text-emerald-600" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-800 text-sm sm:text-[15px] truncate">
                      {item.type}
                    </h3>

                    <p className="text-xs text-gray-500">Recyclable Material</p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <span className="rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">
                    ₹{item.rate}/{item.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <button
            onClick={onClose}
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl active:scale-[0.98]"
          >
            Got it, Thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

//2. CO2 Impact Model Stats
const ImpactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const factors = [
    { type: "Metal Scrap", factor: "1.5 kg" },
    { type: "E-Waste", factor: "0.8 kg" },
    { type: "Plastic", factor: "0.35 kg" },
    { type: "Paper", factor: "0.20 kg" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in duration-300">
        {/* Top Glow */}
        <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                🌱
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  How we calculate CO₂
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Estimated environmental impact from recycling.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl p-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>

          {/* Description */}
          <div className="rounded-2xl bg-gray-50 p-4 mb-5">
            <p className="text-sm leading-relaxed text-gray-600">
              We estimate CO₂ savings using industry-average recycling
              conversion factors. Different materials contribute differently to
              carbon reduction.
            </p>
          </div>

          {/* Factors */}
          <div className="space-y-3 mb-6">
            {factors.map((f, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition-all hover:border-emerald-100 hover:shadow-md"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">{f.type}</p>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {f.factor} CO₂ / kg
                </span>
              </div>
            ))}
          </div>

          {/* Footer Button */}
          <button
            onClick={onClose}
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl active:scale-[0.99]"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};

const Earnings = () => {
  const [balance, setBalance] = useState(0);
  const [isImpactModalOpen, setIsImpactModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("UPI (9876543210@ybl)");
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [pricingData, setPricingData] = useState([]);

  // States for Dynamic Calculations
  const [historyData, setHistoryData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Fetch Data (Balance, Pricing & History)
  useEffect(() => {
    // 1. Fetch User Balance
    fetch("http://localhost:2007/api/user/profile", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBalance(data.walletBalance || 0))
      .catch((err) => console.log("Balance fetch error"));

    // 2. Fetch Pricing Data
    fetch("http://localhost:2007/api/pricing-guide")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPricingData(data);
        } else {
          setPricingData([
            { id: 1, type: "Plastic Pickup", rate: 10, unit: "kg" },
            { id: 2, type: "Paper Recycling", rate: 5, unit: "kg" },
            { id: 3, type: "E-Waste Collection", rate: 40, unit: "kg" },
            { id: 4, type: "Metal Scrap", rate: 25, unit: "kg" },
            { id: 5, type: "Glass Bottles", rate: 8, unit: "kg" },
          ]);
        }
      })
      .catch((err) => {
        setPricingData([
          { id: 1, type: "Plastic Pickup", rate: 10, unit: "kg" },
          { id: 2, type: "Paper Recycling", rate: 5, unit: "kg" },
          { id: 3, type: "E-Waste Collection", rate: 40, unit: "kg" },
          { id: 4, type: "Metal Scrap", rate: 25, unit: "kg" },
        ]);
      });

    // 3. Fetch History Data for Calculations and Dynamic Transactions
    fetch("http://localhost:2007/api/requests/history", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setHistoryData(data);
        const initialTransactions = data.map((item, index) => ({
          id: item._id || `init-${index}`,
          type: "Credit",
          amount: item.points || item.quantity * 10,
          status: "Completed",
          date: new Date(item.createdAt).toLocaleDateString(),
          method: item.wasteType,
          icon: <ArrowDownLeft size={18} className="text-emerald-600" />,
        }));
        setTransactions(initialTransactions);
      })
      .catch((err) => console.log("History fetch error", err));
  }, []);

  // Calculate Dynamic Stats
  const currentMonth = new Date().getMonth();
  const thisMonthEarnings = historyData
    .filter((item) => new Date(item.createdAt).getMonth() === currentMonth)
    .reduce((sum, item) => sum + (item.points || item.quantity * 10), 0);

  const totalLifetimeEarnings = historyData.reduce(
    (sum, item) => sum + (item.points || item.quantity * 10),
    0,
  );

  const avgPickup =
    historyData.length > 0
      ? (totalLifetimeEarnings / historyData.length).toFixed(0)
      : 0;

  // Calculate Earnings by Category dynamically
  const categoryTotals = historyData.reduce((acc, item) => {
    const type = item.wasteType || "General";
    const amount = item.points || item.quantity * 10;
    acc[type] = (acc[type] || 0) + amount;
    return acc;
  }, {});

  const grandTotal = Object.values(categoryTotals).reduce((a, b) => a + b, 0);

  const categoryStats = Object.entries(categoryTotals).map(([name, val]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    val: `₹${val}`,
    percent: grandTotal > 0 ? `${Math.round((val / grandTotal) * 100)}%` : "0%",
  }));

  // Track pending payouts in state 
  const [pendingPayout, setPendingPayout] = useState(0);

  // Handle Withdrawal Request
  const handleWithdrawal = () => {
    const withdrawAmount = Number(amount);

    if (withdrawAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (withdrawAmount > balance) {
      alert("Insufficient Balance!");
      return;
    }

    // 1. Update Balance State
    setBalance((prevBalance) => prevBalance - withdrawAmount);

    // 2. Update Pending Payout
    setPendingPayout((prev) => prev + withdrawAmount);

    // 3. Create New Transaction Record
    const newTransaction = {
      id: Date.now(),
      type: "Payout",
      amount: withdrawAmount,
      status: "Pending", 
      date: new Date().toLocaleDateString(),
      method: method.split(" ")[0], 
      icon: <ArrowUpRight size={18} className="text-amber-600" />, 
    };

    setTransactions([newTransaction, ...transactions]);

    setIsModalOpen(false);
    setAmount("");
    alert(`Withdrawal request of ₹${withdrawAmount} submitted successfully!`);
  };

  // Calculations Logic
  const currentWeekData = historyData.filter((h) => {
    const hDate = new Date(h.createdAt);
    const now = new Date();
    return hDate > new Date(now.setDate(now.getDate() - 7));
  });

  const wasteSaved = currentWeekData.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0,
  );
  const pickupCount = currentWeekData.length;
  const totalEarnings = currentWeekData.reduce(
    (acc, item) => acc + (item.points || 0),
    0,
  );
  const performancePercentage = Math.min(
    Math.round((wasteSaved / 80) * 100),
    100,
  );

  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 font-sans pb-10 -mt-2 sm:-mt-0 space-y-6">
      {/* 1. HERO SECTION: Balance & Buttons  */}
      <div className="bg-emerald-900 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <p className="text-emerald-200 text-sm font-medium uppercase tracking-wider">
            Total Available Balance
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            ₹{balance.toFixed(2)}
          </h1>
          <p className="text-emerald-300 text-xs mt-2 flex items-center gap-1">
            <Clock size={12} /> Last payout: 25 May 2026
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button
            onClick={() => setIsPricingOpen(true)}
            className="flex items-center justify-center gap-2 bg-emerald-800/50 text-emerald-50 px-5 py-3 rounded-2xl font-semibold hover:bg-emerald-800 transition-all border border-emerald-700/50 w-full sm:w-auto"
          >
            <Info size={18} /> Pricing Guide
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-emerald-900 px-6 py-3 rounded-2xl font-semibold hover:bg-emerald-50 transition-all shadow-lg shadow-emerald-900/20 w-full sm:w-auto text-center"
          >
            Withdraw Funds
          </button>
        </div>
      </div>

      {/* MODALS */}
      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        pricingData={pricingData}
      />
      <ImpactModal
        isOpen={isImpactModalOpen}
        onClose={() => setIsImpactModalOpen(false)}
      />

      {/* withdraw model */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Request Withdrawal</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-full"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="number"
                value={amount}
                placeholder="Enter Amount (e.g. 500)"
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-emerald-500"
                onChange={(e) => setAmount(e.target.value)}
              />
              <select
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-300 outline-none"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <option value="UPI (9876543210@ybl)">
                  UPI (9876543210@ybl)
                </option>
                <option value="Bank Transfer (****1234)">
                  Bank Transfer (****1234)
                </option>
              </select>
              <button
                onClick={handleWithdrawal}
                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-[600] hover:bg-emerald-700"
              >
                Confirm Request
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setAmount("");
                }}
                className="w-full text-gray-500 hover:text-gray-900 font-[600] text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. STATS GRID  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "This Month",
            value: `₹${thisMonthEarnings}`,
            icon: <TrendingUp size={20} />,
            color: "text-emerald-600",
          },
          {
            title: "Pending Payout",
            value: `₹${pendingPayout}`,
            icon: <Clock size={20} />,
            color: "text-amber-600",
          },
          {
            title: "Total Lifetime",
            value: `₹${totalLifetimeEarnings}`,
            icon: <Wallet size={20} />,
            color: "text-blue-600",
          },
          {
            title: "Avg. Pickup",
            value: `₹${avgPickup}`,
            icon: <CreditCard size={20} />,
            color: "text-purple-600",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-emerald-500 transition-colors shadow-sm"
          >
            <div className={`mb-3 ${stat.color}`}>{stat.icon}</div>
            <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">
              {stat.title}
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-1">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>

      {/*  IMPACT & CATEGORY BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Sustainability Impact */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 text-lg">
              Sustainability Impact
            </h3>
            <button
              onClick={() => setIsImpactModalOpen(true)}
              className="text-gray-400 hover:text-emerald-600 transition-colors"
            >
              <Info size={18} />
            </button>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 border border-emerald-100">
                <Recycle size={24} />
              </div>
              <div>
                <p className="text-gray-900 font-bold">
                  {historyData.reduce(
                    (acc, item) => acc + (item.quantity || 0),
                    0,
                  )}{" "}
                  Kg Waste Diverted
                </p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  From landfills to recycling units
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 border border-blue-100">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-gray-900 font-bold">
                  {(
                    historyData.reduce(
                      (acc, item) => acc + (item.quantity || 0),
                      0,
                    ) * 0.24
                  ).toFixed(1)}{" "}
                  Kg CO<sub>2</sub> Saved
                </p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  Equivalent to planting 2 trees
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Dynamic Earnings by Category */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-6">
            Earnings by Category
          </h3>

          {categoryStats.length > 0 ? (
            <div className="space-y-5">
              {categoryStats.map((cat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-gray-600">
                      {cat.name}
                    </span>
                    <span className="font-bold text-gray-900">{cat.val}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: cat.percent }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-sm text-gray-400">
              No data available yet.
            </div>
          )}
        </div>
      </div>

      {/*  TRANSACTIONS + GOAL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transactions (2/3 width) - With Scrollbar & S.No */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-300 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-5 lg:text-lg">
            Recent Transactions
          </h3>

          {/* Scrollable Container */}
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {transactions.length > 0 ? (
              transactions.map((t, index) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all border border-transparent hover:border-gray-400 group"
                >
                  <div className="flex items-center gap-3">
                    {/* S.No */}
                    <span className="text-[12px] font-black text-gray-600 w-6">
                      #{String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                      {t.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <p className="font-bold text-sm text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {t.method.charAt(0).toUpperCase() + t.method.slice(1)}
                      </p>
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                        {t.date} • {t.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-bold text-sm text-gray-900 group-hover:text-emerald-700">
                      {t.type === "Payout" ? "-" : "+"}₹{t.amount}
                    </p>
                    {t.type === "Payout" && (
                      <span className="text-[9px] font-bold text-amber-500 uppercase">
                        {t.status}
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 text-center py-4">
                No transactions yet.
              </p>
            )}
          </div>
        </div>

        {/* WEEKLY GOAL CARD */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 p-5 sm:p-6 lg:p-7 text-white shadow-[0_10px_40px_rgba(16,185,129,0.25)] flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">
          {/* Background Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-2xl"></div>

          {/* Header */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/15 backdrop-blur-sm">
                <Target size={16} />
              </div>

              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-emerald-100">
                Weekly Goal
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              Collect 50KG Waste
            </h3>

            <p className="text-sm md:text-lg text-emerald-100/90 mt-2 max-w-xs leading-relaxed">
              Keep collecting to reach your weekly target and improve your
              impact.
            </p>
          </div>

          {/* Progress Section */}
          <div className="relative z-10 mt-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-emerald-50">
                Progress
              </span>

              <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold">
                75%
              </span>
            </div>

            <div className="w-full h-3 rounded-full bg-white/15 overflow-hidden backdrop-blur-sm">
              <div
                className="h-full rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-700"
                style={{ width: "75%" }}
              />
            </div>

            <div className="flex justify-between mt-2 text-xs text-emerald-100/80">
              <span>37.5 KG</span>
              <span>50 KG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
