import React from "react";

const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      tag: "Recycling Tips",
      title: "5 Easy Ways to Reduce Plastic Waste at Home",
      date: "May 12, 2024",
      readTime: "4 min read",
      img: "H14.jpg",
    },
    {
      id: 2,
      tag: "Sustainability",
      title: "Why Recycling Matters for Our Future",
      date: "May 8, 2024",
      readTime: "5 min read",
      img: "H15.jpg",
    },
    {
      id: 3,
      tag: "Green Living",
      title: "Simple Habits for a Greener Lifestyle",
      date: "May 5, 2024",
      readTime: "6 min read",
      img: "H16.jpg",
    },
  ];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-16 py-10 relative z-20">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center xl:items-center">
        <div className="w-full xl:w-[22%] flex flex-col justify-center text-center xl:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[600] text-gray-900 leading-[1.2] tracking-tight mb-3">
            Learn. Inspire.
            <br className="hidden xl:block" />
            Take Action.
          </h2>

          <p className="text-gray-500 text-[14px] leading-relaxed font-normal max-w-xs mx-auto xl:mx-0">
            Explore useful tips and articles on sustainability.
          </p>
        </div>

        <div className="w-full xl:w-[78%] grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-5">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative w-full h-[260px] md:h-[240px] rounded-[1.5rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <img
                src={article.img}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-300" />

              <div className="absolute top-4 left-4 bg-[#16a34a] text-white text-[10px] md:text-[11px] font-[600] px-3 py-1 rounded-md tracking-wide">
                {article.tag}
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-[600] text-[15px] md:text-[16px] leading-snug mb-2 group-hover:text-green-300 transition-colors duration-300">
                  {article.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-300 text-[11px] font-medium">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
