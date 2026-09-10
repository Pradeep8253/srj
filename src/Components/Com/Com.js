"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import '../Res/Res.css';
import { GiClick } from "react-icons/gi";

const Com = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span className="${className}">${index + 1}</span>`;
    },
  };

  const projects = [
    {
      title: "TREHAN IRISH",
      image: "tiris2.jpg",
      description: "Trehan IRIS: Six decades of excellence in real estate, delivering iconic landmarks like IRIS Tech Park and IRIS Broadway across Delhi-NCR. With over 100 projects and 15+ million sq ft developed, our legacy drives a future of innovation, quality, and unparalleled luxury living. Join us in shaping tomorrow's iconic structures.",
      link: "/commercial#tirish"
    },
    {
      title: "CRC FLAGSHIP",
      image: "crc.PNG",
      description: "CRC The Flagship 140A Noida: Premier commercial property featuring lockable and unlockable office spaces, premium serviced apartments, retail shops, and entertainment zones. Located on the Noida Expressway near BHUTANI CYBERTHUM, it offers a clubhouse, security, swimming pool, and garden.",
      link: "/commercial#crc"
    },
    {
      title: "BHUTANI",
      image: "bhutani.JPG",
      description: "Bhutani Group is a prominent Indian real estate developer known for its residential. Key developments include Technopark, Cyber Park, and Grandthum, featuring modern architecture and top-notch amenities. Renowned for fair deals and affordability, they lead in the retail and commercial sectors.",
      link: "/commercial#bhutani"
    },
    {
      title: "Ace Sector-153",
      image: "ace153.jpg",
      description: "A visionary commercial project in Sector 153 Noida on the Noida Expressway. Featuring two iconic towers with ground + 20 and ground + 21 floors. Spread over 20,000 sq.m., ACE 153 offers premium retail on the ground + 2 levels and is IGBC Gold Certified. RERA compliant (RERA REG NO. UPRERAPRJ423807).",
      link: "/commercial#ace153"
    },
    {
      title: "GOLDEN I",
      image: "gi0.jpg",
      description: "Golden I: Prelease Food Court at ₹120/sqft with MNC Brand, 600-seat capacity, and centralized AC. Independent shops starting at ₹125/sqft and office spaces with 12% assured return and 9-year lease guarantee. Prime location opposite IBM, with ample parking and close to Noida, FNG, and proposed metro station.",
      link: "/commercial#golden"
    },
  ];

  return (
    <>
      <div className="res-div-r">
        <div className="three">
          <h1>COMMERCIAL PROJECTS</h1>
        </div>
        <Swiper
        pagination={pagination}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper3"
      >
          {projects.map((project, index) => (
            <SwiperSlide className="ss-img" key={index}>
              <div className="card-group-r">
                <div className="card-r">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body-r">
                  <div className="f-l">
                    <h5 className="card-title3">
                      <Link className="linn" href={project.link}>
                        {project.title} <GiClick />
                      </Link>
                    </h5>
                    <h4 className="linn2">Click here</h4>
                  </div>
                    <p className="card-text3">{project.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Com;
