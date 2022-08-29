import React from "react";
import HamburgerIconsStyle from "./HamburgerIconsStyle";

const HamburgerIcons = () => {
  return (
    <HamburgerIconsStyle className="hamburgerIcon_cont">
      <svg
        width="25"
        height="15"
        viewBox="0 0 25 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hamburgerIcon"
      >
        <path
          d="M1.90002 1.90002H24"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.90002 7.95001H24"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.90002 14H24"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        width="31"
        height="33"
        viewBox="0 0 31 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="closeIcon"
      >
        <line
          y1="-1"
          x2="42.45"
          y2="-1"
          transform="matrix(-0.683157 0.730272 0.43379 0.901014 30 2)"
          stroke="black"
          stroke-width="4"
        />
        <line
          y1="-1"
          x2="42.45"
          y2="-1"
          transform="matrix(0.683157 0.730272 -0.43379 0.901014 1 2)"
          stroke="black"
          stroke-width="4"
        />
      </svg>
    </HamburgerIconsStyle>
  );
};

export default HamburgerIcons;
