import React, { useEffect } from "react";
import Service from "./Service";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="services-container">
        <div className="icons-wrapper">
          <ul data-aos="fade-right" data-aos-once="true" className="icons-list">
            <Service
              src="images/handshake.svg"
              text="Tell us what you need. We will do the rest"
            />
            <Service
              src="images/boat.svg"
              text="We'll find the perfect holiday for you"
            />
            <Service src="images/map.svg" text="Enjoy a tailored holiday" />
            <Service src="images/timon.svg" text="Check out our  deals" />
          </ul>
        </div>
      </div>
    </>
  );
}
