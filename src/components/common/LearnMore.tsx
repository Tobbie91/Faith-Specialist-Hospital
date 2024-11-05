import { Link } from "gatsby";
import React from "react";

interface LearnMoreProps {
  className: string;
  text: any;
  path: string;
}

const LearnMore = ({ className, text, path }: LearnMoreProps) => {
  return (
    <>
      <div
        className={`h-[48px] cursor-pointer flex items-center justify-center rounded-[4px] ${className}`}
      >
        <a href={path}>{text}</a>
      </div>
    </>
  );
};

export default LearnMore;
