import React from "react";
import MenuBanner from "../MenuComponents/MenuBanner";
import OfferedMenu from "../MenuComponents/OfferedMenu";
import DesertMenu from "../MenuComponents/DesertMenu";
import SaladMenu from "../MenuComponents/SaladMenu";
import SoupMenu from "../MenuComponents/SoupMenu";
import PizzaMenu from "../MenuComponents/PizzaMenu";

const OurMenu = () => {
  return (
    <div>
      <MenuBanner />
      <OfferedMenu />
      <DesertMenu />
      <PizzaMenu />
      <SaladMenu />
      <SoupMenu />
    </div>
  );
};

export default OurMenu;
