import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <video
        src="/videos/video1.mp4"
        className="hero-video"
        autoPlay
        loop
        muted
      ></video>
      <div className="hero-text">
        <h1 className="hero-title">EXPLORE GREECE</h1>
        <p className="hero-subtitle">Find your perfect adventure</p>
      </div>
      <div className="arrow">
        <span></span>
      </div>
    </div>
  );
}
