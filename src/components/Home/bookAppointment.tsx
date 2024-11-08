import React from "react";

const BookAppointment = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <h1
        className="lg:text-[48px] text-center bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%)",
        }}
      >
        Take the First Step Toward Better Health
      </h1>

      <button className=" items-center flex justify-center bg-[#017B64] text-white w-[200px] px-4 text-center mt-[2em] mb-8 py-2">
        Book an Appointment
      </button>
    </div>
  );
};

export default BookAppointment;
