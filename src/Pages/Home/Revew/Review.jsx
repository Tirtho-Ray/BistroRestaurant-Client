import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

import '@smastrom/react-rating/style.css'
const Review = () => {
  const [renews, setRenew] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setRenew(data));
  }, []);
  return (
    <div className="mb-52">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {renews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-10 md:px-14 ">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="text-[8px] md:text-[20px] lg:text-[27px]">{review.details}</p>
              <h3 className="text-sm md:text-xl lg:text-3xl font-bold mt-2 ">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
