import React, { useState, useEffect } from 'react';

const AuthModal = ({ isOpen, onClose,onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState('household');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setMounted(true), 10);
    } else {
      document.body.style.overflow = '';
      setMounted(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        .rc-font { font-family: 'Plus Jakarta Sans', sans-serif; }
        .rc-display { font-family: 'Sora', sans-serif; }
        .rc-scroll::-webkit-scrollbar { width: 3px; }
        .rc-scroll::-webkit-scrollbar-track { background: transparent; }
        .rc-scroll::-webkit-scrollbar-thumb { background: #86efac; border-radius: 99px; }
        .rc-scroll { scrollbar-width: thin; scrollbar-color: #86efac transparent; }
        .rc-input:focus { outline: none; border-color: #16a34a !important; box-shadow: 0 0 0 3px rgba(22,163,74,0.12); }
        .rc-input::placeholder { color: #b0bac4; font-weight: 400; }
        @keyframes rcIn {
          from { opacity:0; transform: scale(0.95) translateY(10px); }
          to   { opacity:1; transform: scale(1) translateY(0); }
        }
        .rc-modal-in { animation: rcIn 0.28s cubic-bezier(0.34,1.3,0.64,1) forwards; }
      `}</style>

      {/* ── OVERLAY ── */}
      <div
        className="rc-font fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
        style={{ background: 'rgba(0,0,0,0.48)', backdropFilter: 'blur(7px)' }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >

        {/* ── MODAL SHELL — fixed size, never full-screen ── */}
        <div
          className={`rc-modal-in bg-white rounded-2xl shadow-2xl flex flex-col w-full ${mounted ? '' : 'opacity-0'}`}
          style={{
            maxWidth: 500,
            height: 'min(640px, 88vh)',
            overflow: 'hidden',         
          }}
          onClick={(e) => e.stopPropagation()}
        >

         {/* Header */}
<div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 pt-4 pb-3 sm:px-6 sm:pt-5">
  <div className="flex items-start justify-between gap-3 mb-4">
    <div className="flex items-center gap-2.5 min-w-0">
      <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-green-200 shadow-sm bg-white flex-shrink-0">
        <img
          src="/main logo.jpg"
          alt="ReCircle Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="min-w-0 leading-tight">
        <h1 className="rc-display font-[600] tracking-tight leading-none whitespace-nowrap">
          <span className="text-[#111827] text-[24px] sm:text-[25px]">Re</span>
          <span className="text-[#166534] text-[24px] sm:text-[25px]">Circle</span>
        </h1>
        <p className="text-[8.5px] sm:text-[11px] font-[700] tracking-[0.18em] 
        text-gray-700 uppercase mt-1 whitespace-nowrap">
          Sustainability Network
        </p>
      </div>
    </div>

    <button
      onClick={onClose}
      className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 transition-all duration-200 hover:bg-red-50 hover:border-red-300 hover:text-red-500 active:scale-95 flex-shrink-0">
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  <h2 className="rc-display text-[15px] sm:text-[17px] font-[600] text-gray-900 tracking-tight leading-snug">
    {isLogin ? 'Welcome back ' : 'Create your account'}
  </h2>

  <p className="text-[11px] sm:text-[12px] font-[600] text-gray-400 mt-0.5 leading-relaxed">
    {isLogin
      ? 'Sign in to your sustainability dashboard.'
      : 'Join the circular economy — takes under a minute.'}
  </p>

  <div className="flex gap-1 mt-4 bg-gray-100 rounded-xl p-1">

    {['Sign Up', 'Login'].map((tab) => {
      const active = (tab === 'Login') === isLogin;

      return (
        <button
          key={tab}
          type="button"
          onClick={() => setIsLogin(tab === 'Login')}
          className={`flex-1 py-2 rounded-[10px] text-[11.5px] sm:text-[12px] font-[700] transition-all duration-200 rc-display tracking-wide
          ${
            active
              ? 'bg-white text-[#166534] border border-green-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      );
    })}

  </div>

</div>

        {/* Form */}
<div className="rc-scroll flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-2 flex flex-col gap-3">

  {!isLogin && (
    <>
      <div className="mb-1">
        <p className="text-[10px] font-[800] text-gray-700 uppercase tracking-[0.1em] mb-2">I'm joining as</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'household', emoji: '🏠', label: 'Household', sub: 'Contribute' },
            { id: 'collector', emoji: '🚛', label: 'Collector', sub: 'Pick up' },
          ].map(({ id, emoji, label, sub }) => (
            <button
              key={id} type="button" onClick={() => setSelectedRole(id)}
              className={`group flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-all ${selectedRole === id ? 'border-[#166534] bg-green-50' : 'border-gray-200 bg-white'}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${selectedRole === id ? 'bg-green-100' : 'bg-gray-100'}`}>{emoji}</div>
              <div className="min-w-0">
                <div className={`text-[12px] font-[800] ${selectedRole === id ? 'text-[#166534]' : 'text-gray-800'}`}>{label}</div>
                <div className="text-[9px] font-[600] text-gray-400">{sub}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <FieldGroup label="First Name"><input className="rc-input w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-[600] text-gray-900 focus:border-green-500 focus:bg-white" type="text" placeholder="John" /></FieldGroup>
        <FieldGroup label="Last Name"><input className="rc-input w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-[600] text-gray-900 focus:border-green-500 focus:bg-white" type="text" placeholder="Doe" /></FieldGroup>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <FieldGroup label="Address" className="sm:col-span-2"><input className="rc-input w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-[600] text-gray-900 focus:border-green-500 focus:bg-white" type="text" placeholder="123 Eco St" /></FieldGroup>
        <FieldGroup label="Pincode"><input className="rc-input w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-[600] text-gray-900 focus:border-green-500 focus:bg-white" type="text" placeholder="400001" maxLength="6" /></FieldGroup>
      </div>
    </>
  )}

  <div className={`grid gap-2.5 ${!isLogin ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
    <FieldGroup label="Email Address"><input className="rc-input w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-[600] text-gray-900 focus:border-green-500 focus:bg-white" type="email" placeholder="you@example.com" /></FieldGroup>
    {!isLogin && (<FieldGroup label="Phone Number"><input className="rc-input w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-[600] text-gray-900 focus:border-green-500 focus:bg-white" type="tel" placeholder="+91 98765 43210" /></FieldGroup>)}
  </div>

  <div className={`grid gap-2.5 ${!isLogin ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
    <FieldGroup label="Password" labelRight={isLogin && <a href="#" className="text-[11px] font-[800] text-[#166534] hover:underline">Forgot?</a>}><input className="rc-input w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-[600] text-gray-900 focus:border-green-500 focus:bg-white" type="password" placeholder="••••••••" /></FieldGroup>
    {!isLogin && (<FieldGroup label="Confirm Password"><input className="rc-input w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[13px] font-[600] text-gray-900 focus:border-green-500 focus:bg-white" type="password" placeholder="••••••••" /></FieldGroup>)}
  </div>

  {!isLogin && (
    <label className="flex items-start gap-2 cursor-pointer pt-1">
      <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 accent-green-700" />
      <span className="text-[10px] font-[600] text-gray-500 leading-snug">I agree to ReCircle's <a href="#" className="text-[#166534] font-[700]">Terms</a> & <a href="#" className="text-[#166534] font-[700]">Policy</a></span>
    </label>
  )}
</div>


          {/* END scrollable body */}

{/* Footer */}
<div className="flex-shrink-0 bg-gray-50 border-t border-gray-100 px-5 py-4 sm:px-6">

  {/* Main Auth Button - YAHAN onClick LAGANA THA */}
  <button
    type="button"
    onClick={onLoginSuccess} // <--- Ye ab sahi jagah par hai
    className="rc-display w-full text-white text-[13.5px] font-[600] py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
    style={{
      background: 'linear-gradient(135deg,#16a34a,#15803d)',
      boxShadow: '0 4px 14px rgba(22,163,74,0.32)'
    }}
    onMouseEnter={e =>
      e.currentTarget.style.boxShadow =
        '0 6px 20px rgba(22,163,74,0.42)'
    }
    onMouseLeave={e =>
      e.currentTarget.style.boxShadow =
        '0 4px 14px rgba(22,163,74,0.32)'
    }
  >
    {isLogin
      ? '→ Sign In Securely'
      : '→ Complete Registration'}
  </button>

  {/* Footer Switch Text */}
  <div className="flex items-center justify-center gap-1 flex-wrap mt-3 text-[12.5px] font-[600] text-gray-500">

    <span>
      {isLogin
        ? "Don't have an account?"
        : 'Already a member?'}
    </span>

    {/* Yahan se extra onClick hata diya hai */}
    <button
      type="button"
      onClick={() => setIsLogin(!isLogin)} 
      className="rc-display text-[#16a34a] hover:text-[#15803d] transition-all duration-150 hover:underline"
    >
      {isLogin
        ? 'Sign up free →'
        : '← Back to login'}
    </button>

  </div>

</div>



        </div>
        {/* END modal shell */}

      </div>
    </>
  );
};

/* ── tiny helper ── */
const FieldGroup = ({ label, labelRight, children, className = '' }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <div className="flex items-center justify-between">
      <label className="text-[11.5px] font-[600] text-gray-600 uppercase tracking-wide">{label}</label>
      {labelRight}
    </div>
    {children}
  </div>
);

export default AuthModal;