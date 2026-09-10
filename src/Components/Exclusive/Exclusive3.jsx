"use client";
import React, { useState } from "react";
import "../Exclusive/Exclusive.css";
import emailjs from "emailjs-com";
import { FaRupeeSign } from "react-icons/fa";
import { GiKeyCard } from "react-icons/gi";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaBed } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import Modal from "react-modal";

const Exclusive3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      to_name: formValues.name,
      email: formValues.email,
      name: formValues.name,
      mobile: formValues.mobile,
    };

    emailjs
    .send(
      "service_j3fhtmb",
      "template_yk30mgq",
      templateParams,
      "J8emD_GPwwhZEPHBa"
    )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
    <div className="exclusive">
      <div className="image-poster-ex">
        <img src="sav.jpg" alt="Poster" className="image-ex" />
        <div className="overlay-exclu">
          <h2 className="main-heading">Welcome to Saviour Vridhi</h2>
          <p className="main-text">
          Discover modern living at Saviour Vridhi, situated in Sector-16, Greater Noida West. With outstanding features and amenities, your ideal home awaits in this prime location.
          </p>
        </div>
      </div>
      <div className="full-overview">
      <div className="three">
  <h1>Overview</h1>
</div>
        <div className="overview-container">
          <div className="left-overview">
            <h2>Project Details</h2>
            <div className="full-detail">
              <div className="full1">
                <div className="detail-sub">
                  <FaRupeeSign className="icon-over" />
                  <div className="text-pro">
                    <button className="onclickbutt" onClick={openModal}>
                      <h5>PRICE</h5>
                      <p>ON REQUEST</p>
                    </button>
                  </div>
                </div>
                <div className="detail-sub">
                  <SlSizeFullscreen className="icon-over" />
                  <div className="text-pro">
                    <h5>SIZE</h5>
                    <p> 1050 sqft - 2150 sqft</p>
                  </div>
                </div>
                <div className="detail-sub">
                  <FaBed className="icon-over" />
                  <div className="text-pro">
                    <h5>CONFIGURATION</h5>
                    <p>2-4 BHK</p>
                  </div>
                </div>
              </div>
              <div className="full2">
                <div className="detail-sub">
                  <GiKeyCard className="icon-over" />
                  <div className="text-pro">
                    <h5>STATUS</h5>
                    <p>UNDER CONSTRUCTION</p>
                  </div>
                </div>
                <div className="detail-sub">
                  <FaLocationDot className="icon-over" />
                  <div className="text-pro">
                    <h5>LOCATION</h5>
                    <p>
                      {" "}
                      SECTOR-16B, GREATER <br />
                      NOIDA WEST 
                    </p>
                  </div>
                </div>
                <div className="detail-sub">
                  <RiHomeOfficeLine className="icon-over" />
                  <div className="text-pro">
                    <h5>RERA ID</h5>
                    <p>UPRERAPRJ6187</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-overview">
            <p className="overview-text">
            Saviour Vridhi by Saviour Builders Pvt. Ltd. is a prestigious project located in Sector-16B, Greater Noida West. With close proximity to metro stations, banks, leading schools, colleges, multi-specialty hospitals, and a 5-acre park and 6 Towers this project offers a perfect blend of convenience and luxury. The project offers 2BHK and 4BHK + Study apartments with outstanding features and amenities designed to provide a comfortable and modern lifestyle. With spacious living areas, stylish interiors, state-of-the-art security systems, landscaped gardens, jogging tracks, swimming pools, clubhouse, gymnasium, and more, Saviour Vridhi ensures that every resident experiences unparalleled comfort and leisure. Whether you're a young professional, a growing family, or a retiree looking for a peaceful abode, Saviour Vridhi caters to all your needs and aspirations.
            </p>
          </div>
        </div>
        <div className="button-div-over">
          <button className="button-24" onClick={openModal}>
            Schedule Appointment
          </button>
        </div>
      </div>
      {/*   
      <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-header1 text-center">
              <h2 className="highlight-head">Highlights</h2>
              <p className="sec-icon">
                <i className="fa-solid fa-gear" />
              </p>
            </div>
          </div>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src="https://img.freepik.com/premium-photo/this-is-red-metal-support-pole-attached-concrete-base-with-large-anchor-bolts-nuts_230115-139.jpg?w=900" className="image-high" alt="image" />
                </div>
                <h3>Earthquake-Resistant Structure</h3>
                <p>
                RG Luxury Homes features an earthquake-resistant R.C.C. framed structure adhering to all safety norms.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src="https://img.freepik.com/free-photo/young-couple-doing-apartment-repair-together-themselves-married-man-woman-doing-home-makeover-renovation-concept-relations-family-love-checking-done-design-put-new-furniture_155003-31626.jpg?t=st=1717564286~exp=1717567886~hmac=e570b4f43f0adbc3f36f87761ec21139e42a846bd09c4eddd66163e952d4c901&w=900" className="image-high" alt="image" />
                </div>
                <h3>Eco-Friendly Living</h3>
                <p>
                Enjoy abundant green spaces and eco-friendly surroundings at RG Luxury Homes.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src="https://img.freepik.com/free-photo/workplace-with-tools-electricity_23-2147743048.jpg?t=st=1717564397~exp=1717567997~hmac=cc0a7ae6935a6c2cae3f3120810a0c4e75e6ce2b4edbc826e6452b46bee944dc&w=900" className="image-high" alt="image" />
                </div>
                <h3>Modern Electrical Fittings</h3>
                <p>
                Equipped with modular switches, copper wiring, and optical fiber cables for superior connectivity.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src="https://img.freepik.com/free-photo/retired-active-mature-people-wearing-sports-clothes-doing-morning-exercise-park-grass-stretching-back-legs-muscles-retirement-active-lifestyle-concept_74855-12958.jpg?t=st=1717564460~exp=1717568060~hmac=26875c96236bfddc4b29e44badb66aaf0a2b356fc7b7b624676a22471ed3ee7a&w=900" className="image-high" alt="image" />
                </div>
                <h3>Outdoor Recreation</h3>
                <p>
                Offers facilities for badminton, a kids' pool, and dedicated play areas for outdoor fun.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src="https://img.freepik.com/premium-photo/underground-garage-residential-building_449839-25814.jpg?w=900" className="image-high" alt="image" />
                </div>
                <h3>Ample Parking</h3>
                <p>
                Provides sufficient car parking space for all residents and visitors.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src="rg6.jpg" className="image-high" alt="image" />
                </div>
                <h3>Elegant Lobby Area</h3>
                <p>
                Experience the spacious and attractive lobby designed for a grand entrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
     
















      <div className="gallery-detail">
      <div className="three">
  <h1>Gallery</h1>
</div>
        <div className="gallery-image">
         

        <div className="sli-div">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="div-cards">
                

              <div className="img-box">
            <img src="sav.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
            <div className="caption">
                <p>Luxury Apartment</p>
                <p className="opacity-low">Modern Design</p>
              </div>
            </div>
          </div>
         
          <div className="img-box">
            <img src="savior2.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
            <div className="caption">
                <p>Big Building</p>
                <p className="opacity-low">Big Living Area</p>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="savior.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
            <div className="caption">
                <p>Individual Garden</p>
                <p className="opacity-low">Eco-Living</p>
              </div>
            </div>
          </div>
                
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="div-cards">
             
          <div className="img-box">
            <img src="sav6.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
            <div className="caption">
                <p>Swimming Pool</p>
                <p className="opacity-low">Fun with swimming pool</p>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="sav5.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
            <div className="caption">
                <p>Children Ground</p>
                <p className="opacity-low">Fun with Children</p>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="sav3.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
            <div className="caption">
                <p>Biggest Road Map</p>
                <p className="opacity-low">Wide area of living</p>
              </div>
            </div>
          </div>
               
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>



        </div>
      </div>
      <div className="advantage-main">
      <div className="three">
  <h1>Location Advantage</h1>
</div>
        <div className="adv-section">
          <div className="left-adv">
          <ul className="centered-list">
              <li>10 min. from Fortis Hospital</li>
              <li>Proposed Metro Station</li>
              <li>4 mins. drive from Gaur Chowk Noida Extension</li>
              <li>Adjoining Authority Park</li>
              <li>Renowned colleges and banks in the proximity</li>
              <li>Reputed schools, hospitals, and malls in the proximity</li>
            </ul>
          </div>
          <div className="right-adv">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.731910096973!2d77.44518491738276!3d28.609285937070972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3ad4523ac9%3A0xe7c822aebbe0498!2sSaviour%20Vridhi!5e0!3m2!1sen!2sin!4v1717669354588!5m2!1sen!2sin"
              width={600}
              height={450}
              frameBorder={0}
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="full-price-detail">
      <div className="three">
  <h1>Price Table</h1>
</div>
        <div className="table-detail">
          <table className="table">
            <thead className="table-head">
              <tr className="table-row">
                <th className="table-header" scope="col">
                  Type
                </th>
                <th className="table-header" scope="col">
                  Size
                </th>
                <th className="table-header" scope="col">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr className="table-row">
                <td className="table-cell">2-4 BHK </td>
                <td className="table-cell">1050 sqft - 2150 sqft</td>
                <td className="table-cell">
                  <button className="request-button" onClick={openModal}>
                    On Request
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="sitemap">
      <div className="three">
  <h1>Site Map</h1>
</div>
        <div className="site-div">
          <img src="sav3.jpg" alt="sitemap" className="site-map-img" />
        </div>
      </div>
      <div className="visit-section">
        <p className="visit-text">
          To know more, schedule a meeting with us and discuss your investment
          plan.
        </p>
        <button className="visit-button" onClick={openModal}>
          Exclusive Site Visit
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal1"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>
          ❌
        </button>
        <h2 className="modal-heading2">Enquire Now</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formValues.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="butt-f">
            <button className="submit-button-f2" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </Modal>
      </div>
    </>
  );
};

export default Exclusive3;
