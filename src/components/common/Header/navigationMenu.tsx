import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { navLinks } from "../../constants";


const NavigationMenu = () => {
  const [showToggle, setShowToggle] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>();
  const [index, setIndex] = useState<number>();
  const dropDownRef = useRef(null);

  const handleOnMouseOver = (title: string) => {
    if (title === "Features") setShowToggle(!showToggle);
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

  return (
    <div className="relative">
      <ul className="group flex flex-row lg:gap-[48px] text-[#666F89]">
        {navLinks.map((item, i) => (
          <div>
            <div
              key={i}
              className="relative"
              onMouseEnter={() => handleOnMouseOverOutside(i, item.showToggle)}
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
                    index == i ? "font-semibold text-[#017B64]" : "font-medium"
                  } text-center hover:text-[#017B64]`}
                >
                  <Link to={item.to as unknown as any}>{item.title}</Link>
                </div>

                {/* <span className="">
                  {item.title === "Features" ? <DropDown /> : ""}
                </span> */}
              </li>

              {activeIndex == i && showToggle ? (
                <div
                  className={`absolute top-7 -left-60 flex justify-center`}
                  ref={dropDownRef}
                  onMouseOver={
                    handleOnMouseOverOutside as unknown as React.MouseEventHandler<HTMLDivElement>
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {/* <DropDownItem onCloseToggle={() => setShowToggle(false)} /> */}
                </div>
              ) : (
                ""
              )}
            </div>
            {index == i && (
              <div className="flex justify-center mt-[9px]">
                <div className="flex justify-center w-[50px] border-[2px] border-[#017B64]" />
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;
