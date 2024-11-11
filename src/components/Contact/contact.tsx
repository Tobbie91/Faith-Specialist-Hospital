import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="flex px-[6em] gap-9 mt-[2em]">
        <div>
          <h3 className="lg:text-[26px] font-semibold">Send Us a Message</h3>
          <p className="font-normal lg:text-[18px] text-[#666F89]">
            Please fill out this form and our team will respond<br/> shortly. We
            value your feedback so send us your<br/> questions, comments,
            suggestions, and opinions.
          </p>
          <p className="mt-[2em]">Call Us On</p>
          <p className="lg:text-[14px] text-[#666F89] mb-[1em]">0804637376747</p>
          <p className="lg:text-[14px] text-[#666F89]"> 080884848477</p>
          <p className="mt-[2em] mb-[1em]">Email Us At</p>
          <p className="lg:text-[14px] text-[#666F89]">info@faithspecialisthospital.com</p>
          <p className="mt-[2em] mb-[1em]">Connect With Us</p>
          <div className="flex gap-3">
          <StaticImage src="../../images/facebookContact.png" alt="Facebook" />
          <StaticImage src="../../images/linkeInContact.png" alt="Instagram" />
          <StaticImage src="../../images/IgContact.png" alt="LinkedIn" />
          <StaticImage src="../../images/XContact.png" alt="LinkedIn" />
          <StaticImage src="../../images/PhoneContact.png" alt="LinkedIn" />
        </div>
        </div>

        <div className=" pl-[5em]">
        <form className="w-[673px] mx-auto pl-6 bg-white border border-gray-300 rounded-lg ">
      <div className="flex gap-4 mb-4 px-[2em] mt-[2em]">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 block w-full rounded-md border h-[43px] border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
            placeholder="Enter Firstname"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
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
        //   rows="4"
          className="mt-1 block w-full rounded-mdborder h-[124px] border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-3"
          placeholder=""
          required
        ></textarea>
      </div>
<div className="flex justify-end pr-[3em]">
      <button
        type="submit"
        className="bg-[#017B64] items-end text-white px-10 py-2 rounded-sm shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mb-7"
      >
        Submit
      </button>
      </div>
    </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
