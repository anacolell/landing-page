import React, { useState, useEffect } from "react";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
// import { Link as LinkR } from "react-router-dom";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  const closeMobileMenu = () => setClicked(false);

  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar ${show && "nav-background"} ${
          clicked && "nav-background"
        }`}
      >
        <LinkS
          to="/"
          onClick={() => {
            toggleHome();
            closeMobileMenu();
          }}
          className="navbar-logo"
        >
          <img
            className={show || clicked ? "logo-image" : "logo-hide"}
            src="images/logo-text.png"
            alt="logo"
          />
        </LinkS>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="navbar-items">
          <ul className={clicked ? "nav-menu navbar-active" : "nav-menu"}>
            <li className="nav-item">
              <LinkS
                to="home"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-60}
                className="nav-links"
              >
                Home
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                to="about"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-60}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                to="tours"
                // delay={100}
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-60}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tours
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                to="destinations"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-60}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Destinations
              </LinkS>
            </li>
            <li>
              <LinkS
                to="contact"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-60}
                className={"nav-links-mobile"}
                onClick={closeMobileMenu}
              >
                Contact
              </LinkS>
            </li>
          </ul>
          <LinkS
            to="contact"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-60}
            className={`btn btn-outline btn-contact ${
              show && "btn-contact-dark"
            }`}
          >
            Contact
          </LinkS>
        </div>
      </nav>
    </>
  );
}
