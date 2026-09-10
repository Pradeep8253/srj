"use client";
import React, { useState,useEffect } from "react";
import "../Residential/Residential.css";
import { usePathname as useLocation } from "next/navigation";
import Link from "next/link";

const Commercial = () => {
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
      id:'tirish',
      title: "Trehan Irish",
      details: [
        "2.8 Acre Land",
        "Retail Shops starts from 100 Sqft.",
        "Office Spaces starts from 500 Sqft.",
        "Kids playing Area",
        "Parking Area Available",
        "RERA NO. UPRERAPRJ673874",
        "Location- Ecotech-12, Greater Noida (West), India",
      ],
      sliderImages: ["tiris2.jpg", "tiris3.jpg", "tiris4.webp"],
      gridImages: [
        "trl1.jpg",
        "trl2.jpg",
        "trl3.jpg",
        "trl4.jpg",
        "trl5.jpg",
        "trl6.jpg",
      ],
    },
    {
      id:'crc',
      title: "CRC Flagship",
      details: [
        "11.16 Acres of Land",
        "4 Towers and High-street retail shops",
        "Tower 1 has lockable office spaces starting from 860 sq. ft.",
        "Kids playing Area",
        "Parking Area Available",
        "RERA NO.UPRERAPRJ184164",
        "Location- Sector-140A, Noida Expressway",
      ],
      sliderImages: ["crc.PNG", "crc2.jpg", "crc3.jpg"],
      gridImages: [
        "cr1.jpg",
        "cr2.jpg",
        "cr3.jpg",
        "cr4.jpg",
        "cr5.jpg",
       
      ],
    },
    {
      id:'bhutani',
      title: "Bhutani",
      details: [
        " 23 Acre Land",
        "Retail Shop from 300 Sq. Ft. to 1107 Sq. Ft.",
        "office spaces in size starts from 300 sq. FT.",
        "Kids playing Area",
        "Parking Area Available",
        "RERA NO. UPRERAPRJ585534",
        "Location- Tech Zone IV, Greater Noida West",
      ],
      sliderImages: ["bhutani.JPG", "bhutani2.jpg", "bhutani3.jpg"],
      gridImages: [
        "bg1.jpg",
        "bg2.webp",
        "bg3.jpg",
        "bg4.jpg",
        "bg5.webp",
        "bg6.jpg",
      ],
    },
    {
      id:"ace150",
      title: "Ace Sector 150",
      details: [
        "7 Acre Land",
        "Retail Shop from 80 Lakhs",
        "office spaces starts from 1.50 Cr",
        "Kids playing Area",
        "Parking Area Available",
        "RERA NO.UPRERAPRJ348653",
        "Location- Sector 150, Noida-Greater Noida Expressway, Noida",
      ],
      sliderImages: ["ac150.jpg", "ace1502.jpg", "ace1503.jpg"],
      gridImages: [
        "a150.jpg",
        "a1502.jpg",
        "ac150.jpg",
        "ace1502.jpg",
        "ace1503.jpg",
        
      ],
    },
    {
      id:'golden',
      title: "Golden I",
      details: [
        "25 Acre Land",
        "Retail Shops starts from 388 Sqft.",
        "Office Spaces starts from 450 Sqft.",
        "Kids playing Area",
        "Parking Area Available",
        "RERA NO. UPRERAPRJ179850",
        "Location- Greater Noida (West), India",
      ],
      sliderImages: ["gi0.jpg", "gi1.jpeg", "gi2.jpg"],
      gridImages: [
        "pp1.jpg",
        "pp2.jpg",
        "pp3.jpg",
        "pp4.jpg",
        
      ],
    },
    {
      id:'ace153',
      title: "Ace Sector 153",
      details: [
        "4.94 Acre Land",
        "Retail Shops starts from 950 Sqft.",
        "Office Spaces starts from 727 Sqft.",
        "Kids playing Area",
        "Parking Area Available",
        "RERA NO.UPRERAPRJ423807",
        "Location-Sector 153, Noida Expressway,Greater Noida",
      ],
      sliderImages: ["ace153.jpg", "ace1532.jpg", "ace1533.jpg"],
      gridImages: [
        "ace153.jpg",
        "ace1532.jpg",
        "ace1533.jpg",
        "ace1534.jpg",
        "ace1535.jpg",
        
      ],
    },
    // Add more properties as needed
  ];

  return (
    <div className="property-main">
      <div className="full-map-grid">
        <div className="poster-container">
          <img src="CP.jpg" alt="Movie Poster" className="poster-image" />
          <div className="overlay4">
            <h1 className="poster-title">Prime Commercial Spaces</h1>
            <h4 className="poster-subtitle">
            Unlock Your Business Potential, Tailored for Success and Growth
            </h4>
          </div>
        </div>
        <h1 className="heading-prop">
        Secure, Spacious Spaces for Businesses
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
      
     
    </div>
  );
};

export default Commercial;
