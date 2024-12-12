import React from "react";

const RightSlide = () => {
  return (
    <div>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_709_9016)">
          <path
            d="M4 31C4 15.536 16.536 3 32 3C47.464 3 60 15.536 60 31C60 46.464 47.464 59 32 59C16.536 59 4 46.464 4 31Z"
            fill="white"
          />
          <g clip-path="url(#clip0_709_9016)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.8417 36.6485C28.3861 36.1799 28.3861 35.4201 28.8417 34.9515L32.6834 31L28.8417 27.0485C28.3861 26.5799 28.3861 25.8201 28.8417 25.3515C29.2973 24.8828 30.036 24.8828 30.4916 25.3515L35.1583 30.1515C35.6139 30.6201 35.6139 31.3799 35.1583 31.8485L30.4916 36.6485C30.036 37.1172 29.2973 37.1172 28.8417 36.6485Z"
              fill="black"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_dd_709_9016"
            x="0"
            y="0"
            width="64"
            height="64"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_709_9016"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_709_9016"
              result="effect2_dropShadow_709_9016"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_709_9016"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_709_9016">
            <rect
              width="7"
              height="12"
              fill="white"
              transform="translate(28.5 25)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export { RightSlide };
