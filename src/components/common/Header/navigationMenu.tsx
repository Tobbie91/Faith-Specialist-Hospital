// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "gatsby";
// import { navLinks } from "../../constants";
// import DropDown from "../../../assets/icons/DropdownIcon";
// import DropDownItem from "./DropDownItem";

// const NavigationMenu = () => {
//   const [showToggle, setShowToggle] = useState<boolean>(false);
//   const [activeIndex, setActiveIndex] = useState<number>();
//   const [index, setIndex] = useState<number>();
//   const dropDownRef = useRef(null);

//   const handleOnMouseOver = (title: string) => {
//     if (title === "Features") setShowToggle(!showToggle);
//   };

//   const handleOnMouseOverOutside = (i: number, showToggle: boolean) => {
//     if (showToggle) {
//       setShowToggle(true);
//       setActiveIndex(i);
//     }
//   };

//   const handleMouseLeave = () => {
//     setShowToggle(false);
//   };

//   useEffect(() => {
//     const currentPath = window.location.pathname;
//     const currentIndex = navLinks.findIndex(
//       (item) => item.titleTo === currentPath
//     );
//     setIndex(currentIndex);
//   }, []);

//   return (
//     <div className="relative">
//       <ul className="group flex flex-row lg:gap-[48px] text-[#666F89]">
//         {navLinks.map((item, i) => (
//           <div>
//             <div
//               className="relative"
//               onMouseEnter={() =>
//                 handleOnMouseOverOutside(i, item.showToggle ?? false)
//               }
//               onMouseLeave={handleMouseLeave}
//             >
//               <li
//                 className={`text-[black] p-2 ${
//                   item.title === "Features"
//                     ? "flex flex-row items-center gap-[8px]"
//                     : ""
//                 } text-[16px] hover:cursor-pointer`}
//                 key={i}
//               >
//                 <div
//                   className={`${
//                     index == i ? "font-semibold text-[#017B64]" : "font-medium"
//                   } text-center hover:text-[#017B64]`}
//                 >
//                   <Link to={item.to as unknown as any}>{item.title}</Link>
//                 </div>

//                 <span className="">{item.title === "The Hospital"}</span>
//               </li>

//               {activeIndex == i && showToggle ? (
//                 <div
//                   className={`absolute top-7 -left-60 flex justify-center`}
//                   ref={dropDownRef}
//                   onMouseOver={
//                     handleOnMouseOverOutside as unknown as React.MouseEventHandler<HTMLDivElement>
//                   }
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <DropDownItem />
//                 </div>
//               ) : (
//                 ""
//               )}
//             </div>
//             {index == i && (
//               <div className="flex justify-center mt-[9px]">
//                 <div className="flex justify-center w-[50px] border-[2px] border-[#017B64]" />
//               </div>
//             )}
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NavigationMenu;

import React, { useState } from "react";
import { Link } from "gatsby";
import { navLinks } from "../../constants";
import DropDownItem from "./DropDownItem";

const NavigationMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Handle mouse hover over menu item to show dropdown
  const handleMouseEnter = (index: number, hasDropdown: boolean) => {
    if (hasDropdown) {
      setActiveIndex(index);
    }
  };

  // Handle clicking on a menu item to toggle dropdown visibility
  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative">
      <ul className="group flex flex-row lg:gap-[48px] text-[#666F89]">
        {navLinks.map((item, i) => (
          <li
            key={i}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(i, !!item.subLinks)}
            onClick={() => handleClick(i)} 
          >
            <Link
              to={item.to || "#"}
              className={`text-[16px] ${
                item.subLinks ? "font-semibold hover:text-[#017B64]" : ""
              } text-black p-2`}
            >
              {item.title}
            </Link>

            {item.subLinks && activeIndex === i && (
              <div
                className="absolute top-10 left-0 mt-2 w-[400px] bg-white shadow-lg rounded-lg z-10"
                onMouseLeave={() => setActiveIndex(null)} 
              >
                <DropDownItem subLinks={item.subLinks} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;
