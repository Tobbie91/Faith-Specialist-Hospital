import React from "react";

const Steps = () => {
  const steps = [
    {
      id: "01",
      title: "Review",
      description:
        "Our team will review your request and get back to you within 24 hours with available appointment slots.",
    },
    {
      id: "02",
      title: "Confirmation",
      description:
        "You will receive a confirmation email/phone number with your appointment details and any additional instructions.",
    },
    {
      id: "03",
      title: "Visit",
      description:
        "Arrive at Faith Specialist Hospital on your scheduled date and time for your consultation or procedure.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-8 lg:px-16 lg:py-16">
      <h2 className="text-center text-[33px] font-semibold text-gray-900 mb-8">
        What You Can Expect Next
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-left">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-start text-left p-4 font-normal"
          >
            <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-lg text-teal-700 font-semi text-[23px] bold mb-4 text-left">
              {step.id}
            </div>
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
