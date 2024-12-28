// import React, { useState } from "react";
// import { Link } from "gatsby";
// import { navLinks } from "../../constants";
// import DropDownItem from "./DropDownItem";

// const NavigationMenu = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   // Handle clicking on a menu item to set the active state
//   const handleClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="relative">
//       <ul className="group flex flex-row lg:gap-[48px] text-[#666F89]">
//         {navLinks.map((item, i) => (
//           <li
//             key={i}
//             className="relative group"
//             onClick={() => handleClick(i)}
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

// export default NavigationMenu;
import React, { useState } from "react";
import { Link } from "gatsby";
import { navLinks } from "../../constants";
import DropDownItem from "./DropDownItem";

const NavigationMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      <ul className="group flex flex-row lg:gap-[48px] text-[#666F89]">
        {navLinks.map((item, i) => (
          <li
            key={i}
            className="relative group"
            onClick={() => handleClick(i)}
          >
            <Link
              to={item.to || "#"}
              className={`text-[16px] p-2 hover:text-[#017B64] transition duration-200 ${
                activeIndex === i
                  ? "text-[#017B64] border-b-4 border-[#017B64]"
                  : "text-black"
              }`}
            >
              {item.title}
            </Link>

            {item.subLinks && activeIndex === i && (
              <div className="absolute top-10 left-0 mt-2 w-[400px] bg-white shadow-lg rounded-lg z-10">
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
