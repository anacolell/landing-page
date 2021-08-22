import React from "react";

export default function Card({ src, text, category }) {
  return (
    <>
      <div className="card">
        <p className="card-category">{category}</p>
        <img src={src} alt="Touristic places in Greece" className="card-img" />
        <div className="card-info">
          <h5 className="card-text">{text}</h5>
        </div>
      </div>
    </>
  );
}
