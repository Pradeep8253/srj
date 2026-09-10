"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const calladmin = () => {
    window.location.href = 'tel:+919555768358';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const links = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item');
    links.forEach(link => {
      if (!link.classList.contains('dropdown-toggle')) {
        link.addEventListener('click', closeMenu);
      }
    });

    return () => {
      links.forEach(link => {
        if (!link.classList.contains('dropdown-toggle')) {
          link.removeEventListener('click', closeMenu);
        }
      });
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${scrolled || isMenuOpen ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="/">
          <img src='logo.png' alt='logo' className='logo-srj' />
        </Link>
        <button
          className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <div className="animated-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Exclusive Projects
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" href="/exclusive1">RG Luxury</Link></li>
                <li><Link className="dropdown-item" href="/exclusive2">Irish Platinum</Link></li>
                <li><Link className="dropdown-item" href="/exclusive3">Saviour Vridhi</Link></li>
                <li><Link className="dropdown-item" href="/exclusive4">Trehan Iris</Link></li>
                <li><Link className="dropdown-item" href="/exclusive5">Ace Exclusive</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="projectsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                <li><Link className="dropdown-item" href="/residential">Residential</Link></li>
                <li><Link className="dropdown-item" href="/commercial">Commercial</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/contact">Contact</Link>
            </li>
          </ul>
          <button className="button-13" onClick={calladmin} type="button">9555768358</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
