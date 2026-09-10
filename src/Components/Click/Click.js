"use client";
import React from 'react'
import '../Click/Click.css'
import Link from "next/link";
const Click = () => {
  return (
    <>
        <div className="section-click">
      <div className="left-side">
        <h2 className='c-head'>Are you Looking For a House?</h2>
        <p className='c-para'>We Can help you to find your dream house...</p>
      </div>
      <div className="right-side">
       <Link href="/contact"><button className="button-19">Explore Property</button></Link> 
      </div>
    </div>
    </>
  )
}

export default Click