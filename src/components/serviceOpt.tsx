import React, { useState } from 'react';
import { Link } from 'gatsby';

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState('');
  const [otherDetails, setOtherDetails] = useState('');

  const handleServiceClick = (service: React.SetStateAction<string>) => {
    setSelectedService(service);
    if (service !== 'Others(Specify)') {
      setOtherDetails(''); // Clear input when "Others" is deselected
    }
  };

  const isNextDisabled =
    selectedService === 'Others(Specify)' && !otherDetails;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-lg font-medium text-center mb-4">
        Please choose the service you want to consult or book an appointment for, or select "Other" to specify.
      </h2>
      <div className="grid grid-cols-3 gap-4">
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
            className={`p-3 border rounded-md text-center ${
              selectedService === service
                ? service === 'Others(Specify)'
                  ? 'border-red-500'
                  : 'border-green-500'
                : 'border-gray-300'
            } hover:border-blue-500 transition`}
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
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Please specify the service details..."
          />
        </div>
      )}
      <div className="mt-6 flex justify-center">
        <Link
          to={isNextDisabled ? '#' : '/information'}
          state={{ selectedService, otherDetails }}
          className={`px-6 py-2 text-white rounded-md transition ${
            isNextDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600'
          }`}
          onClick={(e) => {
            if (isNextDisabled) {
              e.preventDefault();
              alert('Please specify the service details.');
            }
          }}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default ServiceSelection;
