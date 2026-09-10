"use client";
import React from 'react'
import '../Gal/Gal.css'
import Link from "next/link";
const Gal = () => {
  return (
    <>
    <div className='gall-main'>
     <div className="three">
  <h1>GALLERY</h1>
</div>
<div className="gallery-container-gl">
      <div className="row-gl">
        <div className="image-card-gl move-up-gl1">
          <img src="hd1.jpg" alt="Image 1" />
        </div>
        <div className="image-card-gl move-up-gl">
          <img src="hd2.webp" alt="Image 2" />
        </div>
        <div className="image-card-gl move-up-gl1">
          <img src="hd3.webp" alt="Image 3" />
        </div>
      </div>
      <div className="center-content-gl">
        <h1>Get In Touch Today To Get A Free Project Quote</h1>
      <Link href="/contact">  <button className='button-18'>Get In Touch</button></Link>
      </div>
      <div className="row-gl">
        <div className="image-card-gl move-down-gl2">
          <img src="hd4.jpg" alt="Image 4" />
        </div>
        <div className="image-card-gl move-down-gl">
          <img src="hd5.webp" alt="Image 5" />
        </div>
        <div className="image-card-gl move-down-gl2">
          <img src="hd6.jpg" alt="Image 6" />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Gal