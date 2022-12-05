import React from "react";

const ShopIcon = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 8c1.22 0 2.12-.993 2-2.213l-.44-4.454H6.447L6 5.787C5.88 7.007 6.78 8 8 8Z"
        stroke={props.color || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.207 8c1.346 0 2.333-1.093 2.2-2.433l-.187-1.834c-.24-1.733-.907-2.4-2.653-2.4H9.533L10 6.007C10.113 7.107 11.107 8 12.207 8ZM3.76 8c1.1 0 2.093-.893 2.2-1.993l.147-1.474.32-3.2H4.393c-1.746 0-2.413.667-2.653 2.4l-.18 1.834C1.427 6.907 2.413 8 3.76 8Z"
        stroke={props.color || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        opacity={0.4}
        stroke={props.color || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.007 7.48v2.993c0 2.993 1.2 4.193 4.193 4.193h3.593c2.994 0 4.194-1.2 4.194-4.193V7.48" />
        <path d="M8 11.333c-1.113 0-1.667.554-1.667 1.667v1.667h3.334V13c0-1.113-.554-1.667-1.667-1.667Z" />
      </g>
    </svg>
  );
};

export default ShopIcon;
