import React from "react";
import Style from "./style";
import HamburgerIcons from "../sideMenu/HamburgerIcons";
import Button from "../Button/Button";
import logo from "../../Assets/Logo 2.svg";

const NavBar = ({ isHeaderVisible }) => {
  return (
    <Style isHeaderVisible={isHeaderVisible}>
      <div className="logoCont">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navLinks">
        <li>
          <a href="#homeHeader">Home</a>
        </li>
        <li>
          <a href="#homeServices">Services</a>
        </li>
        <li>
          <a href="#homeGallery">Gallery</a>
        </li>
      </ul>
      <a href="#homeTestimonials">
        <Button dormant={true} className="contactUs">
          Contact Us
        </Button>
      </a>
      <HamburgerIcons />
    </Style>
  );
};

export default NavBar;
