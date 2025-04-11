import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Service from "./Service";
import PopularMenu from "./PopularMenu";
import Contact from "./Contact";
import Recomended from "./Recomended";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Bistro Boss</title>
      </Helmet>
      <Banner />
      <div className="md:my-20 my-10 max-w-7xl mx-auto">
        <Category />
      </div>
      <div className="max-w-7xl mx-auto">
        <Service />
      </div>
      <div className="md:my-20 my-10 max-w-7xl mx-auto">
        <PopularMenu />
      </div>
      <div className="max-w-7xl mx-auto mt-4">
        <Contact />
      </div>
      <div className="max-w-7xl mx-auto md:my-20 my-10">
        <Recomended />
      </div>
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
