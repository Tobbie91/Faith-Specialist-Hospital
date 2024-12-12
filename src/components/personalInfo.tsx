import React, { useState } from 'react';
//@ts-ignore
const PersonalInfoForm = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    hasPreviousAppointment: null,
    complaint: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (value: any) => {
    setFormData({ ...formData, hasPreviousAppointment: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Form Data Submitted:', formData);
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-lg font-medium text-center mb-6">
        Fill in your personal information and any specific details about your appointment request.
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter First Name"
            />
          </div>
          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter Last Name"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter Email Address"
            />
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Phone Number"
            />
          </div>
          {/* Preferred Date and Time */}
          <div>
            <label htmlFor="preferredDateTime" className="block text-sm font-medium mb-1">
              Preferred Date and Time
            </label>
            <input
              type="datetime-local"
              id="preferredDateTime"
              name="preferredDateTime"
              value={formData.preferredDateTime}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Previous Appointment */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Have you scheduled an appointment with us before?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasPreviousAppointment"
                  value="yes"
                  checked={formData.hasPreviousAppointment === 'yes'}
                  onChange={() => handleRadioChange('yes')}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasPreviousAppointment"
                  value="no"
                  checked={formData.hasPreviousAppointment === 'no'}
                  onChange={() => handleRadioChange('no')}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
        </div>
        {/* Complaint */}
        <div className="mt-4">
          <label htmlFor="complaint" className="block text-sm font-medium mb-1">
            Your Complaint
          </label>
          <textarea
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your complaint..."
            // rows="4"
          />
        </div>
        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border rounded-md text-green-500 border-green-500 hover:bg-green-500 hover:text-white transition"
          >
            &larr; Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
