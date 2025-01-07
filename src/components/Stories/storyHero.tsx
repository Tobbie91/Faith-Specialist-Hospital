import React from "react";

const StoryHero = () => {
    return (
        <>
        {/* Desktop */}
        <div className="hidden lg:block">
        <div className="bg-hero-gradient pt-[7em] pl-[3em] text-left text-white h-[350px] w-full flex justify-start flex-col ">
          <div className="flex items-center justify-between w-[570px] mt-[1em]">
            <div className="border-t-2 border-white flex-grow"></div>
            <p className="lg:text-[20px] font-normal text-white tracking-wider mx-4">
            PATIENTS STORIES
            </p>
            <div className="border-t-2 border-white flex-grow"></div>
          </div>
    
          <h2 className="lg:text-[39px] font-semibold text-white mt-4 leading-tight">
          Discover inspiring stories from patients who have <br/>experienced life-changing care at Faith Specialist Hospital.
          </h2>
        </div>
        </div>
        {/* Mobile */}
        <div className="bg-hero-gradient pt-[7em] pl-[3em] text-left text-white h-[400px] w-full flex justify-start flex-col lg:hidden">
          <div className="flex items-center justify-between w-[300px] mt-[1em]">
            <div className="border-t-2 border-white flex-grow"></div>
            <p className="text-[20px] font-normal text-white tracking-wider mx-1">
            PATIENTS STORIES
            </p>
            <div className="border-t-2 border-white flex-grow"></div>
          </div>
    
          <h2 className="text-[33px] font-semibold text-white mt-4 leading-tight">
            Discover inspiring stories from patients who have experienced life-changing care at Faith Specialist Hospital.
          </h2>
        </div>
        </>
      );
    };
export default StoryHero;
