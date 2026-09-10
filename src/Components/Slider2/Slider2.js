"use client";
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import './Slider2.css';

const Slider2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);

  const slides = [
    { img: 'aw.jpeg', alt: 'slider1', title: 'Ace Sector 12', description: 'Using the latest technology and delivering high-quality projects on or before schedule' },
    { img: 'SL222.jpg', alt: 'slider2', title: 'Irish Platinum', description: 'Redefined the standard of luxury living with twin skyscrapers' },
    { img: 'v2.jpg', alt: 'slider3', title: 'Eldeco Sec 12', description: 'Having ultra-luxury apartments and well-developed infrastructure' },
    { img: 'vvip.JPG', alt: 'slider4', title: 'VVIP Home', description: 'Developing well-planned societies with amenities and green areas' },
    { img: 'sl1.jpg', alt: 'slider5', title: 'RG Luxury Homes', description: ' RG Luxury Homes provides all conveniences within the society.' },
    { img: 'sl2.jpg', alt: 'slider6', title: 'Saviour Vridhi', description: 'Saviour Vridhi is approved by all major financial institutions and banks' },
    { img: 'SL6.jpg', alt: 'slider7', title: 'Palm Olympia', description: 'Developed by renowned builders, it offers a blend of luxury, comfort, and convenience.' },
    { img: 'g12.jpg', alt: 'slider8', title: 'Godrej 146 Jardinia', description: 'Godrej Jardinia is poised to redefine luxury living in the region with its prime location' },
    { img: 'm3m.JPG', alt: 'slider9', title: 'M3M', description: 'Known for its luxury, residential, and commercial projects' },
    { img: 'vaibhav.JPG', alt: 'slider10', title: 'Vaibhav', description: 'Vaibhav is known for his well planned Insfracture' },
    { img: 'bhutani.JPG', alt: 'slider11', title: 'Bhutani', description: 'Luxurious real estate projects, including commercial and office spaces, retail spaces, and IT offices' },
    { img: 'crc.PNG', alt: 'slider12', title: 'CRC', description: 'CRC The Flagship is known for its modern architecture, amenities, and location' }
  ];

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="body-slider">
      <Swiper
        ref={mainSwiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Autoplay, Navigation]}
        className="mySwiper10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.img} className="sl-img" alt={slide.alt} />
              <div className="overlay2"></div>
              <div className="overlay-text">
                <h5 className="overlay-description">{slide.description}</h5>
                <h3 className="overlay-title">{slide.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="thumbnail-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={slide.img} alt={`thumb${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider2;




