import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export const footerData = [
  {
    id: 1,
    section: "About us",
    list: [
      {
        id: 1,
        name: "How it works",
      },
      {
        id: 2,
        name: "Testimonials",
      },
      {
        id: 3,
        name: "Careers",
      },
      {
        id: 4,
        name: "Investors",
      },
      {
        id: 5,
        name: "Terms of service",
        amount: "1",
      },
    ],
  },
  {
    id: 2,
    section: "Why book with us",
    list: [
      {
        id: 1,
        name: "Best price guarantee",
      },
      {
        id: 2,
        name: "Exclusive knowledge",
      },
      {
        id: 3,
        name: "Secure booking",
      },
      {
        id: 4,
        name: "Personalized service",
      },
      {
        id: 5,
        name: "Tailored trips",
      },
    ],
  },
  {
    id: 3,
    section: "Contact us",
    list: [
      {
        id: 1,
        name: [
          <FaMapMarkerAlt className="footer-contact-icon" />,
          "28 Oktovriou Street",
        ],
      },
      {
        id: 2,
        name: [
          <FaPhoneAlt className="footer-contact-icon" />,
          "+30 034 924 39",
        ],
      },
    ],
  },
  {
    id: 4,
    section: "Follow us",
    list: [
      {
        id: 1,
        name: [
          <FaYoutube className="footer-social-icon" />,
          <FaInstagram className="footer-social-icon" />,
          <FaFacebook className="footer-social-icon" />,
        ],
      },
    ],
  },
];
