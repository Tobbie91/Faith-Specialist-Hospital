import React from "react";

const whoText = () => {
  return (
    <>
    <div className="hidden lg:block">
    <div className="w-full lg:flex lg:flex-col ">
      <h1 className="lg:text-[39px] font-medium whitespace-nowrap mb-2 mt-[1.5em]">
      Who Are We
      </h1>
      <p className="text-[#444A5B] lg:text-[18px] mb-3 font-light">
        Faith Specialist Hospital was established in 2010 as a private <br/>
        specialist hospital in Ota, Ogun State, to bridge the gap in <br/> providing
        quality yet affordable healthcare to the people of Ota <br/> and its environs.
        Since its inception, the hospital has been <br/>committed to offering
        exceptional medical care with a strong <br/>focus on orthopedic services. Our
        state-of-the-art facilities and <br/> advanced medical technologies enable us
        to deliver a wide range <br/> of treatments, from routine check-ups to complex
        surgeries,<br/> ensuring that every patient receives the best possible care.
      </p>
      <p className="text-[#444A5B] lg:text-[18px] mb-3 font-light">
        Our team of dedicated healthcare professionals is led by Dr.<br/> Afolabi
        Odunsi, a renowned expert in orthopedic surgery. At Faith <br/>Specialist
        Hospital, we believe in a holistic approach to <br/>healthcare, addressing
        not only the physical but also the <br/>emotional and mental well-being of
        our patients. We take pride in <br/>our personalized, patient-centered care,
        which is designed to <br/>meet the unique needs of each individual. Our
        commitment to <br/>excellence and continuous improvement has made us a
        trusted <br/>and go to healthcare provider.
      </p>
    </div>
    </div>

     {/* Mobile */}

    <div className=" text-left lg:hidden">
    <h1 className="text-[28px] font-bold whitespace-nowrap mb-2 mt-[2.5em]">
    Who Are We
    </h1>
    <p className="text-[#444A5B] lg:text-[18px] mb-3">
      Faith Specialist Hospital was established in 2010 as a private 
      specialist hospital in Ota, Ogun State, to bridge the gap in  providing
      quality yet affordable healthcare to the people of Ota and its environs.
      Since its inception, the hospital has been committed to offering
      exceptional medical care with a strong focus on orthopedic services. Our
      state-of-the-art facilities and advanced medical technologies enable us
      to deliver a wide range of treatments, from routine check-ups to complex
      surgeries, ensuring that every patient receives the best possible care.
    </p>
    <p className="text-[#444A5B] lg:text-[18px] mb-3">
      Our team of dedicated healthcare professionals is led by Dr.Afolabi
      Odunsi, a renowned expert in orthopedic surgery. At Faith Specialist
      Hospital, we believe in a holistic approach to healthcare, addressing
      not only the physical but also the emotional and mental well-being of
      our patients. We take pride in our personalized, patient-centered care,
      which is designed to meet the unique needs of each individual. Our
      commitment to excellence and continuous improvement has made us a
      trusted and go to healthcare provider.
    </p>
  </div>
  </>
  );
};

export default whoText;
