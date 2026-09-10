"use client";
import "../Residentialmain/Residentialmain.css";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Plots = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="res-div two">
      <div className="three">
  <h1>PLOTS</h1>
</div>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper3"
        >
          <SwiperSlide>
            <div className="card-group">
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">Ace Expressway</h5>
                  <p className="card-text1">
                    RG Luxury Homes in Sec-16B, Noida Extension presents 3 BHK
                    apartments (1175 sq. ft.) with complimentary modular
                    kitchen, ACs, wardrobes, covered parking, and 1 kva power
                    backup, amidst serene green surroundings.
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">XXXXXXXXX</h5>
                  <p className="card-text1">
                    Irish Platinum, the latest venture by Irish Group in Sector
                    10, Greater Noida West, offers 3/4 BHK apartments designed
                    for luxurious yet affordable living. Boasting modern
                    amenities, it promises a high standard of living in a
                    strategic location.
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">XXXXXXXX</h5>
                  <p className="card-text1">
                    Saviour Vridhi, a project by M/s Saviour Builders Pvt. Ltd.
                    (Saviour Group), stands as a testament to their commitment
                    in real estate development. In Sector - 16, Greater Noida
                    West, close to essential amenities like metro stations,
                    schools, hospitals.
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </>
  );
};

export default Plots;
