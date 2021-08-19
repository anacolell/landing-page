import React from "react";
import Carousel from "./Carousel";

export default function Testimonials() {
  return (
    <div className="testimonials-wrapper">
      <h2 className="testimonials-title">What our customers are saying</h2>
      <Carousel />
      <img
        src="images/timon.svg"
        className="testimonial-decoration"
        alt="picture of a rudder"
      />
    </div>
  );
}
