"use client";
import React from 'react'
import '../Agents/Agents.css'
import Link from "next/link";
const Agents = () => {
  return (
    <>
<div className="hero-section six">
      <img src="agent.jpg" alt="Background" className="hero-image" />
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>CONTACT SALES AGENTS</h1>
          <p>"Your perfect home is closer than you think.<br/> Connect with our expert agent today and start your journey with confidence and ease"</p>
         <Link href="/contact"><button className="hero-button">Contact Now</button></Link> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Agents