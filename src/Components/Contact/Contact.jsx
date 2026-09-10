"use client";
import React, { useState, useEffect } from 'react';
import '../Contact/Contact.css';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from 'react-icons/io';
import emailjs from 'emailjs-com';
import { usePathname as useLocation } from "next/navigation";

const Contact = () => {
  const location = useLocation();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const addressRegex = /.{5,}/;
    const messageRegex = /.{15,}/;

    switch (name) {
      case 'name':
        if (!value || !nameRegex.test(value)) {
          error = "Name should contain only alphabets.";
        }
        break;
      case 'email':
        if (!value || !emailRegex.test(value)) {
          error = "Email should be a valid email address.";
        }
        break;
      case 'mobile':
        if (!value || !mobileRegex.test(value)) {
          error = "Mobile should be a 10-digit number.";
        }
        break;
      case 'address':
        if (!value || !addressRegex.test(value)) {
          error = "Address should be valid.";
        }
        break;
      case 'message':
        if (!value || !messageRegex.test(value)) {
          error = "Message should be at least 15 characters.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);

    setFormValues({
      ...formValues,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: error
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = Object.keys(formValues).reduce((acc, field) => {
      const error = validateField(field, formValues[field]);
      if (error) acc[field] = error;
      return acc;
    }, {});

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      const templateParams = {
        name: formValues.name,
        email: formValues.email,
        mobile: formValues.mobile,
        address: formValues.address,
        message: formValues.message
      };

      emailjs.send(
        "service_j3fhtmb",
        "template_yk30mgq",
        templateParams,
        "J8emD_GPwwhZEPHBa"
      )
        .then((response) => {
          alert("Email sent successfully!");
          setIsSubmitting(false);
        }).catch((error) => {
          alert("Failed to send email. Please try again.");
          setIsSubmitting(false);
        });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className='cccc'>
        <div className="contact-mainc">
          <div className="text-main-cc">
            <h1 className="header-textc">Grand Residences with Superior Quality</h1>
            <p className="paragraph-textc">We look forward to connecting with you! Whether you have inquiries about our properties, need help with the buying or renting process, or just want to learn more about our offerings, our dedicated team is ready to assist. Please complete the contact form below, and one of our representatives will respond promptly. For immediate assistance, you can also reach us by phone or email. At Estate Excellence, we are dedicated to providing exceptional service and ensuring your luxury living experience is truly extraordinary. Contact us today, and let us help you find your dream home.</p>
          </div>
        </div>

        <div className='c-section'>
          <div className="contact container">
            <form onSubmit={handleSubmit}>
              <div className="form">
                <div className="form-txt">
                  <h1>Contact Us</h1>
                  <span>Contact Us for Exceptional Real Estate Services: Where Attention to Detail Meets High-End Expertise</span>
                  <h3>Location</h3>
                  <p>Sector 16B, Noida Extension, Uttar Pradesh, <br />India</p>
                  <h3>Email</h3>
                  <p> <a className='mmm' href="mailto:info@srjrealty.in" >info@srjrealty.in</a> </p>
                  <div className='soc'>
                    <h1 className='con-h'>Connect Us</h1>
                    <div className='social'>
                      <a href="https://www.facebook.com/people/Srj-Realty/61555175446570/?mibextid=kFxxJD&rdid=FxOASGKlbIf4zADw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FEfEeg41Qm1RfY9Ko%2F%3Fmibextid%3DkFxxJD" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='ic-c'/>
                      </a>
                      <a href="https://www.instagram.com/your.srjrealty/?igsh=N3MyOWJnbGw4d3Bi&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare className='ic-c'/>
                      </a>
                      <a href="https://api.whatsapp.com/send/?phone=%2B917303734500&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp className='ic-c'/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="form-details">
                <div className='fl'>
                  <div className='fl2'><input 
                    type="text" 
                    name="name" 
                    autoComplete="off" 
                    id="name" 
                    placeholder="Name" 
                    value={formValues.name} 
                    onChange={handleChange}
                  />
                  {formErrors.name && <p className="error">{formErrors.name}</p>}
                  </div>
                  <div className='fl2'>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    autoComplete="off" 
                    placeholder="Email" 
                    value={formValues.email} 
                    onChange={handleChange}
                  />
                  {formErrors.email && <p className="error">{formErrors.email}</p>}
                  </div>
                  </div>
                  <div className='fl'>
                  <div className='fl2'>
                  <input 
                    type="tel" 
                    name="mobile" 
                    id="mobile" 
                    autoComplete="off" 
                    placeholder="Mobile" 
                    value={formValues.mobile} 
                    onChange={handleChange}
                  />
                  {formErrors.mobile && <p className="error">{formErrors.mobile}</p>}
                  </div>
                  <div className='fl2'>
                  <input 
                    type="text" 
                    name="address" 
                    id="address" 
                    autoComplete="off" 
                    placeholder="Address" 
                    value={formValues.address} 
                    onChange={handleChange}
                  />
                  {formErrors.address && <p className="error">{formErrors.address}</p>}
                  </div>
                  </div>
                  <textarea 
                    name="message" 
                    id="message" 
                    cols={52} 
                    rows={7} 
                    autoComplete="off" 
                    placeholder="Message" 
                    value={formValues.message} 
                    onChange={handleChange}
                  />
                  {formErrors.message && <p className="error">{formErrors.message}</p>}
                  
                  <button type="submit" disabled={isSubmitting}>SEND MESSAGE</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div id='mp' className='map-main'>
          <div id="map" className="responsive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56041.0555398355!2d77.3782185339699!3d28.612794822654507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee66b5551d3b%3A0xf1ceedbff43e995d!2sRG%20Luxury%20Homes!5e0!3m2!1sen!2sin!4v1718286342604!5m2!1sen!2sin"
              width={600}
              height={450}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
