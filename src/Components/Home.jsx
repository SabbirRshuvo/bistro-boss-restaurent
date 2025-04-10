import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Service from "./Service";
import PopularMenu from "./PopularMenu";
import Contact from "./Contact";
import Recomended from "./Recomended";
import Featured from "./Featured";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="my-20 max-w-7xl mx-auto">
        <Category />
      </div>
      <div className="max-w-7xl mx-auto">
        <Service />
      </div>
      <div className="my-20 max-w-7xl mx-auto">
        <PopularMenu />
      </div>
      <div className="max-w-7xl mx-auto">
        <Contact />
      </div>
      <div className="max-w-7xl mx-auto my-20">
        <Recomended />
      </div>
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
