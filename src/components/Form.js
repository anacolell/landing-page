import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";

export default function Form({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-inputs">
          {errors.name && <p className="contact-form-errors">{errors.name}</p>}
          <input
            id="name"
            className="form-input"
            type="text"
            name="name"
            value={values.username}
            onChange={handleChange}
          />
          <label
            htmlFor="name"
            className={values.name === "" ? "form-label" : "form-label lift"}
            type="text"
          >
            Name*
          </label>

          <div className="contact-form-inputs">
            {errors.lastname && (
              <p className="contact-form-errors">{errors.lastname}</p>
            )}
            <input
              id="lastname"
              className="form-input"
              type="text"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
            />
            <label
              htmlFor="lastname"
              className={
                values.lastname === "" ? "form-label" : "form-label lift"
              }
            >
              Last name*
            </label>
          </div>
        </div>
        <div className="contact-form-inputs">
          {errors.email && (
            <p className="contact-form-errors">{errors.email}</p>
          )}
          <input
            id="email"
            className="form-input"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className={values.email === "" ? "form-label" : "form-label lift"}
          >
            E-mail*
          </label>
        </div>
        <div className="contact-form-inputs">
          <input
            id="phone"
            className="form-input"
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          <label
            htmlFor="phone"
            className={values.phone === "" ? "form-label" : "form-label lift"}
          >
            Phone
          </label>
        </div>
        <textarea placeholder="Message"></textarea>
        <button className="btn contact-form-btn" type="submit">
          Send
        </button>
      </form>
    </>
  );
}
