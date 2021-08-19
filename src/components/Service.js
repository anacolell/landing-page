import React from "react";

export default function Service({ src, text }) {
  return (
    <>
      <li className="service-card">
        <img
          src={src}
          alt="Business and holiday icons"
          className="service-icon"
        />
        <p className="service-text">{text}</p>
      </li>
    </>
  );
}
