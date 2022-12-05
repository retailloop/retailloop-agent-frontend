import React from "react";

const SortIcon = ({ color, props }) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 4.667h12" stroke={color || "#3F12C4"} strokeLinecap="round" />
      <path
        opacity={0.34}
        d="M4 8h8"
        stroke={color || "#3F12C4"}
        strokeLinecap="round"
      />
      <path
        d="M6.667 11.333h2.666"
        stroke={color || "#3F12C4"}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SortIcon;
