import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { FiUser } from 'react-icons/fi';
import HowItWorksModal from './modals/HowItWorksModal';
import ContactUs from './modals/ContactUs';
import ImpactModal from './modals/ImpactModal';
import ForCollectors from './modals/ForCollectors';
import AuthModal from './modals/AuthModal';

const Navbar = ({onOpenAuth}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'How It Works', 'Impact', 'For Collectors', 'Contact Us'];
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
const [isContactUsOpen, setIsContactUsOpen] = useState(false);
const [isImpactOpen, setIsImpactOpen] = useState(false);
const [isCollectorsOpen, setIsCollectorsOpen] = useState(false);
const [isAuthOpen, setIsAuthOpen] = useState(false);

return (
    <nav className="absolute top-0 left-0 w-full z-50">
      
      {/* Desktop & Tablet Navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img 
            src="main logo.jpg" 
            alt="ReCircle Logo" 
            className="w-10 h-10 md:w-15 md:h-15 object-contain"
          />
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-none tracking-tight">Re<span className='text-green-800'>Circle</span></h2>
            <p className="text-[9px] md:text-[10px] font-semibold tracking-widest text-black mt-0.5">SUSTAINABILITY NETWORK</p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
             <a 
                href={(link === 'How It Works' || link === 'Contact Us') ? undefined : "#"} 
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  if (link === 'How It Works') {
                    e.preventDefault();
                    setIsHowItWorksOpen(true);
                  } else if (link === 'Contact Us') {
                    e.preventDefault();
                    setIsContactUsOpen(true);
                  }
                  else if (link === 'Impact') {
                     e.preventDefault();
                     setIsImpactOpen(true);
                   }
                   else if (link === 'For Collectors') {
                e.preventDefault();
               setIsCollectorsOpen(true);
               }
                }}
                className={`relative text-[15px] font-medium transition-colors duration-300 pb-1 border-none outline-none focus:outline-none
                  /* The sliding border effect setup */
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2.5px] after:bg-[#4ade80] after:transition-transform after:duration-300 after:origin-left
                  ${
                  link === 'Home' 
                  ? 'text-gray-900 after:scale-x-100' 
                  : 'text-gray-700 hover:text-[#15803d] after:scale-x-0 hover:after:scale-x-100' 
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button (Single Auth Button) */}
        <div className="hidden lg:flex items-center">
          <button onClick={onOpenAuth}  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <FiUser className="text-lg" /> Join Movement 🌿
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="lg:hidden text-gray-900 p-2 focus:outline-none"
        >
          <HiOutlineMenu className="w-6 h-6 text-[#15803d]" />
        </button>
      </div>

      {/* Mobile Offcanvas Menu (Top-Down Slide) */}
      <div className={`fixed top-0 left-0 w-full bg-gradient-to-b from-green-50 via-white to-white shadow-2xl transition-transform duration-500 ease-in-out z-[60] rounded-b-3xl border-b-4 border-[#4ade80] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-6 right-6 p-1 bg-white rounded-full shadow-md text-[#15803d] hover:bg-red-50 hover:text-red-500 transition-colors"
        >
          <HiX className="w-5 h-5" />
        </button>

        {/* Mobile Menu Content */}
        <div className="flex flex-col pt-7 pb-5 px-5">
          
          {/* Mobile Logo & Name (Left Aligned) */}
          <div className="flex items-center gap-3 mb-10">
            <img 
              src="main logo.jpg" 
              alt="ReCircle Logo" 
              className="w-12 h-12 object-contain bg-white p-1.5 rounded-full shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold text-green-950 leading-none">Re<span className='text-green-800'>Circle</span></h2>
              <p className="text-[10px] font-bold text-[#15803d] tracking-widest mt-1">SUSTAINABILITY NETWORK</p>
            </div>
          </div>

          {/* Mobile Links with Leaf Icon & Left Border */}
          <ul className="flex flex-col items-start gap-5 w-full mb-10">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full">
               <a 
                  href={(link === 'How It Works' || link === 'Contact Us') ? undefined : "#"} 
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    if (link === 'How It Works') {
                      e.preventDefault();
                      setIsOpen(false); 
                      setIsHowItWorksOpen(true); 
                    } else if (link === 'Contact Us') {
                      e.preventDefault();
                      setIsOpen(false); 
                      setIsContactUsOpen(true); 
                    }
                    else if (link === 'Impact') {
                      e.preventDefault();
                      setIsOpen(false); 
                      setIsImpactOpen(true);
                     }
                     else if (link === 'For Collectors') {
                     e.preventDefault();
                     setIsOpen(false); 
                     setIsCollectorsOpen(true);
                      }
                  }}
                  className="text-[15px] font-medium text-gray-800 hover:text-[#15803d] flex items-center gap-2 border-b border-green-400 border-l-5 border-[#15803d] pl-4 pb-3 w-full transition-colors"
                >
                  {link} <span className="text-[#4ade80] text-base drop-shadow-sm">🍃</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Single Auth Button */}
          <div className="w-full">
            <button onClick={onOpenAuth} className="flex items-center justify-center gap-2 w-full py-1.5 bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white font-medium text-lg rounded-full shadow-md active:scale-95 transition-transform">
              <FiUser className="text-xl" /> Join Movement 🌿
            </button>
          </div>
          
        </div>
      </div>

      {/* Overlay to dim background when mobile menu is open */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] lg:hidden transition-opacity"
        ></div>
      )}

{/*Popup Modal */}
      <HowItWorksModal 
        isOpen={isHowItWorksOpen} 
        onClose={() => setIsHowItWorksOpen(false)} 
      />

      <ContactUs 
        isOpen={isContactUsOpen} 
        onClose={() => setIsContactUsOpen(false)} 
      />

      <ImpactModal 
      isOpen={isImpactOpen} 
      onClose={() => setIsImpactOpen(false)}
       />

       <ForCollectors
        isOpen={isCollectorsOpen} 
        onClose={() => setIsCollectorsOpen(false)} 
        />

    </nav>
  );
};

export default Navbar;