import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaRecycle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#053624] text-white pt-10 pb-6 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute right-0 top-0 h-[85%] w-[280px] md:w-[400px] lg:w-[550px] bg-cover bg-left bg-no-repeat pointer-events-none z-0 opacity-20 lg:opacity-100"
        style={{
          backgroundImage: "url('/hfooter.jpg')",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 35%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
        }}
      ></div>

      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-6 gap-x-6 lg:gap-4 mb-6">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="main logo.jpg"
                alt="ReCircle Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-[600] leading-none tracking-tight">
                  ReCircle
                </h2>
                <p className="text-[9px] md:text-[10px] lg:text-xs font-bold tracking-widest text-green-400 mt-1">
                  SUSTAINABILITY NETWORK
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-6 max-w-sm">
              ReCircle connects housekeepers with waste collectors to promote
              recycling, reduce waste and build a sustainable future.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Icon size={12} className="md:w-3.5 md:h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2 lg:border-l lg:border-green-800/60 lg:pl-6">
            <h3 className="text-sm md:text-base lg:text-lg font-bold mb-3 md:mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-2.5">
              {["Home", "About Us", "How It Works", "Impact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-gray-300 hover:text-green-400 hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Collectors */}
          <div className="col-span-1 lg:col-span-2 lg:border-l lg:border-green-800/60 lg:pl-6">
            <h3 className="text-sm md:text-base lg:text-lg font-bold mb-3 md:mb-4 text-white">
              For Collectors
            </h3>
            <ul className="space-y-2 md:space-y-2.5">
              {[
                "Become a Collector",
                "Collector Login",
                "Guidelines",
                "Support",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-gray-300 hover:text-green-400 hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1 lg:col-span-2 lg:border-l lg:border-green-800/60 lg:pl-6">
            <h3 className="text-sm md:text-base lg:text-lg font-bold mb-3 md:mb-4 text-white">
              Support
            </h3>
            <ul className="space-y-2 md:space-y-2.5">
              {["FAQs", "Help Center", "Contact Us", "Privacy Policy"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs md:text-sm text-gray-300 hover:text-green-400 hover:translate-x-1 inline-block transition-transform duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-start lg:pl-4 mt-2 lg:mt-0">
            <h3 className="text-sm md:text-lg lg:text-xl font-[600] leading-tight mb-2 drop-shadow-md">
              Make Every Action <br className="hidden md:block" />
              <span className="flex items-center gap-1.5 md:gap-2 mt-1">
                Count{" "}
                <FaRecycle className="text-green-400 text-base md:text-xl" />
              </span>
            </h3>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-20 border-t border-green-800 pt-6 mt-4 flex flex-col-reverse md:flex-row justify-between items-center gap-4 bg-transparent">
          <p className="text-[10px] md:text-xs lg:text-sm text-gray-400 text-center md:text-left">
            © 2026 ReCircle Sustainability Network. All rights reserved.
          </p>
          <p className="text-[10px] md:text-xs lg:text-sm text-gray-400 text-center md:text-right flex items-center justify-center gap-1">
            Made with{" "}
            <span className="text-red-500 text-sm md:text-lg animate-pulse">
              ♥
            </span>{" "}
            for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
