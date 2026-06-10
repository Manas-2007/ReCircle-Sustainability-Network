import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import PromoSection from "./PromoSection";
import ArticlesSection from "./ArticlesSection";
import JoinSection from "./JoinSection";

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Request Pickup",
      desc: "Housekeepers schedule pickup by providing waste details.",
      img: "H1.jpg",
    },
    {
      id: "02",
      title: "Collector Accepts",
      desc: "Local waste collectors view requests and accept nearby ones.",
      img: "H2.jpg",
    },
    {
      id: "03",
      title: "Waste Collected",
      desc: "Collectors pick up the waste and ensure it reaches the right channels.",
      img: "H3.jpg",
    },
    {
      id: "04",
      title: "Greener Tomorrow",
      desc: "Every action brings us closer to a cleaner and healthier future.",
      img: "H4.jpg",
    },
  ];

  return (
    <section
      className="relative w-full -mt-12 md:-mt-10 pt-2 pb-16 md:pb-20 bg-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('Hbglower.jpg')" }}
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <span className="text-[#16a34a] text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
            🍃 How It Works 🍃
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[610] text-gray-900 tracking-tight">
            Simple Process, Greater Change
          </h2>
        </div>

        {/* 4-Step Cards Container Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center w-full"
            >
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-[75px] -right-[15%] xl:-right-[20%] w-[30%] xl:w-[40%] border-t-[2.5px] border-dashed border-[#16a34a]/40 z-0" />
              )}

              {/* White Card Wrapper */}
              <div className="w-full bg-white rounded-3xl p-3 md:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 flex flex-col items-center text-center relative h-full group hover:-translate-y-1 z-10">
                <div className="absolute -top-3 -left-3 bg-[#16a34a] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-[0_4px_10px_rgba(22,163,74,0.4)] border-[3px] border-white z-20">
                  {step.id}
                </div>

                {/* Card Image Wrapper */}
                <div className="w-full h-[130px] rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="px-1 flex flex-col flex-grow">
                  <h3 className="text-gray-900 font-bold text-[13px] md:text-[16px] mb-1.5 group-hover:text-[#16a34a] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] md:text-[13px] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WhyChooseUs />
      <PromoSection />
      <ArticlesSection />
      <JoinSection />
    </section>
  );
};

export default Process;
