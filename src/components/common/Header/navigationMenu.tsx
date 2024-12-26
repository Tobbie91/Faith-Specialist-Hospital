import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router"; // Using @reach/router for routing
import { navLinks } from "../../constants";
import DropDownItem from "./DropDownItem";

const NavigationMenu = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Normalize the pathname to ensure no trailing slashes cause mismatches
  const normalizePath = (path: string = "") => {
    return path.endsWith("/") ? path : `${path}/`;
  };

  // Check if the link is currently active
  const isActive = (item: { to: string; subLinks?: any[] }) => {
    const normalizedPathname = normalizePath(location.pathname);

    // Normalize the 'to' path for comparison
    const normalizedTo = normalizePath(item.to || "");

    // Check for exact match or match for subLinks
    if (item.subLinks) {
      return (
        normalizedPathname === normalizedTo ||
        item.subLinks.some((subItem) => normalizedPathname.startsWith(normalizePath(subItem.to)))
      );
    }

    return normalizedPathname === normalizedTo;
  };

  useEffect(() => {
    // Directly set the active index based on the location.pathname
    //@ts-ignore
    const currentActiveIndex = navLinks.findIndex((item) => isActive(item));
    setActiveIndex(currentActiveIndex);
  }, [location.pathname]); // Dependency on location.pathname to trigger reactivity

  const handleLinkClick = (index: number) => {
    setActiveIndex(index); // Force the active state change immediately on click
  };

  return (
    <div className="relative">
      <ul className="group flex flex-row lg:gap-[48px] text-[#666F89]">
        {navLinks.map((item, i) => (
          <li key={i} className="relative group">
            <Link
              to={item.to || "#"}
              className={`text-[16px] p-2 transition duration-200 ${
                    //@ts-ignore
                isActive(item)
                  ? "text-[#017B64] border-b-4 border-[#017B64]" // Active link
                  : "text-black hover:text-[#017B64]" // Non-active link
              }`}
              onClick={() => handleLinkClick(i)} // Set active link immediately on click
            >
              {item.title}
            </Link>

            {/* Dropdown logic: Display if there's a match */}
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
