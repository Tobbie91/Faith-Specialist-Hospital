import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form is being submitted...");
    
    try {
      const contactsCollectionRef = collection(db, "contacts");
      await addDoc(contactsCollectionRef, formData);
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
  
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };
  
  
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex px-[6em] gap-9 mt-[2em]">
          <div>
            <h3 className="lg:text-[26px] font-semibold">Send Us a Message</h3>
            <p className="font-normal lg:text-[18px] text-[#666F89]">
              Please fill out this form and our team will respond shortly. We value your feedback so send us your questions, comments, suggestions, and opinions.
            </p>
            <p className="mt-[3em] mb-[1em]">Call Us On</p>
            <p className="lg:text-[14px] text-[#666F89] mb-[1em]">0804637376747</p>
            <p className="lg:text-[14px] text-[#666F89]">080884848477</p>
            <p className="mt-[2em] mb-[1em]">Email Us At</p>
            <p className="lg:text-[14px] text-[#666F89]">
              info@faithspecialisthospital.com
            </p>
            <p className="mt-[2em] mb-[1em]">Connect With Us</p>
            <div className="flex gap-3">
              <StaticImage
                src="../../images/facebookContact.png"
                alt="Facebook"
              />
              <StaticImage
                src="../../images/linkeInContact.png"
                alt="LinkedIn"
              />
              <StaticImage src="../../images/IgContact.png" alt="Instagram" />
              <StaticImage src="../../images/XContact.png" alt="Twitter" />
              <StaticImage src="../../images/PhoneContact.png" alt="Phone" />
            </div>
          </div>

          <div className="pl-[5em] mb-6">
            <form
              onSubmit={handleSubmit}
              className="w-[673px] mx-auto pl-6 bg-white border border-gray-300 rounded-lg"
            >
              <div className="flex gap-4 mb-4 px-[2em] mt-[2em]">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border h-[43px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
                    placeholder="Enter Firstname"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border h-[43px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
                    placeholder="Enter Lastname"
                    required
                  />
                </div>
              </div>

              <div className="mb-4 px-[2em] mt-[1em]">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border h-[43px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
                  placeholder="Enter Email Address"
                  required
                />
              </div>

              <div className="mb-4 px-[2em] ">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mt-[1em]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border h-[43px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="mb-4 px-[2em]">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mt-[1em]"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border h-[124px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end pr-[3em]">
                <button
                  type="submit"
                  className="bg-[#017B64] hover:bg-[linear-gradient(292.99deg,#0BBE95_-1.96%,#EE1433_100%)] text-white px-10 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mb-7"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* mobile */}

      <div className="lg:hidden">
        <div className="flex flex-col px-[1em] mt-[2em]">
          <div>
            <h3 className="text-[24px] whitespace-nowrap font-semibold">
              Send Us a Message
            </h3>
            <p className="font-normal text-[18px] text-[#666F89]">
              Please fill out this form and our team will respond shortly. We
              value your feedback so send us your questions, comments,
              suggestions, and opinions.
            </p>
           
              <form         onSubmit={handleSubmit} className=" mx-auto  bg-white border  mt-[3em] border-gray-300 rounded-lg ">
      <div className="flex flex-col mb-4 px-[2em] mt-[2em]">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border h-[43px] border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
            placeholder="Enter Firstname"
            required
          />
        </div>
        <div className="flex-1 mt-3" >
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            className="mt-1 block w-full rounded-md border h-[43px]  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
            placeholder="Enter Lastname"
            required
          />
        </div>
      </div>

      <div className="mb-4 px-[2em]">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          className="mt-1 block w-full rounded-md border h-[43px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
          placeholder="Enter Email Address"
          required
        />
      </div>

      <div className="mb-4 px-[2em]">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          name="phone"
          className="mt-1 block w-full rounded-md border h-[43px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
          placeholder="Phone Number"
          required
        />
      </div>

      <div className="mb-4 px-[2em]">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
         Your  Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-mdborder h-[124px] border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
          placeholder=""
          required
        ></textarea>
      </div>
<div className="flex justify-center pr-[]">
      <button
        type="submit"
        className="bg-[#017B64] items-end text-white px-10 py-2 rounded-sm shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mb-7"
      >
        Submit
      </button>
      </div>
    </form>
            </div>
            <p className="mt-[2em]">Call Us On</p>
            <p className="lg:text-[14px] text-[#666F89] mb-[1em]">
              0804637376747
            </p>
            <p className="lg:text-[14px] text-[#666F89]"> 080884848477</p>
            <p className="mt-[2em] mb-[1em]">Email Us At</p>
            <p className="lg:text-[14px] text-[#666F89]">
              info@faithspecialisthospital.com
            </p>
            <p className="mt-[2em] mb-[1em]">Connect With Us</p>
            <div className="flex gap-3 mb-5">
              <StaticImage
                src="../../images/facebookContact.png"
                alt="Facebook"
              />
              <StaticImage
                src="../../images/linkeInContact.png"
                alt="Instagram"
              />
              <StaticImage src="../../images/IgContact.png" alt="LinkedIn" />
              <StaticImage src="../../images/XContact.png" alt="LinkedIn" />
              <StaticImage src="../../images/PhoneContact.png" alt="LinkedIn" />
            </div>
          </div>
        </div>
    </>
  );
};

export default ContactUs;
