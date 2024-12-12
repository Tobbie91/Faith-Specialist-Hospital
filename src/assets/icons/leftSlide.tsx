import React from "react";

const LeftSlide = () => {
  return (
    <div>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_709_9013)">
          <path
            d="M4 31C4 15.536 16.536 3 32 3C47.464 3 60 15.536 60 31C60 46.464 47.464 59 32 59C16.536 59 4 46.464 4 31Z"
            fill="white"
          />
          <g clip-path="url(#clip0_709_9013)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.6583 25.3515C34.1139 25.8201 34.1139 26.5799 33.6583 27.0485L29.8166 31L33.6583 34.9515C34.1139 35.4201 34.1139 36.1799 33.6583 36.6485C33.2027 37.1172 32.464 37.1172 32.0084 36.6485L27.3417 31.8485C26.8861 31.3799 26.8861 30.6201 27.3417 30.1515L32.0084 25.3515C32.464 24.8828 33.2027 24.8828 33.6583 25.3515Z"
              fill="black"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_dd_709_9013"
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
              result="effect1_dropShadow_709_9013"
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
              in2="effect1_dropShadow_709_9013"
              result="effect2_dropShadow_709_9013"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_709_9013"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_709_9013">
            <rect
              width="7"
              height="12"
              fill="white"
              transform="translate(27 25)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export { LeftSlide };
