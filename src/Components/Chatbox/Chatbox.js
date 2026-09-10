"use client";
import React, { useState } from 'react';
import '../Chatbox/Chatbox.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

 

  const calladmin = () => {
    window.location.href = 'tel:+919555768358';
  };

  const openWhatsapp = () => {
    const whatsappUrl = 'https://api.whatsapp.com/send/?phone=%2B917303734500&text&type=phone_number&app_absent=0';
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="chat-component">
        <div className="messages">
          {/* Render messages here */}
        </div>
        <IoLogoWhatsapp className='icon-chat' onClick={openWhatsapp} />
      </div>
      <div className="chat-component2">
        <div className="messages">
          {/* Render messages here */}
        </div>
        <MdOutlineWifiCalling3 className='icon-chat2' onClick={calladmin} />
        
      </div>
    </>
  );
};

export default Chatbox;
