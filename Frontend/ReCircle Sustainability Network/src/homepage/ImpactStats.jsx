import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ImpactStats = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-20 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 mb-16">
      <div className="flex flex-col lg:flex-row items-center justify-center">

        <div className="w-full lg:w-3/4 bg-[#0a2e13] rounded-3xl p-6 lg:p-8 lg:pr-16 shadow-2xl z-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-8 items-center">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3 border-r border-green-800/60 pr-2">
              <img 
                src="recycle.jpg" 
                alt="Recycled" 
                className="w-14 h-14 object-contain flex-shrink-0 scale-125 md:scale-150 origin-left" 
              />
              <div>
                <h4 className="text-white font-bold text-lg md:text-xl">9,780+</h4>
                <p className="text-gray-300 text-[10px] md:text-xs">Kg Waste Recycled</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 lg:border-r border-green-800/60 pr-2">
              <img 
                src="cloud.jpg" 
                alt="CO2" 
                className="w-14 h-14 object-contain flex-shrink-0 scale-125 md:scale-150 origin-left" 
              />
              <div>
                <h4 className="text-white font-bold text-lg md:text-xl">3,320+</h4>
                <p className="text-gray-300 text-[10px] md:text-xs">Kg CO2 Reduced</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 border-r border-green-800/60 pr-2">
              <img 
                src="tree.jpg" 
                alt="Trees" 
                className="w-14 h-14 object-contain flex-shrink-0 scale-125 md:scale-150 origin-left" 
              />
              <div>
                <h4 className="text-white font-bold text-lg md:text-xl">1,250+</h4>
                <p className="text-gray-300 text-[10px] md:text-xs">Trees Saved</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3">
              <img 
                src="people.jpg" 
                alt="Users" 
                className="w-14 h-14 object-contain flex-shrink-0 scale-125 md:scale-150 origin-left" 
              />
              <div>
                <h4 className="text-white font-bold text-lg md:text-xl">5,600+</h4>
                <p className="text-gray-300 text-[10px] md:text-xs">Happy Users</p>
              </div>
            </div>

          </div>
        </div>

        {/* ⚪ White Overlapping Card - Intact */}
        <div className="w-full max-w-[340px] md:max-w-[360px] mx-auto lg:mx-0 lg:w-[350px] bg-white rounded-3xl p-6 lg:p-7 flex items-center justify-between shadow-[0_15px_50px_rgba(0,0,0,0.15)] z-10 lg:-ml-12 mt-6 lg:mt-0">
  
  {/* Text and Button Container */}
  <div className="flex flex-col gap-3">
    <h3 className="text-gray-800 font-[700] text-[18px] md:text-xl leading-[1.2] tracking-tight">
      Small Steps.<br />Big Impact.
    </h3>
    
    <button className="bg-[#16a34a] hover:bg-[#15803d] text-white text-[13px] md:text-sm font-semibold px-5 py-2.5 rounded-full flex items-center w-fit gap-2 transition-all duration-300 hover:scale-105 shadow-md group mt-1">
      See Our Impact <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  </div>

  {/* Image Container */}
  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 -mr-2">
     <img src="miniEarth.jpg" alt="Impact Earth" className="w-full h-full object-contain" />
  </div>

</div>

      </div>
    </div>
  );
};

export default ImpactStats;