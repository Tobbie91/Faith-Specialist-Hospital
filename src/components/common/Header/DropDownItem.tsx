import React from "react";
import { Link } from "gatsby";
//@ts-ignore
const DropDownItem = ({ subLinks }) => {
  return (
    <ul className="bg-white shadow-md rounded-sm z-50 mt-[1em]">
      {subLinks.map((subLink: { id: React.Key | null | undefined; to: string; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
        <li key={subLink.id} className="px-4 py-4 hover:bg-gray-100">
          <Link
            to={subLink.to}
            className="block text-gray-700 hover:text-[#017B64]"
          >
            {subLink.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDownItem;
