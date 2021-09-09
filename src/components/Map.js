import React, { useRef, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [23.804236, 38.041891],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([23.804236, 38.041891]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <>
      <div className="map-section-wrapper">
        <div className="map-content">
          <div className="map-container" ref={mapContainerRef} />
          <div className="map-contact">
            <h3 className="map-contact-title">Contact us</h3>
            <div>
              <div className="map-contact-detail">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <p>
                  28 Oktovriou Street
                  <br />
                  Marousi, Athens
                  <br />
                  Greece
                </p>
              </div>
              <div className="map-contact-detail">
                <FaPhoneAlt className="footer-contact-icon" />
                +30 034 924 39
              </div>
              <div className="map-contact-detail">
                <MdEmail className="footer-contact-icon" />
                exploregreece@travel.gr
              </div>
            </div>
            <div className="social-icons">
              <a href="/">
                <FaInstagram className="social-icon" />
              </a>
              <a href="/">
                <FaFacebook className="social-icon" />
              </a>
              <a href="/">
                <FaTwitter className="social-icon" />
              </a>
              <a href="/">
                <FaPinterest className="social-icon" />
              </a>
              <a href="/">
                <FaYoutube className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
