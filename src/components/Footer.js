import React from "react";
import { Link as LinkS } from "react-scroll";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <section className="footer-about-us">
        <h4 className="footer-title">About us</h4>
        <div class="footer-link-items">
          <LinkS to="/" className="footer-link">
            How it works
          </LinkS>
          <LinkS to="/" className="footer-link">
            Testimonials
          </LinkS>
          <LinkS to="/" className="footer-link">
            Careers
          </LinkS>
          <LinkS to="/" className="footer-link">
            Investors
          </LinkS>
          <LinkS to="/" className="footer-link">
            Terms of Service
          </LinkS>
        </div>
      </section>
      <section className="footer-about-us">
        <h4 className="footer-title">Why book with us</h4>
        <ul className="footer-list footer-about-list">
          <li>Best price guarantee</li>
          <li>Exclusive knowledge</li>
          <li>Secure booking</li>
          <li>Personalized service</li>
          <li>Tailored trips</li>
        </ul>
      </section>
      <section className="footer-about-us">
        <h4 className="footer-title">Contact us</h4>
        <ul className="footer-list footer-contact-list">
          <li>
            <FaMapMarkerAlt className="footer-contact-icon" />
            28 Oktovriou Street
          </li>
          <li>
            <FaPhoneAlt className="footer-contact-icon" /> +30 034 924 39
          </li>
        </ul>
        <h4 className="footer-title footer-title-follow">Follow us</h4>
        <ul className="footer-list footer-list-follow">
          <li>
            <FaYoutube className="footer-social-icon" />
          </li>
          <li>
            <FaInstagram className="footer-social-icon" />
          </li>
          <li>
            <FaFacebook className="footer-social-icon" />
          </li>
        </ul>
      </section>
      <section className="footer-map"></section>
    </div>
  );
}
