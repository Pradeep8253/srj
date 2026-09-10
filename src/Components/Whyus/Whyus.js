"use client";
import React from 'react'
import '../Whyus/Whyus.css'
const Whyus = () => {
  return (
    <>
<section className="why-us-section-w">
      <h2 className="why-us-heading-w">Why Choose Us</h2>
      <p className="why-us-description-w">
        We offer unparalleled services that stand out in the industry.
      </p>
      <div className="why-us-cards-w">
        <div className="why-us-card-w">
          <img src="w1.png" alt="React Icon" className="why-us-icon-w" />
          <h3 className="why-us-card-heading-w">Find Your Future Home</h3>
          <p className="why-us-card-text-w">
          We help you find a new home by offering a smart real estate experience
          </p>
        </div>
        <div className="why-us-card-w">
          <img src="w2.png" alt="Icon 2" className="why-us-icon-w" />
          <h3 className="why-us-card-heading-w">Experienced Agents</h3>
          <p className="why-us-card-text-w">
          Find an experienced agent who knows your market best
          </p>
        </div>
        <div className="why-us-card-w">
          <img src="w3.png" alt="Icon 3" className="why-us-icon-w" />
          <h3 className="why-us-card-heading-w">Buy Or Rent Homes</h3>
          <p className="why-us-card-text-w">
          Millions of houses and apartments in your favourite cities
          </p>
        </div>
        <div className="why-us-card-w">
          <img src="w4.png" alt="Icon 4" className="why-us-icon-w" />
          <h3 className="why-us-card-heading-w">List Your Own Property</h3>
          <p className="why-us-card-text-w">
          Contact now and sell or rent your own properties
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Whyus