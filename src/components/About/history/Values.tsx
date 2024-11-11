import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Values = () => {
  return (
    <div>
      <div className="grid grid-cols-2 pl-[4em] py-[3em] mt-[1em]">
        <div className="pr-[4em]">
          <h2 className="lg:text-[33px] text=[#111217]">Core Values</h2>
          <h3 className="lg:text-[23px] text-[#017B64] font-semibold mb-3">Compassion</h3>
          <p className="lg:text-[18px] text-[#444A5B] mb-4">
            We treat each patient with empathy, kindness, and respect, ensuring
            that their needs and concerns are addressed with the utmost care.
          </p>
          <h3 className="lg:text-[23px] text-[#017B64] font-semibold mb-3">Excellence</h3>
          <p className="lg:text-[18px] text-[#444A5B] mb-4">
            We treat each patient with empathy, kindness, and respect, ensuring
            that their needs and concerns are addressed with the utmost care.
          </p>
          <h3 className="lg:text-[23px] text-[#017B64] font-semibold mb-3">Integrity</h3>
          <p className="lg:text-[18px] text-[#444A5B] mb-4">
            We treat each patient with empathy, kindness, and respect, ensuring
            that their needs and concerns are addressed with the utmost care.
          </p>
          <h3 className="lg:text-[23px] text-[#017B64] font-semibold mb-3">Professionalism</h3>
          <p className="lg:text-[18px] text-[#444A5B] mb-4">
            We treat each patient with empathy, kindness, and respect, ensuring
            that their needs and concerns are addressed with the utmost care.
          </p>
        </div>
        <div className="">
          <StaticImage src="../../../images/ValueImage.webp" alt="LinkedIn" 
                className=" ml-[2.7em] w-[537px] h-[526px] mb-4 rounded-lg"/>
        </div> 
      </div>
    </div>
  );
};

export default Values;