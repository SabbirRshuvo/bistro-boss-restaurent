import React from "react";
import ShopBanner from "../../ShopComponents/ShopBanner";
import ShopCategory from "../../ShopComponents/ShopCategory";

const OurShop = () => {
  return (
    <div>
      <ShopBanner />
      <div className="max-w-5xl mx-auto">
        <ShopCategory />
      </div>
    </div>
  );
};

export default OurShop;
