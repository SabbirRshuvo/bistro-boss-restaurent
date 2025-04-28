import React, { useEffect, useState } from "react";
import SheardTitle from "../Sheared/SheardTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import coma from "../assets/coma.png";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import axios from "axios";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);
  return (
    <div>
      <div className="bg-white py-10 text-black ">
        <SheardTitle
          subHeading={"---What Our clients Say---"}
          heading={"testimonials"}
        />
        <section className="w-11/12   mx-auto">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col text-center items-center justify-center space-y-6">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <div className="flex w-10">
                    <img className="" src={coma} alt="" />
                    <img src={coma} alt="" />
                  </div>
                  <p className="w-10/12">{review.details}</p>
                  <h4 className="text-2xl font-semibold text-yellow-400">
                    {review.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
