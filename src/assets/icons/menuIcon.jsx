import React from "react";

const MenuIcon = (props) => {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 7h18"
        stroke="#3F12C4"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        opacity={0.34}
        d="M3 12h18"
        stroke="#3F12C4"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M3 17h18"
        stroke="#3F12C4"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuIcon;
