import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="hero-wrapper">
      <img
        src="https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        className="hero-img"
        alt="beach"
      />
      <div className="hero-text" data-aos="fade" data-aos-duration="2500">
        <h1 className="hero-title">EXPLORE GREECE</h1>
        <p className="hero-subtitle">Find your perfect adventure</p>
      </div>
      <div className="arrow">
        <span></span>
      </div>
    </div>
  );
}
