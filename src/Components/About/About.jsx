"use client";
import React, { useRef, useState } from "react";
import "../About/About.css";
import Slider from "react-slick";
import Modal from "react-modal";
import Link from "next/link";
import Chatbox from "../Chatbox/Chatbox";
import { GiClick } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import You from "../You/You";
import You2 from "../You2/You2";

Modal.setAppElement("#root");

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handlePlayClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const calladmin = () => {
    window.location.href = "tel:+919555768358";
  };

  const images = [
    "Sl1.jpg",
    "Sl2.jpg",
    "Sl3.jpg",
    // Add your image paths here
  ];

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="div-all-about">
        <div className="container-as">
          <div className="content-as">
            <h2>About Us</h2>
            <p>
              We are a real estate firm with over 20 years of expertise. Our
              main goal is to provide amazing locations to our partners and
              clients. We are a real estate firm with over 20 years of
              expertise. Our main goal is to provide amazing locations to our
              partners and clients. We are a real estate firm with over 20 years
              of expertise. Our main goal is to provide amazing locations to our
              partners and clients.
            </p>
            <div className="lista">
              <ul>
                <li>
                  <FaCheckCircle className="icc" /> Real estate services
                </li>
                <li>
                  <FaCheckCircle className="icc" /> Satisfaction guarantee
                </li>
                <li>
                  <FaCheckCircle className="icc" /> Professional team
                </li>
                <li>
                  <FaCheckCircle className="icc" /> Always on time
                </li>
              </ul>
              <div className="call-button-as">
                <img className="oo" src="fp.png" alt="Call" />
                <span>Call Us </span>
                <p className="nn" onClick={calladmin}>
                  +919555768358
                </p>
              </div>
            </div>
          </div>
          <div className="app-pp">
            <div className="icon-onclick-pp" onClick={handlePlayClick}>
              <div className="icon-back-pp">
                <FaPlayCircle className="icon-pl-pp" />
              </div>
            </div>

            {showPopup && (
              <div className="popup-pp">
                <div className="popup-content-pp">
                  <span className="close-btn-pp" onClick={handleClosePopup}>
                    &times;
                  </span>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/yamUv0bpiDw?si=X7RWFGTzDMIcSGEb"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          <h5 className="hh">Slide..</h5>
          <div className="slider-arrow">
            <div className="slider-content-pp">
              <GiClick className="icon-pl-pp2" />
             
            </div>
           
          </div>
         
          <div className="slider-as">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwipera"
            >
              <SwiperSlide className="swipersl">
                <img src="p2.jpeg" />
              </SwiperSlide>
              <SwiperSlide className="swipersl">
                <img src="P1.jpeg" />
              </SwiperSlide>
              <SwiperSlide className="swipersl">
                <img src="https://img.freepik.com/free-photo/door-opening-revealing-beautiful-city_23-2149768547.jpg?t=st=1720702839~exp=1720706439~hmac=809c9ab75684730ea2f0bd54fdb6d0ff560f54bd0f6af207863bab156958992d&w=740" />
              </SwiperSlide>
              <SwiperSlide className="swipersl">
                <img src="https://img.freepik.com/free-photo/hong-kong-apartment-block_1359-433.jpg?t=st=1720703027~exp=1720706627~hmac=afadad448af58d75339785609b0b4d060134d1c372bbc405d5d319d72ae25d01&w=740" />
              </SwiperSlide>
              <SwiperSlide className="swipersl">
                <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?t=st=1720703065~exp=1720706665~hmac=2bdba96fd7f311329e9624a7331c317fea36144ebaea3a7535de569cc66955f9&w=740" />
              </SwiperSlide>
              <SwiperSlide className="swipersl">
                <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799741.jpg?t=st=1720703102~exp=1720706702~hmac=3eb4c75c69dc333f0f4514aba12e019730196084cfd6bccf652a9969e80d622d&w=740" />
              </SwiperSlide>
            </Swiper>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="YouTube Video"
            className="modal-as"
            overlayClassName="overlay-as"
          >
            <button onClick={closeModal} className="close-button-as">
              Close
            </button>
            <div className="video-wrapper-as">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Modal>
        </div>

        {/*-<div className="full-about">
            <div className="head-about">
              <div className="div-text">
                <h1 className="head-text">
                  About <span className="head-text-span">US</span>
                </h1>
                <h3 className="head-text-h3">Our Dedication to Superior Quality</h3>
                <h4 className="head-text-h4">
                  Discover Our Cutting-Edge and Luxurious Real Estate Developments
                </h4>
                <p className="head-text-p">
                  We aim to revolutionize contemporary living with groundbreaking
                  designs, superior quality, and a strong emphasis on
                  sustainability. Our real estate projects are designed to offer
                  luxurious, comfortable, and practical spaces tailored to meet the
                  varied requirements of our clients. Each project embodies our
                  commitment to excellence, with every detail meticulously planned
                  and skillfully executed. Delve into our portfolio to experience
                  the seamless integration of elegance and functionality in our
                  thoughtfully designed properties.
                </p>
              </div>
            </div>
          </div>
          -*/}
        <You2 />
        <div className="about-body">
          <div className="about-section">
            <div className="inner-container">
              <h1>A PLACE WHERE MEMORIES FLOURISH AND LAUGHTER RESONATES</h1>
              <p className="text">
                RG Luxury Homes Phase II, a landmark residential project located
                in Sector-16B, Greater Noida West. This remarkable development
                aims to offer a magnificent living experience within nature's
                embrace, presenting stunning views of verdant landscapes.
                Experience the peace of being immersed in nature as you enter
                these 3 BHK apartments, starting at 1175 sq. ft., where you can
                enjoy the invigorating natural breeze that flows through the
                interiors all year round.
              </p>
            </div>
          </div>
        </div>
        <div className="divide-a"></div>
        <div className="about-bodyr">
          <div className="about-sectionr">
            <div className="inner-containerr">
              <h1>EXPERIENCE THE HIGH LIFE</h1>
              <p className="textr">
                The project offers modern amenities and advanced safety features
                for a comfortable and secure living environment. Experience
                peace of mind with top-tier facilities and safety measures. Live
                luxuriously with all the conveniences and security you need.
                Enjoy a vibrant community and a wide array of recreational
                options. Indulge in the perfect blend of elegance and comfort,
                where luxury meets lifestyle. Make every day a pleasure in
                thoughtfully designed spaces that promote relaxation and
                well-being.
              </p>
            </div>
          </div>
        </div>
        <section className="team-section">
          <h2 className="section-title">
            Our <span className="section-title-span">Expert</span>
          </h2>
          <hr className="section-divider" />
          <p className="section-description">Contact Our Sales Agents</p>
          <div className="team-container">
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://img.freepik.com/free-photo/young-businessman-happy-expression_1194-1554.jpg?t=st=1718781212~exp=1718784812~hmac=a4d44151595d2a3bfca1eead2c7a1d3921191969533e633e6d6267c590aa9d7e&w=826"
                  alt="expert"
                />
              </div>
              <div className="member-info bg-red">
                <h3 className="member-name">Let's Connect</h3>
                <p className="member-description">
                  Reach out to us via phone for personalized guidance and
                  assistance in navigating the complexities of the real estate
                  market. Let our experienced team help you achieve your
                  property goals. Call us now!
                </p>
                <div className="div-call">
                  <Link href="/contact">
                    <button className="butt-nav1">Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Chatbox />
      </div>
    </>
  );
};

export default About;
