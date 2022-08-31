import React, { useContext } from "react";
import Style from "./style";
import SideMenuContext from "../../Store/SideMenuContext";

const SideMenu = () => {
  const { openMenu } = useContext(SideMenuContext);
  return (
    <Style openMenu={openMenu}>
      <div className="navBtns">Home</div>
      <div className="navBtns">Home</div>
      <div className="navBtns">Home</div>
      <div className="navBtns">Home</div>
    </Style>
  );
};

export default SideMenu;
