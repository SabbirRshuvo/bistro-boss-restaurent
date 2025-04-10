import React from "react";
import SheardTitle from "../Sheared/SheardTitle";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";

const Category = () => {
  return (
    <div>
      <SheardTitle
        subHeading={"---From 11:am to 10.00pm---"}
        heading={"order online"}
      />
      <section>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img className="w-full object-cover" src={slide1} alt="" />
              <div className="absolute bottom-2 left-1/2   -translate-x-1/2  text-2xl uppercase text-white">
                salads
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="w-full  object-cover" src={slide2} alt="" />
              <div className="absolute bottom-2 left-1/2   -translate-x-1/2  text-2xl uppercase text-white">
                pizza
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="w-full  object-cover" src={slide3} alt="" />
              <div className="absolute bottom-2 left-1/2   -translate-x-1/2  text-2xl uppercase text-white">
                desert
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="w-full  object-cover" src={slide4} alt="" />
              <div className="absolute bottom-2 left-1/2   -translate-x-1/2  text-2xl uppercase text-white">
                cake
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
