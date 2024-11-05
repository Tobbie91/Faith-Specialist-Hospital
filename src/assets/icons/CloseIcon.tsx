import React from "react";

const CloseIcon = ({ size = "25" }: { size?: string }) => {
  return (
    <div className="cursor-pointer">
      <svg
        width={size}
        height={size}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 17L17.6975 6.81766"
          stroke="#212121"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.6975 17.0027L8 6.82031"
          stroke="#212121"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
