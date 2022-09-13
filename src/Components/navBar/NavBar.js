import React from "react";
import Style from "./style";
import HamburgerIcons from "../sideMenu/HamburgerIcons";
import logo from "../../Assets/Logo 2.svg";

const NavBar = () => {
  return (
    <Style>
      <div className="logoCont">
        <img src={logo} alt="logo" />
      </div>
      <HamburgerIcons />
    </Style>
  );
};

export default NavBar;
