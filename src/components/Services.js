import React from "react";
import Service from "./Service";

export default function Services() {
  return (
    <>
      <div className="services-container">
        <div className="icons-wrapper">
          <ul className="icons-list">
            <Service
              src="images/handshake.svg"
              text="Tell us what you need. We will do the rest"
            />
            <Service
              src="images/boat.svg"
              text="We'll find the perfect holiday for you"
            />
            <Service src="images/map.svg" text="Enjoy a tailored holiday" />
            <Service src="images/anchor.svg" text="Check out our  deals" />
          </ul>
        </div>
      </div>
    </>
  );
}
