import React from 'react'
import { useState } from "react";
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faDownload,
  faEnvelope,
  faLocationDot,
  faPhone,
  faCode,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";


 function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    return(
      <header className="navbar">

      <div className="logo">SAKSHAM©</div>

      <nav className="nav-links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#work">WORKS</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <a
  className="btn"
  href="/Saksham%20Khare%20Resume.pdf"
  download="Saksham-Khare-CV.pdf"
>
  Download CV <FontAwesomeIcon icon={faDownload} />
</a>
       <div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <FontAwesomeIcon
    icon={menuOpen ? faXmark : faBars}
  />
</div>

<div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

     <div
        className="close-btn"
        onClick={() => setMenuOpen(false)}
    >
        <FontAwesomeIcon icon={faXmark}/>
    </div>

  <a href="#hero" onClick={() => setMenuOpen(false)}>
    HOME
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    ABOUT
  </a>

  <a href="#works" onClick={() => setMenuOpen(false)}>
    WORKS
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    CONTACT
  </a>

  <button className="mobile-btn">
    Download CV
  </button>

</div>

    </header>
    
    )
 }
  export default Navbar