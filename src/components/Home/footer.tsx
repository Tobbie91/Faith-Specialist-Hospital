import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaithIcon } from "../../assets/icons/FaithLogo";

const Footer = () => {
  return (
    <div className="bg-[#22252E]">
      <div className="grid grid-cols-3 px-[4em] bg-[#22252E]">
        <div className="flex flex-col pt-[2em] mb-8">
          <FaithIcon />
          <p className="lg:text-[16px] text-[white] mb-4 mt-8">
            Address: Plot 5 Block 2, Ogun State <br /> housing estate, off
            Idiroko expressway, <br /> Ota, Ogun State.
          </p>
          <p className="lg:text-[16px] text-[white] mb-4">
            Email: info@faithspecialit.com
          </p>
          <p className="lg:text-[16px] text-[white] mb-4">Tel: 08033977497</p>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col pt-[2em] mb-8">
            <p className="lg:text-[16px] text-[white]">The Hospital</p>
            <a href="/about" className="lg:text-[16px] text-[white] mb-4 mt-8">About Us</a>
            <a href="/gallery" className="lg:text-[16px] text-[white] mb-4">Our Gallery</a>
            <a href="/team" className="lg:text-[16px] text-[white] mb-4">Our Team</a>
          </div>
          <div className="flex flex-col pt-[2em] mb-8">
            <p className="lg:text-[16px] text-[white]">Resources</p>
            <a href="/blog" className="lg:text-[16px] text-[white] mb-4 mt-8">Our Blog</a>
            <a href="/stories" className="lg:text-[16px] text-[white] mb-4">Patient Stories</a>
            <a href="/contact" className="lg:text-[16px] text-[white] mb-4">Contact Us</a>
          </div>
        </div>

        <div className="flex flex-col pt-[2em] shadow-lg bg-[#383B43] pl-[2em] mt-[2em] w-[384px] mb-8 rounded-md">
          <p className="lg:text-[19px] text-[white] mb-4">
            Subscribe to Our Newsletter
          </p>
          <p className="lg:text-[14px] text-[white] mb-4">
            Stay informed and empowered with the latest <br />
            health tips, expert insights, and updates from <br /> Faith
            Specialist Hospital.
          </p>
          <input
  type="email"
  className="rounded-sm w-[320px] h-[48px] mb-4 p-4 placeholder-gray-500"
  placeholder="Your email..."
/>

          <button
            className="bg-[#017B64] text-white w-[320px] h-[48px] rounded-sm mb-8">
            Subscribe
          </button>
        </div>
      </div>
      <hr />
      <div className="flex justify-between py-[2em] px-[3em] bg-[#22252E]">
        <div className="flex gap-3">
          <StaticImage src="../../images/facebook.png" alt="Facebook" />
          <StaticImage src="../../images/instagram.png" alt="Instagram" />
          <StaticImage src="../../images/linkedin.png" alt="LinkedIn" />
        </div>
        <p className="text-[white]">© 2024 Faith Specialist Hospital. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
