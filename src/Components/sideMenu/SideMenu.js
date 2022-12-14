import React, { useContext } from "react";
import Style from "./style";
import SideMenuContext from "../../Store/SideMenuContext";
import Button from "../Button/Button";

const SideMenu = () => {
  const { menuHandler } = useContext(SideMenuContext);

  return (
    <Style onClick={menuHandler}>
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
          stroke="white"
          stroke-width="4"
        />
        <line
          y1="-1"
          x2="42.45"
          y2="-1"
          transform="matrix(0.683157 0.730272 -0.43379 0.901014 1 2)"
          stroke="white"
          stroke-width="4"
        />
      </svg>
      <a href="#homeHeader">
        <div className="navBtns">Home</div>
      </a>
      <a href="#homeServices">
        <div className="navBtns">Services</div>
      </a>
      <a href="#homeGallery">
        <div className="navBtns">Gallery</div>
      </a>
      <a href="#homeTestimonials" id="sideContact">
        <Button dormant={true} className="contactUs">
          Contact Us
        </Button>
      </a>
    </Style>
  );
};

export default SideMenu;
