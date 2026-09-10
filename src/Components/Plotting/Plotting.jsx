"use client";
import React, { useState } from "react";
import "../Residential/Residential.css";
import Link from "next/link";
const Plotting = () => {
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

  const properties = [
    {
      title: "RG Luxury",
      details: [
        "18.4 Acre Land",
        "13 Towers",
        "Sizes- 3 BHK (1175 Sqft)",
        "RERA NO.UPRERAPRJ448790",
        "RERA NO.UPRERAPRJ448790",
        "RERA NO.UPRERAPRJ448790",
        "Location- Sector 16B, Greater Noida (West)",
      ],
      sliderImages: ["dummy.jpeg", "ti4.png", "dummy.jpeg"],
      gridImages: [
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
      ],
    },
    {
      title: "Trehan Irish",
      details: [
        "18.4 Acre Land",
        "13 Towers",
        "Sizes- 3 BHK (1175 Sqft)",
        "RERA NO.UPRERAPRJ448790",
        "RERA NO.UPRERAPRJ448790",
        "RERA NO.UPRERAPRJ448790",
        "Location- Sector 16B, Greater Noida (West)",
      ],
      sliderImages: ["dummy.jpeg", "dummy.jpeg", "dummy.jpeg"],
      gridImages: [
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
      ],
    },
    {
      title: " Iris Platinum",
      details: [
        "18.4 Acre Land",
        "13 Towers",
        "Sizes- 3 BHK (1175 Sqft)",
        "RERA NO.UPRERAPRJ448790",
        "RERA NO.UPRERAPRJ448790",
        "RERA NO.UPRERAPRJ448790",
        "Location- Sector 16B, Greater Noida (West)",
      ],
      sliderImages: ["dummy.jpeg", "dummy.jpeg", "dummy.jpeg"],
      gridImages: [
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
      ],
    },
    {
      title: " Iris Platinum 2",
      details: [
        "18.4 Acre Land",
        "13 Towers",
        "Sizes- 3 BHK (1175 Sqft)",
        "RERA NO.UPRERAPRJ448790",
        "RERA NO.UPRERAPRJ448790",
        "RERA NO.UPRERAPRJ448790",
        "Location- Sector 16B, Greater Noida (West)",
      ],
      sliderImages: ["dummy.jpeg", "dummy.jpeg", "dummy.jpeg"],
      gridImages: [
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
        "dummy.jpeg",
      ],
    },
    // Add more properties as needed
  ];

  return (
    <div className="property-main">
      <div className="full-map-grid">
        <div className="poster-container">
          <img src="dummy.jpeg" alt="Movie Poster" className="poster-image" />
          <div className="overlay4">
            <h1 className="poster-title">Find Your Perfect Plots</h1>
            <h4 className="poster-subtitle">
              Discover a Range of Prime Real Estate Options for Every Need
            </h4>
          </div>
        </div>
        <h1 className="heading-prop">
          Safe, Vast Plots for Development
        </h1>
        {properties.map((property, index) => (
          <div key={index}>
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
                <Link href="/contact">
                <button className="button-p">Contact Now</button>
                </Link>
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

export default Plotting;
