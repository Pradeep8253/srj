"use client";
import "../Residentialmain/Residentialmain.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Residentialmain = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="res-div">
      <div className="three">
  <h1>RESIDENTIAL PROJECTS</h1>
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
                  <h5 className="card-title3">RG LUXURY HOMES</h5>
                  <p className="card-text3">
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
                  <h5 className="card-title3">IRISH PLATINUM</h5>
                  <p className="card-text3">
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
                  <h5 className="card-title3">SAVIOUR VRIDHI</h5>
                  <p className="card-text3">
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
          <SwiperSlide>
            <div className="card-group">
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">FUSION BROOK & RIVULET</h5>
                  <p className="card-text3">
                    Fusion The Brook & Rivulet by Fusion Buildtech offers
                    ultra-luxury 3 BHK residences in Sector 12, Greater Noida
                    West, Strategically located amidst greenery and near from
                    Kisan Chowk, it ensures a healthy lifestyle with superior
                    construction quality.
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">ELDICO LA VIDA BELLA</h5>
                  <p className="card-text3">
                    Eldeco La Vida Bella in Sector 12, Greater Noida (West),
                    offers luxurious living with spacious 3 and 4 BHK
                    apartments. Additional amenities like car parking,
                    gymnasium, and children's play area enhance the lifestyle
                    and having the good infrastructure.
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">PALM OLYMPIA</h5>
                  <p className="card-text3">
                    Palm Olympia Phase 2 in Greater Noida West offers 2/3 BHK
                    apartments.located near the Taj Expressway for convenient
                    access to key areas. Experience supreme living amidst
                    elegant architecture and lush surroundings; register now to
                    secure your slice of luxury.
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-group">
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">GODREJ</h5>
                  <p className="card-text3">
                  Godrej Properties offers luxury residences, blending innovation in every project. Awarded 'The Most Trusted Real Estate Brand, each RERA registered development ensures transparency. Explore offers starting from ₹3 Cr* for a prestigious home backed by a 122-year legacy.
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">ATS</h5>
                  <p className="card-text3">
                  Elevate your lifestyle with ATS Pristine Phase 2, Sector 150, Noida Expressway. Luxurious 3 & 4 BHK residences starting from ₹1.1 Cr*, approved by Uttar Pradesh RERA. Experience elegance, comfort, and convenience in every detail.
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">APEX</h5>
                  <p className="card-text3">
                  Experience luxury living in Ghaziabad's Indirapuram with Apex Group's D'RIO, featuring iconic architecture and unparalleled craftsmanship. Enjoy exclusive amenities like triple-height lobby, terrace club, and private living spaces, setting new standards of elegance in NCR.
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-group">
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">NIRALA ESTATE</h5>
                  <p className="card-text3">
                  Experience luxury at Nirala Estate Phase-2, Noida Extension with vaastu-compliant apartments, premium amenities, and 80% open green space. Enjoy seamless connectivity to Delhi, Noida, and Ghaziabad—contact us today for pricing and updates!
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">RG RESIDENCY MIRAGE</h5>
                  <p className="card-text3">
                  Experience luxurious living at RG Mirage Tower L in Sector 120, Noida. Offering 3 and 4 BHK apartments with top-notch amenities and excellent connectivity, this RERA-compliant project ensures a modern and convenient lifestyle. Discover your dream home today! 
                  </p>
                  <button className="button-3">Check Out</button>
                </div>
              </div>
              <div className="card">
                <img src="rg.jpg" className="card-img-top2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title3">NIRALA ASPIRE LOW RISE</h5>
                  <p className="card-text3">
                  E-CLASS NIRALA ASPIRE presents fully furnished 3 BHK low-rise flats in Sector 16B, Greater Noida West, with sizes ranging from 1579 SQFT to 1596 SQFT. Featuring elite-class amenities and excellent connectivity, it offers stress-free living.
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

export default Residentialmain;