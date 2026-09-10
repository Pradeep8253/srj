"use client";
import "../Slider/Slider.css";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <div className="body-slider">
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
            <div className="slide-content">
              <img src="aw.jpeg" className="sl-img" alt="slider1" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for Ace Sector 12</h5>
                <h3 className="overlay-title">Ace Sector 12</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="iris.jpg" className="sl-img" alt="slider2" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for Irish Platinum</h5>
                <h3 className="overlay-title">Irish Platinum</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="dummy.jpeg" className="sl-img" alt="slider3" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Text hbfjihifvhfkonvjihfuihi</h5>
                <h3 className="overlay-title">Eldeco Sec 12</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="dummy.jpeg" className="sl-img" alt="slider4" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for VVIP Home</h5>
                <h3 className="overlay-title">VVIP Home</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="sl1.jpg" className="sl-img" alt="slider5" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for RG Luxury Homes</h5>
                <h3 className="overlay-title">RG Luxury Homes</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="sl2.jpg" className="sl-img" alt="slider6" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for Saviour Vridhi</h5>
                <h3 className="overlay-title">Saviour Vridhi</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="dummy.jpeg" className="sl-img" alt="slider7" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for Palm Olympia</h5>
                <h3 className="overlay-title">Palm Olympia</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="dummy.jpeg" className="sl-img" alt="slider8" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for Godrej 146 Jardinia</h5>
                <h3 className="overlay-title">Godrej 146 Jardinia</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="dummy.jpeg" className="sl-img" alt="slider9" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for M3M</h5>
                <h3 className="overlay-title">M3M</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="dummy.jpeg" className="sl-img" alt="slider10" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for Vaibhav</h5>
                <h3 className="overlay-title">Vaibhav</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="dummy.jpeg" className="sl-img" alt="slider11" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for Bhutani</h5>
                <h3 className="overlay-title">Bhutani</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src="dummy.jpeg" className="sl-img" alt="slider12" />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">Description for C&C</h5>
                <h3 className="overlay-title">C&C</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
