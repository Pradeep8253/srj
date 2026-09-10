"use client";
import "../Commercialmain/Commercialmain.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Commercialmain = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="res-divc three">
      <div className="three">
  <h1>COMMERCIAL PROJECTS</h1>
</div>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper3c"
        >
          <SwiperSlide>
            <div className="card-groupc">
              <div className="card">
                <img src="rg.jpg" className="card-img-top2c" alt="..." />
                <div className="card-bodyc">
                  <h5 className="card-title2c">TREHAN IRISH</h5>
                  <p className="card-textc">
                    With over six decades of experience, Trehan IRIS is a
                    pioneer in functional and sustainable real estate
                    development, having delivered iconic landmarks like IRIS
                    Tech Park and IRIS Cyber Tower. Fueled by a legacy of
                    excellence and strong relationships.
                  </p>
                  <button className="button-3c">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2c" alt="..." />
                <div className="card-bodyc">
                  <h5 className="card-title2c">CRC Flagship</h5>
                  <p className="card-textc">
                    NX ONE Group offers solutions across sectors, prioritizing
                    sustainability and timely delivery. Key projects like NX
                    BYTE and NX Studios feature modern amenities, superior
                    construction, and strategic locations. RERA Registration
                    Number: UPRERAPRJ4746.
                  </p>
                  <button className="button-3c">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2c" alt="..." />
                <div className="card-bodyc">
                  <h5 className="card-title2c">Bhutani</h5>
                  <p className="card-textc">
                    For 30 years, PKS Group has built world-class residential,
                    commercial, and retail spaces in Delhi-NCR, earning trust
                    and admiration. Renowned for delivering over 20,75,000 Sq.
                    feet of residential and 10,00,000 Sq. feet of commercial
                    properties in Noida Extension.
                  </p>
                  <button className="button-3c">Check Out</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-groupc">
              <div className="card">
                <img src="rg.jpg" className="card-img-top2c" alt="..." />
                <div className="card-bodyc">
                  <h5 className="card-title2c">ACE Sector-150</h5>
                  <p className="card-textc">
                    Experience gastronomic paradise at Rise Food Mall, Sector 1,
                    Greater Noida West. Limited apartments available with
                    exclusive return offer*. Don't miss your chance to invest in
                    culinary delight and lucrative returns. Limited apartments
                    available with exclusive return.
                  </p>
                  <button className="button-3c">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2c" alt="..." />
                <div className="card-bodyc">
                  <h5 className="card-title2c">Golden I</h5>
                  <p className="card-textc">
                    Fusion Ufairia in Greater Noida West offers a vibrant
                    commercial project on a 3-acre land, featuring retail
                    galleria, corporate units, banquet halls, food courts, gyms,
                    and more, located along the high street with metro
                    connectivity.
                  </p>
                  <button className="button-3c">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2c" alt="..." />
                <div className="card-bodyc">
                  <h5 className="card-title2c">GOLDEN I</h5>
                  <p className="card-textc">
                    Unlock the potential of your business at Golden I, where
                    innovation meets opportunity. Discover office spaces from
                    325 Sqft* and retail shops from 64 Lakhs*. Don't miss out on
                    securing your place in this thriving commercial landscape!
                  </p>
                  <button className="button-3c">Check Out</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Commercialmain;
