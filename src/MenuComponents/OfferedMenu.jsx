import React from "react";
import SheardTitle from "../Sheared/SheardTitle";
import UseMenu from "../hooks/UseMenu";
import MenuItem from "../Sheared/MenuItem";
import { Link } from "react-router";

const OfferedMenu = () => {
  const [menu] = UseMenu();
  const offeredMenu = menu.filter((item) => item.category === "offered");
  return (
    <div className="max-w-7xl mx-auto my-6 md:my-12">
      <SheardTitle subHeading={"---Don't miss---"} heading={"today's offer"} />

      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {offeredMenu.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-16 items-center text-center justify-center">
        <Link
          to="/our_shop"
          className="btn btn-outline border-0 border-b-2 border-yellow-500  text-black uppercase"
        >
          order your favourite food
        </Link>
      </div>
    </div>
  );
};

export default OfferedMenu;
