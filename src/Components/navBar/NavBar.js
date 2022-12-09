import React from "react";
import Style from "./style";
import HamburgerIcons from "../sideMenu/HamburgerIcons";
import logo from "../../Assets/Logo 2.svg";

const NavBar = ({ isHeaderVisible }) => {
  return (
    <Style isHeaderVisible={isHeaderVisible}>
      <div className="logoCont">
        <img src={logo} alt="logo" />
      </div>

      <HamburgerIcons />
    </Style>
  );
};

export default NavBar;
