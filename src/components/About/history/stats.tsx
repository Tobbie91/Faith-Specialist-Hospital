import React from "react";

const StatsSection = () => {
  const stats = [
    {
      value: "14+ Years",
      description: "Of Excellent Healthcare <br /> Service",
    },
    {
      value: "2,000+",
      description:
        "Successful <span>Orthopedic</span><br />Surgeries Performed",
    },
    { value: "98%", description: "<span >Patient Satisfaction</span> Rate" },
    { value: "24/7", description: "<span>Emergency</span> Services" },
  ];

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block md:block">
        <div className="flex justify-center items-center py-10 bg-[#F4F5F7]">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center px-9">
                <h3 className="lg:text-[48px] font-semibold text-[#111217]">
                  {stat.value}
                </h3>
                <p
                  className="text-gray-600 mt-2 lg:text-[20px] font-normal"
                  dangerouslySetInnerHTML={{ __html: stat.description }} // Use this to render HTML
                />
              </div>
              {/* Add a divider except for the last item */}
              {index < stats.length - 1 && (
                <div className="border-r border-gray-300 h-36 mx-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* mobile */}
      <div className="flex flex-col justify-center items-center py-7 bg-[#F4F5F7] lg:hidden">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center px-9">
              <h3 className="text-[28px] font-bold text-[#111217]">
                {stat.value}
              </h3>
              <p
                className="text-gray-600 mt-2 text-[16px] font-normal"
                dangerouslySetInnerHTML={{ __html: stat.description }}
              />
            </div>
            {/* Add a horizontal divider except for the last item */}
            {index < stats.length - 1 && (
              <div className="w-full border-t border-gray-300 my-6"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default StatsSection;
