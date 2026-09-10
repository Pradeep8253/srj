"use client";
import React, { useState,useEffect } from "react";
import "../Residential/Residential.css";
import Link from "next/link";
import { GrSecure } from "react-icons/gr";
import { TbMoodKid } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { MdOutlinePanTool } from "react-icons/md";
import { FaTree } from "react-icons/fa";
import { MdPower } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { usePathname as useLocation } from "next/navigation";
import { FaRoad } from "react-icons/fa";
import { MdOutlineStorefront } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import { IoIosWater } from "react-icons/io";

const Residential = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const properties = [
    {
      id:'rg',
      title: "RG Luxury",
      details: [
        "18.4 Acre Land",
        "13 Towers",
        "Sizes- 3 BHK (1175 Sqft)",
        "Mivan Construction",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ448790",
        "Location- Sector 16B, Greater Noida (West)",
      ],
      sliderImages: ["sl1.jpg", "rrg2.jpg", "rrg3.jpg"],
      gridImages: [
        "lr1.jpg",
        "lr2.jpg",
        "lr3.jpg",
        "lr4.jpg",
        "lr5.jpg",
        "lr6.jpg",
      ],
    },
    
    {
      id:'irish',
      title: " Irish Platinum",
      details: [
        "5 Acre Land",
        "4 Towers",
        "Sizes- 3 - 5 BHK flats (1390 Sqft - 2550 Sqft)",
        "Mivan Construction",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ503189",
        "Location-Sector 10, Greater Noida (West) India",
      ],
      sliderImages: ["SL222.jpg", "riris2.jpg", "riris3.png"],
      gridImages: [
        "ii1.jpg",
        "ii2.jpg",
        "ii3.jpg",
        "ii4.jpg",
        "ii5.jpg",
        
      ],
    },
    {
      id:'saviour',
      title: "Saviour Vridhi",
      details: [
        "5 Acre Land",
        "6 Towers",
        "Sizes- 2 BHK flats + 2 BHK+Study Apartments",
        "Mivan Construction",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ6187",
        "Location-Sector 16B,Noida Extension, Greater Noida, India",
      ],
      sliderImages: ["sl2.jpg", "rsa2.jpg", "rsa3.jpg"],
      gridImages: [
        "v1.jpg",
        "v22.jpg",
        "v3.jpg",
        "v4.jpg",
      
      ],
    },
    {
      id:"ace12",
      title: "Ace Sector 12",
      details: [
        "Approx 8 Acre Land",
        "6 Towers",
        "Sizes- 3 - 4.5 BHK (2200 - 3700 Sqft)",
        "Mivan Construction",
        "Club House with luxury Amenities",
        "RERA NO. Coming Soon",
        "Location- Sector 12, Noida Extension",
      ],
      sliderImages: ["aw.jpeg", "aw2.jpg", "aw3.jpg"],
      gridImages: [
        "aw.jpeg",
        "aw2.jpg",
        "aw3.jpg",
        "awg.jpeg",
        "awg2.png",
        "awg3.jpeg",
      ],
    },
    {
      id:'ace150',
      title: "Ace Parkway Sector 150",
      details: [
        "11.26 Acre Land",
        "11 Towers",
       "Sizes- 2 - 5 BHK (716 Sqft. - 4000 Sqft)",
        "Office Spaces starts from 500 Sqft.",
        "Mivan Constructions",
       "Club House with luxury Amenities",
        "RERA NO. UPRERAPRJ4514",
        "Location- Ecotech-12, Greater Noida (West), India",
      ],
      sliderImages: ["ap.jpeg", "ap2.jpg", "ap3.png"],
      gridImages: [
        "apg.png",
        "apg2.png",
        "apg3.jpg",
        "apg4.jpg",
        "apg5.jpg",
        "apg6.jpg",
      ],
    },

    {
      id:'eldeco',
      title: "Eldeco La Vida Bella",
      details: [
        "4 Acre Land",
        "5 Towers",
        "Sizes- 2 - 4 BHK (1425 Sqft - 3300 Sqft)",
        "Mivan Construction",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ136219",
        "Location-Sector 12, Greater Noida (West), India",
      ],
      sliderImages: ["v.jpg", "reld.jpg", "reld2.webp"],
      gridImages: [
        "el1.jpg",
        "el2.jpg",
        "el3.jpg",
        "el5.jpg",
        "el4.jpg",
        
      ],
    },
    {
      id:'vvip',
      title: "VVIP Homes",
      details: [
        "8 Acre Land",
        "8 Towers",
        "Sizes- 2 - 3 BHK (1060 - 2630 Sqft)",
       "Mivan Constructions",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ3390",
        "Location- GH 3, Sector 16C, Noida Extension, Greater Noida",
      ],
      sliderImages: ["vvip.JPG", "vvip2.jpg", "vvip3.jpg"],
      gridImages: [
        "vvg1.jpg",
        "vvg2.jpg",
        "vvg3.jpg",
        "vvg4.jpg",
        "vvg5.jpg",
        "vvg6.jpg",
      ],
    },
    {
      id:'spring',
      title: "Spring Elmas",
      details: [
        "4.94 Acre Land",
        "7 Towers",
        "Sizes- 3 - 4 BHK (1355 - 2450 Sqft)",
       "Mivan Constructions",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ274689",
        "Location- Phase 2 Noida Extension, Greater Noida",
      ],
      sliderImages: ["el.jpg", "relmas2.jpg", "relmas3.webp"],
      gridImages: [
        "sg1.jpg",
        "sg2.jpg",
        "sg3.jpg",
        "sg4.jpg",
        "sg5.jpg",
        "sg6.jpg",
      ],
    },
    {
      id:'elite',
      title: "Elite Sector 12",
      details: [
        "5.44 Acre Land",
        "6 Towers",
        "Sizes- 3 - 4 BHK (1800 - 2600 Sqft)",
        "Mivan Constructions",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ916631",
        "Location- GH-03A, sector 10, Greater Noida",
      ],
      sliderImages: ["eli.jpeg", "eelite2.jpg", "eelite3.jpg"],
      gridImages: [
        "eg1.jpg",
        "eg2.jpg",
        "eg3.jpg",
        "eg4.jpg",
        "eg5.jpg",
        "eg6.jpg",
       
      ],
    },
    {
      id:'vaibhav',
      title: "Vaibhav Hesitate Heights",
      details: [
        "5 Acre Land",
        "7 Towers",
        "Sizes- 2 - 4.5 BHK (955 - 2300 Sqft)",
        "Mivan Constructions",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ2779",
        "Location- 16 B, Noida Extension, Greater Noida",
      ],
      sliderImages: ["vaibhav.JPG", "vaibhav3.jpg", "vaibhav2.jpg"],
      gridImages: [
        "vg1.jpg",
        "vg2.jpg",
        "vg3.jpg",
        "vaibhav3.jpg",
        "vaibhav2.jpg",
       "vaibhav.JPG"
      ],
    },
    {
      id:'deligent',
      title: "Deligent Groups",
      details: [
        "2.5 Acre Land",
        "2 Towers",
        "Sizes- 3-3.5 BHK (1260 sq.ft. - 2030 sq.ft.)",
        "Mivan Construction",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ5929",
        "Location- Plot No. GH-15, Sector-1 Noida Extension",
      ],
      sliderImages: ["deli.jpeg", "del2.webp", "del3.jpeg"],
      gridImages: [
        "dg1.avif",
        "dg2.avif",
        "dg3.avif",
        "dg4.jpg",
        "dg5.jpg",
        "dg6.jpg",
      ],
    },
    {
      id:'godrej',
      title: "Godrej 146",
      details: [
        "10 Acre Land",
        "3 Twin Towers",
        "Sizes- 3 - 4 BHK (1800 Sqft - 3500 Sqft)",
        "Mivan Construction",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ288309",
        "Location- Sector 146 Noida, India",
      ],
      sliderImages: ["g11.jpg", "rgo2.jpg", "rgo3.jpg"],
      gridImages: [
        "gl1.jpg",
        "gl2.jpg",
        "gl3.jpg",
        "gl4.jpg",
        "gl5.jpg",
        "gl6.jpg",
      ],
    },
    {
      id:'nimbus1',
      title: "Nimbus the Palm Village",
      details: [
        "More than 68 Acre Land",
        "8 Towers",
        "Sizes- 2-3 BHK flats (678 Sqft - 1209 Sqft)",
        "Mivan Construction",
        "Club House with luxury Amenities",
        "RERA NO.UPRERAPRJ558356",
        "Location-Sector 22A ,Gautam Buddha Nagar,Yamuna Expressway",
      ],
      sliderImages: ["nim.avif", "rni2.webp", "rni3.webp"],
      gridImages: [
        "ng1.jpg",
        "ng2.jpg",
        "ng3.png",
        "rni3.webp",
        "rni2.webp",
        "nim.avif",
      ],
    },
   
    // Add more properties as needed
  ];

  return (
    <div className="property-main">
      <div className="full-map-grid">
        <div className="poster-container">
          <img src="RP.jpg" alt="Movie Poster" className="poster-image" />
          <div className="overlay4">
            <h1 className="poster-title">Ideal Haven Homes</h1>
            <h4 className="poster-subtitle">
              Discover Your Perfect Home, Crafted for Your Comfort and Joy
            </h4>
          </div>
        </div>
        <h1 className="heading-prop">
          Safe and Spacious Residences for Growing Families
        </h1>
        {properties.map((property, index) => (
          <div id={property.id} key={property.id}>
            <section className="prop-section">
              <div className="residential">
                <div className="three">
                  <h1>{property.title}</h1>
                </div>
                <div className="container-p">
                  <div className="left-p">
                    <div className="custom-ol">
                      <ol>
                        {property.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="right-p">
                    <div className="slider">
                      {property.sliderImages.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Slide ${index + 1}`}
                          className={`slide-img-p${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </section>
            <div className="grid-prop">
              <div className="grid-container">
                {property.gridImages.map((src, index) => (
                  <div
                    className="grid-item"
                    key={index}
                    onClick={() => openModal(src)}
                  >
                    <img
                      src={src}
                      alt={`image${index + 1}`}
                      className="grid-image"
                    />
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <button className="button-p">Contact Now</button>
                </Link>
            </div>
          </div>
        ))}
        {modalOpen && (
          <div className="lay-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Selected" className="modal-image" />
            </div>
          </div>
        )}
      </div>
      <div className="gallery-section">
        <div className="three">
          <h1>World Class Ameneties</h1>
        </div>
        <div className="main-gallery">
          <div className="container">
            <div className="card">
              <img src="rg3.jpg" />
            </div>
            <div className="card">
              <img src="iris4.png" />
            </div>
            <div className="card">
              <img src="ti2.jpg" />
            </div>
            <div className="card">
              <img src="rgn2.jpg" />
            </div>
            <div className="card">
              <img src="https://img.freepik.com/premium-photo/luxury-studio-apartments-wooden-colors-with-soft-armchairs-stylish-modern-kitchen-area-with-bar-counter-modern-lamps_2221-8448.jpg?w=826" />
            </div>
            <div className="card">
              <img src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?t=st=1721993840~exp=1721997440~hmac=338e545844f2d81ec585ea4c5839f278554f71614145c53892a6e4e2ee88ea3e&w=826" />
            </div>
            <div className="card">
              <img src="https://img.freepik.com/premium-photo/illustration-living-room-interior_252025-229792.jpg?w=900" />
            </div>
            <div className="card">
              <img src="https://img.freepik.com/free-photo/living-room-with-blue-sofa-coffee-table-with-chandelier-it_123827-23875.jpg?t=st=1721993973~exp=1721997573~hmac=ecdd64f1dbe53abce57bbdd9048b4b621ccfa24ce9e7db9da04eff760f9c8a56&w=826" />
            </div>
          </div>
        </div>
      </div>
      <section className="why-p">
      <div className="three">
          <h1>Why Our Properties ?</h1>
        </div>
          <div className="full-s">
            <div className="icon-s">
              <GrSecure className="icon-why" />
              <p className="text-why">24*7 High Security Gated Community</p>
            </div>
            <div className="icon-s">
              <TbMoodKid className="icon-why" />
              <p className="text-why">Kids Play Area</p>
            </div>
            <div className="icon-s">
              <FaLock className="icon-why" />
              <p className="text-why">Advanced Safety System</p>
            </div>
            <div className="icon-s">
              <GiCctvCamera className="icon-why" />
              <p className="text-why">CCTV Security</p>
            </div>
            <div className="icon-s">
              <MdOutlinePanTool className="icon-why" />
              <p className="text-why">Panic Button Equipped Homes</p>
            </div>
            <div className="icon-s">
              <FaTree className="icon-why" />
              <p className="text-why">70% Open Space</p>
            </div>
            <div className="icon-s">
              <MdPower className="icon-why" />
              <p className="text-why">24 Hours Power Supply</p>
            </div>
            <div className="icon-s">
              <FaCar className="icon-why" />
              <p className="text-why">Private On-Site Parking</p>
            </div>
            <div className="icon-s">
              <FaRoad className="icon-why" />
              <p className="text-why">60 Mt. Wide Internal Roads</p>
            </div>
            <div className="icon-s">
              <MdOutlineStorefront className="icon-why" />
              <p className="text-why">Daily Needs Store</p>
            </div>
            <div className="icon-s">
              <PiWarehouseFill className="icon-why" />
              <p className="text-why">Low Rise Architecture</p>
            </div>
            <div className="icon-s">
              <IoIosWater className="icon-why" />
              <p className="text-why">Adequate Water Supply</p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Residential;
