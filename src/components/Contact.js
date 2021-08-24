import React, { useState } from "react";
import Form from "./Form";
import FormSuccess from "./FormSuccess";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="contact-wrapper">
        <h1 className="section-title">
          Start your journey <span className="contact-title-accent">now</span>
        </h1>
        <div className="contact-container">
          <div className="contact-left">
            <img
              src="https://images.pexels.com/photos/7903142/pexels-photo-7903142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="contact-img"
              alt="beach"
            />
          </div>
          <div className="contact-right">
            {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
          </div>
        </div>
      </div>
    </>
  );
}
