import React from 'react';
import "./Home.css"
import slider1 from "../Img/homeBanner1.jpg"
import slider2 from "../Img/homeBanner2.jpg"
import slider3 from "../Img/homeBanner3.jpg"
import slider4 from "../Img/homeBanner4.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
    return (
        <div>

            <section id='home-banner-section'>
        <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide><img className='sliderImg' src={slider1}></img></SwiperSlide>
        <SwiperSlide><img className='sliderImg' src={slider2}></img></SwiperSlide>
        <SwiperSlide><img className='sliderImg' src={slider3}></img></SwiperSlide>
        <SwiperSlide><img className='sliderImg' src={slider2}></img></SwiperSlide>
        <SwiperSlide><img className='sliderImg' src={slider4}></img></SwiperSlide>
        <SwiperSlide><img className='sliderImg' src={slider3}></img></SwiperSlide>

      </Swiper>

            </section>
           
        </div>
    );
};

export default Home;