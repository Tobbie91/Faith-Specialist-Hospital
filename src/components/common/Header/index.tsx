import React, { useState } from "react";
import { Link } from "gatsby";
import { FaithIcon } from "../../../assets/icons/FaithLogo";
import CloseIcon from "../../../assets/icons/CloseIcon";
import NavigationMenu from "./navigationMenu";
import MobileDropdown from "./MobileDropdown";
import { MobileSideMenu } from "../../../assets/icons/MobileSide";

interface HeaderProps {
  backGround?: string;
}

const Header = ({ backGround }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };
  return (
    //     <div
    //       className={`fixed  top-0 left-0 right-0 z-50 ${backGround} border-[1.5px] border-[#E2E2E2] lg:border-transparent w-full lg:max-w-screen-xxl xxl:mx-auto px-[4.44%]  `}
    //     >
    //       {/* Deskyop */}
    //       <div className="relative flex items-center px-[3.7%] lg:mx-auto lg:max-w-[1440px] justify-between py-[12px] lg:py-[16px] lg:px-0">
    //         <Link to="/">
    //           <FaithIcon />
    //         </Link>
    //         <div className="block lg:hidden ">
    //           <button onClick={toggleDropdown} className="mt-1">
    //             {isDropdownOpen ? <CloseIcon /> : <MobileSideMenu />}
    //           </button>
    //         </div>
    //         <div className="hidden lg:block">
    //           <NavigationMenu />
    //         </div>

    // <div className="hidden lg:flex w-[22.2%] h-12  items-center justify-center rounded-[4px] text-[16px] font-semibold bg-[#017B64] hover:bg-[linear-gradient(292.99deg,#0BBE95_-1.96%,#EE1433_100%)] cursor-pointer text-white whitespace-nowrap">
    // <Link to="/serviceOptions">
    //   Schedule an Appointment
    //   </Link>
    // </div>

    //       </div>
    //       {isDropdownOpen && (
    //     <MobileDropdown
    //       toggleFeatures={toggleFeatures}
    //       isFeaturesOpen={isFeaturesOpen}
    //     />
    // )}

    //     </div>

    <div
      className={`relative ${backGround} border-[1.5px] border-[#E2E2E2] lg:border-transparent max-w-screen-xxl xxl:mx-auto px-[4.44%]`}
    >
      {/* Deskyop */}
      <div className="relative flex items-center px-[4.1%] lg:mx-auto lg:max-w-[1440px] justify-between py-[12px] lg:py-[0px] lg:pt-[16px] lg:px-0">
        <Link to="/">
          <FaithIcon />
        </Link>
        <div className="block lg:hidden">
          <button onClick={toggleDropdown} className="mt-1">
            {isDropdownOpen ? <CloseIcon /> : <MobileSideMenu />}
          </button>
        </div>
        <div className="hidden lg:block">
          <NavigationMenu />
        </div>
        <div className="hidden lg:flex w-[22.2%] h-12  items-center justify-center rounded-[4px] text-[16px] font-semibold bg-[#017B64] hover:bg-[linear-gradient(292.99deg,#0BBE95_-1.96%,#EE1433_100%)] cursor-pointer text-white whitespace-nowrap">
          <Link to="/serviceOptions">Schedule an Appointment</Link>
        </div>
      </div>
      {isDropdownOpen && (
        <MobileDropdown
          toggleFeatures={toggleFeatures}
          isFeaturesOpen={isFeaturesOpen}
        />
      )}
    </div>
  );
};

export default Header;
