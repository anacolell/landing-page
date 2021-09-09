import React, { useState, useEffect } from "react";
// import { Link as LinkS } from "react-scroll";
import { footerData } from "./FooterData";
import { IoIosArrowDown } from "react-icons/io";
// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaInstagram,
//   FaFacebook,
//   FaYoutube,
// } from "react-icons/fa";

export default function Footer() {
  const [open, setOpen] = useState(true);
  function toggle(index) {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  }

  function controlFooter() {
    if (window.innerWidth < 992) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", controlFooter);
    return () => {
      window.removeEventListener("resize", controlFooter);
    };
  }, []);

  return (
    <div className="footer-wrapper">
      {footerData.map((item, index) => {
        return (
          <div
            className="footer-section"
            onClick={() => toggle(index)}
            key={item.id}
          >
            <div className="footer-title-wrapper">
              <h3 className="footer-title">{item.section}</h3>
              <span>
                <IoIosArrowDown
                  className={
                    open === index
                      ? "footer-icon footer-icon-active"
                      : "footer-icon"
                  }
                />
              </span>
            </div>
              <ul
              >
                {item.list.map((i) => {
                  return <li className= {open === index || window.innerWidth > 992 ? "footer-list-open" : "footer-list"}key={i.id}>{i.name}</li>;
                })}
              </ul>
          </div>
        );
      })}
    </div>
  );
}
