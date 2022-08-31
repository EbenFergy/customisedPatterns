import React, { useState } from "react";
import SideMenuContext from "./SideMenuContext";

const SideMenuProvider = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuHandler = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const Provider = {
    menuHandler,
    openMenu,
  };
  return (
    <SideMenuContext.Provider value={Provider}>
      {props.children}
    </SideMenuContext.Provider>
  );
};

export default SideMenuProvider;
