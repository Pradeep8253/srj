"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Res/Res.css";
import Link from "next/link";
import { GiClick } from "react-icons/gi";

const Res = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span className="${className}">${index + 1}</span>`;
    },
  };

  const projects = [
    {
      title: "RG LUXURY HOMES",
      image: "sl1.jpg",
      link: "/residential#rg",
      description:
        "RG Luxury Homes, Sec-16B, Noida Extension: Iconic 3 BHK apartments (1175 sq. ft.) with free modular kitchen, ACs, wardrobes, and covered parking. Enjoy a tranquil lifestyle with outdoor amenities like a playground, swimming pool, and fitness zone. RERA No. UPRERAPRJ448790.",
    },
    {
      title: "IRISH PLATINUM",
      image: "SL222.jpg",
      link: "/residential#irish",
      description:
        "Irish Platinum, Sector 10, Noida Extension: Luxurious 3/4 BHK apartments by the renowned Irish Group, designed for affordable luxury. Enjoy modern amenities like a clubhouse, swimming pool, and landscaped gardens, with excellent metro connectivity. RERA No. UPRERAPRJ503189/03/2024.",
    },
    {
      title: "SAVIOUR VRIDHI",
      image: "sl2.jpg",
      link: "/residential#saviour",
      description:
        "Saviour Vridhi, Sector 16, Greater Noida West: Premium 2BHK & 2BHK + Study apartments by Saviour Builders Pvt. Ltd., offering outstanding features. Located near metro stations, top schools, colleges, multi-specialty hospitals, and a 7.5-acre park. Experience luxury and convenience in Noida Extension.",
    },
    {
      title: "Ace Sector-12",
      image: "aw.jpeg",
      link: "/residential#ace12",
      description:
        "ACE Sector 12, Noida Extension: Perfectly situated in Sector 12, this new launch offers easy access to top schools, hospitals, shopping centers, and entertainment options. Enjoy excellent connectivity to major highways, including FNG Expressway and NH-24. Your dream home awaits in this prime locality.",
    },
    {
      title: "ELDECO LA VEDA BELLA",
      image: "v.jpg",
      link: "/residential#eldeco",
      description:
        "Eldeco La Vida Bella, Sector 12, Greater Noida West: Luxurious 3/4 BHK apartments with modern amenities like all-weather air conditioning, rooftop swimming pool, and double-height air-conditioned lobby. Strategically located near the Greater Noida Expressway and Okhla industrial area for excellent connectivity.",
    },
    {
      title: "VVIP Homes",
      image: "vvip.JPG",
      link: "/residential#vvip",
      description:
        "VVIP Homes, Greater Noida West: Luxurious 2/3/4 BHK apartments spread across 8 acres with 81% open area and 2 sides open. Enjoy a luxurious clubhouse with indoor games, an in-house theatre, an ultra-modern gym, a spa, and a sauna. Experience complete relaxation and recreation. RERA No. UPRERAPRJ3977.",
    },
    {
      title: "Spring Elmas",
      image: "el.jpg",
      link: "/residential#spring",
      description:
        "Spring Elmus, Sector 12, Greater Noida West: Enjoy a blessed lifestyle with breathtaking luxury amenities in NCR's celebrated location. Live peacefully with sunlight mornings and family dinners in a heavenly dining room, hospitals, and excellent connectivity via FNG Expressway and NH-24. RERA No. UPRERAPRJ274689. ",
    },
    {
      title: "Elite Sector-12",
      image: "eli.jpeg",
      link: "/residential#elite",
      description:
        "Elite X  RERA- UPRERAPRJ916631/02/2024. Located in Sector 10 Noida Extension, Elite X by Elite Group combines modernity and luxury with 3 and 4 BHK apartments. Featuring 6 towers with 4 units per floor, sizes range from 1800 to 2600 sq.ft. Amenities include a world-class gym, and vibrant landscaped greens. ",
    },
    {
      title: "Ace Parkway Sector-150",
      image: "ac150.jpg",
      description:
        "ACE Parkway, Sector 150, Noida: An architectural icon offering luxurious 2, 3, and 4 BHK apartments. Features include 51 unique sports facilities, a temperature-controlled indoor pool, and proximity to Yamuna Expressway and Shaheed Bhagat Singh Park. Designed by Hafeez Contractor and Gauri Khan. RERA No. UPRERAPRJ4514.",
      link: "/residential#ace150",
    },
    {
      title: "Vaibhav Hesitate Heights",
      image: "vaibhav.JPG",
      link: "/residential#vaibhav",
      description:
        "Vaibhav Heritage Height, Sec-16, Greater Noida West: Prime location with excellent connectivity, 2 minutes from the proposed Ek Murthi Metro Station and close to major highways, Noida Metro, and Jewar Airport. Features include 3-side open plots, corner flats with no shared walls, balconies with every room, and 3-tier security. RERA No. UPRERAPRJ2779. ",
    },
    {
      title: "Deligent Group Sector-1",
      image: "deli.jpeg",
      link: "/residential#deligent",
      description:
        "The Valley, Sector 1, Greater Noida West: Futuristic 21st-century Smart Homes offering state-of-the-art convenience and comfort in a 2.5-acre layout with integrated greens and rich amenities. Enjoy traffic-free green areas, perfect for children and social gatherings, with only 2 towers ensuring excellent ventilation. RERA ID - UPRERAPRJ5929.",
    },
    {
      title: "Godrej 146",
      image: "g11.jpg",
      link: "/residential#godrej",
      description:
        "Godrej Jardinia, Sector 146, Noida: Luxurious 3 & 4 BHK flats offering refined living with impeccable landscapes and a state-of-the-art clubhouse featuring a piano theme. Enjoy amenities like a swimming pool, gym, and landscaped gardens. Experience sophistication, opulence, and unparalleled luxury. RERA No. UPRERAPRJ288309/04/2024.",
    },
    {
      title: "Nimbus Expressway",
      image: "nim.avif",
      link: "/residential#nimbus1",
      description:
        "Elegant independent floors and high-rise towers, Sector-22A, Yamuna Expressway, Noida: Crafted to the highest specifications, these G+4 and 13-floor structures offer harmony, privacy, and open-plan living spaces with abundant natural light and ventilation. RERA No. UPRERAPRJ558356/04/2024.",
    },
  ];

  return (
    <div className="res-div-r">
      <div className="three">
        <h1>RESIDENTIAL PROJECTS</h1>
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
  );
};

export default Res;
