import React from "react";

export default function Card({ src, text, category }) {
  return (
    <>
      <li className="card">
        <p className="card-category">{category}</p>
        <img src={src} alt="travel image" className="card-img" />
        <div className="card-info">
          <h5 className="card-text">{text}</h5>
        </div>
      </li>
    </>
  );
}
