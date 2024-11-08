import React from "react";

const Vision = () => {
  return (
    <div>
      <h1 className="lg:text-[39px] font-semibold px-[3em] py-[1em] ">
        We Are Guided by Our Mission, Vision, and Core Values
      </h1>
      <div className="grid grid-cols-2 pl-[5em] ">
        <div className="border border-[#E4E5EB] rounded-lg px-[1em] py-[2em] w-[604px]">
          <h3 className="lg:text-[28px] font-semibold text-[#017B64] py-3">
            Mission Statement
          </h3>
          <p className="lg:text-[22px] text-[#444A5B] ">
            To deliver high-quality, patient-centered care that <br/> restores health,
            enhances mobility, and improves the <br/> quality of life for our
            community. We strive to achieve<br/> excellence through continuous
            innovation, state-of-<br/>the-art technology, and a compassionate
            approach.
          </p>
        </div>
        <div className="border border-[#E4E5EB] rounded-lg px-[1em] py-[2em]  w-[604px]">
          <h3 className="lg:text-[28px] font-semibold text-[#017B64]">
            Vision Statement
          </h3>
          <p className="lg:text-[22px] text-[#444A5B] ">
            To be the leading orthopedic and general medical care<br/> provider,
            recognized for our expertise, patient<br/> satisfaction, and commitment
            to improving health<br/> outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
