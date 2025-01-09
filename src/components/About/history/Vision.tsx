import React from "react";

const Vision = () => {
  return (
    <>
    {/* desktop */}
    <div className="hidden lg:block mt-[2em]">
      <h1 className="lg:text-[39px] font-semibold px-[3em] py-[1em] ">
        We Are Guided by Our Mission, Vision, and Core Values
      </h1>
      <div className="grid grid-cols-2 pl-[5em] gap-2 mt-[1.5em] ">
        <div className="border border-[#E4E5EB] rounded-lg px-[em] pl-[3em] py-[2em] w-[650px]">
          <h3 className="lg:text-[28px] font-semibold text-[#017B64] py-3">
            Mission Statement
          </h3>
          <p className="lg:text-[21px] text-[#444A5B] font-light ">
            To deliver high-quality, patient-centered care that <br/> restores health,
            enhances mobility, and improves the <br/> quality of life for our
            community. We strive to achieve<br/> excellence through continuous
            innovation, state-of-<br/>the-art technology, and a compassionate
            approach.
          </p>
        </div>
        <div className="border border-[#E4E5EB] rounded-lg px-[em]  pl-[3em] py-[2em]  w-[650px]">
          <h3 className="lg:text-[28px] font-semibold text-[#017B64] py-3">
            Vision Statement
          </h3>
          <p className="lg:text-[21px] text-[#444A5B] font-light ">
            To be the leading orthopedic and general medical care<br/> provider,
            recognized for our expertise, patient<br/> satisfaction, and commitment
            to improving health<br/> outcomes.
          </p>
        </div>
      </div>
    </div>

    {/* mobile */}
    <div className="lg:hidden">
      <h1 className="text-[33px] font-semibold px-[1em] py-[1em] ">
        We Are Guided by Our Mission, Vision, and Core Values
      </h1>
      <div className=" px-[1em] ">
        <div className="border border-[#E4E5EB] rounded-lg px-[1em] py-[2em] w-full mb-4">
          <h3 className="lg:text-[28px] font-semibold text-[#017B64] py-3">
            Mission Statement
          </h3>
          <p className="lg:text-[22px] text-[#444A5B] ">
            To deliver high-quality, patient-centered care that restores health,
            enhances mobility, and improves the quality of life for our
            community. We strive to achieve excellence through continuous
            innovation, state-of-the-art technology, and a compassionate
            approach.
          </p>
        </div>
        <div className="border border-[#E4E5EB] rounded-lg px-[1em] py-[2em]  w-full">
          <h3 className="lg:text-[28px] font-semibold text-[#017B64]">
            Vision Statement
          </h3>
          <p className="lg:text-[22px] text-[#444A5B] ">
            To be the leading orthopedic and general medical care provider,
            recognized for our expertise, patient satisfaction, and commitment
            to improving health outcomes.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Vision;
