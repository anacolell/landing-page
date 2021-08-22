import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="hero-wrapper">
      <video
        src="/videos/video1.mp4"
        className="hero-video"
        autoPlay={true}
        loop
        muted
      ></video>
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
