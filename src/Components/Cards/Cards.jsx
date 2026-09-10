"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import Link from "next/link";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
const Cards = () => {
  return (
    <>
      <section className="card-container one">
      <div className="three">
  <h1>BEST PROPERTY IN GREATOR NOIDA</h1>
</div>
        <div className="sli-div">
       {/*-  <div
          id="carouselExampleInterval0"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
            -*/}
            <div className="best-cards-section">
      <div className="best-card">
        <img src="SL222.jpg" alt="Property 1" />
        <div className="card-overlay">
          <h3>Irish Platinum</h3>
          <p>Sector 10, Greater Noida (West) India</p>
        </div>
       <Link href="/exclusive2"><button className="know-more-btn">More Details</button></Link> 
      </div>
      <div className="best-card">
        <img src="nim.avif" alt="Property 2" />
        <div className="card-overlay">
          <h3>Nimbus the Palm Village</h3>
          <p> Sector 22A ,Gautam Buddha Nagar,Yamuna Expressway</p>
        </div>
      <Link href="/residential#nimbus1"> <button className="know-more-btn">More Details</button></Link> 
      </div>
      <div className="best-card">
        <img src="sl1.jpg" alt="Property 3" />
        <div className="card-overlay">
          <h3>RG Luxury</h3>
          <p>Sector 16B, Greater Noida (West)</p>
        </div>
       <Link href="exclusive1"> <button className="know-more-btn">More Details</button></Link>
      </div>
    </div>
           {/*- </div>-*/}
           
          
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval0"
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
            data-bs-target="#carouselExampleInterval0"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
      
      
      </section>
    </>
  );
};

export default Cards;
