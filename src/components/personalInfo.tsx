import React, { useState } from "react";
import { navigate } from "gatsby";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from './firebase';

const PersonalInfoForm = () => {
  const locationState = location.state as
    | { selectedService: any; otherDetails: any }
    | undefined;
  const { selectedService, otherDetails } = locationState || {
    selectedService: {},
    otherDetails: {},
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDateTime: "",
    hasPreviousAppointment: null,
    complaint: "",
  });
  const [currentPage, setCurrentPage] = useState(2);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (value: any) => {
    setFormData({ ...formData, hasPreviousAppointment: value });
  };
  const handleBack = () => {
    //@ts-ignore
    navigate("/serviceOptions"); // Navigate to the back page
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form Data Submitted:", formData);

    try {
      // Use collection and addDoc methods from Firestore SDK
      const appointmentsCollectionRef = collection(db, "appointments");
      await addDoc(appointmentsCollectionRef, {
        ...formData,
        service: selectedService, // Store the selected service
        otherDetails, // Store other details if specified
        dateCreated: serverTimestamp(), // Firebase server timestamp
      });
      alert("Appointment successfully booked!");

      // Navigate to the confirmation page
      navigate("/appointment-confirmed");
    } catch (error) {
      console.error("Error saving appointment:", error);
      alert("There was an issue booking your appointment. Please try again.");
    }
  };

  const handleClose = () => {
    navigate(-1); // Go back to the last page
  };
  return (
    <>
      {/* desktop */}
      <div className="p- max-w-3xl mx-auto bg-white rounded-md mt-[3em] hidden lg:block md:block">
        <div className="flex justify-between">
          <h2 className="text-[28px] font-semibold text-center mb-6">
            Fill in your personal information and any specific details about
            your appointment request.
          </h2>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-1"
                >
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
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-1"
                >
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
            </div>
            {/* Email */}
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="preferredDateTime"
                  className="block text-sm font-medium mb-1"
                >
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
                <label className="block text-sm font-medium mb-1 mt-4">
                  Have you scheduled an appointment with us before?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasPreviousAppointment"
                      value="yes"
                      checked={formData.hasPreviousAppointment === "yes"}
                      onChange={() => handleRadioChange("yes")}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasPreviousAppointment"
                      value="no"
                      checked={formData.hasPreviousAppointment === "no"}
                      onChange={() => handleRadioChange("no")}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Complaint */}
          <div className="mt-4">
            <label
              htmlFor="complaint"
              className="block text-sm font-medium mb-1"
            >
              Your Complaint
            </label>
            <textarea
              id="complaint"
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder=""
              // rows="4"
            />
          </div>
          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-5">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 border rounded-md text-green-700 border-green-700  hover:text-white transition"
            >
              &larr; Back
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-green-700 text-white rounded-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex space-x-2">
              {[1, 2].map((page) => (
                <div
                  key={page}
                  className={`h-[8px] w-[50px] rounded-full transition-all ${
                    currentPage === page ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </form>
      </div>

      {/* mobile */}

      <div className="p-3 max-w-3xl mx-auto bg-white rounded-md mt-[3em] lg:hidden md:hidden">
        <div className="flex justify-between">
          <h2 className="text-[28px] font-semibold text-center mb-6">
            Fill in your personal information and any specific details about
            your appointment request.
          </h2>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <div className="grid grid-cols-2 gap-4 mb-4"> */}
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                placeholder="Enter First Name"
              />
            </div>
            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                placeholder="Enter Last Name"
              />
            </div>
            {/* </div> */}
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                placeholder="Enter Email Address"
              />
            </div>
            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label
                htmlFor="preferredDateTime"
                className="block text-sm font-medium mb-1"
              >
                Preferred Date and Time
              </label>
              <input
                type="datetime-local"
                id="preferredDateTime"
                name="preferredDateTime"
                value={formData.preferredDateTime}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
              />
            </div>
            {/* Previous Appointment */}
            <div>
              <label className="block text-sm font-medium mb-1 mt-4">
                Have you scheduled an appointment with us before?
              </label>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasPreviousAppointment"
                    value="yes"
                    checked={formData.hasPreviousAppointment === "yes"}
                    onChange={() => handleRadioChange("yes")}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasPreviousAppointment"
                    value="no"
                    checked={formData.hasPreviousAppointment === "no"}
                    onChange={() => handleRadioChange("no")}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* Complaint */}
          <div className="mt-4">
            <label
              htmlFor="complaint"
              className="block text-sm font-medium mb-1"
            >
              Your Complaint
            </label>
            <textarea
              id="complaint"
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder=""
              // rows="4"
            />
          </div>
          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-5">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 border rounded-md text-green-700 border-green-700 hover:bg-green-700 hover:text-white transition"
            >
              &larr; Back
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-green-700 text-white rounded-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex space-x-2">
              {[1, 2].map((page) => (
                <div
                  key={page}
                  className={`h-[8px] w-[50px] rounded-full transition-all ${
                    currentPage === page ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInfoForm;
