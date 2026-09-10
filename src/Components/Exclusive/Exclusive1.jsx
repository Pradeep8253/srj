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

const Exclusive1 = () => {
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
        <img src="rgn.jpg" alt="Poster" className="image-ex" />
        <div className="overlay-exclu">
          <h2 className="main-heading">Welcome to RG Luxury Homes</h2>
          <p className="main-text">
          Experience the ideal mix of luxury and nature at RG Luxury Homes in Sector-16B, Noida Extension. Delight in stunning views, contemporary amenities, and tranquil living areas. Your dream home is waiting in this prestigious community.
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
                    <p> 1175 SQ.FT.</p>
                  </div>
                </div>
                <div className="detail-sub">
                  <FaBed className="icon-over" />
                  <div className="text-pro">
                    <h5>CONFIGURATION</h5>
                    <p>3 BHK Flat</p>
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
                      Sector 16b greater <br />
                      Noida west
                    </p>
                  </div>
                </div>
                <div className="detail-sub">
                  <RiHomeOfficeLine className="icon-over" />
                  <div className="text-pro">
                    <h5>RERA ID</h5>
                    <p>UPRERAPRJ448790</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-overview">
            <p className="overview-text">
              RG Luxury Homes is a landmark residential project located in
              Sector-16B, Noida Extension. Recently, Phase 2 has been launched
              to provide an exquisite lifestyle surrounded by nature, with
              breathtaking views of lush greenery. Embracing the tranquility of
              its natural setting, RG Luxury Homes Phase II offers 3 BHK
              apartments with a floor area of 1175 sq. ft. in 18.5 Acre land, 13
              Towers, Residents can enjoy a refreshing natural breeze
              year-round, creating a serene ambiance within the interiors. These
              luxury apartments in Noida Extension are designed with warmth and
              comfort in mind, featuring a variety of outdoor amenities such as
              a playground, swimming pool, fitness zone, parking area, community
              club, and more. The meticulously planned landscape and
              contemporary architecture blend seamlessly, ensuring a perfect
              harmony between modern living and natural beauty. 
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
            <img src="rgn.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
              <div className="caption">
                <p>Luxury Apartment</p>
                <p className="opacity-low">Modern Design</p>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="rgn2.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
              <div className="caption">
                <p>Individual Garden</p>
                <p className="opacity-low">Eco-Living</p>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="rg3.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
              <div className="caption">
                <p>Big Hall</p>
                <p className="opacity-low">Big Living Area</p>
              </div>
            </div>
          </div>

                
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="div-cards">
              <div className="img-box">
            <img src="rg4.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
              <div className="caption">
                <p>Room Sitting Area</p>
                <p className="opacity-low">Wide Sofa and Chairs</p>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="rg5.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
              <div className="caption">
                <p>Gallery Area</p>
                <p className="opacity-low">Friendly Common Gallery</p>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src="rg6.jpg" className="img-gal" alt="img" />
            <div className="transparent-box">
              <div className="caption">
                <p>Lobby Area</p>
                <p className="opacity-low">Living for Guest</p>
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
              <li>5 mins Drive from FNG Corridor</li>
              <li>12 mins Drive from Fortis Hospital</li>
              <li>
                18 mins Drive from Atta Market, Sec 18,Noida Railway Station
              </li>
              <li>8 mins Drive from Sai Mandir</li>
              <li>12 mins Drive from Sec 32,Noida City Centre Metro Station</li>
              <li>21 mins Drive from DND flyway</li>
            </ul>
          </div>
          <div className="right-adv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8060340899633!2d77.44850402393767!3d28.60559518530618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee66b5551d3b%3A0xfb16fb04cea46ebf!2sRG%20LUXURY%20HOMES%201%2C%20Sector%2016B%20Rd%2C%20Greater%20Noida%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201318!5e0!3m2!1sen!2sin!4v1717523193519!5m2!1sen!2sin"
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
                <td className="table-cell">3 BHK </td>
                <td className="table-cell">1175 Sq. Ft.</td>
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
          <img src="rg7.jpg" alt="sitemap" className="site-map-img" />
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

export default Exclusive1;
