import React, { useContext } from "react";
import HamburgerIconsStyle from "./HamburgerIconsStyle";
import SideMenuContext from "../../Store/SideMenuContext";

const HamburgerIcons = () => {
  const { openMenu, menuHandler } = useContext(SideMenuContext);

  return (
    <HamburgerIconsStyle
      className="hamburgerIcon_cont"
      onClick={menuHandler}
      openMenu={openMenu}
    >
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
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.90002 7.95001H24"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.90002 14H24"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </HamburgerIconsStyle>
  );
};

export default HamburgerIcons;
