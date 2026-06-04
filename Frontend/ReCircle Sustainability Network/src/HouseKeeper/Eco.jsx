import { useState } from 'react';
import { Award, Star, CheckCircle, X, Trophy,Sparkles } from 'lucide-react';

const EcoPoints = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [redeemedRewards, setRedeemedRewards] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalPoints = 1250;
  const nextLevelPoints = 2000;
  const currentLevel = "Green Warrior";
  const progress = Math.min((totalPoints / nextLevelPoints) * 100, 100);

  const rewards = [
    { id: 1, title: "Amazon Gift Card", points: 800, image: "/amazonvoucher.jpg", category: "Shopping" },
    { id: 2, title: "Blinkit Grocery Voucher", points: 450, image: "/blinkitvoucher.jpg", category: "Grocery" },
    { id: 3, title: "Zomato Food Voucher", points: 300, image: "/zomatovoucher.jpg", category: "Food & Dishes" },
    { id: 4, title: "Travel Voucher", points: 150, image: "/makemytripvoucher.jpg", category: "Travel" },
  ];

  const badges = [
    { icon: "🌱", name: "Eco Beginner", level: 1 },
    { icon: "♻️", name: "Green Contributor", level: 2 },
    { icon: "🌿", name: "Green Warrior", level: 3, current: true },
    { icon: "🌍", name: "Planet Protector", level: 4 },
    { icon: "👑", name: "Champion", level: 5 },
  ];

  const handleRedeem = (reward) => {
  if (totalPoints < reward.points) return;

  if (redeemedRewards.includes(reward.id)) return;

  setRedeemedRewards((prev) => [...prev, reward.id]);

  setShowSuccess(true);

  setTimeout(() => {
    setShowSuccess(false);
  }, 2000);
};
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      <div className="max-w-screen-2xl mx-auto px-1 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
<div className="relative bg-[#064e3b] rounded-[24px] sm:rounded-[28px] p-4 sm:p-8 text-white mb-8 shadow-sm border border-emerald-900/50 overflow-hidden flex flex-col gap-4 sm:gap-5 lg:max-w-5xl lg:mx-auto">

  {/* Background Image */}
  <div
    className="absolute top-0 right-0 w-[65%] sm:w-1/2 h-full opacity-25 sm:opacity-40 pointer-events-none"
    style={{
      maskImage:
        "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      WebkitMaskImage:
        "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
    }}
  >
    <img
      src="miniEarth.jpg"
      alt="Eco Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Glow Effect */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

  {/* Header */}
  <div className="relative z-10 flex items-center justify-between gap-2">
    <h1 className="text-[16px] sm:text-[22px] font-semibold tracking-tight text-white/95">
      Eco Points Dashboard
    </h1>

    <button
      onClick={() => setShowInfoModal(true)}
      className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl text-xs sm:text-sm font-medium text-white transition-all active:scale-95 backdrop-blur-sm shrink-0"
    >
      <Star size={13} className="text-amber-400" />
      <span className="hidden xs:inline">How it Works</span>
    </button>
  </div>

  {/* Main Content */}
  <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mt-1">

    {/* Left Side */}
    <div>
      <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-xs font-medium mb-2 text-emerald-50 shadow-sm">
        <Trophy size={13} className="text-amber-400" />
        {currentLevel}
      </div>

      <div className="text-[34px] sm:text-[40px] font-semibold tracking-tighter text-white leading-none">
        {totalPoints}
      </div>

      <p className="text-emerald-100/80 text-[13px] sm:text-sm mt-1.5">
        Total Available Eco Points
      </p>
    </div>

    {/* Progress Section */}
    <div className="w-full sm:w-[260px] bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 rounded-2xl p-3 sm:p-0 backdrop-blur-sm">

      <div className="flex justify-between text-[12px] sm:text-sm text-emerald-100/90 font-medium">
        <span>Next: Planet Protector</span>
        <span className="text-emerald-200/70">
          {nextLevelPoints - totalPoints} pts left
        </span>
      </div>

      <div className="mt-2.5 w-full">
        <div className="h-1.5 bg-black/25 rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-[10px] text-emerald-200/60 mt-1.5 font-medium tracking-wider">
          <span>{totalPoints}</span>
          <span>{nextLevelPoints}</span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* REDEEM REWARDS */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-5 px-1">
          <h2 className="text-[18px] sm:text-xl font-bold text-gray-900 tracking-tight">Redeem Rewards</h2>
          <span className="text-emerald-600 text-[12px] sm:text-[13px] font-bold flex items-center gap-1">
            <span className="hidden sm:inline">Choose from amazing rewards</span>
            <span className="sm:hidden">Swipe to explore →</span>
          </span>
        </div>

        {/* Responsive Layout: Mobile (Swipe), Tablet (2-Col Grid), Desktop (4-Col Grid) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {rewards.map((reward) => {
            const isRedeemed = redeemedRewards.includes(reward.id);
            const canAfford = totalPoints >= reward.points;

            // Dynamic Labels & Button Text
            let buttonText = 'Redeem Now';
            let subLabel = 'Available now';
            
            if (reward.category === 'Shopping') { 
              buttonText = 'Get Gift Card'; 
              subLabel = 'Instant digital delivery'; 
            } else if (reward.category === 'Coffee') { 
              buttonText = 'Claim Voucher'; 
              subLabel = 'Valid at all outlets'; 
            } else if (reward.category === 'Sustainable') { 
              buttonText = 'Order Item'; 
              subLabel = 'Free home delivery'; 
            } else if (reward.category === 'Impact') { 
              buttonText = 'Plant Now'; 
              subLabel = 'Digital certificate included'; 
            }

            if (isRedeemed) buttonText = 'Redeemed ✓';

            return (
              <div 
                key={reward.id}
                className="min-w-[260px] sm:min-w-0 bg-white rounded-[20px] overflow-hidden border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col group snap-center shrink-0"
              >
                {/* Image Section */}
                <div className="h-36 sm:h-40 relative overflow-hidden bg-gray-50">
                  <img src={reward.image} alt={reward.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  
                  {/* NEW: Green, Animative Glowing Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-emerald-500/95 to-emerald-600/95 backdrop-blur-md text-white font-bold text-[9px] sm:text-[10px] uppercase tracking-widest rounded-lg shadow-[0_0_12px_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)] group-hover:scale-105 transition-all duration-300 border border-emerald-400/50">
                    {reward.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[15px] sm:text-[16px] text-gray-900 leading-snug tracking-tight line-clamp-1 group-hover:text-emerald-700 transition-colors">
                    {reward.title}
                  </h3>
                  
                  <p className="text-[11.5px] sm:text-[12px] text-gray-500 mt-1.5 font-medium">
                    {subLabel}
                  </p>
                  
                  {/* Bottom Action Section */}
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                    <div className="text-amber-600 font-bold text-[13px] flex items-center gap-1.5 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-100/50">
                      <Award size={14} /> {reward.points}
                    </div>
                    
                    <button
                      onClick={() => handleRedeem(reward)}
                      disabled={isRedeemed || !canAfford}
                      className={`px-3.5 sm:px-4 py-2 rounded-xl text-[11px] sm:text-[12px] font-bold transition-all active:scale-[0.97] ${
                        isRedeemed 
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-100 cursor-not-allowed' 
                          : canAfford 
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

        {/* 3. BADGE JOURNEY (Gamified & Highlighted) */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5 ">
          <div>
            <h2 className="text-[18px] sm:text-xl font-[650] text-gray-900 tracking-tight">Your Badge Journey</h2>
            <p className="text-gray-500 text-[12px] sm:text-[13px] font-medium mt-0.5">Keep recycling to unlock new tiers</p>
          </div>
          <div className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl text-[11px] sm:text-[12px] font-bold border border-emerald-200/60 shadow-sm shrink-0">
            Level 3 of 5
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 shadow-sm relative">
          
          {/* Subtle Background Progress Line (Visible on Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1.5 bg-gray-100 -translate-y-1/2 rounded-full z-0">
             <div className="h-full bg-emerald-400 rounded-full w-[50%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
          </div>

          <div className="flex md:grid md:grid-cols-5 gap-4 sm:gap-5 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0 relative z-10">
            {badges.map((badge, index) => {
              // Logic to figure out past, current, and future badges
              const currentBadgeLevel = badges.find(b => b.current)?.level || 1;
              const isPast = badge.level < currentBadgeLevel;
              const isFuture = badge.level > currentBadgeLevel;

              return (
                <div 
                  key={index}
                  className={`min-w-[130px] sm:min-w-0 flex flex-col items-center justify-center text-center transition-all duration-300 snap-center rounded-[20px] p-4 sm:p-5 relative
                    ${badge.current 
                      ? 'bg-gradient-to-b from-white to-emerald-50 border-2 border-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.2)] md:scale-110 z-20' 
                      : isPast
                        ? 'bg-white border border-emerald-100 shadow-sm hover:shadow-md hover:-translate-y-1 z-10'
                        : 'bg-gray-50/80 border border-gray-100 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all z-10'
                    }`}
                >
                  {/* Current Tag */}
                  {badge.current && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest shadow-sm border-2 border-white">
                      CURRENT
                    </div>
                  )}

                  {/* Past Badge Checkmark */}
                  {isPast && (
                    <div className="absolute top-2 right-2 text-emerald-500 bg-white rounded-full p-0.5 shadow-sm">
                      <CheckCircle size={14} className="fill-emerald-100" />
                    </div>
                  )}
                  
                  {/* Icon with glowing effect for current */}
                  <div className={`text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform duration-500 
                    ${badge.current ? 'scale-110 drop-shadow-[0_5px_15px_rgba(16,185,129,0.4)]' : ''}`}
                  >
                    {badge.icon}
                  </div>
                  
                  <p className={`font-bold text-[13px] sm:text-[14px] leading-tight mb-1 
                    ${badge.current ? 'text-emerald-800' : isPast ? 'text-gray-800' : 'text-gray-500'}`}
                  >
                    {badge.name}
                  </p>
                  
                  <p className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider
                    ${badge.current ? 'text-emerald-600' : isPast ? 'text-emerald-500/70' : 'text-gray-400'}`}
                  >
                    Level {badge.level}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. COMING SOON PERKS (Optimized Compact Version) */}
