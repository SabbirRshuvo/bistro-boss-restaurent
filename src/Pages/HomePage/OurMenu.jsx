import React from "react";
import MenuBanner from "../../MenuComponents/MenuBanner";
import OfferedMenu from "../../MenuComponents/OfferedMenu";
import DesertMenu from "../../MenuComponents/DesertMenu";
import PizzaMenu from "../../MenuComponents/PizzaMenu";
import SaladMenu from "../../MenuComponents/SaladMenu";
import SoupMenu from "../../MenuComponents/SoupMenu";
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
