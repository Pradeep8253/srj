"use client";
import React, { useRef, useState } from 'react';
import '../Header/Header.css';
import Link from "next/link";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navbarCollapseRef = useRef(null);

  const toggleNavCollapsed = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavbar = () => {
    setIsNavCollapsed(true);
  };

  const callAdmin = () => {
    window.location.href = 'tel:+917303734500';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="/" onClick={closeNavbar}>
          SRJ Realty
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavCollapsed}
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}
          ref={navbarCollapseRef}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="exclusiveProjectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Exclusive Projects
              </Link>
              <ul className="dropdown-menu" aria-labelledby="exclusiveProjectsDropdown">
                <li><Link className="dropdown-item" href="/exclusive1" onClick={closeNavbar}>RG Luxury</Link></li>
                <li><Link className="dropdown-item" href="/exclusive2" onClick={closeNavbar}>Irish Platinum</Link></li>
                <li><Link className="dropdown-item" href="/exclusive3" onClick={closeNavbar}>Saviour Vridhi</Link></li>
                <li><Link className="dropdown-item" href="/exclusive4" onClick={closeNavbar}>Trehan Iris</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="projectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </Link>
              <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                <li><Link className="dropdown-item" href="/residential" onClick={closeNavbar}>Residential</Link></li>
                <li><Link className="dropdown-item" href="/commercial" onClick={closeNavbar}>Commercial</Link></li>
                <li><Link className="dropdown-item" href="/plotting" onClick={closeNavbar}>Plots</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="button-13" onClick={callAdmin} type="button">
            7303734500
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
