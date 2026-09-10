"use client";
import React, { useState, useEffect } from 'react';
import { usePathname as useLocation } from "next/navigation";
import '../Home/Home.css';
import emailjs from "emailjs-com";
import Slider from '../Slider/Slider';
import Residentialmain from '../Residentialmain/Residentialmain';
import Commercialmain from '../Commercialmain/Commercialmain';
import Gallery from '../Gallery/Gallery';
import Association from '../Associations/Association';
import Agents from '../Agents/Agents';
import Testimonial from '../Testimonial/Testimonial';
import Plots from '../Plots/Plots';
import Ace from '../Ace/Ace';
import Modal from '../Modal/Modal';
import Ace2 from '../Ace2/Ace2';
import Res from '../Res/Res';
import Youtube from '../Youtube/Youtube';
import Com from '../Com/Com';
import You from '../You/You';
import Slider2 from '../Slider2/Slider2';
import Gal from '../Gal/Gal';
import Click from '../Click/Click';
import Whyus from '../Whyus/Whyus';
import Post from '../Post/Post';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  useEffect(() => {
    setShowModal(true);
  }, []);

  const hideModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      to_name: formValues.name,
      email: formValues.email,
      name: formValues.name,
      mobile: formValues.mobile,
    };

    emailjs
      .send(
        "service_j3fhtmb",
        "template_yk30mgq",
        templateParams,
        "J8emD_GPwwhZEPHBa"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div className='home-main'>
      {/*    <Slider /> */}
        <Slider2/>
        <Modal show={showModal} handleClose={hideModal}>
          <h2 className="modal-heading">Get More Details</h2>
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <input type="tel" id="mobile" name="mobile" value={formValues.mobile} onChange={handleChange} required />
            </div>
            <div className='butt-f'>
              <button className="submit-button-f" type="submit">SUBMIT</button>
            </div>
          </form>
        </Modal>
        <Ace2/>
       
        <You/>
        <Post/>
         {/* <Youtube/>*/}
        <div className='h-1'>
        <Res/>
          {/* <Residentialmain />*/}
         <Com/>
         {/*  <Commercialmain />*/}
          {/*<Plots />*/}
          {/* <Gallery />*/}
          <Gal/>
          <Association />
          <Whyus/>
          <Agents />
          <Testimonial />
          <Click/>
        </div>
      </div>
    </>
  );
};

export default Home;
