import React from "react";

const StatsSection = () => {
  const stats = [
    {
      value: "14+",
      description: "Years Of <span >Excellent</span><br />Healthcare Service",
    },
    {
      value: "2,000+",
      description:
        "Successful <span>Orthopedic</span><br />Surgeries Performed",
    },
    { value: "98%", description: "<span >Patient Satisfaction</span> Rate" },
    { value: "24/7", description: "<span>Emergency</span> Services" },
  ];
  const statsMobile = [
    {
      value: "14+",
      description: "Years Of <span >Excellent</span>Healthcare Service",
    },
    {
      value: "2,000+",
      description:
        "Successful <span>Orthopedic</span>Surgeries <br />Performed",
    },
    { value: "98%", description: "<span >Patient Satisfaction</span> Rate" },
    { value: "24/7", description: "<span>Emergency</span> Services" },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block font-sans  ">
        <div className="flex justify-center items-center py-[4em] bg-[white]">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center px-9">
                <h3 className="lg:text-[48px] font-[600px] font-sans text-[#111217]">
                  {stat.value}
                </h3>
                <p
                  className="text-gray-600 mt-2 lg:text-[20px] font-normal leading-normal"
                  dangerouslySetInnerHTML={{ __html: stat.description }}
                />
              </div>
              {index < stats.length - 1 && (
                <div className="border-r border-gray-300 h-36 mx-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden flex justify-center flex-col items-center py-10 bg-[white]  overflow-hidden ">
        {statsMobile.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center px-9">
              <h3 className="text-[28px] font-bold text-[#111217]">
                {stat.value}
              </h3>
              <p
                className="text-gray-600 mt-2 text-[16px] font-normal whitespace-nowrap"
                dangerouslySetInnerHTML={{ __html: stat.description }}
              />
            </div>
            {index < statsMobile.length - 1 && (
              <div className="border-t border-2 border-gray-400 mx-8 mb-9"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default StatsSection;
