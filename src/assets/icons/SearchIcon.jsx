import React from "react";

const SearchIcon = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.667 14a6.333 6.333 0 1 0 0-12.667 6.333 6.333 0 0 0 0 12.667Z"
        stroke="#BFBEC2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="m14.667 14.667-1.334-1.334"
        stroke="#BFBEC2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
