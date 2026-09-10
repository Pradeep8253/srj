"use client";
import React, { useState,useEffect } from "react";
import "../Residential/Residential.css";
import { usePathname as useLocation } from "next/navigation";
import Link from "next/link";

const Exclusive5 = () => {
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
        id:"eace12",
        title: "Ace Sector 12",
        details: [
          "Approx 8 Acre Land",
          "6 Towers",
          "Sizes- 3 - 4.5 BHK (2200 Sqft - 3700 Sqft)",
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
        id:'Aceplot',
        title: "Ace Plot Expressway",
        details: [
          "Land Sizes-150 Sq Yd, 200 Sq Yd, 300 Sq Yd",
          "Near by- 7 minutes from Galgotias University",
          "Above 500+ Units",
          "Connectivity -3 minutes from the Education Hub",
          "Nearby Attractions-Close to upcoming projects",
          
          "Location- Sector 22D, Yamuna Expressway, Greater Noida West",
        ],
        sliderImages: ["aplot.jpeg", "acep.webp", "acep2.jpg"],
        gridImages: [
          "apg1.webp",
          "apg2.webp",
          "apg3.webp",
          "acep2.jpg",
          "acep.webp",
          "aplot.jpeg",
        ],
      },
      {
        id:'Acestarlit',
        title: "Ace Starlit Sector 152",
        details: [
          "6.79 Acre Land",
          "5 Towers",
          "Sizes- 2 - 3 BHK (1095 Sqft - 1185 Sqft)",
         "Mivan Construction",
          "Club House with luxury Amenities",
          "RERA NO. UPRERAPRJ677294",
          "Location- Ace Starlit, SC-01/09, Sec 152, Noida",
        ],
        sliderImages: ["as.jpeg", "acel.jpg", "acel2.jpg"],
        gridImages: [
          "acelg.avif",
          "acelg2.avif",
          "acelg3.avif",
          "acel.jpg",
          "acel2.jpg",
          "as.jpeg",
        ],
      },
      {
        id:'Aceparkway',
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
          <img src="ace1533.jpg" alt="Movie Poster" className="poster-image" />
          <div className="overlay4">
            <h1 className="poster-title">Our Exclusive Ace Properties</h1>
            <h4 className="poster-subtitle">
            Personalized Solutions for Business Success and Expansion
            </h4>
          </div>
        </div>
        <h1 className="heading-prop">
        Reliable, Roomy Spaces for Enterprises
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

export default Exclusive5;
