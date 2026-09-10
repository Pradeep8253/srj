"use client";
import React, { useState, useEffect } from "react";
import "../Testimonial/Testimonial.css";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      img: "https://i.ibb.co/8x9xK4H/team.jpg",
      text: "I couldn't be happier with the service provided. From the initial consultation to the final closing, they were with me every step of the way, ensuring a smooth and stress-free experience. Thank you for helping me find my dream home!",
      client: "Raghav Singhal",
    },
    {
      img: "c2.jpg",
      text: "This company made my dream of owning a home a   reality! Their team's dedication and professionalism helped me find the perfect property within my budget. I highly recommendnthem to anyone looking for their ideal home.",
      client: "Rishabh Patel",
    },
    {
      img: "c3.jpg",
      text: "Collaborating with this team was a game-changer for me. Their extensive market knowledge and personalized approach made the entire property buying process much easier. I'm grateful for their expertise to work with them again in the future.",
      client: "Akash Singh",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial text-center seven">
      <div className="container">
        <div className="heading white-heading">Our Happy Clients</div>
        <div className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x">
          <div className="carousel-inner" role="listbox">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              >
                <div className="testimonial4_slide">
                  <img
                    src={testimonial.img}
                    className="img-circle img-responsive"
                    alt={`Client ${index + 1}`}
                  />
                  <p>{testimonial.text}</p>
                  <h4>{testimonial.client}</h4>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" role="button" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only"></span>
          </a>
          <a className="carousel-control-next" role="button" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
