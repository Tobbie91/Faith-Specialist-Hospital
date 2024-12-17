import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const handleServiceClick = (service: React.SetStateAction<string>) => {
    setSelectedService(service);
    if (service !== 'Others(Specify)') {
      setOtherDetails('');
    }
  };

  const isNextDisabled =
    selectedService === 'Others(Specify)' && !otherDetails;

    const handleClose = () => {
      navigate(-1); // Go back to the last page
    };
  return (
    <>
 {/* desktop */}
    <div className="p-4 max-w-7xl mx-auto bg-white rounded-md mt-[3em] hidden md:block lg:block">
      <div className='flex justify-between'>
      <h2 className="text-[28px] font-semibold text-center mb-4">
        Please choose the service you want to consult or book an appointment for,<br/> or select "Other" to specify.
      </h2>
      <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>
        </div>
      <div className="grid grid-cols-3 gap-4 ">
        {[
          'Orthopedic Consultation',
          'Joint Replacement Surgery',
          'Fracture Management',
          'Pediatric Orthopedics',
          'General Surgery',
          'Plastic Surgery',
          'Physiotherapy',
          'Medical Imaging',
          'Primary Care Consultations',
          'Health Assessments',
          'Chronic Disease Management',
          'Others(Specify)',
        ].map((service) => (
          <button
            key={service}
            className={`w-[392px] h-[108px] border rounded-md text-center ${
              selectedService === service
                ? 'gradient-border' 
                : 'border-gray-300'
            } hover:border-green-500 transition`}
            onClick={() => handleServiceClick(service)}
          >
            {service}
          </button>
        ))}
      </div>
      {selectedService === 'Others(Specify)' && (
        <div className="mt-4">
          <textarea
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-[108px] "
            placeholder="Please specify the service details..."
          />
        </div>
      )}
      <div className="mt-6 flex justify-center mb-9 ">
        <Link
          to={isNextDisabled ? '#' : '/information'}
          state={{ selectedService, otherDetails }}
          className={`px-6 py-2  items-center rounded-md transition w-[170px] text-center ${
            isNextDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'border border-green-500 bg-white text-green-700 '
          }`}
          onClick={(e) => {
            if (isNextDisabled) {
              e.preventDefault();
              alert('Please specify the service details.');
            } else {
              setCurrentPage((prev) => (prev < 2 ? prev + 1 : prev)); // Move to next page
            }
          }}
          
        >
          Next
        </Link>
      </div>
      <div className="mt-4 flex justify-center">
  <div className="flex space-x-2">
    {[1, 2].map((page) => (
      <div
        key={page}
        className={`h-[8px] w-[50px] rounded-full transition-all ${
          currentPage === page ? 'bg-green-500' : 'bg-gray-300'
        }`}
      ></div>
    ))}
  </div>
</div>

    </div>

    {/* mobile */}

    <div className="p-4 max-w-3xl mx-auto bg-white rounded-md mt-[3em] md:hidden lg:hidden">
    <div className='flex justify-between'>
      <h2 className="text-[28px] font-semibold text-center mb-4">
        Please choose the service you want to consult or book an appointment for, or select "Other" to specify.
      </h2>
      <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>
        </div>
      <div className="grid grid-cols-1 gap-4 ">
        {[
          'Orthopedic Consultation',
          'Joint Replacement Surgery',
          'Fracture Management',
          'Pediatric Orthopedics',
          'General Surgery',
          'Plastic Surgery',
          'Physiotherapy',
          'Medical Imaging',
          'Primary Care Consultations',
          'Health Assessments',
          'Chronic Disease Management',
          'Others(Specify)',
        ].map((service) => (
          <button
            key={service}
            className={`w-[392px] h-[108px] border rounded-md text-center ${
              selectedService === service
                ? 'gradient-border' 
                : 'border-gray-300'
            } hover:border-green-500 transition`}
            onClick={() => handleServiceClick(service)}
          >
            {service}
          </button>
        ))}
      </div>
      {selectedService === 'Others(Specify)' && (
        <div className="mt-4">
          <textarea
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 h-[108px]"
            placeholder="Please specify the service details..."
          />
        </div>
      )}
      <div className="mt-6 flex justify-center mb-9 ">
        <Link
          to={isNextDisabled ? '#' : '/information'}
          state={{ selectedService, otherDetails }}
          className={`px-6 py-2  items-center rounded-md transition w-[170px] text-center ${
            isNextDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'border border-green-500 bg-white text-green-500  '
          }`}
          onClick={(e) => {
            if (isNextDisabled) {
              e.preventDefault();
              alert('Please specify the service details.');
            } else {
              setCurrentPage((prev) => (prev < 2 ? prev + 1 : prev)); // Move to next page
            }
          }}
        >
          Next
        </Link>
      </div>
      <div className="flex space-x-2">
    {[1, 2].map((page) => (
      <div
        key={page}
        className={`h-[8px] w-[50px] rounded-full transition-all ${
          currentPage === page ? 'bg-green-500' : 'bg-gray-300'
        }`}
      ></div>
    ))}
  </div>
    </div>
    </>
  );
};

export default ServiceSelection;
