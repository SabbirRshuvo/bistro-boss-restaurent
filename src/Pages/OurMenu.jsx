import React from "react";
import { Helmet } from "react-helmet-async";
import MenuBanner from "../MenuComponents/MenuBanner";
import OfferedMenu from "../MenuComponents/OfferedMenu";
import DesertMenu from "../MenuComponents/DesertMenu";
import SaladMenu from "../MenuComponents/SaladMenu";
import SoupMenu from "../MenuComponents/SoupMenu";
import PizzaMenu from "../MenuComponents/PizzaMenu";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu| Bistro Boss</title>
      </Helmet>
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
