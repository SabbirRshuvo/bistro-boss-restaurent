import React from "react";
import UseMenu from "../hooks/UseMenu";
import MenuItem from "../Sheared/MenuItem";
import soupImg from "../assets/menu/soup-bg.jpg";
import { Link } from "react-router";
const SoupMenu = () => {
  const [menu] = UseMenu();
  const soupMenu = menu.filter((item) => item.category === "soup");
  return (
    <div className="my-6 md:my-12">
      <div className="w-full relative h-[500px] overflow-hidden justify-center flex items-center text-white">
        <img
          src={soupImg}
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="relative text-center items-center justify-center flex w-4/5 h-1/3 bg-black/40 flex-col">
          <h2 className="text-3xl uppercase font-thin md:text-2xl ">soup</h2>
          <p className="text-sm opacity-90">
            A soup is a vast area of dry, barren land. soups are either hot or
            cold environments with relatively little rainfall throughout the
            year.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {soupMenu.map((item) => (
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
    </div>
  );
};

export default SoupMenu;
