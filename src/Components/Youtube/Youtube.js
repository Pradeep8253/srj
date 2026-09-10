"use client";
import React, { useState } from 'react';
import '../Youtube/Youtube.css';
import { FaRegPlayCircle } from "react-icons/fa";

const Youtube = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setShowDetails(true);
  };

  const handleOkButtonClick = () => {
    setShowDetails(false);
    setShowVideo(true);
  };

  return (
    <>
      <div className='body-you'>
        <div className="containery">
          {!showDetails && !showVideo && (
            <div id="play-button-container">
              <div className="background-image"></div>
              <button id="play-button" onClick={handlePlayButtonClick}>
              <FaRegPlayCircle className='ply-b'/>
              </button>
            </div>
          )}
          {showDetails && (
            <div id="details-container">
              <p className='d-p'>Do you want to sell your property?</p>
              <p className='d-p2'>You can also fill out our online form if you are interested in learning more.</p>
              <p className='d-p3'>Please Call: +(91)7303734500</p>
              <button id="ok-button" onClick={handleOkButtonClick}>
                OK
              </button>
            </div>
          )}
          {showVideo && (
            <div id="video-container">
              <iframe
                width="100%"
                height="100%"
                
                src="https://www.youtube.com/embed/4jnzf1yj48M?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Youtube;
