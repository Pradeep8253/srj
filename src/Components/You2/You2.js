"use client";
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import '../You/You.css'
const You2 = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const openVideo = () => {
      setIsVideoOpen(true);
    };
  
    const closeVideo = () => {
      setIsVideoOpen(false);
    };
  return (
    <>
       <div className="background-section-you">
      <div className="overlay-you">
        <div className="content-you">
          <h1 className="title-you">DO YOU WANT TO SELL YOUR PROPERTY?</h1>
          <h4 className="subtitle-you">YOU CAN ALSO FILL OUT OUR ONLINE FORM IF YOU ARE INTERESTED IN LEARNING MORE</h4>
          <p className="description-you">CONNECT WITH US: +(91)9555768358</p>
        </div>
        <div className="wave-you"></div>
        <button className="play-button-you ply-b" onClick={openVideo}>
          <FaPlay className='ply-bb'/>
        </button>
       
      </div>
      {isVideoOpen && (
        <div className="video-popup-you">
          <div className="video-container-you">
            <button className="close-button-you" onClick={closeVideo}>X</button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dVYqDJ-EcSs?si=MFtzyf8dDzU_8UcH"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div> 
    </>
  )
}

export default You2