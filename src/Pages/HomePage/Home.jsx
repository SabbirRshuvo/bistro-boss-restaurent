import React from "react";
import Banner from "../../HomeComponents/Banner";
import Category from "../../HomeComponents/Category";
import Service from "../../HomeComponents/Service";
import PopularMenu from "../../HomeComponents/PopularMenu";
import ConnectNum from "../../HomeComponents/ConnectNum";
import Recomended from "../../HomeComponents/Recomended";
import Featured from "../../HomeComponents/Featured";
import Testimonials from "../../HomeComponents/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="space-y-10 md:space-y-20 max-w-5xl mx-auto">
        <Category />
        <Service />
        <PopularMenu />
        <ConnectNum />
        <Recomended />
      </div>
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