<div className="mb-8">
  <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/50 border-2 border-dashed border-emerald-200/80 p-5 sm:p-8 flex flex-col items-center justify-center text-center group cursor-default transition-all duration-300 hover:border-emerald-300 hover:shadow-lg">
    
    {/* Animated Background Decorative Blobs (Scaled down) */}
    <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700"></div>
    <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-teal-200/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover:scale-125 transition-transform duration-700"></div>

    {/* Floating Animated Icon Box (Slimmer) */}
    <div className="relative mb-4">
      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20 duration-1000"></div>
      <div className="relative bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-emerald-100 shadow-md flex items-center justify-center text-emerald-500 group-hover:-translate-y-1 transition-transform duration-300">
        <Sparkles size={20} className="sm:w-6 sm:h-6 animate-[spin_4s_linear_infinite]" />
      </div>
    </div>

    {/* Text Content (Smaller Typography) */}
    <h3 className="text-[17px] sm:text-[20px] font-bold text-gray-900 tracking-tight mb-2 flex flex-col sm:flex-row items-center gap-2">
      More Exciting Perks 
      <span className="text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold">
        Coming Soon
      </span>
    </h3>
    
    <p className="text-[11px] sm:text-[13px] text-gray-500 max-w-sm font-medium leading-relaxed relative z-10">
      We are partnering with top brands to bring you exclusive discounts and VIP passes. Keep stacking those points!
    </p>

    {/* Interactive Live Indicator (Compact) */}
    <div className="mt-5 relative z-10 flex items-center gap-2 text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-white border border-emerald-100 px-3 py-1.5 rounded-full shadow-sm">
         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
         New rewards dropping next week
    </div>
  </div>
