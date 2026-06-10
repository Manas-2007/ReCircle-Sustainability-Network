import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Easy & Convenient",
      desc: "Schedule pick up in just a few clicks.",
      img: "H5.jpg",
      bgClass: "bg-[#f4faf1]",
    },
    {
      id: 2,
      title: "Real-time Tracking",
      desc: "Track your pickup status in real-time.",
      img: "H6.jpg",
      bgClass: "bg-[#f8f9fa]",
    },
    {
      id: 3,
      title: "Reward & Impact",
      desc: "Earn rewards while creating positive impact.",
      img: "H7.jpg",
      bgClass: "bg-[#fff8ea]",
    },
    {
      id: 4,
      title: "Verified Collectors",
      desc: "Connect with trusted and verified collectors.",
      img: "H8.jpg",
      bgClass: "bg-[#f8f9fa]",
    },
    {
      id: 5,
      title: "Eco Friendly",
      desc: "Promoting sustainability for a better planet.",
      img: "H9.jpg",
      bgClass: "bg-[#f4faf1]",
    },
  ];

  return (
    <div className="relative w-full pt-8 pb-24 md:pb-32">
      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-6 items-center">
          {/* Left side text container */}
          <div className="w-full xl:w-[22%] flex flex-col justify-center text-center xl:text-left">
            <h2 className="text-3xl lg:text-4xl font-[600] text-gray-900 leading-[1.1] tracking-tight">
              Why Choose <br className="hidden xl:block" />
              <div className="inline-flex items-center gap-1.5 mt-1 xl:mt-2">
                <span className="text-[#16a34a] italic">ReCircle?</span>
                <span className="text-2xl not-italic -mt-1 drop-shadow-sm">
                  🍃
                </span>
              </div>
            </h2>

            <div className="w-[150px] h-[2px] bg-[#16a34a]/50 mx-auto xl:mx-0 mt-2.5 mb-4"></div>

            <p className="text-gray-600 text-[14px] leading-relaxed font-normal max-w-[220px] mx-auto xl:mx-0">
              We make recycling easy, transparent and rewarding for everyone.
            </p>
          </div>

          {/* Right side cards grid */}
          <div className="w-full xl:w-[78%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 xl:gap-5 [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`${feature.bgClass} rounded-[1.2rem] md:rounded-[1.5rem] px-2 py-5 md:px-3 md:py-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] cursor-default`}
              >
                <div className="w-full h-[70px] md:h-[85px] flex items-center justify-center mb-4 md:mb-5">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="font-bold text-gray-900 text-[13px] sm:text-[14px] md:text-[15px] mb-1.5 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-[11px] md:text-[12px] font-medium leading-relaxed px-1">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
