"use client";
import React from 'react'
import '../Footer/Footer.css'
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  
  
  const calladmin = () => {
    window.location.href = 'tel:+919555768358';
  };
  return (
    <>
       <footer className="footer-main  ">
       
  <div className="container-f">
    <div className="row address-main">
      <div className="col-lg-3 col-sm-12 col-xs-12">
        <div className="address-box clearfix">
          <div className="add-icon">
            <img src="fa.png" alt="image" />
          </div>
          <div className="add-content">
            <h5>Address</h5>
            <Link href="/contact#mp">
            <p> Sector 16B, Noida Extension ,India
              </p>
              </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-12 col-xs-12">
        <div className="address-box clearfix">
          <div className="add-icon">
            <img src="fp.png" alt="image" />
          </div>
          <div className="add-content">
            <h5>Phone</h5>
            <p onClick={calladmin}>  +(91)9555768358 <br />
             </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-12 col-xs-12">
        <div className="address-box clearfix">
          <div className="add-icon">
            <img src="fe.png" alt="image" />
          </div>
          <div className="add-content">
            <h5>Email</h5>
            <p> <a href="mailto:info@srjrealty.in" style={{textDecoration: 'none'}}>info@srjrealty.in</a> </p>
          </div>
        </div>
       
      </div>
      <div className="col-lg-3 col-sm-12 col-xs-12">
        <div className="address-box clearfix">
          <div className="add-icon">
            <img src="fe1.png" alt="image" />
          </div>
          <div className="add-content">
            <h5>Appointment</h5>
            <p onClick={calladmin}> Book Now</p>
          </div>
        </div>
       
      </div>
      
    </div>
   
  </div>
  <section className='link-sec'>
              <ul className="list-unstyled list-inline text-center list2">
                <li className="list-inline-item">
                  <Link className="btn btn-outline-light btn-floating m-1" href="/" role="button">Home</Link>
                </li>
                <li className="list-inline-item">
                  <Link className="btn btn-outline-light btn-floating m-1" href="/about" role="button">About</Link>
                </li>
                <li className="list-inline-item">
                  <Link className="btn btn-outline-light btn-floating m-1" href="/residential" role="button">Residential</Link>
                </li>
                <li className="list-inline-item">
                  <Link className="btn btn-outline-light btn-floating m-1" href="/commercial" role="button">Commercial</Link>
                </li>
                <li className="list-inline-item">
                  <Link className="btn btn-outline-light btn-floating m-1" href="/contact" role="button">Contact</Link>
                </li>
                <li className="list-inline-item">
                <a className="btn btn-outline-light btn-floating m-1"  target='_blank' href="https://www.facebook.com/people/Srj-Realty/61555175446570/?mibextid=kFxxJD&rdid=FxOASGKlbIf4zADw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FEfEeg41Qm1RfY9Ko%2F%3Fmibextid%3DkFxxJD" role="button"><FaFacebook className='icon-f'/></a>
                </li>
               {/*- <li className="list-inline-item">
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaLinkedin className='icon-f'/></a>
                </li> -*/}
                
                <li className="list-inline-item">
              <a className="btn btn-outline-light btn-floating m-1 onclick-class" target='_blank'  href="https://www.instagram.com/your.srjrealty/?igsh=N3MyOWJnbGw4d3Bi&utm_source=qr" role="button">
                 <FaInstagramSquare className='icon-f'/>
                <div className="scan-image-container">
                  <img src="qr.jpeg" alt="Scan Image" className="scan-image" />
                </div>
              </a>
            </li>
              </ul>
            </section>
  {/* Copyright Footer */}
  
  
</footer>
<footer className="f-l2 text-center text-white">
    {/* Grid container */}
   
    
     
    <div className="text-center p-1" style={{fontSize:'16px'}}>
    SRJ Realty © 2024 - Powered by <a className='info-l' href="http://infogainsoft.com" target="_blank">infogainsoft.com</a>
    </div>
    {/* Copyright */}
  </footer>
    </>
  )
}

export default Footer