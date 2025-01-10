import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { navLinks } from "../../constants";
import DropDownItem from "./DropDownItem";

const NavigationMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [index, setIndex] = useState<number>();
  const [showToggle, setShowToggle] = useState<boolean>(false);
  const dropDownRef = useRef(null);

  // Handle clicking on a menu item to set the active state
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleOnMouseOverOutside = (i: number, showToggle: boolean) => {
    if (showToggle) {
      setShowToggle(true);
      setActiveIndex(i);
    }
  };

  const handleMouseLeave = () => {
    setShowToggle(false);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentIndex = navLinks.findIndex(
      (item) => item.titleTo === currentPath
    );
    setIndex(currentIndex);
  }, []);

//   return (
//     <div className="relative">
//       <ul className="group flex flex-row lg:gap-[48px] text-[#666F89]">
//         {navLinks.map((item, i) => (
//           <li
//             key={i}
//             className="relative group"
//             // onClick={() => handleClick(i)}
//             onMouseEnter={() => handleOnMouseOverOutside(i, item.showToggle)}
//             onMouseLeave={handleMouseLeave}
          
//           >
//             <Link
//               to={item.to || "#"}
//               className={`text-[16px] p-2 ${
//                 item.subLinks ? "" : ""
//               } p-2 ${
//                 activeIndex === i && !item.subLinks
//                   ? "text-[#017B64] border-b-4 border-[#017B64]"
//                   : "text-black"
//               }
//               hover:text-[#017B64] transition duration-200`}
//             >
//               {item.title}
//             </Link>

//             {item.subLinks && activeIndex === i && (
//               <div className="absolute top-10 left-0 mt-2 w-[400px] bg-white shadow-lg rounded-lg z-10">
//                 <DropDownItem subLinks={item.subLinks} />
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

return (
  <div className="relative">
    <ul className="group flex flex-row lg:gap-[48px] ">
      {navLinks.map((item, i) => (
        <div>
          <div
            key={i}
            className="relative z-9999"
            onMouseEnter={() => handleOnMouseOverOutside(i, item.subLinks)}
            onMouseLeave={handleMouseLeave}
          >
            <li
              className={`text-[black] p-2 ${
                item.title === "Features"
                  ? "flex flex-row items-center gap-[8px]"
                  : ""
              } text-[16px] hover:cursor-pointer`}
              key={i}
            >
              <div
                className={`${
                  index == i ? "font-semibold text-[#666F89]" : "font-medium"
                } text-center hover:text-[#017B64]`}
              >
                <Link to={item.to as unknown as any}>{item.title}</Link>
              </div>

              {/* <span className="">
                {item.title === "Features" ? <DropDownIcon /> : ""}
              </span> */}
            </li>

            {activeIndex == i && showToggle ? (
              <div
                className={`absolute top-8 -left-90 flex justify-center w-[450px] z-90`}
                ref={dropDownRef}
                onMouseOver={
                  handleOnMouseOverOutside as unknown as React.MouseEventHandler<HTMLDivElement>
                }
                onMouseLeave={handleMouseLeave}
              >
              <DropDownItem subLinks={item.subLinks} />
              </div>
            ) : (
              ""
            )}
          </div>
          {index == i && (
            <div className="flex justify-center mt-[1em]">
              <div className="flex justify-center w-[100px] border-[2px] border-[#017B64]" />
            </div>
          )}
        </div>
      ))}
    </ul>
  </div>
);
};

export default NavigationMenu;