</div>

      </div>

      {/* INFO MODAL */}
      {showInfoModal && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 px-6 py-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Eco Points Guide</h3>
                  <p className="text-emerald-100 mt-1 text-sm">Earn rewards by making sustainable choices</p>
                </div>
                <button onClick={() => setShowInfoModal(false)} className="w-9 h-9 flex items-center justify-center bg-white/15 hover:bg-white/25 rounded-full transition">
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-3 max-h-[60vh] overflow-auto">
              {[
                { title: "Plastic Pickup", points: "+20", icon: "♻️" },
                { title: "Paper Recycling", points: "+15", icon: "📄" },
                { title: "E-Waste Collection", points: "+50", icon: "🔋" },
                { title: "Cleanup Drive", points: "+100", icon: "🌍" },
                { title: "Refer a Friend", points: "+30", icon: "👥" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-500">Verified activity required</p>
                    </div>
                  </div>
                  <div className="bg-white px-4 py-1 text-emerald-600 font-bold text-sm rounded-full border border-emerald-100">{item.points}</div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t">
              <button onClick={() => setShowInfoModal(false)} className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-medium transition">Got It, Thanks!</button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS TOAST */}
      {showSuccess && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-emerald-900 text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-xl z-[200]">
          <CheckCircle size={21} className="text-emerald-400" />
          <span className="font-medium">Reward Redeemed Successfully!</span>
        </div>
      )}
    </div>
  );
};

export default EcoPoints;
