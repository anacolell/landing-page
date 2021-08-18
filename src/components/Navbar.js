import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  const closeMobileMenu = () => setClicked(false);

  return (
    <>
      <nav className="navbar">
        <LinkS to="/" className="navbar-logo" onClick={closeMobileMenu}>
          LOGO
        </LinkS>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="navbar-items">
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <LinkS to="/" className="nav-links">
                Home
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS to="/" className="nav-links" onClick={closeMobileMenu}>
                Services
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS to="/" className="nav-links" onClick={closeMobileMenu}>
                Products
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS to="/" className="nav-links" onClick={closeMobileMenu}>
                Destinations
              </LinkS>
            </li>
            <li>
              <LinkS
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </LinkS>
            </li>
          </ul>
          <button className="btn btn-outline btn-sign-up">SIGN UP</button>
        </div>
      </nav>
    </>
  );
}
