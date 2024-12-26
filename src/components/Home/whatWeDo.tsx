import React from "react";
import LearnMore from "../common/LearnMore";
import { whatweDo2Views, whatweDoViews } from "../constants";

const WhatWeDo = () => {
  const path = "../../";
  return (
    <>
      <div className="mt-[6em] hidden lg:block ">
        {/* Desktop */}
        <h1 className="flex justify-center lg:text-[39px] font-medium mb-[1.4em]">
          What We Do
        </h1>
        <div className="flex justify-center gap-4 xl:gap-8 mb-[3em]">
          {whatweDoViews.map((view, i) => (
            <div
              className={`${
                i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]"
              } rounded-[12px] p-4 text-white max-w-[371px] h-[320px] basis-[25%] shadow-lg items-center`}
            >
              <div className="h-[160px] w-[370px] mt-5 text-center items-center flex justify-center mb-5">
                <img className="h-[160px]" src={view.img.url} alt={view.img.alt} />
              </div>
              <p className="lg:text-[20px] xs:text-[14.49px] 390:text-[15.49px] leading-[25.2px] text-[#444A5B] text-center font-medium ">
                {view.copies}
              </p>
            </div>
          ))}
        </div>
        <div className="lg:flex lg:justify-center gap-4 xl:gap-8 hidden mb-4">
          {whatweDo2Views.map((view, i) => (
            <div
              className={`${
                i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]"
              } rounded-[12px] p-4 text-white max-w-[371px] h-[320px] basis-[25%] shadow-lg`}
            >
              <div className="h-[160px] w-[370px] mt-5 flex justify-center mb-3 items-center">
                <img className="h-[160px]" src={view.img.url} alt={view.img.alt} />
              </div>
              <p className="text-[13.49] lg:text-[20px] xs:text-[14.49px] 390:text-[15.49px] leading-[25.2px] text-[#444A5B] text-center font-medium">
                {view.copies}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-4">
          <LearnMore
            className="w-[330px] h-[56px] mt-8 border border-[#017B64] hover:bg-green-100 text-[#017B64]  text-[18px] font-medium"
            text="Learn More"
            path={path}
          />
        </div>
      </div>

      <div className="mt-[5em]  overflow-hidden lg:hidden ">
        {/* Mobile */}
        <h1 className="flex justify-center text-[33px] font-semibold mb-6 lg:hidden" >
          What We Do
        </h1>
        <div className="flex flex-col justify-center px-[2em]  mt-[3em]">
          {whatweDoViews.map((view, i) => (
            <div
              className={`${
                i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]"
              } rounded-[12px] p-4 text-white max-w-[416px] md:max-w-[716px] basis-[25%] shadow-lg mt-[2em]`}
            >
              <div className="h-[199px] -[384px] mt-5 text-center items-center flex justify-center mb-5">
                <img className="h-full" src={view.img.url} alt={view.img.alt} />
              </div>
              <p className="lg:text-[20px] xs:text-[14.49px] 390:text-[15.49px] leading-[25.2px] text-[#444A5B] text-center">
                {view.copies}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center px-[2em]">
          {whatweDo2Views.map((view, i) => (
            <div
              className={`${
                i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]"
              } rounded-[12px] p-4 text-white max-w-[416px] md:max-w-[716px] basis-[25%] shadow-lg mt-[2em]`}
            >
              <div className="h-[199px] -[384px] mt-5 flex justify-center mb-3">
                <img className="h-full" src={view.img.url} alt={view.img.alt} />
              </div>
              <p className="text-[13.49] lg:text-[20px] xs:text-[14.49px] 390:text-[15.49px] leading-[25.2px] text-[#444A5B] text-center px-[3em] ">
                {view.copies}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-4">
          <LearnMore
            className="w-[300px] h-[56px] mt-8 border border-[#017B64] hover:bg-[#F1F3F5] text-[#017B64] text-[18px] font-semibold "
            text="Learn more"
            path={path}
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
