import React from "react";

const BookAppointment = () => {
  return (
    <>
    {/* Desktop */}
    <div className="hidden lg:block">
    <div className="flex flex-col text-center justify-center items-center bg-[#F4F5F7] h-[304px]">
      <h1
        className="lg:text-[48px] text-center bg-clip-text text-transparent mt-[em]"
        style={{
          backgroundImage:
            "linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%)",
        }}
      >
        Take the First Step Toward Better Health
      </h1>

      <button className=" items-center flex justify-center bg-[#017B64] text-white w-[300px] text-[18px] h-[56px] px-4 text-center mt-[2em] mb-8 py-2 whitespace-nowrap">
        Book an Appointment
      </button>
    </div>
    </div>
{/* Mobile */}
<div className="flex flex-col text-center justify-center items-center bg-[#F4F5F7] h-[304px] lg:hidden">
<h1
  className="text-[34px] text-center bg-clip-text text-transparent mt-[em]"
  style={{
    backgroundImage:
      "linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%)",
  }}
>
  Take the First Step Toward Better Health
</h1>

<button className=" items-center flex justify-center bg-[#017B64] text-white w-[200px] h-[56px] px-4 text-[18px] text-center mt-[2em] mb-8 py-2 whitespace-nowrap">
  Book an Appointment
</button>
</div>
</>
  );
};

export default BookAppointment;
