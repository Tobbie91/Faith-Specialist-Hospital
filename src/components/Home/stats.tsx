import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "14+", description: "Years Of <span >Excellent</span><br />Healthcare Service" },
    { value: "2,000+", description: "Successful <span>Orthopedic</span><br />Surgeries Performed" },
    { value: "98%", description: "<span >Patient Satisfaction</span> Rate" },
    { value: "24/7", description: "<span>Emergency</span> Services" },
  ];

  return (
    <div className="flex justify-center items-center py-10 bg-[white] ">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center text-center px-9">
            <h3 className="lg:text-[48px] font-semibold text-[#111217]">{stat.value}</h3>
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
  );
};

export default StatsSection;
