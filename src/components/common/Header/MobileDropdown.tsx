import React, { useState } from "react";
import DropDown from "../../../assets/icons/DropIcon";
import { Features, mobileNavLinks } from "../../constants";


interface MobileDropdownProps {
  toggleFeatures: any;
  isFeaturesOpen: boolean;
}

const MobileDropdown = ({
  isFeaturesOpen,
  toggleFeatures,
}: MobileDropdownProps) => {
  const [featureClicked, setFeatureClicked] = useState(false);

  const handleToggle = (title: string) => {
    if (title === Features) {
      toggleFeatures();
      setFeatureClicked(true);
    }
  };

  return (
    <div>
      <div className="absolute z-50 top-14 mt-1 left-0 right-0 max-h-[calc(100vh-3em)] overflow-y-auto bg-white shadow-lg rounded-lg text-[16px] font-semibold">
        <ul className="list-none">
          {mobileNavLinks.map((link, index) => (
            <li key={link.id}>
              <a
                href={link.to || link.id}
                className={` ${
                  featureClicked && link.title === Features
                    ? "text-[#044E97] font-semibold"
                    : "text-gray-800"
                } flex justify-between px-4 py-5 hover:bg-gray-200 mt-4 ${
                  link.title === "Features" ? "w-full" : ""
                }`}
                onClick={() => handleToggle(link.title)}
              >
                {link.title}
                {link.title === Features && <DropDown />}
              </a>
              {index !== mobileNavLinks.length - 1 && (
                <hr className="my-1 border-gray-300 w-full" />
              )}
              {link.title === Features && isFeaturesOpen && link.subLinks && (
                <ul>
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.to}>
                      <a
                        href={subLink.to}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-200 mt-2 h-full text-[14px] font-normal"
                      >
                        {subLink.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center ">
        <button className="lg:hidden w-[300px] h-[48px]  rounded-[4px] text-[14px] font-medium bg-[#017B64] hover:bg-[#017B64] cursor-pointer text-white  mb-[5em]">
          Schedule an Appointment
        </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;
