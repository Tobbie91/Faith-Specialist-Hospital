import React from "react";

const promiseText = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="w-[] lg:flex lg:flex-col lg:justify-center lg:text-left text-center ">
          <h1 className="lg:text-[39px] font-semibold whitespace-nowrap mb-2">
            Our Promise of Exceptional Care
          </h1>
          <p className="text-[#444A5B] lg:text-[16px] mb-3">
            Welcome to Faith Specialist Hospital, where your health and
            well-being are our top priorities. As the Medical Director, I am
            honored to lead a team of dedicated and compassionate healthcare
            professionals who are committed to providing exceptional care to our
            community.
          </p>
          <p className="text-[#444A5B] lg:text-[16px] mb-3">
            As an accomplished surgeon with over 30 years of experience in
            orthopedic surgery and general medicine, I have witnessed firsthand
            the transformative impact that quality healthcare can have on
            patients’ lives, particularly when it involves the locomotor system.
            Our goal is to deliver personalized, patient-centered care using the
            latest medical advancements and state-of-the-art technology.
          </p>
          <p className="text-[#444A5B] lg:text-[16px] mb-3">
            At Faith Specialist Hospital, we believe in a holistic approach to
            health, addressing not only your physical needs but also your
            emotional and mental well-being. We are here to support you every
            step of the way, from diagnosis to treatment and recovery.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:w-[50.5%]  flex-col lg:justify-center lg:text-left text-left lg:hidden  overflow-hidden">
        <h1 className="text-[33px] font-semibold whitespace-nowrap mb-2 mt-[4.3em] text-left">
          Our Promise of <br />
          Exceptional Care
        </h1>
        <p className="text-[#444A5B] text-[14px] font-normal mb-3">
          Welcome to Faith Specialist Hospital, where your health and well-being
          are our top priorities. As the Medical Director, I am honored to lead
          a team of dedicated and compassionate healthcare professionals who are
          committed to providing exceptional care to our community.
        </p>
        <p className="text-[#444A5B] text-[14px] font-normal mb-3">
          As an accomplished surgeon with over 30 years of experience in
          orthopedic surgery and general medicine, I have witnessed firsthand
          the transformative impact that quality healthcare can have on
          patients’ lives, particularly when it involves the locomotor system.
          Our goal is to deliver personalized, patient-centered care using the
          latest medical advancements and state-of-the-art technology.
        </p>
        <p className="text-[#444A5B] text-[14px] font-normal mb-3">
          At Faith Specialist Hospital, we believe in a holistic approach to
          health, addressing not only your physical needs but also your
          emotional and mental well-being. We are here to support you every step
          of the way, from diagnosis to treatment and recovery.
        </p>
      </div>
    </>
  );
};

export default promiseText;
