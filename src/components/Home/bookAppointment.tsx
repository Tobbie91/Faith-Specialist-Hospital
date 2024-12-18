import { Link } from "gatsby";
import React from "react";

const BookAppointment = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="flex flex-col text-center justify-center items-center bg-[#F4F5F7] h-[304px]">
          <h1
            className="lg:text-[48px] text-center bg-clip-text text-transparent mt-[em] font-semibold"
            style={{
              backgroundImage:
                "linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%)",
            }}
          >
            Take the First Step Toward Better Health
          </h1>
          <Link
            to="/serviceOptions"
            className="items-center flex justify-center bg-[#017B64] text-white w-[300px] text-[18px] h-[56px] px-4 text-center mt-[2em] mb-8 py-2 whitespace-nowrap font-semibold rounded-md"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex flex-col text-center justify-center items-center bg-[#F4F5F7] h-[504px] lg:hidden mt-[em]">
        <h1
          className="text-[34px] text-center bg-clip-text text-transparent mt-[5em] font-semibold"
          style={{
            backgroundImage:
              "linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%)",
          }}
        >
          Take the First Step Toward Better Health
        </h1>
        <Link
          to="/serviceOptions"
          className="items-center flex justify-center bg-[#017B64] text-white w-[100%] h-[56px] px-4 text-[18px] text-center mt-[2em] mb-8 py-2 whitespace-nowrap font-semibold rounded-md" 
        >
          Book an Appointment
        </Link>
      </div>
    </>
  );
};

export default BookAppointment;
