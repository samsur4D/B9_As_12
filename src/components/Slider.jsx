import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import one from "../assets/638078259533200000.jfif";
import three from "../assets/three.jpg";
import two from "../assets/six.webp";
import six from "../assets/four.webp";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Banner from "./Banner";

export default function App() {
  return (
    <div className="relative z-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Banner
            image={one}
            text="Every pet deserves a second chance. Adopt today!"
          ></Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={three}
            text="Open your heart, open your home. Adopt a pet."
          ></Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={two}
            text="Find your new best friend today. Adopt a pet!"
          ></Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={six}
            text="Your new family member is waiting. Adopt now!"
          ></Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={one}
            text="Every pet deserves a second chance. Adopt today!"
          ></Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={three}
            text="Open your heart, open your home. Adopt a pet."
          ></Banner>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
