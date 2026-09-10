"use client";
import React from 'react'
import '../Ace2/Ace2.css'
import Cards from '../Cards/Cards';
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa';
const Ace2 = () => {
  return (
    <>
    <div className='grid-ace2-section'>
<div className="ribbony">Top Selling Property of the month</div>

<div className="card-grid">
      <div className="card-ace2">
        <img src="aw.jpeg" alt="Hotel One" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Ace Sector 12</h3>
          <p className="card-location">Sector 12, Noida Extension</p>
          <div className="amenities">
            <div className="amenity"><FaBed className="amenity-icon"/> <span className="amenity-text">2 Bedrooms</span></div>
            <div className="amenity"><FaBath className="amenity-icon"/> <span className="amenity-text">2 Bathrooms</span></div>
            <div className="amenity"><FaRulerCombined className="amenity-icon"/> <span className="amenity-text">1500 Sq Ft</span></div>
            <div className="amenity"><FaCar className="amenity-icon"/> <span className="amenity-text">1 Garage</span></div>
          </div>
         <Link href="/exclusive5#eace12"><button className="explore-button">Explore Now</button></Link> 
        </div>
      </div>

      <div className="card-ace2">
        <img src="aplot.jpeg" alt="Hotel Two" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Ace Plot Expressway</h3>
          <p className="card-location">Sector 16b greater Noida west</p>
          <div className="amenities">
            <div className="amenity"><FaBed className="amenity-icon"/> <span className="amenity-text">3 Bedrooms</span></div>
            <div className="amenity"><FaBath className="amenity-icon"/> <span className="amenity-text">3 Bathrooms</span></div>
            <div className="amenity"><FaRulerCombined className="amenity-icon"/> <span className="amenity-text">2000 Sq Ft</span></div>
            <div className="amenity"><FaCar className="amenity-icon"/> <span className="amenity-text">2 Garages</span></div>
          </div>
       <Link href="/exclusive5#Aceplot">   <button className="explore-button">Explore Now</button></Link>
        </div>
      </div>

      <div className="card-ace2">
        <img src="as.jpeg" alt="Hotel Three" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Ace Starlit Sector-152</h3>
          <p className="card-location">Sector 16b greater Noida west</p>
          <div className="amenities">
            <div className="amenity"><FaBed className="amenity-icon"/> <span className="amenity-text">1 Bedroom</span></div>
            <div className="amenity"><FaBath className="amenity-icon"/> <span className="amenity-text">1 Bathroom</span></div>
            <div className="amenity"><FaRulerCombined className="amenity-icon"/> <span className="amenity-text">800 Sq Ft</span></div>
            <div className="amenity"><FaCar className="amenity-icon"/> <span className="amenity-text">1 Garage</span></div>
          </div>
        <Link href="/exclusive5#Acestarlit"> <button className="explore-button">Explore Now</button></Link> 
        </div>
      </div>

      <div className="card-ace2">
        <img src="ap.jpeg" alt="Hotel Four" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Ace Parkway Sector-150</h3>
          <p className="card-location">Sector 16b greater Noida west</p>
          <div className="amenities">
            <div className="amenity"><FaBed className="amenity-icon"/> <span className="amenity-text">4 Bedrooms</span></div>
            <div className="amenity"><FaBath className="amenity-icon"/> <span className="amenity-text">3 Bathrooms</span></div>
            <div className="amenity"><FaRulerCombined className="amenity-icon"/> <span className="amenity-text">2500 Sq Ft</span></div>
            <div className="amenity"><FaCar className="amenity-icon"/> <span className="amenity-text">2 Garages</span></div>
          </div>
         <Link href="/exclusive5#Aceparkway"> <button className="explore-button">Explore Now</button></Link>
        </div>
      </div>
    </div>
    </div>
    <Cards/>
    </>
  )
}

export default Ace2