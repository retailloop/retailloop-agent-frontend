import React from "react";

const HomeIcon = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.333 14.667h13.334"
        stroke={props.color || "#3F12C4"}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.967 14.667 2 6.647c0-.407.193-.794.513-1.047L7.18 1.967a1.34 1.34 0 0 1 1.64 0l4.667 3.626c.326.254.513.64.513 1.054v8.02"
        stroke={props.color || "#3F12C4"}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M10.333 7.333H5.667c-.554 0-1 .447-1 1v6.334h6.666V8.333c0-.553-.446-1-1-1Z"
        stroke={props.color || "#3F12C4"}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.667 10.833v1"
        stroke={props.color || "#3F12C4"}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M7 5h2"
        stroke={props.color || "#3F12C4"}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
