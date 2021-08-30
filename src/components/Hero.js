import React from "react";
import { Link as LinkS } from "react-scroll";

export default function Hero() {
  return (
    <div className="hero-wrapper" id="home">
      <img
        src="https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        className="hero-img"
        alt="beach"
      />
      <div className="hero-text">
        <h1 className="hero-title">EXPLORE GREECE</h1>
        <p className="hero-subtitle">Find your perfect adventure</p>
      </div>
      <LinkS
        to="about"
        smooth={true}
        duration={600}
        spy={true}
        exact="true"
        className="arrow"
      >
        <span></span>
      </LinkS>
    </div>
  );
}
